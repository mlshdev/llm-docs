> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/status-swift.property](https://developer.apple.com/documentation/avfoundation/avplayeritem/status-swift.property)

# status (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The status of the player item.

## Declaration

```swift
nonisolated var status: AVPlayerItem.Status { get }
```

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)
- [Observing playback state in SwiftUI](../observing-playback-state-in-swiftui.md)

<a id="Discussion"></a>

## Discussion

When a player item is created, its [status](status-swift.property.md) is [AVPlayerItem.Status.unknown](status-swift.enum/unknown.md), meaning its media hasn’t been loaded and has not yet been enqueued for playback. Associating a player item with an [AVPlayer](../avplayer.md) immediately begins enqueuing the item’s media and preparing it for playback. When the player item’s media has been loaded and is ready for use, its status will change to [AVPlayerItem.Status.readyToPlay](status-swift.enum/readytoplay.md). You can observe this change using key-value observing.

For possible values, see [AVPlayerItem.Status](status-swift.enum.md).

## See Also

### Determining readiness

- [AVPlayerItem.Status](status-swift.enum.md): The statuses for a player item.
- [error](error.md): The error that caused the player item to fail.

# status (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The status of the player item.

## Declaration

```objectivec
@property (readonly) AVPlayerItemStatus status;
```

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)
- [Observing playback state in SwiftUI](../observing-playback-state-in-swiftui.md)

<a id="Discussion"></a>

## Discussion

When a player item is created, its [status](status-swift.property.md) is [AVPlayerItemStatusUnknown](status-swift.enum/unknown.md), meaning its media hasn’t been loaded and has not yet been enqueued for playback. Associating a player item with an [AVPlayer](../avplayer.md) immediately begins enqueuing the item’s media and preparing it for playback. When the player item’s media has been loaded and is ready for use, its status will change to [AVPlayerItemStatusReadyToPlay](status-swift.enum/readytoplay.md). You can observe this change using key-value observing.

For possible values, see [AVPlayerItemStatus](status-swift.enum.md).

## See Also

### Determining readiness

- [AVPlayerItemStatus](status-swift.enum.md): The statuses for a player item.
- [error](error.md): The error that caused the player item to fail.
