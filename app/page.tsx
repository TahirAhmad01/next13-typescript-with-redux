import HeroSec from "@/components/heroSec";
import Layout from "@/components/layout";
import Users from "@/components/users";

export default function Home() {
  return (
    <>
      <HeroSec />
      <Layout>
        <Users />
      </Layout>
      
    </>
  );
}
