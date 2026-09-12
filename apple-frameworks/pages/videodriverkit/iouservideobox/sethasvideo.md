> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideobox/sethasvideo](https://developer.apple.com/documentation/videodriverkit/iouservideobox/sethasvideo)

# SetHasVideo

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the value indicating the box’s video support.

## Declaration

```objectivec
kern_return_t SetHasVideo(bool in_has_video);
```

<a id="discussion"></a>

## Discussion

The object sends a notification to the host to update the object state on success. The object’s work queue synchronizes access to the value.

## See Also

### Determining media support

- [SetHasAudio](sethasaudio.md): Sets the value indicating the box’s audio support.
- [HasAudio](hasaudio.md): A Boolean value indicating if box has audio capabilities.
- [HasVideo](hasvideo.md): A Boolean value indicating if box has video capabilities.
- [SetHasMIDI](sethasmidi.md): Sets the value indicating the box’s MIDI support
- [HasMIDI](hasmidi.md): A Boolean value indicating if box has MIDI capabilities.
