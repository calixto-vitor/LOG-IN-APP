import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formLogin = this.createFormLogin();
  }

  ngOnInit(): void {}

  loginMocked(): void {
    if (
      this.formLogin.value.username == "admlog" &&
      this.formLogin.value.password == "admlog"
    ) {
      this.router.navigate(["/users"]);
    } else if (
      this.formLogin.value.username == "senior" &&
      this.formLogin.value.password == "senior"
    ) {
      this.router.navigate(["/users"]);
    } else if (
      this.formLogin.value.username == "junior" &&
      this.formLogin.value.password == "123456"
    ) {
      this.router.navigate(["/users"]);
    } else {
      alert("Username & password Invalid!");
    }
  }

  public createFormLogin(): FormGroup {
    return this.fb.group({
      username: ["", [Validators.required, Validators.minLength(6)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  public isFormControlInvalid(controlName: string): boolean {
    return !!(
      this.formLogin.get(controlName)?.invalid &&
      this.formLogin.get(controlName)?.touched
    );
  }
}
