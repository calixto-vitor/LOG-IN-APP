import { Component } from "@angular/core";

import usersList from "src/assets/json/users.json";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  Users: any = usersList;
}
