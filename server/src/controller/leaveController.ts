import { Request, Response } from "express";
import { Leave, Status } from "../model/leave";
import { User as UserTypes } from "../types/user";
import { User } from "../model/user";

export const create = async (req: Request, res: Response) => {
  try {
    // const leavt  = req.leavetype as LeaveTypess;
    const user = req.user as UserTypes;
    const { leavetype, comment, startDate, endDate } = req.body;
    const leave = await Leave.create({
      leavetype,
      comment,
      startDate,
      endDate,
      status:Status.PENDING,
      user: user._id,
      // leavetype:leavt._id,
    });
    await leave.save();
    return res.status(200).json({ msg: "created", leave });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error while creating leave" });
  }
};

export const userleaves = async (req: Request, res: Response) => {
  try {
    const user = req.user as UserTypes;
    const result =  await Leave.find({}).where('user').equals(user._id).populate('user');
   
    //.populate('leavetype')
    if (!result) return res.status(500).json({ msg: "You don't have leaves " });
    return res
      .status(200)
      .json({ msg: "Successfully retrieved  users leaves", result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
};

export const getleaveById = async (req: Request, res: Response) => {
  try {
    const {id}=req.params
    const result = await Leave.findById(id).populate("user");
    if (!result) return res.status(500).json({ msg: "You don't have leave" });
    return res
      .status(200)
      .json({ msg: "successfully fetched leave By Id", result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
};
export const deleteleave = async (req: Request, res: Response) => {
  const leave = await Leave.findById(req.params.id);
  if (!leave) return res.status(500).json({ msg: "There is no leave" });
  await Leave.findByIdAndDelete(req.params.id);
  return res.status(200).json({ msg: "succesfully deleted" });
};
export const updateleave = async (req: Request, res: Response) => {
  try {
    const { leavetype, comment, startDate, endDate } = req.body;
    const leave = await Leave.findById(req.params.id).populate("user");
    if (!leave) return res.status(500).json({ msg: "There is no leave" });
    const result = await Leave.findOneAndUpdate(
      { _id: leave._id },
      { $set: { leavetype, comment, startDate, endDate } },
      { returnOriginal: false }
    );
    if (result) {
      return res.status(200).json({ msg: "leave updated succesfully", result });
    }
  } catch (err) {
    console.log(err);
  }
};

export const leaveHistory = async (req: Request, res: Response) => {
  try {
    const result = await Leave.find({}).populate("user");

    if (!result) return res.status(500).json({ msg: " There is no leaves " });
    return res.status(200).json({
      msg: "successfully retrieved all leave history by admin",
      result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
};


export const approveLeave = async(req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const leave = await Leave.findById(id).populate("user");
    if (!leave) {
      return res.status(404).json({ message: "Leave request not found" });
    }
    leave.status = Status.APPROVED;
    const result = await leave.save();

    return res.status(200).json({ msg: "Leave request approved", result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
};

export const  getAllapprovedLeaves=async(req:Request,res:Response)=>{
 try {
    const result = await Leave.find({ status: Status.APPROVED }).populate("user");
    console.log(result)
    if (!result) {
      return res.status(404).json({ msg: "There are no leaves approved " });
    }
   
    return res
      .status(200)
      .json({ msg: "Succesfully retrived approved leaves" });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }

  
}

  // try {
  //   // const result = await Leave.find({ status: Status.APPROVED }).populate("user");
  //   // console.log(result)
  //   // if (!result) {
  //   //   return res.status(404).json({ msg: "There are no leaves approved " });
  //   // }
  //   console.log('okay')
  //   return res
  //     .status(200)
  //     .json({ msg: "Succesfully retrived approved leaves" });
  // } catch (err) {
  //   return res.status(500).json({ msg: err });
  // }


export const getApprovedLeaveById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const status = Status.APPROVED;
    const result = await Leave.findById(id, { status }).populate("user");

    if (!result) {
      return res.status(404).json({ msg: "No  such leave exist in database" });
    }
    return res
      .status(200)
      .json({ msg: "Succesfully retrived approved leave by Id", result });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};
export const deleteApprovedLeaveById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Leave.findById(id, {
      status: Status.APPROVED,
    }).populate("user");

    if (result) {
      return res.status(404).json({ msg: "No approved leave  available" });
    }
    await Leave.findByIdAndDelete(id);
    return res.status(200).json({ msg: "successfully deleted approved leave" });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};
 export const  updateApprovedLeave= async(req:Request,res:Response)=>{
  try{
    const { leavetype, comment, startDate, endDate } = req.body;
     const {id}=req.params

    const leave = await Leave.findById(id,{status:Status.APPROVED}).populate("user");
    if (!leave) return res.status(500).json({ msg: "There is no leave approved" });
    const result = await Leave.findOneAndUpdate(
      { _id: leave._id },
      { $set: { leavetype, comment, startDate, endDate } },
      { returnOriginal: false }
    );
    if (result) {
      return res.status(200).json({ msg: "leave updated succesfully", result });
    }

  }
  catch(err){
    return res.status(500).json({ msg: err });

  }
 }


 // pending leaves 

 export const getPendinLeaves = async (req: Request, res: Response) => {
  try {
    const result = await Leave.find({ status: Status.PENDING }).populate(
      "user"
    );
    if (!result) {
      return res.status(404).json({ msg: "There are no leaves approved " });
    }
    return res
      .status(200)
      .json({ msg: "Succesfully retrived pending leaves", result });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

export const getPendingLeaveById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const status = Status.PENDING
    const result = await Leave.findById(id, { status }).populate("user");

    if (!result) {
      return res.status(404).json({ msg: "No  such leave exist in database" });
    }
    return res
      .status(200)
      .json({ msg: "Successfully retrieved pending leave by Id", result });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};
export const deletePendingLeaveById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Leave.findById(id, {
      status: Status.PENDING,
    }).populate("user");

    if (result) {
      return res.status(404).json({ msg: "No Pending  leave  available" });
    }
    await Leave.findByIdAndDelete(id);
    return res.status(200).json({ msg: "successfully deleted approved leave" });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};
 export const  updatePendingLeave= async(req:Request,res:Response)=>{
  try{
    const { leavetype, comment, startDate, endDate } = req.body;
     const {id}=req.params

    const leave = await Leave.findById(id,{status:Status.PENDING}).populate("user");
    if (!leave) return res.status(500).json({ msg: "There is no pending leave" });
    const result = await Leave.findOneAndUpdate(
      { _id: leave._id },
      { $set: { leavetype, comment, startDate, endDate } },
      { returnOriginal: false }
    );
    if (result) {
      return res.status(200).json({ msg: "leave updated succesfully", result });
    }

  }
  catch(err){
    return res.status(500).json({ msg: err });

  }
 }

