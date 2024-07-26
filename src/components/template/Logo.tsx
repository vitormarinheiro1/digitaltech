import { IconCpu } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex flex-row items-center gap-2">
                <span className="text-xl leading-4">Digital Tech</span><IconCpu size={40} color="#26e400" stroke={1} />
            </div>
        </Link>
    )
}