> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplaybackcoordinator/beginsuspension(for:)](https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/beginsuspension(for:))

# beginSuspension(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tells the coordinator to stop sending playback commands temporarily when the playback object disconnects from the group activity.

## Declaration

```swift
func beginSuspension(for suspensionReason: AVCoordinatedPlaybackSuspension.Reason) -> AVCoordinatedPlaybackSuspension
```

## Parameters

- `suspensionReason`: The reason for the suspension. Indicate a system-defined value or a custom suspension reason.

<a id="return-value"></a>

## Return Value

A suspension object.

<a id="Discussion"></a>

## Discussion

End a suspension by calling its [end()](../avcoordinatedplaybacksuspension/end%28%29.md) or [end(proposingNewTime:)](../avcoordinatedplaybacksuspension/end%28proposingnewtime_%29.md) method.

## See Also

### Suspending state coordination

- [AVCoordinatedPlaybackSuspension](../avcoordinatedplaybacksuspension.md): An object that represents a temporary suspension of coordinated playback.
- [expectedItemTime(atHostTime:)](expecteditemtime%28athosttime_%29.md): Returns a time in the current item’s timeline that the coordinator expects to play at the specified host time.

# beginSuspensionForReason: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tells the coordinator to stop sending playback commands temporarily when the playback object disconnects from the group activity.

## Declaration

```objectivec
- (AVCoordinatedPlaybackSuspension *) beginSuspensionForReason:(AVCoordinatedPlaybackSuspensionReason) suspensionReason;
```

## Parameters

- `suspensionReason`: The reason for the suspension. Indicate a system-defined value or a custom suspension reason.

<a id="return-value"></a>

## Return Value

A suspension object.

<a id="Discussion"></a>

## Discussion

End a suspension by calling its [end](../avcoordinatedplaybacksuspension/end%28%29.md) or [endProposingNewTime:](../avcoordinatedplaybacksuspension/end%28proposingnewtime_%29.md) method.

## See Also

### Suspending state coordination

- [AVCoordinatedPlaybackSuspension](../avcoordinatedplaybacksuspension.md): An object that represents a temporary suspension of coordinated playback.
- [expectedItemTimeAtHostTime:](expecteditemtime%28athosttime_%29.md): Returns a time in the current item’s timeline that the coordinator expects to play at the specified host time.
