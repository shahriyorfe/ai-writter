import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export default function Navbar() {
    return (
        <div className="border-b">
            <nav className="flex items-center justify-between p-4 h-16">
                <h1 className="font-semibold">Dashboard</h1>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            Shahriyor Ismoilov
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>LogOut</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </div>
    );
}
