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
    url = 'test url'
    options: GoldPlayOptions = {
        sourceURL: 'http://192.168.1.28:10005/hls_h265/index.m3u8',
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
            <footer style="display: flex;justify-content: center;">
                <div>video url:{ this.options.sourceURL }</div>
            </footer>
        </div>
    }
}
