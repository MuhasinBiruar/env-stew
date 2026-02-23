import { Image } from 'primereact/image';


export default function Home() {
  return (
    <>
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black" style={{background: 'linear-gradient(to right, #31694E, #658C58, #BBC863, #F0E491)'}}>
      <h1>Hello</h1>
        <div>
        <Image src="/debi_tirar_mas_fotos/IMG_20260222_150949.jpg" alt="Image" width="400" 
        className="self-center hover:brightness-75 transition-all duration-300 cursor-pointer drop-shadow-white drop-shadow-xl" 
        imageClassName="rounded-lg border-2 border-white" 
        preview />
        </div>
    </div>
    </>
  );
}
