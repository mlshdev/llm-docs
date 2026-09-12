> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/currentitem](https://developer.apple.com/documentation/avfoundation/avplayer/currentitem)

# currentItem (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The item for which the player is currently controlling playback.

## Declaration

```swift
nonisolated var currentItem: AVPlayerItem? { get }
```

## Mentioned In

- [Observing playback state in SwiftUI](../observing-playback-state-in-swiftui.md)

## See Also

### Managing the player item

- [replaceCurrentItem(with:)](replacecurrentitem%28with_%29.md): Replaces the current item with a new item.

# currentItem (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The item for which the player is currently controlling playback.

## Declaration

```objectivec
@property (readonly, nullable) AVPlayerItem * currentItem;
```

## Mentioned In

- [Observing playback state in SwiftUI](../observing-playback-state-in-swiftui.md)

## See Also

### Managing the player item

- [replaceCurrentItemWithPlayerItem:](replacecurrentitem%28with_%29.md): Replaces the current item with a new item.
