> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplaybackcoordinator/expecteditemtime(athosttime:)](https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/expecteditemtime(athosttime:))

# expectedItemTime(atHostTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a time in the current item’s timeline that the coordinator expects to play at the specified host time.

## Declaration

```swift
func expectedItemTime(atHostTime hostClockTime: CMTime) -> CMTime
```

## Parameters

- `hostClockTime`: The host time to return a player item time for.

<a id="return-value"></a>

## Return Value

A time in the current item’s timeline.

## See Also

### Suspending state coordination

- [beginSuspension(for:)](beginsuspension%28for_%29.md): Tells the coordinator to stop sending playback commands temporarily when the playback object disconnects from the group activity.
- [AVCoordinatedPlaybackSuspension](../avcoordinatedplaybacksuspension.md): An object that represents a temporary suspension of coordinated playback.

# expectedItemTimeAtHostTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a time in the current item’s timeline that the coordinator expects to play at the specified host time.

## Declaration

```objectivec
- (CMTime) expectedItemTimeAtHostTime:(CMTime) hostClockTime;
```

## Parameters

- `hostClockTime`: The host time to return a player item time for.

<a id="return-value"></a>

## Return Value

A time in the current item’s timeline.

## See Also

### Suspending state coordination

- [beginSuspensionForReason:](beginsuspension%28for_%29.md): Tells the coordinator to stop sending playback commands temporarily when the playback object disconnects from the group activity.
- [AVCoordinatedPlaybackSuspension](../avcoordinatedplaybacksuspension.md): An object that represents a temporary suspension of coordinated playback.
