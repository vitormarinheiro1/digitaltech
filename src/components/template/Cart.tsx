import { IconShoppingCart } from "@tabler/icons-react"
import Link from "next/link"

export default function Cart() {
    return (
        <Link href="/cart">
            <div className="flex items-center relative">
                <IconShoppingCart size={32} stroke={1} />
            </div>
        </Link>
    )
}