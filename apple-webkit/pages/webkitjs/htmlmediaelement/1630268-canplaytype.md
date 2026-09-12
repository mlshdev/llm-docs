> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/htmlmediaelement/1630268-canplaytype](https://developer.apple.com/documentation/webkitjs/htmlmediaelement/1630268-canplaytype)

# canPlayType

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 4.0+ · Safari Mobile 3.0+

Returns whether the media element supports the specified MIME type.

## Declaration

```
DOMString canPlayType(
    DOMString type
);
```

<a id="return_value"></a>

## Return Value

The possible string values are: “no”, “probably” and “maybe”.

## See Also

### Controlling Playback

- [load](1629903-load.md): Starts loading the media resource.
- [pause](1633571-pause.md): Pauses the media playback if in progress.
- [play](1630114-play.md): Begins playing the media resource.
