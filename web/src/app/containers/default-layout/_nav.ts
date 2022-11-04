import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  
  },
  {
    name: 'Leave',
    url: 'leave/apply-leave',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Employees',
    iconComponent: { name: 'cil-speedometer' },
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
