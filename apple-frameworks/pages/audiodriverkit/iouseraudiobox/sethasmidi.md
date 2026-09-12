> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiobox/sethasmidi](https://developer.apple.com/documentation/audiodriverkit/iouseraudiobox/sethasmidi)

# SetHasMIDI

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets a Boolean value that indicates the box’s MIDI support.

## Declaration

```objectivec
kern_return_t SetHasMIDI(bool in_has_midi);
```

## Parameters

- `in_has_midi`: `true` if the box supports MIDI; otherwise, `false`.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If successful, changing the MIDI support value sends a notification to the host to update the object state.

This method synchronizes by using the work queue created by the object.

## See Also

### Determining Media Support

- [SetHasAudio](sethasaudio.md): Sets a Boolean value that indicates the box’s audio support.
- [HasAudio](hasaudio.md): Returns a Boolean value that indicates the box’s audio support.
- [SetHasVideo](sethasvideo.md): Sets a Boolean value that indicates the box’s video support.
- [HasVideo](hasvideo.md): Returns a Boolean value that indicates the box’s video support.
- [HasMIDI](hasmidi.md): Returns a Boolean value that indicates the box’s MIDI support.
