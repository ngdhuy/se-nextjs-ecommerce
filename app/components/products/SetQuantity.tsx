"use client"

import React from "react"
import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetais"

interface SetQuantityProps {
    cartCounter?: boolean
    cartProduct: CartProductType
    HandleQtyIncrease: () => void
    HandleQtyDecrease: () => void
}

const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded'

const SetQuantity: React.FC<SetQuantityProps> = ({ 
    cartCounter, 
    cartProduct, 
    HandleQtyIncrease, 
    HandleQtyDecrease
}) => {
    return(
        <div className="flex gap-8 items-center">
        {cartCounter ? null : <div className="font-semibold">QUANTITY</div>}
            <div className="flex gap-4 items-center text-base">
                <button onClick={HandleQtyDecrease} className={btnStyles}>-</button>
                <div>{cartProduct.qantity}</div>
                <button onClick={HandleQtyIncrease} className={btnStyles}>+</button>
            </div>

        </div>
    )
}

export default SetQuantity