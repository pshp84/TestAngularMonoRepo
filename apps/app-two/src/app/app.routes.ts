import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';
import { ErrorComponent } from './error/error.component';

export const appRoutes: Route[] = [
    {path:"", redirectTo:'/home', pathMatch:'full'},
    {path:"home", component:HomeComponent},
    {path:"list/:id", redirectTo:(data)=>{
        if(data.params['id'] == 'sales') return 'salesPersonData'
        else if(data.params['id'] == 'user') return 'usersData'
        else return "**"
    }, pathMatch:'full'},
    {path:"usersData", component:UserListComponent},
    {path:"salesPersonData", component:SalesPersonListComponent},
    {path:"**", component:ErrorComponent}
];
