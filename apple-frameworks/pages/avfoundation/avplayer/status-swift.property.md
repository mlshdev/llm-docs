> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/status-swift.property](https://developer.apple.com/documentation/avfoundation/avplayer/status-swift.property)

# status (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A value that indicates the readiness of a player object for playback.

## Declaration

```swift
nonisolated var status: AVPlayer.Status { get }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [AVPlayer.Status.failed](status-swift.enum/failed.md), check the value of the player’s [error](error.md) property to determine the nature of the failure. If a player reaches a failed state, you can’t use it for playback, and instead need to create a new instance.

This property is key-value observable.

> **Note**

>  The player’s [status](status-swift.property.md) doesn’t indicate its readiness to play a specific player item. You should instead use the [status](../avplayeritem/status-swift.property.md) property of [AVPlayerItem](../avplayeritem.md) to make that determination.

## See Also

### Determining player readiness

- [AVPlayer.Status](status-swift.enum.md): Status values that indicate whether a player can successfully play media.
- [error](error.md): An error that caused a failure.

# status (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A value that indicates the readiness of a player object for playback.

## Declaration

```objectivec
@property (readonly) AVPlayerStatus status;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [AVPlayerStatusFailed](status-swift.enum/failed.md), check the value of the player’s [error](error.md) property to determine the nature of the failure. If a player reaches a failed state, you can’t use it for playback, and instead need to create a new instance.

This property is key-value observable.

> **Note**

>  The player’s [status](status-swift.property.md) doesn’t indicate its readiness to play a specific player item. You should instead use the [status](../avplayeritem/status-swift.property.md) property of [AVPlayerItem](../avplayeritem.md) to make that determination.

## See Also

### Determining player readiness

- [AVPlayerStatus](status-swift.enum.md): Status values that indicate whether a player can successfully play media.
- [error](error.md): An error that caused a failure.
