import { Injectable } from '@angular/core';

export interface User {
  name: string;
  city: string;
  email: string;
  phone: string;
  profilePic: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { 
      name: 'John Doe', 
      city: 'New York', 
      email: 'john.doe@example.com', 
      phone: '123-456-7890', 
      profilePic: '../assets/p1.png' 
    },
    { 
      name: 'Jane Smith', 
      city: 'London', 
      email: 'jane.smith@example.com', 
      phone: '234-567-8901', 
      profilePic: '../assets/p2.png'
    },
    { 
      name: 'Alice Johnson', 
      city: 'Paris', 
      email: 'alice.johnson@example.com', 
      phone: '345-678-9012', 
      profilePic: '../assets/p3.png'
    },
    { 
      name: 'Bob Brown', 
      city: 'Los Angeles', 
      email: 'bob.brown@example.com', 
      phone: '456-789-0123', 
      profilePic: '../assets/p4.png' 
    }
  ];

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  getUserByName(name: string): User | undefined {
    return this.users.find(user => user.name.toLowerCase() === name.toLowerCase());
  }

}
