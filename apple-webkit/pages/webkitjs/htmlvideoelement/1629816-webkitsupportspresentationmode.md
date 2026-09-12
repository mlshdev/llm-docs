> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/htmlvideoelement/1629816-webkitsupportspresentationmode](https://developer.apple.com/documentation/webkitjs/htmlvideoelement/1629816-webkitsupportspresentationmode)

# webkitSupportsPresentationMode

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A Boolean value indicating whether the video can be played in presentation mode.

## Declaration

```
boolean webkitSupportsPresentationMode(
    VideoPresentationMode mode
);
```

<a id="discussion"></a>

## Discussion

`true` if the device supports presentation mode; otherwise, `false`. This property is also `false` if the meta data is loaded or the `loadedmetadata` event has not fired, and if the files are audio-only.

## See Also

### Displaying Presentation Mode

- [webkitSetPresentationMode](1631224-webkitsetpresentationmode.md): Sets the presentation mode for video playback.
- [webkitPresentationMode](1631913-webkitpresentationmode.md): A property indicating the presentation mode.
- [playsInline](2528111-playsinline.md): A Boolean value indicating whether the video plays inline.
