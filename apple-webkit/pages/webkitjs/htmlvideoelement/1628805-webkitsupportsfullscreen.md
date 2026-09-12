> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/htmlvideoelement/1628805-webkitsupportsfullscreen](https://developer.apple.com/documentation/webkitjs/htmlvideoelement/1628805-webkitsupportsfullscreen)

# webkitSupportsFullscreen

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 5.0+ · Safari Mobile 4.0+

A Boolean value indicating whether the video can be played in fullscreen mode.

## Declaration

```
readonly attribute boolean webkitSupportsFullscreen;
```

<a id="discussion"></a>

## Discussion

`true` if the device supports fullscreen mode; otherwise, `false`. This property is also `false` if the meta data is loaded or the `loadedmetadata` event has not fired, and if the files are audio-only.

## See Also

### Displaying Video Fullscreen

- [webkitDisplayingFullscreen](1630493-webkitdisplayingfullscreen.md): A Boolean value indicating whether the video is displaying in fullscreen mode.
- [webkitEnterFullscreen](1633500-webkitenterfullscreen.md): Enters fullscreen mode.
- [webkitExitFullscreen](1629468-webkitexitfullscreen.md): Exits fullscreen mode.
- [webkitWirelessVideoPlaybackDisabled](1630084-webkitwirelessvideoplaybackdisab.md): A Boolean value indicating whether wireless video playback is disabled.
- [webkitEnterFullScreen](1630649-webkitenterfullscreen.md): Use [webkitEnterFullscreen](1633500-webkitenterfullscreen.md).
- [webkitExitFullScreen](1628991-webkitexitfullscreen.md): Use [webkitExitFullscreen](1629468-webkitexitfullscreen.md).
