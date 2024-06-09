import prisma from "@/lib/prisma";


export default async function Test() {
    const posts = await prisma.test.create({
        data: {
            name: "2",
        }
    })
    console.info("mes posts",posts)
    return (
      <main>
        <h1>test</h1>
      </main>
    );
}
   
 
