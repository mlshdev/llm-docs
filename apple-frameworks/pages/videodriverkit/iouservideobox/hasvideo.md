> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideobox/hasvideo

# HasVideo

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [SetHasAudio](sethasaudio.md): Beta. Sets the value indicating the box’s audio support.
- [HasAudio](hasaudio.md): Beta. A Boolean value indicating if box has audio capabilities.
- [SetHasVideo](sethasvideo.md): Beta. Sets the value indicating the box’s video support.
- [SetHasMIDI](sethasmidi.md): Beta. Sets the value indicating the box’s MIDI support
- [HasMIDI](hasmidi.md): Beta. A Boolean value indicating if box has MIDI capabilities.
