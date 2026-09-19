const products = [
    { id: 1, name: '초경량 노트북', price: '1,200,000원', description: '가방에 넣은 줄도 모르는 가벼움! 대학생 강추 아이템' },
    { id: 2, name: '무소음 기계식 키보드', price: '185,000원', description: '사무실에서도 눈치 보지 않고 타격감을 즐기세요.' },
    { id: 3, name: '인체공학 버티컬 마우스', price: '89,000원', description: '손목 터널 증후군 예방을 위한 최고의 선택' }
]

export default async function ProductDetailPage({
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params

    const product = products.find(p => p.id === parseInt(id))

    if (!product) return <div className="p-10 text-red-500">존재하지 않는 상품입니다.</div>

    return (
        <div className="p-10 max-w-2xl mx-auto">
            <div className="bg-white p-8 border border-gray-100">
                <span className="bg-blue-100 text-blue-800 text-sm rounded">BEST ITEM</span>
                <h1 className="text-4xl text-black font-bold mt-4 mb-2">{product.name}</h1>
                <p className="text-2xl text-gray-700 font-bold mb-6">{product.price}</p>
                <hr />
                <p>{product.description}</p>
            </div>
        </div>
    )
}