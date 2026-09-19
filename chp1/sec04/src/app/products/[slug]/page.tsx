export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    return (
        <div className="p-18">
            <h1 className="text-4xl font-bold text-blue-600">상품 상세 페이지</h1>
            <p className="text-xl mt-4 text-gray-700">
                고객이 요청하신 상품의 코드는 다음과 같습니다.
                <span className="font-bold text-red-500 ml-2 text-3xl">{slug}</span>
            </p>
        </div>
    )
}