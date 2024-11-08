import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { UserService, User} from './user.service';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, UserListComponent, FormsModule, UserListComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Users';
  userData: User[] = [];

  constructor(private userService: UserService) {
    this.userData = this.userService.getUsers(); 
    console.log('User data fetched:', this.userData); 
  }

}
