import Directory from "../../components/directory/directory.component";


const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'LinkedIn',
      imageUrl: 'https://i.ibb.co/86wnhHz/linkedin.png',
      target: 'https://www.linkedin.com/in/david-dickinson-b3704731',
    },
    {
      id: 2,
      title: 'GitHub',
      imageUrl: 'https://i.ibb.co/BNKB8Sj/github.png',
      target: 'https://github.com/rnddave',
    },
    {
      id: 3,
      title: 'Twitter',
      imageUrl: 'https://i.ibb.co/LZyf3f1/twitter.png',
      target: 'https://twitter.com/tweet_dawei',
    },
    {
      id: 4,
      title: 'Blog',
      imageUrl: 'https://i.ibb.co/rt7zTJn/onemoredavid.png',
      target: 'https://www.onemoredavid.com/',
    },
    {
      id: 5,
      title: 'Wallace and Wang',
      imageUrl: 'https://i.ibb.co/6vYg7gy/wallaceandwang.png',
      target: 'https://www.wallaceandwang.com',
    },
    {
      id: 6,
      title: 'Chinese Hotpot',
      imageUrl: 'https://i.ibb.co/fMhgSbg/chinesehotpot.png',
      target: 'https://www.chinesehotpot.co.uk',
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;