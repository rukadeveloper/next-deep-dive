import Link from "next/link"

const products = [
    { id: 1, name: '초경량 노트북', price: '1,200,000원' },
    { id: 2, name: '무소용 기계식 키보드', price: '185,000원' },
    { id: 3, name: '인체공학 버티컬 마우스', price: '89,000원' }
]

export default function ShopProductListPage() {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-8">이달의 추천 상품</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id}
                        className="border p-6 shadow-sm">
                        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                        <p className="text-white-600 mb-4">{product.price}</p>
                        <Link
                            href={`/shop-products/${product.id}`}
                            className="inline-block px-4 py-2 rounded hover:bg-blue-700">
                            상세보기
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}