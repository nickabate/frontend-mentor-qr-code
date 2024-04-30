import Image from "next/image";

export default function Home() {
	return (
		<main className="flex justify-center items-center min-h-screen bg-gray-10">
			<section className="bg-white p-4 pb-8 rounded-2xl text-center max-w-[300px] flex flex-col gap-5 drop-shadow-lg">
				<Image
					src="/image-qr-code.png"
					alt="qr-code"
					width={300}
					height={300}
					className="rounded-lg"
				/>
				<div className="max-w-[260px] flex flex-col gap-5">
					<h1 className="font-bold text-xl text-blue-20">
						Improve your front-end skills by building projects
					</h1>
					<p className="text-blue-10 regular-15">
						Scan the QR code to visit Frontend Mentor and take your coding skils
						to the next level
					</p>
				</div>
			</section>
		</main>
	);
}
