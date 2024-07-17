import Masonry from "@mui/lab/Masonry";
import PostPreview from "../components/PostPreview";
import Menu from "../components/Menu";
import UserIndicator from "../components/UserIndicator";
import { useWindowSize } from "../utils/hooks";
import { useState, useEffect } from 'react';

function App() {
  const data = [
    {
      imgUrl: "/public/cheese.webp",
      avatarUrl: "/public/avatar.jpeg",
      userName: "メーティス情報屋",
      title: "[情報]旧都の広場で襲撃事件発生",
      content: "数日前、白祈重工...",
    },
    {
      imgUrl: "/public/tower2.webp",
      avatarUrl: "/public/car.webp",
      userName: "メーティス情報屋",
      title: "[再び][情報]旧都の広場で襲撃事件発生",
      content: "数日前、白祈重工...",
    },
    {
      imgUrl: "/public/ship.webp",
      avatarUrl: "/public/cheese.webp",
      userName: "メーティス情報屋",
      title: "[雑談]ウィジョン爆破事件まもなく開廷",
      content: "新エリー都司法府はこのほど...",
    },
    {
      imgUrl: "/public/dinner.webp",
      avatarUrl: "/public/avatar.jpeg",
      userName: "センスなくてごめん",
      title: "[雑談]現代アートがよくわからないのって自分だけ？",
      content: "最近、とある展示に行ってき...",
    },
    {
      imgUrl: "/public/tower.webp",
      avatarUrl: "/public/police.webp",
      userName: "メーティス情報屋",
      title: "[情報]旧都の広場で襲撃事件発生",
      content: "数日前、白祈重工...",
    },
    {
      imgUrl: "/public/owl.webp",
      avatarUrl: "/public/tower.webp",
      userName: "それゆけ！中華まん！",
      title: "[有力情報]ラマニアンホロウの活性に変化！",
      content: "今日確かな筋から仕入れた...",
    },
    {
      imgUrl: "/public/car.webp",
      avatarUrl: "/public/avatar.jpeg",
      userName: "それゆけ！中華まん！",
      title: "[有力情報]ラマニアンホロウの活性に変化！",
      content: "今日確かな筋から仕入れた...",
    },
    {
      imgUrl: "/public/police.webp",
      avatarUrl: "/public/owl.webp",
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
          icon="/public/avatar.jpeg"
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
