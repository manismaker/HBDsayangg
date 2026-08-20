const { useEffect, useMemo, useRef, useState } = React;

const PIN = "210807";

const songs = [
  {
    title: "Virgoun - Bukti",
    subtitle: "softly, just for you",
    src: "assets/music/bukti.mpeg",
    album: "album-one",
    icon: "♡",
  },
  {
    title: "Gellen Martadinata - Selamat Ulang Tahun",
    subtitle: "a quiet little melody",
    src: "assets/music/selamatulangtahun.mpeg",
    album: "album-two",
    icon: "✦",
  },
  {
    title: "Tulus - Jatuh Suka",
    subtitle: "for all our tomorrows",
    src: "assets/music/jatuhsuka.mpeg",
    album: "album-three",
    icon: "♡",
  },
];

const memories = [
  {
    tag: "01 / THE BEGINNING",
    title: "Awal yang sederhana.",
    image: "assets/photos/wsd.jpeg",
    alt: "Kenangan pertama",
    text: "Hahaa aku inget banget gimana semuanya berawal, dari story yang katanya mau jadi pemain futsal, tapi sampai sekarang nggak jadi-jadi wkwkwk. Hadeeh syang-sayangg.. And you knoww, jujurr.. waktu itu aku saaangat kagum ama kmu, udah cantikk, baikk.. dan pinter lagi wkwkwk, idaman banget dehh. Apalagi pas aku mau bales story kamu, deg-degan kali aku bahhh wkwkk. Aku takut, karena yang aku chat itu kan orang terpopuler di sekolah hehee, aku merasa ga pantes ajaa. Aku nggak nyangka kalau akhirnya aku bisa dapet kamu. Kayak aku mikir, --Seorang aku bisa dapet Elyaa? Wahhh banget--. Dan gatau ya kenapa kamu masih berpikir aku bakal berpaling, padahal bisa dapet kamu aja aku udah bersyukur bangettt banget pake banget wkwkwk. Lunya anehh, kok bisa lu masi mikir kek gitu wkwkwk. Anddd terakhir aku harappp, kita yang berawal dari membalas story, berakhir membalas dengan cinta yang sejati yaa hihii lopyuu MUAHHH. 🤍",
  },
  {
    tag: "02 / LITTLE THINGS",
    title: "Hal kecil yang jadi berarti.",
    image: "assets/photos/ulng-1.jpeg",
    alt: "Kenangan kedua",
    text: "Hmm lucunyaa, aku lebih sering mengingat hal-hal kecil yang manis, ketika ingat tawa kamuu yang lucuu, hehee aku ledek tawamu itu bukan karna apa yaa, cuma karna lucu ajaa, trusss cara kamu bercerita, kalo kamu cerita itu kyak seru ajaa, seriusnya adaa, lucunya adaa, bercandanya adaa pokonya seru dehh, yaa kalo lu merasa biasa ajaa, yaudahh itu kan menurut guaaa, andddd ini lagi hihii.. hal kecil yang bikin aku sangattt sangat bahagia ituu ketika kamu senyumm, aku suka bangett liat mata kamu, sriusss klo di ingat-ingat tuu masi bikin senyumm kyak wahhh hahahaa suka bangett aku, makanyaa klo lu Video Call ama aku itu jangan dahi lu aja yang kamu kasi ke kameraa, mata luu nohh mata luu tunjukinn, hadehh gapeka-peka ni anakk 🤦🏼‍♂️  . Mungkin bagi kamu hal-hal kecil ini biasa ajaa, tapi yaudahh, serah luu, yng pnting gua senengg😝. Ohh iyaa, sayangg.. aku seneng kalau kamu seneng, aku mauu kamu nyaman sama aku, aku mauu kamu jadikan aku rumah kamu, tempat pulangmu, yaa? aku selalu nunggu kamuu, kalo mau nangis, nangis ke aku aja yaa, jangan sok kuat di depan aku yaa, keluarin ajaa semuaa, okeyy? karna akupun juga begituu, aku selalu butuh tempat cerita, butuh tempat buat ngeluarin semua emosi (sedihku, bahagiaku, hambarku) akuu, dan aku maunya itu kamu, aku maunya kamu yang menjadi tempat itu. ingat yaa, keluarin semuanya ke aku yaa☺️",
  },
  {
    tag: "03 / WITH YOU",
    title: "Kalau sama kamu, rasanya beda.",
    image: "assets/photos/AI-elyaan.jpeg",
    alt: "Kenangan ketiga",
    text: "aku gk tau harus mulai dari mana ya, kek susah aja buat ngejelasinnya, intinyaa kalau sama kamu itu rasanya bedaa, ntah kenapa semuanya itu terasa lebih dalam, deep.. (dalam). Ada rasa nyaman yang perlahan tumbuh tanpa aku sadari, sampeai akhirnya itu aku terbiasa ama kamuu, ama kehadiran kamu. Sama kamu itu aku ga harus jadi seseorang yang sempurna, aku di depan kamu itu yaa aku apa adanya, kadang manjaa, kadang nyebelin, kadang gak jelass, pokoknya aku di depan kamu adalah aku yang sebenrnya. Mungkin inii adalah hal yang paling aku syukuri. Aku bersyukurnya itu karena rasa sayang aku itu ada pada kamu, orang yang menurutku paling tepat untuk di bawa ke masa depan. Kalo sama kamu itu bukan cuma tentang rasa bahagia. Ada rasa tenangg, rasa pulang, dan rasa untuk terus bertahan. dan bahkan yaa, ketika aku ada masalah atau keadaan yang sulit, ada bagian dari diriku yang bilang --kamu kemanasih, aku butuh kamu..--. Mungkin aku kurang pandai dalam menyampaikan rasa sayang aku ke kamu, tapii kalo suatu hari kamu tiba-tiba nanya --kenapa kamu memilih aku?-- jawabannya simpel: Sama kamu itu rasanya beda, aku tidak bisa mendeskripsikan perasaanku. Intinya, You are my home and my favorite person.",
  },
  {
    tag: "04 / STILL US",
    title: "Dan aku masih memilih kamu.",
    image: "assets/photos/mlm-eyaan1.jpeg",
    alt: "Kenangan keempat",
    text: "Dari sekian banyak hari dan haru yang sudah kita lewati, aku bersyukut masih bisa menemukan alasan untuk tersenyum karena kamu. Dari hal-hal kecil yang mungkin kelihatannya sederhana, sampai momen-momen yang mungkin kelihatannya sederhana, sampai momen-momen yang mungkin gak akan pernah aku lupakan, semuanya punya tempat sendiri di ingatanku. Aku nggak tau nanti kita akan melewati berapa banyak hari lagi, atau seperti apa cerita yang akan kita hadapi kedepannya. Tapi aku berharap, diantara banyaknya perubahan yang mungkin terjadi, kita tetap menjadi dua orang yang saling memilih satu sama lain. Semoga nanti kita punya lebih banyak foto, lebih banyak hari yang bisa kita kenang sambil bilang, --Ternyata kita sudah sejauh ini ya--. Mungkin nanti kita akan berubah, semakin dewasa, semakin sibuk, dan mungkin gak semuanya akan selalu berjalan sesuai yang kita mau. Tapi aku berharap, sesulit apa pun harinya, kita tetap punya alasan untuk kembali satu sama lain. Karena sampai hari ini, setelah semua yang sudah kita lewati, aku masih memilih kamu. Dan kalau besok aku diberi kesempatan untuk memilih lagi, aku berharap jawabanku masih tetap sama: KAMU. 🤍",
  },
];

function GalaxyBackground() {
  return (
    <div id="space-background" aria-hidden="true">
      <div className="stars stars-1" />
      <div className="stars stars-2" />
      <div className="stars stars-3" />
      <div className="nebula nebula-pink" />
      <div className="nebula nebula-purple" />
      <div className="nebula nebula-blue" />
      <div className="floating-heart fh-1">♡</div>
      <div className="floating-heart fh-2">✦</div>
      <div className="floating-heart fh-3">♡</div>
    </div>
  );
}

function PinScreen({ onSuccess }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const submit = () => {
    if (pin !== PIN) {
      setError("PIN-nya belum benar. Coba lagi ya ♡");
      setPin("");
      return;
    }
    setError("");
    onSuccess();
  };
  return (
    <section className="pin-screen">
      <div className="pin-floating-heart heart-one">♡</div>
      <div className="pin-floating-heart heart-two">✦</div>
      <div className="pin-floating-heart heart-three">♡</div>
      <div className="pin-nebula nebula-left" />
      <div className="pin-nebula nebula-right" />
      <div className="pin-card" onClick={() => inputRef.current?.focus()}>
        <div className="orbit">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-heart">♡</div>
        </div>
        <p className="small-title">A PRIVATE LITTLE UNIVERSE</p>
        <h1>Untuk Kita</h1>
        <p className="pin-description">
          Ada sebuah dunia kecil yang aku buat khusus untuk kamu.
          <br />
          Masukkan PIN kita untuk masuk.
        </p>
        <div className="pin-dots">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span key={i} className={i < pin.length ? "active" : ""} />
          ))}
        </div>
        <input
          className="input"
          ref={inputRef}
          value={pin}
          onChange={(e) =>
            setPin(e.target.value.replace(/\D/g, "").slice(0, 6))
          }
          onKeyDown={(e) => e.key === "Enter" && submit()}
          type="password"
          inputMode="numeric"
          autoComplete="off"
          aria-label="PIN"
        />
        <button className="main-button" onClick={submit}>
          Masuk ke dunia kita <span>♡</span>
        </button>
        <p className="pin-error">{error}</p>
        <p className="pin-hint">PIN demo: your date of birth</p>
      </div>
    </section>
  );
}

function LoadingScreen({ active }) {
  return (
    <section className={`loading-screen ${active ? "active" : ""}`}>
      <div className="loading-stars" />
      <div className="loading-content">
        <div className="loading-heart">♡</div>
        <p className="small-title">WELCOME TO OUR UNIVERSE</p>
        <h2>
          Menyiapkan sedikit
          <br />
          <span>keajaiban untukmu...</span>
        </h2>
        <div className="loading-line">
          <div />
        </div>
        <p className="loading-text">sebentar ya, sayang ♡</p>
      </div>
    </section>
  );
}

function Navbar({ playing, toggleMusic }) {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        our little <span>universe</span> ♡
      </a>
      <nav>
        <a href="#home">Awal</a>
        <a href="#music">Lagu</a>
        <a href="#memories">Kenangan</a>
        <a href="#letter">Untukmu</a>
      </nav>
      <button className="music-button" onClick={toggleMusic}>
        {playing ? "Ⅱ" : "♫"} <span>Music</span>
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-galaxy" />
      <div className="hero-moon" />
      <div className="hero-aurora aurora-one" />
      <div className="hero-aurora aurora-two" />
      <div className="hero-aurora aurora-three" />
      <div className="constellation constellation-one">✦ · ✧ · ✦</div>
      <div className="constellation constellation-two">✧ · ♡ · ✧</div>
      <div className="hero-content reveal">
        <p className="small-title">FOR THE PERSON WHO FEELS LIKE HOME</p>
        <h1>
          Happy Birthday cintaa
          <br />
          <span>you will always be my favorite person</span>
        </h1>
        <p className="hero-description">
          Hai, sayangku. Ini bukan sekadar website. Ini adalah tempat kecil
          untuk menyimpan beberapa cerita, foto, lagu, dan perasaan yang mungkin
          belum pernah aku ceritakan dengan cukup baik.
        </p>
        <a href="#music" className="start-button">
          Mari mulai <span>↓</span>
        </a>
      </div>
      <div className="scroll-indicator">
        SCROLL SLOWLY <span>↓</span>
      </div>
    </section>
  );
}

function MusicSection({
  current,
  playing,
  progress,
  onSelect,
  onToggle,
  onSeek,
}) {
  return (
    <section className="music-section" id="music">
      <div className="music-background-stars" />
      <div className="section-heading reveal">
        <p className="small-title">OUR LITTLE SOUNDTRACK</p>
        <h2>
          Biarkan musik ini
          <br />
          <span>menemani perjalananmu.</span>
        </h2>
        <p>
          Pilih satu lagu. Musik akan terus menemani kamu ketika membaca cerita
          kita.
        </p>
      </div>
      <div className="music-cards reveal">
        {songs.map((song, i) => (
          <button
            key={song.title}
            className={`music-card ${current === i ? "active" : ""}`}
            onClick={() => onSelect(i)}
          >
            <div className="music-number">0{i + 1}</div>
            <div className={`album ${song.album}`}>
              <span>{song.icon}</span>
            </div>
            <div className="music-info">
              <strong>{song.title}</strong>
              <small>{song.subtitle}</small>
            </div>
            <div className="play-icon">
              {current === i && playing ? "Ⅱ" : "▶"}
            </div>
          </button>
        ))}
      </div>
      <div className="music-player reveal">
        <div className={`equalizer ${playing ? "playing" : ""}`}>
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="now-playing">
          <span>NOW PLAYING</span>
          <strong>{songs[current].title}</strong>
        </div>
        <div
          className="progress"
          onClick={onSeek}
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={progress}
        >
          <div id="progressBar" style={{ width: `${progress}%` }} />
        </div>
        <button id="pauseButton" onClick={onToggle}>
          {playing ? "Ⅱ" : "▶"}
        </button>
      </div>
    </section>
  );
}

function Memories({ likes, toggleLike, openPhoto, saved, toggleSaved }) {
  return (
    <section className="memories-section" id="memories">
      <div className="memory-orb orb-one" />
      <div className="memory-orb orb-two" />
      <div className="section-heading reveal">
        <p className="small-title">FOUR MOMENTS I WANT TO KEEP</p>
        <h2>
          Kalau waktu bisa disimpan,
          <br />
          <span>aku akan menyimpan ini.</span>
        </h2>
        <p>
          Empat momen kecil. Empat cerita. Dan semuanya punya satu kesamaan: ada
          kamu.
        </p>
      </div>
      <div className="memory-list">
        {memories.map((m, i) => (
          <article
            className={`memory-row ${i % 2 ? "reverse" : ""}`}
            key={m.image}
          >
            <button className="memory-photo" onClick={() => openPhoto(i)}>
              <img src={m.image} alt={m.alt} />
              <span className="photo-zoom">⌕</span>
              <span
                className={`photo-like ${likes[i] ? "liked" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(i);
                }}
              >
                {likes[i] ? "♥" : "♡"}
              </span>
            </button>
            <div className="memory-text">
              <span className="memory-number">{m.tag}</span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
              <button
                className={`save-memory ${saved[i] ? "saved" : ""}`}
                onClick={() => toggleSaved(i)}
              >
                {saved[i] ? "♥" : "♡"}
                <span>
                  {saved[i] ? "Tersimpan di hati ♡" : "Simpan kenangan ini"}
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Letter() {
  return (
    <section className="letter-section" id="letter">
      <div className="letter-galaxy" />
      <div className="letter-comet comet-one" />
      <div className="letter-comet comet-two" />
      <div className="letter-card reveal">
        <span className="letter-label">A LETTER, FROM ME TO YOU</span>
        <div className="letter-heart">♡</div>
        <h2>
          Happy Birthday Sayangku,
          <br />
          <span>
            {" "}
            Maaf atas kekuranganku dan terima kasih sudah tetap di sini.
          </span>
        </h2>
        <div className="letter-divider" />
        <p>
          Happy Birthday cintakuu.. 🤍 Semoga di umur kamu yang baru ini, iman
          kamu semakin kuat, ibadahnya semakin rajin, selalu dikasih kesehatan,
          panjang umur, banyak kebahagiaan, dan selalu ada dalam lindungan Allah
          SWT. Semoga kamu juga selalu bisa membahagiakan dan berbakti sama
          orang tua, dan semoga semua doa, cita-cita, dan hal-hal yang lagi kamu
          perjuangin sekarang bisa Allah mudahkan dan wujudkan satu per satu.
          Semangat terus ngejar impiannya yaa sayangg. Kalau nanti kamu gagal,
          capek, atau ngerasa semuanya lagi berat, jangan langsung mikir buat
          berhenti yaa. Gagal itu bukan berarti kamu nggak bisa, mungkin cuma
          memang belum waktunya aja. Jadi jangan pernah berhenti percaya sama
          diri kamu sendiri. Percayalah, kamu pasti bisa, okeyy? Aku akan selalu
          ada di belakangmu, selalu support kamu sebisa aku, dan jadi salah satu
          orang yang paling bangga ketika nanti kamu berhasil mencapai apa yang
          selama ini kamu impikan. Tetap rendah hati yaa, tetap jadi anak yang
          baik, sayang sama keluarga, jangan lupa bersyukur, dan jangan pernah
          berhenti berdoa. Semoga di umur yang baru ini, lebih banyak hal baik
          yang datang ke hidup kamu. Semoga hari-hari kamu ke depannya dipenuhi
          hal-hal yang bikin kamu bahagia. Dan semoga aku masih dikasih
          kesempatan buat terus nemenin kamu, melihat kamu tumbuh, berproses,
          sampai akhirnya bisa melihat kamu berhasil dengan semua impianmu.
          Happy birthday, cintakuu. Aku bangga sama kamu, selalu. 🤍
        </p>
        <p>
          Dihari ulang tahunmu ini, aku benar-benar minta maaf atas
          kesalahan-kesalahanku yaa. Terimakasih sudah bertahan sejauh ini sama
          aku, kita tahu bahwa tidak akan mudah untuk mencapai apa yang kita
          inginkan, akan ada hari-hari yang akan terasa berat untuk kita lewati,
          tapi aku harap di hari-hari tersebut kita masih bersama dan bisa
          melewatinya.
        </p>
        <p>
          maaf yaa, hanya ini yang bisa aku berikan, semoga kamu bahagia yaa,
          love you sayangkuu
        </p>
        <p className="final-message">
          Seberat apa pun jalannya,
          <br />
          semoga kita tetap berjalan bersama sampai impian itu jadi milik kita
          berdua. 🤍
        </p>
        <strong className="signature">
          — dari 21 Desember 2007 tersayangmu ♡
        </strong>
      </div>
    </section>
  );
}

function Lightbox({ memory, liked, onClose, onLike }) {
  const [hearts, setHearts] = useState([]);

  if (!memory) return null;

  const createHearts = () => {
    if (!liked) {
      const newHearts = Array.from({ length: 18 }, (_, i) => ({
        id: `${Date.now()}-${i}`,
        x: Math.random() * 260 - 130,
        y: -(Math.random() * 190 + 50),
        rotate: Math.random() * 80 - 40,
        scale: Math.random() * 0.6 + 0.6,
        delay: Math.random() * 0.18,
        type: Math.random() > 0.35 ? "♥" : "♡",
      }));

      setHearts(newHearts);

      setTimeout(() => {
        setHearts([]);
      }, 1500);
    }

    onLike();
  };

  return (
    <div
      className="lightbox active"
      onClick={(e) => e.target.classList.contains("lightbox") && onClose()}
    >
      {/* BACKGROUND DECORATION */}
      <div className="lightbox-stars" />
      <div className="lightbox-nebula nebula-one" />
      <div className="lightbox-nebula nebula-two" />
      <div className="lightbox-nebula nebula-three" />

      <div className="lightbox-close-wrap">
        <button
          className="lightbox-close"
          onClick={onClose}
          aria-label="Tutup foto"
        >
          ×
        </button>
      </div>

      <div className="lightbox-image-wrapper">
        {/* HEART PARTICLES */}
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="heart-particle"
            style={{
              "--heart-x": `${heart.x}px`,
              "--heart-y": `${heart.y}px`,
              "--heart-r": `${heart.rotate}deg`,
              "--heart-scale": heart.scale,
              "--heart-delay": `${heart.delay}s`,
            }}
          >
            {heart.type}
          </span>
        ))}

        <div className="photo-frame-outer">
          <div className="photo-frame-inner">
            <img id="lightboxImage" src={memory.image} alt={memory.alt} />
          </div>
        </div>

        <button
          className={`lightbox-like ${liked ? "liked" : ""}`}
          onClick={createHearts}
          aria-label="Sukai foto"
        >
          {liked ? "♥" : "♡"}
        </button>
      </div>

      <div className="lightbox-caption">
        <span>{memory.tag}</span>
        <strong>{memory.title}</strong>
        <small>Klik di luar foto untuk menutup</small>
      </div>
    </div>
  );
}

function App() {
  const [stage, setStage] = useState("pin");
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [likes, setLikes] = useState([false, false, false, false]);
  const [saved, setSaved] = useState([false, false, false, false]);
  const [lightbox, setLightbox] = useState(null);
  const audioRef = useRef(null);

  const selectSong = (i) => {
    const audio = audioRef.current;

    setCurrent(i);
    setProgress(0);

    if (!audio) return;

    audio.src = songs[i].src;
    audio.load();

    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  };
  const toggleMusic = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) a.play().then(() => setPlaying(true));
    else {
      a.pause();
      setPlaying(false);
    }
  };
  const seekMusic = (e) => {
    const audio = audioRef.current;

    if (!audio || !audio.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const percentage = clickPosition / rect.width;

    audio.currentTime = percentage * audio.duration;
  };
  useEffect(() => {
    if (stage !== "site") return;

    const audio = audioRef.current;
    if (!audio) return;

    audio.src = songs[0].src;

    const onEnded = () => {
      setProgress(0);
      selectSong((current + 1) % songs.length);
    };

    const onPlay = () => setPlaying(true);

    const onPause = () => setPlaying(false);

    const onTimeUpdate = () => {
      if (!audio.duration || !Number.isFinite(audio.duration)) return;

      const percentage = (audio.currentTime / audio.duration) * 100;

      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    const onLoadedMetadata = () => {
      setProgress(0);
    };

    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);

    return () => {
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, [stage, current]);
  useEffect(() => {
    if (stage !== "site") return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("show"),
        ),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Memory cards are intentionally excluded from the reveal dependency;
    // they must always remain visible on mobile.
    document.querySelectorAll(".memory-row").forEach((el) => {
      el.classList.add("show");
    });
    return () => observer.disconnect();
  }, [stage]);
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  const enter = () => {
    setStage("loading");
    setTimeout(() => {
      setStage("site");
      window.scrollTo(0, 0);
    }, 2900);
  };
  const toggleLike = (i) =>
    setLikes((v) => v.map((x, n) => (n === i ? !x : x)));
  const toggleSaved = (i) =>
    setSaved((v) => v.map((x, n) => (n === i ? !x : x)));
  return (
    <>
      <GalaxyBackground />
      {stage === "pin" && <PinScreen onSuccess={enter} />}
      <LoadingScreen active={stage === "loading"} />
      {stage === "site" && (
        <div className="website active">
          <Navbar playing={playing} toggleMusic={toggleMusic} />
          <main>
            <Hero />
            <MusicSection
              current={current}
              playing={playing}
              progress={progress}
              onSelect={selectSong}
              onToggle={toggleMusic}
              onSeek={seekMusic}
            />
            <Memories
              likes={likes}
              toggleLike={toggleLike}
              saved={saved}
              toggleSaved={toggleSaved}
              openPhoto={(i) => setLightbox(i)}
            />
            <Letter />
          </main>
          <footer>
            Dibuat khusus untuk kita <span>♡</span> semoga ceritanya tidak
            pernah selesai.
          </footer>
        </div>
      )}
      <Lightbox
        memory={lightbox === null ? null : memories[lightbox]}
        liked={lightbox === null ? false : likes[lightbox]}
        onClose={() => setLightbox(null)}
        onLike={() => lightbox !== null && toggleLike(lightbox)}
      />
      <audio ref={audioRef} preload="auto" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
