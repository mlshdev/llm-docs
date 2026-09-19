> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideobox/sethasaudio

# SetHasAudio

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Sets the value indicating the box’s audio support.

## Declaration

```objectivec
kern_return_t SetHasAudio(bool in_has_audio);
```

## Parameters

- `in_has_audio`: The box’s audio support.

<a id="discussion"></a>

## Discussion

The object sends a notification to the host to update the object state on success. The object’s work queue synchronizes access to the value.

## See Also

### Determining media support

- [HasAudio](hasaudio.md): Beta. A Boolean value indicating if box has audio capabilities.
- [SetHasVideo](sethasvideo.md): Beta. Sets the value indicating the box’s video support.
- [HasVideo](hasvideo.md): Beta. A Boolean value indicating if box has video capabilities.
- [SetHasMIDI](sethasmidi.md): Beta. Sets the value indicating the box’s MIDI support
- [HasMIDI](hasmidi.md): Beta. A Boolean value indicating if box has MIDI capabilities.
