import Masonry from "@mui/lab/Masonry";
import PostPreview from "../components/PostPreview";
import Menu from "../components/Menu";
import UserIndicator from "../components/UserIndicator";
import { useWindowSize } from "../utils/hooks";
import { useState, useEffect } from 'react';

function App() {
  const data = [
    {
      imgUrl: "/cheese.webp",
      avatarUrl: "/avatar.jpeg",
      userName: "メーティス情報屋",
      title: "[情報]旧都の広場で襲撃事件発生",
      content: "数日前、白祈重工...",
    },
    {
      imgUrl: "/tower2.webp",
      avatarUrl: "/car.webp",
      userName: "メーティス情報屋",
      title: "[再び][情報]旧都の広場で襲撃事件発生",
      content: "数日前、白祈重工...",
    },
    {
      imgUrl: "/ship.webp",
      avatarUrl: "/cheese.webp",
      userName: "メーティス情報屋",
      title: "[雑談]ウィジョン爆破事件まもなく開廷",
      content: "新エリー都司法府はこのほど...",
    },
    {
      imgUrl: "/dinner.webp",
      avatarUrl: "/avatar.jpeg",
      userName: "センスなくてごめん",
      title: "[雑談]現代アートがよくわからないのって自分だけ？",
      content: "最近、とある展示に行ってき...",
    },
    {
      imgUrl: "/tower.webp",
      avatarUrl: "/police.webp",
      userName: "メーティス情報屋",
      title: "[情報]旧都の広場で襲撃事件発生",
      content: "数日前、白祈重工...",
    },
    {
      imgUrl: "/owl.webp",
      avatarUrl: "/tower.webp",
      userName: "それゆけ！中華まん！",
      title: "[有力情報]ラマニアンホロウの活性に変化！",
      content: "今日確かな筋から仕入れた...",
    },
    {
      imgUrl: "/car.webp",
      avatarUrl: "/avatar.jpeg",
      userName: "それゆけ！中華まん！",
      title: "[有力情報]ラマニアンホロウの活性に変化！",
      content: "今日確かな筋から仕入れた...",
    },
    {
      imgUrl: "/police.webp",
      avatarUrl: "/owl.webp",
      userName: "それゆけ！中華まん！",
      title: "[有力情報]ラマニアンホロウの活性に変化！",
      content: "今日確かな筋から仕入れた...",
    },
  ];

  const { width } = useWindowSize();
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    if (width < 640) {
      setColumns(1);
    } else if (width < 768) {
      setColumns(2);
    } else if (width < 1024) {
      setColumns(3);
    } else {
      setColumns(4);
    }
  }, [width]);

  return (
    <div className="flex flex-col max-w-7xl min-h-screen gap-10 mt-8 mx-auto">
      <header className="flex justify-between items-center">
        <UserIndicator
          icon="/avatar.jpeg"
          username="kud"
          level={12}
          currentPoints={1200}
          totalPoints={5000}
        />
        <Menu />
      </header>
      <main className="flex justify-center">
        <section className="w-full h-full max-h-screen overflow-y-auto scrollbar-hide pb-36">
          <Masonry columns={columns} spacing={4}>
            {data.map((post, index) => (
              <PostPreview key={index} {...post} />
            ))}
          </Masonry>
        </section>
      </main>
    </div>
  );
}

export default App;
