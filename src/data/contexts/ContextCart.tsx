import { createContext } from "react"

const ContextCart = createContext({} as any)

export function ProviderCart(props: any) {

    return (
        <ContextCart.Provider value={{}}>
            {props.children}
        </ContextCart.Provider>
    )
}

export default ContextCart