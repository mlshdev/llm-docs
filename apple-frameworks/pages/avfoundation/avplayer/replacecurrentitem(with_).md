> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayer/replacecurrentitem(with:)

# replaceCurrentItem(with:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces the current item with a new item.

## Declaration

```swift
nonisolated func replaceCurrentItem(with item: AVPlayerItem?)
```

## Parameters

- `item`: The new item for the player object to play.

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)

<a id="Discussion"></a>

## Discussion

The player item replacement occurs immediately and the item becomes the player’s [currentItem](currentitem.md). Calling this method with the player’s current player item has no effect.

## See Also

### Managing the player item

- [currentItem](currentitem.md): The item for which the player is currently controlling playback.

# replaceCurrentItemWithPlayerItem: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces the current item with a new item.

## Declaration

```objectivec
- (void) replaceCurrentItemWithPlayerItem:(AVPlayerItem *) item;
```

## Parameters

- `item`: The new item for the player object to play.

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)

<a id="Discussion"></a>

## Discussion

The player item replacement occurs immediately and the item becomes the player’s [currentItem](currentitem.md). Calling this method with the player’s current player item has no effect.

## See Also

### Managing the player item

- [currentItem](currentitem.md): The item for which the player is currently controlling playback.
