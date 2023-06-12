import { dictionary } from '@/content';

function Page({ params }: { params: { lang: string } }) {
  return (
    <div>
      <h1>{dictionary[params.lang]?.aboutHeader}</h1>
      <p>{dictionary[params.lang]?.aboutContent}</p>
    </div>
  );
}

export default Page;
