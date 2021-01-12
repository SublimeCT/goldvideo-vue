# goldvideo-vue
本项目是对 [goldvideo/h265player](https://github.com/goldvideo/h265player) 的简单封装

## usage
> 请参考 [examples](https://github.com/SublimeCT/goldvideo-vue/blob/main/examples/App.tsx)

1. install

```bash
# v1 分支
yarn add git+ssh://git@github.com:SublimeCT/goldvideo-vue.git#v1
# main 分支
yarn add git+ssh://git@github.com:SublimeCT/goldvideo-vue.git

# or use npm
npm i git+ssh://git@github.com:SublimeCT/goldvideo-vue.git#v1
```

2. 引入 [goldvideo/h265player](https://github.com/goldvideo/h265player) SDK, [参考 index.html](https://github.com/SublimeCT/goldvideo-vue/blob/main/public/index.html#L9)

```html
<link rel="stylesheet" href="../goldplay-h265.css">
<script src="../goldplay-h265-sdk.js"></script>
```

`examples` 中使用的编译好的 `SDK`, 也可以自行编译并引入

3. 使用组件, [参考 App.tsx](https://github.com/SublimeCT/goldvideo-vue/blob/main/examples/App.tsx)

```tsx
import { Component, Vue } from 'vue-property-decorator'
import { H265Player } from '../src/main'
// import LOGO from '../src/assets/logo.png'
import { Sheets } from '@/components/H265Player/src/H265Player'

@Component({
    components: {
        H265Player,
    },
})
export default class App extends Vue {
    static defaultURL = 'https://omc3i.codesandbox.io/ts/playlist.m3u8'
    url = '' // 输入框中的地址
    options: GoldPlayOptions = {
        sourceURL: App.defaultURL,
        type: 'HLS',
        libPath: location.href + 'lib/',
    }
    sheets: Sheets = {
        width: '800px',
        height: '600px',
    }
    onFirstLoaded(evt: unknown) {
        console.log('first loaded!', evt)
    }
    render(): VueTsxSupport.JSX.Element {
        return <div id="app">
            <header style="display: flex;justify-content: center;">
                {/* <img src={ LOGO } alt="Vue logo"/> */}
                {/* <img src="https://github.com/goldvideo/h265player/blob/master/dist/image/goldvideo-logo-w.png" alt=""/> */}
                <h2>GoldVideo Vue</h2>
            </header>
            <main style="display: flex;justify-content: center;">
                <h265-player
                    options={ this.options }
                    sheets={ this.sheets }
                    onFirstLoaded={ this.onFirstLoaded }
                    debug={ true } />
            </main>
            <footer style="display: flex;justify-content: center;margin-top: 20px;">
                <div>
                    <span>URL:</span>
                    <input type="text" placeholder="video URL" style="width: 500px;margin: 0 20px;" v-model={ this.url } />
                    <button type="button" onClick={ evt => this.options.sourceURL = this.url }>update URL</button>
                </div>
            </footer>
        </div>
    }
}
```

修改 `options.sourceURL` 后播放器会自动更新

## examples
[examples](https://github.com/SublimeCT/goldvideo-vue/blob/main/examples/App.tsx)

## Components
### <h265-player>
[source](https://github.com/SublimeCT/goldvideo-vue/blob/main/src/components/H265Player/src/H265Player.tsx)

## refer
- [goldvideo/h265player](https://github.com/goldvideo/h265player)
- [构建基于 TypeScript 的 Vue 组件](https://www.cnblogs.com/jiekzou/p/13424352.html?tvd)
