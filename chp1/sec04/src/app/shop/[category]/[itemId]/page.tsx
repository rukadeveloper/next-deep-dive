export default async function ShopItemPage({ params }: { params: Promise<{ category: string, itemId: string }> }) {
    const { category, itemId } = await params

    return (
        <div className="p-10 border-2 border-emerald-500 rounded-xl m-10">
            <h2 className="text-2xl font-bold mb-4">중첩 라우팅 테스트</h2>
            <p className="mb-2">현재 접속하신 카테고리는 {category}이며, 실제 상품의 ID는 {itemId} 입니다.</p>
        </div>
    )
}