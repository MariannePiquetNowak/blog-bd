
type PageProps = {
   params: {
     postId: string;
   };
 }

export default function PostDetail({params} : PageProps) {
   const {postId} = params;

   return (
     <main>
       <h1>Post Detail</h1>

       <p>{postId}</p>
       
     </main>
   );
 }
 