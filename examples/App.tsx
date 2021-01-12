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
                    <input type="text" placeholder="please input video URL" style="width: 500px;margin: 0 20px;" v-model={ this.url } />
                    <button type="button" onClick={ evt => this.options.sourceURL = this.url }>update URL</button>
                </div>
            </footer>
        </div>
    }
}
