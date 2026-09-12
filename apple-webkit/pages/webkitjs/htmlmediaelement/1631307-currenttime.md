> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/htmlmediaelement/1631307-currenttime](https://developer.apple.com/documentation/webkitjs/htmlmediaelement/1631307-currenttime)

# currentTime

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 3.1+ · Safari Mobile 3.0+

The current playback position in seconds.

## Declaration

```
attribute unrestricted double currentTime;
```

<a id="discussion"></a>

## Discussion

When you set this property, the media play head moves to the new location. An `INVALID_STATE_ERR` DOM exception is raised if there is no selected media resource when you set this property. An `INDEX_SIZE_ERR` DOM exception is raised if the specified time is not within the start and end times.

## See Also

### Getting and Setting Properties

- [autoplay](1629662-autoplay.md): A Boolean value that determines whether the media resource plays automatically when available.
- [controls](1631980-controls.md): A Boolean value that determines whether the playback controls appear.
- [defaultPlaybackRate](1631650-defaultplaybackrate.md): The default rate used to play the media resource.
- [loop](1633760-loop.md): A Boolean value that determines whether the playback should loop.
- [muted](1630580-muted.md): A Boolean value that determines whether the audio content should be muted.
- [playbackRate](1629746-playbackrate.md): The speed that the media resource is playing.
- [preload](1633059-preload.md): A DOMString value that gives a hint to the browser how much of the media should be fetched when the webpage is loaded.
- [src](1629312-src.md): The URI address of the media resource to play.
- [volume](1631549-volume.md): The volume of the audio portion of the media element.
