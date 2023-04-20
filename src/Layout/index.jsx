import { Outlet } from "react-router-dom"
import SideBar from "../Components/SideBar/SideBar"
import BasicBreadcrumbs from "../Components/BreadCrumb/BreadCrumb"

function Root() {
  return (
    <div>
      <SideBar/>
      <BasicBreadcrumbs/>
      <Outlet/>
    </div>
  )
}

export default Root