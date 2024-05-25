<template>

  <head>
    <link rel="stylesheet" href="./css/main.css">
  </head>

  <div class="common-layout">

    <el-container>
      <!-- 顶部菜单 -->
      <el-affix>
        <el-header>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <!-- 网站图标 -->
            <img src="https://docs.classisland.tech/zh-cn/latest/assets/logo.svg" alt="" srcset="" class="el-header-logo">
            <div class="flex-grow" />
            <!-- 菜单 -->
            <el-menu-item index="0" onclick="window.open ('https://github.com/HelloWRC/ClassIsland/')">Github项目地址</el-menu-item>
            <el-sub-menu index="1">
              <template #title>下载</template>
              <el-menu-item index="1-1" onclick="window.open ('https://install.appcenter.ms/users/hellowrc/apps/classisland/distribution_groups/public/releases/latest')"><el-space wrap>AppCenter
                  <TopRight style="width: 1em; height: 1em; margin-right: 8px;" />
                </el-space></el-menu-item>
                <el-menu-item index="1-2" onclick="window.open ('https://github.com/HelloWRC/ClassIsland/releases/latest')"><el-space wrap>Github
                  <TopRight style="width: 1em; height: 1em; margin-right: 8px;" />
                </el-space></el-menu-item>
            </el-sub-menu>
            
            <el-menu-item index="2" onclick="window.open ('https://docs.classisland.tech/')">文档</el-menu-item>
            <el-menu-item index="3" onclick="window.open ('https://migrate.classisland.tech/')">迁移</el-menu-item>
            <el-sub-menu index="4">
              <template #title>友情链接</template>
              <el-menu-item index="4-1" onclick="window.open ('http://www.gusui.site')"><el-space wrap>谷穗社区
                  <TopRight style="width: 1em; height: 1em; margin-right: 8px;" />
                </el-space></el-menu-item>
                <el-menu-item index="4-2" onclick="window.open ('http://dsz.hello8693.xyz')"><el-space wrap>电视猪
                  <TopRight style="width: 1em; height: 1em; margin-right: 8px;" />
                </el-space></el-menu-item>
            </el-sub-menu>
          </el-menu>

        </el-header>

      </el-affix>
      <!-- <br /> -->

      <div class="top">
        <div class="logo-parent">
          <div class="logo">
            <img src="https://docs.classisland.tech/zh-cn/latest/assets/logo.svg" alt="" />
          </div>
          <div class="programmer pc">
            <img alt="软件截图-课表编辑" src="./img/home.png">
          </div>
          <div class="describe">
            <h1>ClassIsland</h1>
            <h2>&emsp;&emsp;ClassIsland是一款适用于班级多媒体屏幕的课表的信息显示工具，可以一目了然地显示各种信息。本应用的名字灵感源于 iOS 灵动岛（Dynamic Island）功能。</h2>
            <p>
              <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/HelloWRC/ClassIsland"/>
              <a href="https://github.com/HelloWRC/ClassIsland/blob/master/LICENSE.txt"><img alt="GitHub License" src="https://img.shields.io/github/license/HelloWRC/ClassIsland?style=flat-square"/></a>
              <a href="https://ci.appveyor.com/project/HelloWRC/classisland"><img alt="AppVeyor Build" src="https://img.shields.io/appveyor/build/HelloWRC/ClassIsland?style=flat-square&amp;logo=appveyor"/></a> 
              <a href="https://github.com/HelloWRC/ClassIsland/releases/latest"><img alt="GitHub Release" src="https://img.shields.io/github/v/release/HelloWRC/ClassIsland?style=flat-square&amp;logo=GitHub&amp;color=%233fb950"/></a> 
              <a href="https://github.com/HelloWRC/ClassIsland/releases/"><img alt="GitHub Release" src="https://img.shields.io/github/v/release/HelloWRC/ClassIsland?include_prereleases&amp;style=flat-square&amp;logo=GitHub&amp;label=BETA"/></a>
              <a href="https://qm.qq.com/q/4NsDQKiAuQ">
              <img alt="加入QQ群" src="https://img.shields.io/badge/QQ%E7%BE%A4-958840932-%230066cc?style=flat-square&amp;logo=TencentQQ"/></a> 
            </p>
            <el-button-group class="pc" style="width:80vw">
            <el-button round size="large" class="download" onclick="window.open ('https://install.appcenter.ms/users/hellowrc/apps/classisland/distribution_groups/public/releases/latest')">
              <span>前往AppCenter下载</span> &nbsp;
              <el-icon><TopRight /></el-icon>
              <!-- <i><svg version="1.1" role="presentation" aria-label="" width="12" height="12" viewBox="0 0 16 16" class="mo-icon">  <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"><path d="M10.707,2.293A1,1,0,0,0,9.293,3.707L12.586,7H1A1,1,0,0,0,1,9H12.586L9.293,12.293a1,1,0,1,0,1.414,1.414l5-5a1,1,0,0,0,0-1.414Z"></path></g></svg></i> -->
            </el-button>
            <el-button round size="large" class="download" onclick="window.open ('https://github.com/HelloWRC/ClassIsland/releases/latest')">
              <span>前往Github下载</span> &nbsp;
              <el-icon><TopRight /></el-icon>
              <!-- <i><svg version="1.1" role="presentation" aria-label="" width="12" height="12" viewBox="0 0 16 16" class="mo-icon">  <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"><path d="M10.707,2.293A1,1,0,0,0,9.293,3.707L12.586,7H1A1,1,0,0,0,1,9H12.586L9.293,12.293a1,1,0,1,0,1.414,1.414l5-5a1,1,0,0,0,0-1.414Z"></path></g></svg></i> -->
            </el-button>
            </el-button-group>
            <el-button-group class="m" style="width:80vw">
            <el-button round size="large" class="download" onclick="window.open ('https://install.appcenter.ms/users/hellowrc/apps/classisland/distribution_groups/public/releases/latest')">
              <span>AppCenter下载</span> &nbsp;
              <el-icon><TopRight /></el-icon>
              <!-- <i><svg version="1.1" role="presentation" aria-label="" width="12" height="12" viewBox="0 0 16 16" class="mo-icon">  <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"><path d="M10.707,2.293A1,1,0,0,0,9.293,3.707L12.586,7H1A1,1,0,0,0,1,9H12.586L9.293,12.293a1,1,0,1,0,1.414,1.414l5-5a1,1,0,0,0,0-1.414Z"></path></g></svg></i> -->
            </el-button>
            <el-button round size="large" class="download" onclick="window.open ('https://github.com/HelloWRC/ClassIsland/releases/latest')">
              <span>Github下载</span> &nbsp;
              <el-icon><TopRight /></el-icon>
              <!-- <i><svg version="1.1" role="presentation" aria-label="" width="12" height="12" viewBox="0 0 16 16" class="mo-icon">  <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"><path d="M10.707,2.293A1,1,0,0,0,9.293,3.707L12.586,7H1A1,1,0,0,0,1,9H12.586L9.293,12.293a1,1,0,1,0,1.414,1.414l5-5a1,1,0,0,0,0-1.414Z"></path></g></svg></i> -->
            </el-button>
            </el-button-group>
          </div>
        </div>
      </div>
      
      <!-- 主体 -->

      <el-main>
        
        <div class="main">
          <article class="markdown-body">
<h2>功能</h2>
<h3>课表显示</h3>
<ul>
<li><input checked="" disabled="" type="checkbox"> 显示当日的课表</li>
<li><input checked="" disabled="" type="checkbox"> 显示当前进行的课程信息</li>
<li><input checked="" disabled="" type="checkbox"> 在上课、下课、放学等重要时间点发出提醒</li>
<li><input checked="" disabled="" type="checkbox"> 在发出提醒时使用语音、强调特效和音效增强提醒</li>
</ul>
<h3>课表编辑与管理</h3>
<ul>
<li><input checked="" disabled="" type="checkbox"> 直观的课表编辑工具</li>
<li><input checked="" disabled="" type="checkbox"> 从表格导入课表</li>
<li><input checked="" disabled="" type="checkbox"> 换课</li>
<li><input checked="" disabled="" type="checkbox"> 临时启用某个课表</li>
</ul>
<h3>其它功能</h3>
<ul>
<li><input checked="" disabled="" type="checkbox"> 界面缩放，不透明度调节</li>
<li><input checked="" disabled="" type="checkbox"> 自动同步软件时间，支持手动调整和自动累加时间偏移</li>
<li><input checked="" disabled="" type="checkbox"> 天气显示</li>
<li><input checked="" disabled="" type="checkbox"> 考试倒计时显示</li>
<li><input checked="" disabled="" type="checkbox"> 从壁纸提取软件主题色</li>
<li><input checked="" disabled="" type="checkbox"> 丝滑的过渡动画</li>
<li><input checked="" disabled="" type="checkbox"> 明亮、黑暗主题</li>
<li><input disabled="" type="checkbox"> 集控管理 <em>(即将发布)</em></li>
<li><input disabled="" type="checkbox"> ……</li>
</ul>
<details>
<summary><strong>🖼️软件截图</strong></summary>

<blockquote>
<p>背景图片来自<a href="https://www.pixiv.net/artworks/110847880">Pixiv@辰暮sora</a></p>
</blockquote>
<h3>主界面</h3>
<p><img src="https://github.com/HelloWRC/ClassIsland/assets/55006226/784a2f8c-a9e2-4656-b66d-9f8105f0600c" alt="软件截图-整体效果"></p>
<p><img src="https://github.com/HelloWRC/ClassIsland/assets/55006226/5299c6e5-5668-43ed-af27-9abe027411a0" alt="软件截图-主界面"></p>
<p><video src="https://github.com/HelloWRC/ClassIsland/assets/55006226/b797138a-84ef-4296-b69b-3989f331f289" loop label="软件截图-上课提醒" autoplay muted></video></p>
<h3>档案编辑器</h3>
<p><img src="https://github.com/HelloWRC/ClassIsland/assets/55006226/29d91bf2-4c8a-4cbd-a778-a9034e7d7420" alt="软件截图-课表编辑"></p>
<p><img src="https://github.com/HelloWRC/ClassIsland/assets/55006226/2b3b5c87-c8bb-46f0-8470-01edf3ca52a2" alt="软件截图-时间表编辑"></p>
<p><img src="https://github.com/HelloWRC/ClassIsland/assets/55006226/a2e64983-dfa0-4565-a45a-31c9f9c298a8" alt="软件截图-科目编辑"></p>
<h3>其它界面</h3>
<p><img src="https://github.com/HelloWRC/ClassIsland/assets/55006226/063123a1-1bf2-4b41-bef7-1dc731631d08" alt="软件截图-应用设置"></p>
</details>

<h2>开始使用</h2>
<h3>1. 检查设备需求</h3>
<p>首先，请确保您的设备满足以下推荐需求：</p>
<ul>
<li>Windows 10 及以上版本的系统，x64架构</li>
<li>已安装<a href="https://dotnet.microsoft.com/zh-cn/download/dotnet/thank-you/runtime-desktop-8.0.1-windows-x64-installer">.NET 8.0桌面运行时</a></li>
<li>开启Aero效果（Windows 8及以上的系统可以忽略此项）</li>
</ul>
<details>
<summary>最低设备需求</summary>

<p>ClassIsland 理论上可以在以下的系统环境中运行。<strong>注意：在这些系统上运行 ClassIsland 可能会出现运行不稳定的情况。</strong></p>
<ul>
<li>Windows 7 及以上版本系统，x64架构</li>
</ul>
<p>要在 Windows 7 中安装并运行 ClassIsland，您还需要额外进行以下准备工作：<a href="doc/InstallOnLegaceyOS.md">在Windows7中安装 ClassIsland</a></p>
</details>

<p><strong>⚠️不建议在 Windows 10 以下的系统运行本应用⚠️</strong> 在 Windows 7 中，.NET 运行时会产生<strong>严重的内存泄漏问题</strong>（<a href="https://github.com/HelloWRC/ClassIsland/issues/91">#91</a>）。</p>
<h3>2. 下载软件压缩包</h3>
<p>对于普通用户，可以在以下渠道下载到本软件，请根据自身网络环境选择合适的渠道。</p>
<blockquote>
<p>测试版包含最新的功能，但也可能包含未完善和不稳定的功能，请谨慎使用。</p>
</blockquote>
<table>
<thead>
<tr>
<th>下载渠道/通道</th>
<th><strong>🚀正式版</strong> <br/><a href="https://github.com/HelloWRC/ClassIsland/releases/latest"><img src="https://img.shields.io/github/v/release/HelloWRC/ClassIsland?style=flat-square&logo=GitHub&color=%233fb950" alt="GitHub Release"></a></th>
<th>🚧测试版<br/><a href="https://github.com/HelloWRC/ClassIsland/releases/"><img src="https://img.shields.io/github/v/release/HelloWRC/ClassIsland?include_prereleases&style=flat-square&logo=GitHub&label=BETA" alt="GitHub Release"></a></th>
</tr>
</thead>
<tbody><tr>
<td>GitHub</td>
<td><a href="https://github.com/HelloWRC/ClassIsland/releases/latest"><strong>GitHub下载</strong></a></td>
<td><a href="https://github.com/HelloWRC/ClassIsland/releases">GitHub下载</a></td>
</tr>
<tr>
<td>AppCenter</td>
<td><a href="https://install.appcenter.ms/users/hellowrc/apps/classisland/distribution_groups/public/releases/latest"><strong>AppCenter下载</strong></a></td>
<td><a href="https://install.appcenter.ms/users/hellowrc/apps/classisland/distribution_groups/publicbeta/releases/latest">AppCenter下载</a></td>
</tr>
</tbody></table>
<!-- > GitHub Releases 还没有同步历史版本。要下载历史版本，请前往[AppCenter](https://install.appcenter.ms/users/hellowrc/apps/classisland/distribution_groups/public/releases/latest)。 -->

<h3>3. 解压软件</h3>
<p>下载完成后，将软件压缩包解压到一个您喜欢的地方，运行软件即可开始使用。</p>
<h3>4. 开始使用</h3>
<p>首次启动时，会有一个简短的欢迎向导来引导您完成本软件的基本设置，并展示软件的一些基本操作。</p>
<p>您可以观看<a href="https://www.bilibili.com/video/BV1fA4m1A7uZ/">入门教程视频</a>来快速上手本软件。如果您要进一步了解本软件，您可以阅读本软件内置的帮助文档。</p>
<h2>开发</h2>
<p>本应用目前的开发状态：</p>
<ul>
<li>正在<a href="https://github.com/HelloWRC/ClassIsland/tree/master"><code>master</code></a>分支上维护版本 <a href="https://github.com/HelloWRC/ClassIsland/milestone/5">1.4 - Firefly</a>。</li>
</ul>
<p>要在本地编译应用，您需要安装以下负载和工具：</p>
<ul>
<li><a href="https://dotnet.microsoft.com/zh-cn/download/dotnet/8.0">.NET 8.0 SDK</a></li>
<li><a href="https://visualstudio.microsoft.com/">Visual Studio</a></li>
</ul>
<p>对于Visual Studio，您需要在安装时勾选以下工作负载：</p>
<ul>
<li>.NET 桌面开发</li>
</ul>
<p>我们欢迎想要为本应用实现新功能或进行改进的同学提交 <a href="https://github.com/HelloWRC/ClassIsland/pulls">Pull Request</a>。</p>
<h2>获取帮助&amp;加入社区</h2>
<p><a href=""><img src="https://img.shields.io/github/issues-search/HelloWRC/ClassIsland?query=is%3Aopen&style=flat-square&logo=github&label=Opened%20issues&color=%233fb950" alt="查看Issues"></a> <a href="https://github.com/HelloWRC/ClassIsland/discussions"><img src="https://img.shields.io/github/discussions/HelloWRC/ClassIsland?style=flat-square&logo=Github" alt="GitHub Discussions"></a> <a href="https://qm.qq.com/q/4NsDQKiAuQ"><img src="https://img.shields.io/badge/QQ%E7%BE%A4-958840932-%230066cc?style=flat-square&logo=TencentQQ" alt="加入QQ群"></a> </p>
<p>您可以访问以下页面来获取帮助：</p>
<ul>
<li>应用内置的帮助文档</li>
<li><a href="https://classisland-docs.readthedocs.io/">技术性文档</a></li>
</ul>
<p>您也可以加入以下社群讨论交流：</p>
<ul>
<li><a href="https://github.com/HelloWRC/ClassIsland/discussions">Discussions</a></li>
<li><a href="https://qm.qq.com/q/4NsDQKiAuQ">QQ群</a></li>
</ul>
<p>如果您确定您遇到的问题是一个 bug，或者您要提出一项新的功能，请<a href="https://github.com/HelloWRC/ClassIsland/issues/new/choose">提交一个Issue</a>。</p>
<h2>相关项目</h2>
<ul>
<li><a href="https://github.com/HelloWRC/ClassIsland.ManagementServer">HelloWRC/ClassIsland.ManagementServer</a> - ClassIsland 集控服务端仓库</li>
<li><a href="https://github.com/HelloWRC/classisland-docs">HelloWRC/classisland-docs</a> - ClassIsland 文档仓库</li>
</ul>
<h2>致谢</h2>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<p><a href="#contributors-"><img src="https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square" alt="All Contributors"></a></p>
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<p>本项目受到<a href="https://github.com/DuguSand/class_form">DuguSand/class_form</a>的启发而开发。</p>
<p>感谢以下同学为本项目为本项目的开发提供支持(<a href="https://allcontributors.org/docs/en/emoji-key">emoji key</a>)：</p>
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/HelloWRC"><img src="https://avatars.githubusercontent.com/u/55006226?v=4?s=100" width="100px;" alt="HelloWRC"/><br /><sub><b>HelloWRC</b></sub></a><br /><a href="https://github.com/HelloWRC/ClassIsland/commits?author=HelloWRC" title="Code">💻</a> <a href="#design-HelloWRC" title="Design">🎨</a> <a href="https://github.com/HelloWRC/ClassIsland/commits?author=HelloWRC" title="Documentation">📖</a> <a href="#ideas-HelloWRC" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-HelloWRC" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/Doctor-yoi"><img src="https://avatars.githubusercontent.com/u/106463935?v=4?s=100" width="100px;" alt="Doctor-yoi"/><br /><sub><b>Doctor-yoi</b></sub></a><br /><a href="https://github.com/HelloWRC/ClassIsland/commits?author=Doctor-yoi" title="Code">💻</a> <a href="#question-Doctor-yoi" title="Answering Questions">💬</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://www.jiangyin14.top/"><img src="https://avatars.githubusercontent.com/u/106649516?v=4?s=100" width="100px;" alt="姜胤"/><br /><sub><b>姜胤</b></sub></a><br /><a href="https://github.com/HelloWRC/ClassIsland/commits?author=jiangyin14" title="Documentation">📖</a> <a href="#ideas-jiangyin14" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/HelloWRC/ClassIsland/issues?q=author%3Ajiangyin14" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://fossa.com/"><img src="https://avatars.githubusercontent.com/u/29791463?v=4?s=100" width="100px;" alt="fossabot"/><br /><sub><b>fossabot</b></sub></a><br /><a href="#infra-fossabot" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://allcontributors.org/"><img src="https://avatars.githubusercontent.com/u/46410174?v=4?s=100" width="100px;" alt="All Contributors"/><br /><sub><b>All Contributors</b></sub></a><br /><a href="https://github.com/HelloWRC/ClassIsland/commits?author=all-contributors" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/TV-ZHU"><img src="https://avatars.githubusercontent.com/u/88492699?v=4?s=100" width="100px;" alt="DSZDev"/><br /><sub><b>DSZDev</b></sub></a><br /><a href="https://github.com/HelloWRC/ClassIsland/commits?author=TV-ZHU" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/LiuYan-xwx"><img src="https://avatars.githubusercontent.com/u/66517348?v=4?s=100" width="100px;" alt="流焰xwx"/><br /><sub><b>流焰xwx</b></sub></a><br /><a href="https://github.com/HelloWRC/ClassIsland/commits?author=LiuYan-xwx" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://www.gusui.site/"><img src="https://avatars.githubusercontent.com/u/66517348?v=4?s=100" width="100px;" alt="谷穗社区"/><br /><sub><b>谷穗社区</b></sub></a><br /><a href="https://github.com/HelloWRC/ClassIsland/commits?author=GusuiCommunity" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


<p>本项目使用到的第三方库和框架：</p>
<ul>
<li><a href="https://github.com/MaterialDesignInXAML/MaterialDesignInXamlToolkit/">MaterialDesignInXamlToolkit</a></li>
<li><a href="https://github.com/unvell/ReoGrid">ReoGrid</a></li>
<li><a href="https://epplussoftware.com/">EPPlus</a></li>
<li><a href="https://github.com/naudio/NAudio">NAudio</a></li>
<li><a href="https://github.com/grpc/grpc">Grpc.Tools</a></li>
<li><a href="https://github.com/MahApps/MahApps.Metro">MahApps.Metro</a></li>
<li><a href="https://github.com/sourcechord/FluentWPF">FluentWpf</a></li>
<li><a href="https://github.com/punker76/gong-mdWpf-dragdrop">gong-mdWpf-dragdrop</a></li>
<li><a href="https://github.com/whistyun/MdXaml">MdXaml</a></li>
<li><a href="https://aka.ms/telgml">Microsoft.AppCenter</a></li>
<li><a href="https://github.com/bezzad/Downloader">Downloader</a></li>
<li><a href="https://developer.harmonyos.com/cn/design/resource">HarmonyOS Sans</a></li>
<li><a href="https://github.com/CommunityToolkit/dotnet">MVVM Toolkit</a></li>
<li><a href="https://github.com/dotnet/Wpf">WPF</a></li>
<li><a href="https://github.com/microsoft/dotnet">.NET</a></li>
</ul>
<p>详细的致谢信息请前往【应用设置】-&gt;【关于】界面中查看。</p>
<h2>许可证</h2>
<p><a href="https://app.fossa.com/projects/git%2Bgithub.com%2FHelloWRC%2FClassIsland?ref=badge_shield&style=flat-square"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FHelloWRC%2FClassIsland.svg?type=shield" alt="FOSSA Status"></a> </p>
<p>本项目基于 <a href="LICENSE.txt">MIT License</a> 获得许可。</p>
<p><a href="https://app.fossa.com/projects/git%2Bgithub.com%2FHelloWRC%2FClassIsland?ref=badge_large"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FHelloWRC%2FClassIsland.svg?type=large" alt="FOSSA Status"></a></p>
</article>
</div>
        <!-- <> -->



        
      </el-main>
      <!-- Footer -->
      <!-- 底部 -->
      <!-- <el-footer>{{ info.Message }}</el-footer> -->
      <el-footer class="pc">
        <center>Copyright © 2020-2024 ClassIsland&<a href="http://www.gusui.site">谷穗社区工作室</a>
        </center>
      </el-footer>
      <el-footer class="m">
        <center>Copyright © 2020-2024 ClassIsland&<a href="http://www.gusui.site">谷穗社区工作室</a>
        </center>
      </el-footer>
    </el-container>
  </div>

  <el-backtop :right="20" :bottom="20" />
</template>

<!-- <script src="https://cdn.staticfile.org/axios/0.18.0/axios.min.js"></script> -->
<!-- <script>
import { ElLoading } from 'element-plus'
const loadingInstance = ElLoading.service({ fullscreen: true })
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    loadingInstance.close();
    // loadingInstance.close();
    // loadingInstance.close();
    // loadingInstance.close();
    // loadingInstance.close();
  }
}
</script > -->
<script>
import axios from 'axios'
import 'github-markdown-css/github-markdown.css'
setTimeout(() => {
  const boxes = document.querySelectorAll('.box');
  console.log(boxes);
  window.addEventListener('scroll', () => {
    const tb = window.innerHeight;
    boxes.forEach((item) => {
      const boxTop = item.getBoundingClientRect().top;
      if (boxTop < tb * 3 / 5) {
        item.classList.add('show');
      } else if (boxTop > tb) {
        item.classList.remove('show');
      }
    })
  })
}, 100);
export default {
  name: 'App',
  data: function () {
    return {
      // 
      info: '123',
      // info2:"123456"
    }
  },
  mounted() {
    axios
      .get('http://127.0.0.1:8099/v1/test')
      .then(response => (this.info = response.data))
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
  },
  methods: {

  }

}

</script>
<!-- <script src="//cdn.jsdelivr.net/npm/@element-plus/icons-vue"></script> -->
<!-- <script setup>
import { ref } from 'vue';
import { Cloudy, Sunny } from '@element-plus/icons-vue';
const value1 = ref(true);

</script> -->