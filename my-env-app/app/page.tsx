import { Image } from 'primereact/image';


export default function Home() {
  return (
    <>
      <div className="flex flex-col p-5 min-h-screen font-sans dark:bg-black" style={{ background: 'linear-gradient(to right, #31694E, #658C58, #BBC863, #F0E491)' }}>
        <h1 className="font-serif drop-shadow-green-800 drop-shadow-lg
        self-start pt-8 text-7xl font-bold bg-linear-to-r from-green-300 via-yellow-300 
        to-emerald-400 bg-clip-text text-transparent" style={{ WebkitTextStroke: '1px white' }}>
          Environmental Stewardship</h1>

        <h1 className="font-serif drop-shadow-green-800 drop-shadow-lg
        self-start pt-8 text-4xl font-bold text-white" style={{ WebkitTextStroke: '1px white' }}>
          Biruar, Muhaisin Xavier E.</h1>

        <div className="flex items-center justify-center mt-20">
          <Image src="/debi_tirar_mas_fotos/IMG_20260222_150949.jpg" alt="Image" width="400"
            className="self-center hover:brightness-75 transition-all duration-700 ease-in-out cursor-pointer drop-shadow-white drop-shadow-xl"
            imageClassName="rounded-lg border-2 border-white"
            preview />
        </div>
      </div>
    </>
  );
}
