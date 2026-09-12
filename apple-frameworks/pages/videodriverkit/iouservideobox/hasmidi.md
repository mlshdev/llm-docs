> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideobox/hasmidi](https://developer.apple.com/documentation/videodriverkit/iouservideobox/hasmidi)

# HasMIDI

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

A Boolean value indicating if box has MIDI capabilities.

## Declaration

```objectivec
bool HasMIDI();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Determining media support

- [SetHasAudio](sethasaudio.md): Sets the value indicating the box’s audio support.
- [HasAudio](hasaudio.md): A Boolean value indicating if box has audio capabilities.
- [SetHasVideo](sethasvideo.md): Sets the value indicating the box’s video support.
- [HasVideo](hasvideo.md): A Boolean value indicating if box has video capabilities.
- [SetHasMIDI](sethasmidi.md): Sets the value indicating the box’s MIDI support
