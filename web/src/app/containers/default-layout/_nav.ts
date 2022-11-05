import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-home' },
  
  },
  {
    name: 'Leave',
    iconComponent: { name: 'cil-Save'},
    children:[
      {
        name: 'Apply Leave',
        url: 'leave/apply-leave',
    },
    {
      name:'leave history',
      url:'leave/request/history',
    },
    {
      name:'New leave Requests',
      url:'leave/all-leave-requests',
    },
    {
      name:'All leave history',
      url:'leave/all-request/history',
    },
    
  ]
  
  },
  {
    name: 'Employees',
    iconComponent: { name: 'cil-user' },
    children:[
      {
        name: 'Create Employee',
        url: 'employees/create',
      },
      {
        name: 'All Employees',
        url: 'employees/all-employees',
      }
    ]
    
  
  },
  {
    name:'settings',
    iconComponent: { name: 'cil-settings' },
    url: 'leave/leave-setting'
  }



 
  
];
