> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/htmlmediaelement/1631980-controls](https://developer.apple.com/documentation/webkitjs/htmlmediaelement/1631980-controls)

# controls

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A Boolean value that determines whether the playback controls appear.

## Declaration

```
attribute boolean controls;
```

<a id="discussion"></a>

## Discussion

On the desktop, if `false` (the default), the playback controls do not appear; otherwise, they do appear. On iOS, a native application is used to playback video in full screen; therefore, this property is ignored.

## See Also

### Getting and Setting Properties

- [autoplay](1629662-autoplay.md): A Boolean value that determines whether the media resource plays automatically when available.
- [currentTime](1631307-currenttime.md): The current playback position in seconds.
- [defaultPlaybackRate](1631650-defaultplaybackrate.md): The default rate used to play the media resource.
- [loop](1633760-loop.md): A Boolean value that determines whether the playback should loop.
- [muted](1630580-muted.md): A Boolean value that determines whether the audio content should be muted.
- [playbackRate](1629746-playbackrate.md): The speed that the media resource is playing.
- [preload](1633059-preload.md): A DOMString value that gives a hint to the browser how much of the media should be fetched when the webpage is loaded.
- [src](1629312-src.md): The URI address of the media resource to play.
- [volume](1631549-volume.md): The volume of the audio portion of the media element.
