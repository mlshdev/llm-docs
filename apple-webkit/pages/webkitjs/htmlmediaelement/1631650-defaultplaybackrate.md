> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/htmlmediaelement/1631650-defaultplaybackrate](https://developer.apple.com/documentation/webkitjs/htmlmediaelement/1631650-defaultplaybackrate)

# defaultPlaybackRate

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 3.1+ · Safari Mobile 3.0+

The default rate used to play the media resource.

## Declaration

```
attribute unrestricted double defaultPlaybackRate;
```

<a id="discussion"></a>

## Discussion

The value of this property is a multiple of the media resource’s intrinsic speed. The default value is `1.0`.

## See Also

### Getting and Setting Properties

- [autoplay](1629662-autoplay.md): A Boolean value that determines whether the media resource plays automatically when available.
- [controls](1631980-controls.md): A Boolean value that determines whether the playback controls appear.
- [currentTime](1631307-currenttime.md): The current playback position in seconds.
- [loop](1633760-loop.md): A Boolean value that determines whether the playback should loop.
- [muted](1630580-muted.md): A Boolean value that determines whether the audio content should be muted.
- [playbackRate](1629746-playbackrate.md): The speed that the media resource is playing.
- [preload](1633059-preload.md): A DOMString value that gives a hint to the browser how much of the media should be fetched when the webpage is loaded.
- [src](1629312-src.md): The URI address of the media resource to play.
- [volume](1631549-volume.md): The volume of the audio portion of the media element.
