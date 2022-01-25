import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { MenuComponent } from "./menu/menu.component";
import { APP_BASE_HREF } from "@angular/common";

const routes: Routes = [
  {
    path: "app2",
    children: [
      {
        path: "menu",
        component: MenuComponent,
      },
    ],
  },
  { path: "**", component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule {}
