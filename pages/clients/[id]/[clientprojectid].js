import { useRouter } from "next/router";

function SelectedProjectPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>The Project Page for a Spacific Project for a Select Client</h1>
    </div>
  );
}

export default SelectedProjectPage;
