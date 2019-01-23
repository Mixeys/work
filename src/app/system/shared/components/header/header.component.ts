import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../../../../shared/services/auth.service";
import { User } from "src/app/shared/models/user.model";

@Component({
  selector: "mp-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  date: Date = new Date();
  user: User;

  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem("user"));
  }

  onLogout() {
    this.authservice.logout();
    this.router.navigate(["/login"]);
  }
}