import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";

export default function Home() {
    return (
        <main className="">
            <HeroBanner />
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[24px] md:text-[28px] mb-5 font-semibold leading-tight">
                        AMORTIGUACIÓN PARA TUS CARRERAS
                    </div>
                    <div className="text-base md:text-lg">
                        Una ligera entre suela Nike ZoomX se combina con una mayor altura de la media suela para ayudar a proporcionar amortiguación durante largos tramos de carrera
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-14 px-5 md:px-0">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Wrapper>
        </main>
    );
}
