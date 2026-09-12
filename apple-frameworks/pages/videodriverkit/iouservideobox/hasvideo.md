> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideobox/hasvideo](https://developer.apple.com/documentation/videodriverkit/iouservideobox/hasvideo)

# HasVideo

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

A Boolean value indicating if box has video capabilities.

## Declaration

```objectivec
bool HasVideo();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Determining media support

- [SetHasAudio](sethasaudio.md): Sets the value indicating the box’s audio support.
- [HasAudio](hasaudio.md): A Boolean value indicating if box has audio capabilities.
- [SetHasVideo](sethasvideo.md): Sets the value indicating the box’s video support.
- [SetHasMIDI](sethasmidi.md): Sets the value indicating the box’s MIDI support
- [HasMIDI](hasmidi.md): A Boolean value indicating if box has MIDI capabilities.
