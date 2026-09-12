> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/remove(_:)-29iuz](https://developer.apple.com/documentation/avfoundation/avplayeritem/remove(_:)-29iuz)

# remove(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

Removes the specified media data collector from the player item’s collection of media collectors.

## Declaration

```swift
nonisolated func remove(_ collector: AVPlayerItemMediaDataCollector)
```

## Parameters

- `collector`: The instance of [AVPlayerItemMediaDataCollector](../avplayeritemmediadatacollector.md) to remove.

## See Also

### Managing player item data collectors

- [mediaDataCollectors](mediadatacollectors.md): The collection of associated media data collectors.
- [add(\_:)](add%28__%29-9l3to.md): Adds the specified media data collector to the player item’s collection of media collectors.

# removeMediaDataCollector: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

Removes the specified media data collector from the player item’s collection of media collectors.

## Declaration

```objectivec
- (void) removeMediaDataCollector:(AVPlayerItemMediaDataCollector *) collector;
```

## Parameters

- `collector`: The instance of [AVPlayerItemMediaDataCollector](../avplayeritemmediadatacollector.md) to remove.

## See Also

### Managing player item data collectors

- [mediaDataCollectors](mediadatacollectors.md): The collection of associated media data collectors.
- [addMediaDataCollector:](add%28__%29-9l3to.md): Adds the specified media data collector to the player item’s collection of media collectors.
