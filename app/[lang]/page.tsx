import { dictionary } from '@/content';

function Page({ params }: { params: { lang: string } }) {
  return (
    <div>
      <h1>{dictionary[params.lang]?.homeHeader}</h1>
      <p>{dictionary[params.lang]?.homeContent}</p>
    </div>
  );
}

export default Page;
