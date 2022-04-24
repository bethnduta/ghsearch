import { Component, OnInit } from '@angular/core';
import { profile } from 'console';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any[] = [];
  repos: any[] = [];
  username !: string ;
  constructor(private profileService: ProfileService) {
    this.profileService.getUser().subscribe((user: any) => {
      console.log(profile);
      this.user = user;
    });

    this.profileService.getRepos().subscribe((repos: any[]) => {
      console.log(repos);
      this.repos = repos;
    });


  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  findProfile() {
    this.profileService.updateUsername(this.username);
        
        this.profileService.getUser().subscribe((_users: any) => {
            //console.log(user);
            this.user = _users;
        });
        
        this.profileService.getRepos().subscribe((repos: any[]) => {
            this.repos = repos;
        });
    }
  }
function ngOnInit() {
  throw new Error('Function not implemented.');
}

