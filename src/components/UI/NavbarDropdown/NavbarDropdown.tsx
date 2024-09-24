"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { usePathname, useRouter } from "next/navigation";

import { logout } from "@/src/services/AuthService";
import { useUser } from "@/src/context/user.provider";
import { protectedRoutes } from "@/src/constant";

const NavbarDropdown = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user, setIsLoading: userLoading } = useUser();
  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  const handleLogout = () => {
    logout();

    userLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Avatar className="cursor-pointer" src={user?.profilePhoto} />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="new" onClick={() => handleNavigation("/profile")}>
            Profile
          </DropdownItem>

          <DropdownItem
            key="new"
            onClick={() => handleNavigation("/profile/create-post")}
          >
            Create Post
          </DropdownItem>

          <DropdownItem
            key="copy"
            onClick={() => handleNavigation("/profile/settings")}
          >
            Setting
          </DropdownItem>
          <DropdownItem
            key="copy"
            onClick={() => handleNavigation("/profile/settings")}
          >
            Setting
          </DropdownItem>

          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            onClick={() => handleLogout()}
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropdown;
