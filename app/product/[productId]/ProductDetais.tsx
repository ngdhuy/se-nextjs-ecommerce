'use client'

import Button from "@/app/components/products/Button"
import SetColor from "@/app/components/products/SetColor"
import SetQuantity from "@/app/components/products/SetQuantity"
import { Rating } from "@mui/material"
import React, { useCallback } from "react"

interface ProductDetaiProps {
    product: any
}

export type CartProductType = {
    id: string, 
    name: string,
    description: string, 
    category: string,
    brand: string,
    selectedImg: SelectedImgType,
    qantity: number, 
    price: number,
}

export type SelectedImgType = {
    color: string,
    colorCode: string,
    image: string
}

const Horizontal =() => {
    return <hr className="w-[300%] my-2" />
}

const ProductDetails: React.FC<ProductDetaiProps> = ({ product }) => {
    const [cartProduct, setCartProduct] = React.useState<CartProductType>({
        id: product.id, 
        name: product.name,
        description: product.description, 
        category: product.category,
        brand: product.brand,
        selectedImg: {...product.images[0]},
        qantity: 1, 
        price: product.price,
    })
    
    const productRating = product.reviews.reduce((acc: any, item: any) => item.rating + acc, 0) / product.reviews.length

    const handleColorSelect = useCallback((value: SelectedImgType) => {
        setCartProduct((prev) => {
            return {
                ...prev,
                selectedImg: value
            }
        })
    }, 
    [cartProduct.selectedImg])

    const handleQtyDecrease = useCallback(() => {
        if (cartProduct.qantity === 1) return

        setCartProduct((prev) => {
            return {
                ...prev,
                qantity: prev.qantity - 1
            }
        })
    }, [cartProduct])

    const handleQtyIncrease = useCallback(() => {
        if (cartProduct.qantity === 99) return

        setCartProduct((prev) => {
            return {
                ...prev,
                qantity: prev.qantity + 1
            }
        })
    }, [cartProduct])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                Image
            </div>
            <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
                <div className="flex items-center gap-2">
                    <Rating value={productRating} readOnly />
                    <div>
                        {product.reviews.length} Reviews
                    </div>
                </div>
                <Horizontal />
                <div className="text-justify ">
                    {product.description}
                </div>
                <Horizontal />
                <div>
                    <span className="font-semibold">Category: </span>
                    <span>{product.category}</span>
                </div>
                <div>
                    <span className="font-semibold">Brand: </span>
                    <span>{product.brand}</span>
                </div>
                <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
                    {product.inStock ? "In stock" : "Out of stock"}
                </div>
                <Horizontal />
                <SetColor
                    cartProduct={cartProduct}
                    images={product.images}
                    handColorSelect={handleColorSelect}
                />
                <Horizontal />
                <SetQuantity
                    cartProduct={cartProduct}
                    HandleQtyDecrease={handleQtyDecrease}
                    HandleQtyIncrease={handleQtyIncrease}
                />
                <Horizontal />
                <div className="max-x-[300px]">
                    <Button 
                        outline
                        label="Add to cart"
                        onClick={() => {}}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails