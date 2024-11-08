import { Component, Input, OnChanges, SimpleChanges, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; 
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users: any[] = [];
  searchText: string = '';
  filteredUsers = this.users;

  constructor(private userService: UserService) {} 

  ngOnInit() {
    this.users = this.userService.getUsers(); 
    this.filteredUsers = [...this.users];  
    console.log('Users fetched from service:', this.users);
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user =>
      user.city.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  onSearch() {
    console.log('Search triggered:', this.searchText);
  }
}
