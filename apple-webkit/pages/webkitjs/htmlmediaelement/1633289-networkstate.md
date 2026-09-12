> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/htmlmediaelement/1633289-networkstate](https://developer.apple.com/documentation/webkitjs/htmlmediaelement/1633289-networkstate)

# networkState

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 3.1+ · Safari Mobile 3.0+

The state of downloading the media resource. (read-only)

## Declaration

```
readonly attribute unsigned short networkState;
```

<a id="discussion"></a>

## Discussion

Possible values are described in [Network States](network_states.md).

## See Also

### Getting State

- [buffered](1628987-buffered.md): The time ranges of the media resource that have been downloaded. (read-only)
- [currentSrc](1633960-currentsrc.md): The absolute URL of the media resource. (read-only)
- [duration](1630916-duration.md): The length of the media resource in seconds. (read-only)
- [ended](1630452-ended.md): A Boolean value that indicates whether the media played to the end. (read-only)
- [error](1630743-error.md): The last error that occurred for this element. (read-only)
- [paused](1631769-paused.md): A Boolean value that indicates whether the media is paused. (read-only)
- [played](1629079-played.md): The ranges of the media resource that was played. (read-only)
- [readyState](1632439-readystate.md): The ready state of the media resource. (read-only)
- [seekable](1633602-seekable.md): The ranges that can be played in a nonlinear fashion. (read-only)
- [seeking](1634314-seeking.md): A Boolean value that indicates whether the element is seeking. (read-only)
- [startTime](1805533-starttime.md): The earliest possible time in seconds to start playback. (read-only)
