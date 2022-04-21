import { Component, OnInit } from '@angular/core';
import { profile } from 'console';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any[] = [];
  repos: any[] = [];
  username: string;
  constructor(private profileService: ProfileService) {
    this.profileService.getProfileInfo().subscribe((profile: any) => {
      console.log(profile);
      this.profile = profile;
    });

    this.profileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })


  }
  
  findProfile() {
    this.profileService.updateProfile(this.username);
  }

  ngOnInit(): void {
  }

}
