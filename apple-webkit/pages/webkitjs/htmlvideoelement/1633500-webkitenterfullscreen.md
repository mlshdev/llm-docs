> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/htmlvideoelement/1633500-webkitenterfullscreen](https://developer.apple.com/documentation/webkitjs/htmlvideoelement/1633500-webkitenterfullscreen)

# webkitEnterFullscreen

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 5.0+ · Safari Mobile 4.2+

Enters fullscreen mode.

## Declaration

```
void webkitEnterFullscreen();
```

<a id="discussion"></a>

## Discussion

This method throws an exception if the element is not allowed to enter fullscreen—that is, if [webkitSupportsFullscreen](1628805-webkitsupportsfullscreen.md) is `false`.

## See Also

### Displaying Video Fullscreen

- [webkitDisplayingFullscreen](1630493-webkitdisplayingfullscreen.md): A Boolean value indicating whether the video is displaying in fullscreen mode.
- [webkitExitFullscreen](1629468-webkitexitfullscreen.md): Exits fullscreen mode.
- [webkitSupportsFullscreen](1628805-webkitsupportsfullscreen.md): A Boolean value indicating whether the video can be played in fullscreen mode.
- [webkitWirelessVideoPlaybackDisabled](1630084-webkitwirelessvideoplaybackdisab.md): A Boolean value indicating whether wireless video playback is disabled.
- [webkitEnterFullScreen](1630649-webkitenterfullscreen.md): Use [webkitEnterFullscreen](1633500-webkitenterfullscreen.md).
- [webkitExitFullScreen](1628991-webkitexitfullscreen.md): Use [webkitExitFullscreen](1629468-webkitexitfullscreen.md).
