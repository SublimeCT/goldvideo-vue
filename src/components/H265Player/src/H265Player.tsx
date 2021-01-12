// import { GoldPlay, GoldPlayOptions } from '../../../@types/GoldPlay'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

export type Sheets = { [k: string]: string | undefined }

@Component({
    name: 'h265-player'
})
export default class H265Player extends Vue {
    @Prop({ default: false })
    debug?: boolean
    @Prop()
    width?: string
    @Prop()
    height?: string
    @Prop()
    sheets?: Sheets
    /**
     * GoldPlay 配置
     * @description 详见文档: https://goldvideo.github.io/h265player/API/index.html
     */
    @Prop({ required: true })
    options!: GoldPlayOptions
    @Watch('options.sourceURL')
    onUpdateSourceURL() {
        this.onDestroy()
        this.init()
    }
    player?: GoldPlay
    get _sheets(): Sheets {
        const sheets: Sheets = {
            width: this.width,
            height: this.height,
        }
        Object.assign(sheets, this.sheets)
        return sheets
    }
    get playerEl(): Element | undefined {
        const el = this.$refs['player']
        if (el instanceof Element) return el
    }
    public render(): VueTsxSupport.JSX.Element {
        return <div class="goldvideo-h265-player-component">
            <div ref="player" style={ this._sheets } class="h265-palyer"></div>
        </div>
    }
    mounted() {
        this.init()
    }
    init() {
        if (!this.playerEl) throw new Error('[H265Player component] Internal Error: Invalid player element')
        this.player = new GoldPlay(this.playerEl, this.options)
        if (this.debug) console.log('[H265Player component] player:', this.player)
        this.player.events.on('LoadData.onFirstLoaded', (evt: unknown) => {
            if (this.debug) console.log('[H265Player component] LoadData.onFirstLoaded', evt)
            this.$emit('firstLoaded', evt)
        })
    }
    onDestroy() {
        this.player && this.player.destroy()
    }
    beforeDestroy() {
        this.onDestroy()
    }
    // public install(Vue: any) {
    //     Vue.component(H265Player.name, H265Player)
    // }
}
