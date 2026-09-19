import Link from "next/link"

const products = [
    { id: 1, name: '초경량 노트북', price: 1200000 },
    { id: 2, name: '무소음 기계식 키보드', price: 185000 },
    { id: 3, name: '인체공학 버티컬 마우스', price: 89000 }
]

interface PageProps {
    searchParams: Promise<{ sort?: string }>
}

export default async function ProductListPage({ searchParams }: PageProps) {
    const { sort } = await searchParams

    const sortedProducts = [...products].sort((a, b) => {
        if (sort === 'asc') {
            return a.price - b.price
        } else if (sort === 'desc') {
            return b.price - a.price
        } else {
            return 0
        }
    })

    return (
        <div className="p-10">
            <div className="flex justify-between items-center mb-8">
                <div className="space-x-2 text-black">
                    <Link
                        href="/search-products?sort=asc"
                        className="px-3 py-12 bg-gray-200 rounded text-sm"
                    >
                        가격 낮은 순
                    </Link>
                    <Link
                        href="/search-products?sort=desc"
                        className="px-3 py-12 bg-gray-200 rounded text-sm"
                    >
                        가격 높은 순
                    </Link>
                </div>
                <div className="grid gird-cols-1 gap-6">
                    {sortedProducts.map((product) => (
                        <div
                            key={product.id}
                            className="border rounded-lg p-6 shadow-sm"
                        >
                            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                            <p className="text-gray-600 text-white mb-4">
                                {product.price.toLocaleString()}원
                            </p>

                            <Link
                                href={`/search-products/${product.id}`}
                                className="inline-block bg-blue-600 text-white px-4 py-2"
                            >
                                상세보기
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

