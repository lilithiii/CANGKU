"use client";

import { useEffect, useState } from "react";

type Category = "全部" | "动态海报" | "平面设计" | "插画" | "包装";

type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: Exclude<Category, "全部">;
  year: string;
  palette: string;
};

const categories: Category[] = [
  "全部",
  "动态海报",
  "平面设计",
  "插画",
  "包装",
];

const projects: Project[] = [
  {
    id: "dunhuang",
    number: "01",
    title: "敦煌 · 流光",
    subtitle: "动态海报展示位 / MP4 · GIF",
    category: "动态海报",
    year: "2026",
    palette: "青绿 × 霓粉",
  },
  {
    id: "type",
    number: "02",
    title: "字在运动",
    subtitle: "动态字体展示位 / MP4 · WebM",
    category: "动态海报",
    year: "2026",
    palette: "深蓝 × 荧光黄",
  },
  {
    id: "tide",
    number: "03",
    title: "潮汐之间",
    subtitle: "动态视觉展示位 / MP4 · GIF",
    category: "动态海报",
    year: "2026",
    palette: "湖蓝 × 暖橙",
  },
  {
    id: "identity",
    number: "04",
    title: "品牌视觉系统",
    subtitle: "平面设计展示位 / JPG · PNG",
    category: "平面设计",
    year: "2026",
    palette: "米白 × 靛蓝",
  },
  {
    id: "character",
    number: "05",
    title: "角色与想象",
    subtitle: "插画作品展示位 / JPG · PNG",
    category: "插画",
    year: "2026",
    palette: "薄荷 × 桃粉",
  },
  {
    id: "package",
    number: "06",
    title: "纸上立体",
    subtitle: "包装设计展示位 / JPG · PNG",
    category: "包装",
    year: "2026",
    palette: "天蓝 × 酸绿",
  },
];

const experience = [
  {
    date: "2024.03—2025.07",
    company: "杭州内啪科技有限公司",
    role: "电商美工助理",
    detail: "负责淘宝页面美工、详情页制作与图片处理。",
  },
  {
    date: "2024.02—2025.07",
    company: "巧合婚庆策划有限公司",
    role: "活动策划师",
    detail: "设计定制化视觉方案，完成主题婚礼与客户沟通。",
  },
  {
    date: "2023.04—2024.01",
    company: "尚北道文化创意有限公司",
    role: "广告设计师",
    detail: "负责广告文案、设计策划与产品包装视觉。",
  },
  {
    date: "2022.08—2023.02",
    company: "大手印玫瑰科技有限公司",
    role: "直播运营助理",
    detail: "搭建直播间视觉体系，制作动态背景与产品展示模板。",
  },
];

const skills = [
  { name: "Illustrator", short: "Ai", value: 95 },
  { name: "Photoshop", short: "Ps", value: 90 },
  { name: "Premiere", short: "Pr", value: 80 },
  { name: "After Effects", short: "Ae", value: 70 },
];

function Spark({ className = "" }: { className?: string }) {
  return <span className={`spark ${className}`} aria-hidden="true" />;
}

function PosterArtwork({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <div
      className={`poster-art poster-art--${project.id} ${
        large ? "poster-art--large" : ""
      }`}
      aria-hidden="true"
    >
      <div className="poster-grid" />
      <span className="poster-kicker">ZHU WEN JING — PORTFOLIO</span>
      <span className="poster-index">{project.number}</span>

      {project.id === "dunhuang" && (
        <>
          <span className="dunhuang-orbit orbit-one" />
          <span className="dunhuang-orbit orbit-two" />
          <span className="dunhuang-sun" />
          <span className="dunhuang-word">DUNHUANG</span>
          <span className="dunhuang-cn">敦煌流光</span>
          <span className="dunhuang-ribbon ribbon-one" />
          <span className="dunhuang-ribbon ribbon-two" />
        </>
      )}

      {project.id === "type" && (
        <>
          <span className="type-word type-word--one">MOVE</span>
          <span className="type-word type-word--two">TYPE</span>
          <span className="type-word type-word--three">PLAY</span>
          <span className="type-disc" />
          <span className="type-caption">字 / 在 / 运 / 动</span>
        </>
      )}

      {project.id === "tide" && (
        <>
          <span className="tide-circle tide-circle--one" />
          <span className="tide-circle tide-circle--two" />
          <span className="tide-wave tide-wave--one" />
          <span className="tide-wave tide-wave--two" />
          <span className="tide-title">TIDE</span>
          <span className="tide-cn">潮汐之间</span>
        </>
      )}

      {project.id === "identity" && (
        <>
          <span className="identity-square identity-square--one" />
          <span className="identity-square identity-square--two" />
          <span className="identity-circle" />
          <span className="identity-title">VISUAL<br />SYSTEM</span>
          <span className="identity-caption">品牌视觉 / BRAND IDENTITY</span>
        </>
      )}

      {project.id === "character" && (
        <>
          <span className="face-hair" />
          <span className="face-shape">
            <i className="face-eye face-eye--left" />
            <i className="face-eye face-eye--right" />
            <i className="face-smile" />
          </span>
          <span className="face-ear face-ear--left" />
          <span className="face-ear face-ear--right" />
          <span className="character-title">HELLO!</span>
          <span className="character-caption">角色与想象 / CHARACTER</span>
        </>
      )}

      {project.id === "package" && (
        <>
          <span className="package-box package-box--back" />
          <span className="package-box package-box--front">
            <i>ZWJ</i>
          </span>
          <span className="package-line package-line--one" />
          <span className="package-line package-line--two" />
          <span className="package-title">PACKAGE<br />DESIGN</span>
          <span className="package-caption">包装 / 纸上立体</span>
        </>
      )}

      <span className="poster-corner">✦</span>
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("全部");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleProjects =
    activeCategory === "全部"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  useEffect(() => {
    if (!selectedProject) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="返回首页" onClick={closeMenu}>
          <span className="logo-mark">✱</span>
          <span>ZWJ / PORTFOLIO</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="打开或关闭导航"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="主要导航">
          <a href="#work" onClick={closeMenu}>
            作品
          </a>
          <a href="#about" onClick={closeMenu}>
            关于
          </a>
          <a href="#experience" onClick={closeMenu}>
            经历
          </a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            联系我 ↗
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-noise" aria-hidden="true" />
        <Spark className="hero-spark hero-spark--one" />
        <Spark className="hero-spark hero-spark--two" />
        <Spark className="hero-spark hero-spark--three" />

        <div className="hero-copy">
          <p className="eyebrow">个人作品集 &gt;&gt;&gt; PERSONAL PORTFOLIO</p>
          <h1>
            <span>朱文静</span>
            <span className="hero-outline">视觉设计师</span>
          </h1>
          <p className="hero-intro">
            用平面、动态与角色设计，
            <br />
            把灵感变成会被记住的视觉。
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#work">
              浏览作品 <span>↓</span>
            </a>
            <a className="button button--ghost" href="#contact">
              CONTACT ↗
            </a>
          </div>
        </div>

        <div className="hero-stage" aria-label="动态海报视觉演示">
          <div className="hero-poster hero-poster--back">
            <span>VISUAL</span>
            <strong>PLAY!</strong>
            <i>2026 — ZWJ</i>
          </div>
          <div className="hero-poster hero-poster--middle">
            <span>DESIGN</span>
            <strong>MOVE</strong>
            <i>POSTER / IP / BRAND</i>
          </div>
          <div className="hero-poster hero-poster--front">
            <span className="poster-topline">MOTION POSTER</span>
            <b className="hero-big-type">动</b>
            <b className="hero-big-type hero-big-type--second">态</b>
            <span className="hero-ring hero-ring--one" />
            <span className="hero-ring hero-ring--two" />
            <span className="hero-mini-copy">IDEAS IN MOTION<br />视觉传达设计</span>
            <Spark className="poster-spark" />
          </div>
          <span className="stage-caption">SCROLL TO EXPLORE — 01/06</span>
        </div>

        <div className="hero-directions" aria-label="设计方向">
          <span>Poster 海报</span>
          <span>Illustration 插画</span>
          <span>Graphic 平面</span>
          <span>Package 包装</span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>✦ VISUAL COMMUNICATION</span>
          <span>✦ MOTION POSTER</span>
          <span>✦ IP DESIGN</span>
          <span>✦ BRAND &amp; PACKAGE</span>
          <span>✦ VISUAL COMMUNICATION</span>
          <span>✦ MOTION POSTER</span>
          <span>✦ IP DESIGN</span>
          <span>✦ BRAND &amp; PACKAGE</span>
        </div>
      </div>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="section-index">01 / SELECTED WORK</p>
            <h2>作品精选<span>✱</span></h2>
          </div>
          <p className="section-note">
            当前为作品位视觉演示。动态海报支持 MP4、WebM 与 GIF，
            上传后即可替换卡片内容。
          </p>
        </div>

        <div className="filters" role="group" aria-label="作品分类筛选">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={activeCategory === category ? "active" : ""}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <button
                className="project-preview"
                type="button"
                aria-label={`放大查看${project.title}`}
                onClick={() => setSelectedProject(project)}
              >
                <PosterArtwork project={project} />
                <span className="project-view">VIEW ↗</span>
              </button>
              <div className="project-meta">
                <div>
                  <p>{project.category} · {project.year}</p>
                  <h3>{project.title}</h3>
                </div>
                <span>{project.number}</span>
              </div>
              <p className="project-subtitle">{project.subtitle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading section-heading--light">
          <div>
            <p className="section-index">02 / ABOUT ME</p>
            <h2>关于我<span>✦</span></h2>
          </div>
          <p className="section-note">视觉传达设计 / 西京学院 / 本科</p>
        </div>

        <div className="about-grid">
          <div className="profile-card">
            <div className="profile-orbit" aria-hidden="true">
              <span className="profile-monogram">ZWJ</span>
              <span className="orbit-label orbit-label--one">IDEA</span>
              <span className="orbit-label orbit-label--two">MOVE</span>
              <span className="orbit-label orbit-label--three">MAKE</span>
            </div>
            <div className="profile-name">
              <strong>朱文静</strong>
              <span>VISUAL DESIGNER</span>
            </div>
          </div>

          <div className="about-copy">
            <p className="big-copy">
              我喜欢把<span>清晰的信息</span>、
              <span>鲜明的色彩</span>与<span>有节奏的动态</span>
              组合成完整的视觉叙事。
            </p>
            <p>
              具备平面设计、动态视觉、插画与包装方向的综合实践经验。
              善于理解需求、快速沟通并推进方案落地，也愿意持续学习新的表达方式。
            </p>
            <div className="strengths">
              <span>善于学习</span>
              <span>认真执行</span>
              <span>审美在线</span>
              <span>沟通协作</span>
              <span>追求目标</span>
            </div>
          </div>
        </div>

        <div className="skills-panel">
          <div className="skills-title">
            <p>PROFESSIONAL SKILLS</p>
            <h3>专业技能</h3>
            <span>软件是工具，表达才是目的。</span>
          </div>
          <div className="skill-list">
            {skills.map((skill) => (
              <div className="skill" key={skill.short}>
                <div className="skill-topline">
                  <span className="skill-short">{skill.short}</span>
                  <span>{skill.name}</span>
                  <strong>{skill.value}%</strong>
                </div>
                <div className="skill-track">
                  <span style={{ width: `${skill.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <div>
            <p className="section-index">03 / EXPERIENCE</p>
            <h2>工作经历<span>⌁</span></h2>
          </div>
          <p className="section-note">
            从直播视觉到品牌、活动与电商，
            <br />
            每一段经历都在拓宽设计的边界。
          </p>
        </div>

        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item" key={item.company}>
              <div className="timeline-marker">
                <Spark />
                <span>0{index + 1}</span>
              </div>
              <time>{item.date}</time>
              <div className="timeline-main">
                <h3>{item.company}</h3>
                <p>{item.detail}</p>
              </div>
              <span className="timeline-role">{item.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <Spark className="contact-spark contact-spark--one" />
        <Spark className="contact-spark contact-spark--two" />
        <p>04 / LET&apos;S CREATE SOMETHING</p>
        <h2>
          有好想法？
          <br />
          一起让它<span>动起来。</span>
        </h2>
        <a className="contact-mail" href="mailto:1339639887@qq.com">
          1339639887@qq.com <span>↗</span>
        </a>
        <div className="contact-details">
          <a href="tel:15223841375">PHONE / 152 2384 1375</a>
          <span>BASED IN / 兰州</span>
          <span>AVAILABLE FOR / 平面 · 动态 · 视觉运营</span>
        </div>
      </section>

      <footer>
        <a className="logo" href="#top">
          <span className="logo-mark">✱</span>
          <span>ZWJ / PORTFOLIO</span>
        </a>
        <span>© 2026 朱文静</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>

      {selectedProject && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={() => setSelectedProject(null)}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="关闭作品预览"
              onClick={() => setSelectedProject(null)}
            >
              关闭 ×
            </button>
            <div className="modal-art">
              <PosterArtwork project={selectedProject} large />
            </div>
            <div className="modal-copy">
              <p>
                {selectedProject.category} / {selectedProject.year}
              </p>
              <h2 id="modal-title">{selectedProject.title}</h2>
              <div className="modal-info">
                <span>{selectedProject.subtitle}</span>
                <span>配色 / {selectedProject.palette}</span>
              </div>
              <p className="modal-tip">
                这是动态海报的版式演示位。把你的作品文件放入后，
                这里会播放完整动画并保留标题、类别与项目说明。
              </p>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
