import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Import ActivatedRoute to access route params
import { UserService } from '../user.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  user: any;  

  constructor(
    private route: ActivatedRoute, 
    private userService: UserService  
  ) {}

  ngOnInit(): void {
    const userName = this.route.snapshot.paramMap.get('name');
    if (userName) {
      this.user = this.userService.getUserByName(userName);  
    }
  }

  getUserByName(name: string) {
    return { name, city: 'Some City', email: 'user@example.com', phone: '123-456-7890', profilePic: 'assets/default.png' };  // Mock data
  }

}
