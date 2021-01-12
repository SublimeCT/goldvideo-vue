/**
 * Type definitions for goldvideo/h265player
 * @description repo: https://github.com/goldvideo/h265player
 * @description document: https://goldvideo.github.io/h265player/API/index.html
 * @description 仅包含少部分类型
 * @description 应该在引入上游项目 JS 后再使用
 * @description 参考自上游项目 demo, 如果发现类型定义有误, 可能是上游项目 API 已更新
 */

class Events {
    eventsQueue = {}
    target = {}
    disallowRepeat = false
    constructor(public target: unknown)
    add(types: string[] = [], fn: Function, once?: boolean)
    on(type: string, fn: Function, once?: boolean): Events['target']
    once(type: string, fn: Function)
    off(type: string, fn: Function): Events['target']
    emit(type: string, ...args: unknown): Events['target']
    clear(type: string)
    clearAll(): void
}
function getEvents(obj: object): Events

class BaseController {}
class AlertError extends BaseController {}

class BaseClass {
    constructor(options: object)
    setLogger()
    getLogger()
    setOptions()
    get events(): Events
    get alert(): AlertError
}

class Player implements GoldPlayOptions extends BaseClass {
    /** The url of the video to play */
    public sourceURL: string
    /** The url of the video to play */
    public source?: string
    /** The default value of playing rate */
    public defaultRate?: object
    /** The type of the video, such as HLS */
    public type: string
    /** The rate list of the player */
    public rateList?: GoldPlayRateList
    /** process the url of video source  */
    public processURL?: Function
    /** The maximum value of the buffer, its default value is 5000(ms) */
    public maxBufferLength?: number
    /** If auto play after initializing the Player */
    public autoPlay?: boolean
    /** The path of decoder */
    public libPath: string
    /** If pre load video before playing */
    public preload?: boolean
    /** Start time to play the video */
    public startTime?: number
    /** Playback speed */
    public playbackRate?: string
    /** The height of the control bar */
    public controlBarHeight?: number
    /** The alert info when error happens */
    public alertError?: AlertError
    /** set User's web worker */
    public httpWorker?: Worker
    /** To handle operations after playlist is loaded */
    public afterLoadPlaylist?: Function
    /** init events */
    public events: Events

    constructor(el: Element, public options: GoldPlayOptions)
    play()
    pause()
    onReady()
    changeSpeed()
    changeRate()
    onWait()
    onPlay()
    destroy(): void
}

declare class GoldPlay extends Player {
    constructor(el: Element, public options: GoldPlayOptions)
}

interface GoldPlayOptions {
    /** The url of the video to play */
    public sourceURL: string
    /** The url of the video to play */
    public source?: string
    /** The default value of playing rate */
    public defaultRate?: object
    /** The type of the video, such as HLS */
    public type: string
    /** The rate list of the player */
    public rateList?: GoldPlayRateList
    /** process the url of video source  */
    public processURL?: Function
    /** The maximum value of the buffer, its default value is 5000(ms) */
    public maxBufferLength?: number
    /** If auto play after initializing the Player */
    public autoPlay?: boolean
    /** The path of decoder */
    public libPath: string
    /** If pre load video before playing */
    public preload?: boolean
    /** Start time to play the video */
    public startTime?: number
    /** Playback speed */
    public playbackRate?: string
    /** The height of the control bar */
    public controlBarHeight?: number
    /** The alert info when error happens */
    public alertError?: AlertError
    /** set User's web worker */
    public httpWorker?: Worker
    /** To handle operations after playlist is loaded */
    public afterLoadPlaylist?: Function
}

interface GoldPlayRateList {
    url: string
    id: number
    name: string
    value: string
}

class BaseController {

}

class AlertError extends BaseController {
    component = null
    constructor(options: object)
    confirm()
    show(msg: string = '')
    hide()
}

