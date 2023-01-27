import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

import { HomeComponent } from "./pages/home/home.component";
import { LayoutComponent } from "./pages/layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },

  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "home", component: HomeComponent },
      {
        path: "users",
        loadChildren: () =>
          import("./pages/users/users.module").then((m) => m.UsersModule),
      },
    ],
  },
  { path: "**", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
