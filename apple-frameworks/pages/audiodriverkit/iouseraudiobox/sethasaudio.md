> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiobox/sethasaudio](https://developer.apple.com/documentation/audiodriverkit/iouseraudiobox/sethasaudio)

# SetHasAudio

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets a Boolean value that indicates the box’s audio support.

## Declaration

```objectivec
kern_return_t SetHasAudio(bool in_has_audio);
```

## Parameters

- `in_has_audio`: `true` if the box supports audio; otherwise, `false`.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If successful, changing the audio support value sends a notification to the host to update the object state.

This method synchronizes by using the work queue created by the object.

## See Also

### Determining Media Support

- [HasAudio](hasaudio.md): Returns a Boolean value that indicates the box’s audio support.
- [SetHasVideo](sethasvideo.md): Sets a Boolean value that indicates the box’s video support.
- [HasVideo](hasvideo.md): Returns a Boolean value that indicates the box’s video support.
- [SetHasMIDI](sethasmidi.md): Sets a Boolean value that indicates the box’s MIDI support.
- [HasMIDI](hasmidi.md): Returns a Boolean value that indicates the box’s MIDI support.
