> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueueplayer/init(items:)](https://developer.apple.com/documentation/avfoundation/avqueueplayer/init(items:))

# init(items:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an object that plays a queue of items.

## Declaration

```swift
nonisolated init(items: [AVPlayerItem])
```

## Parameters

- `items`: The array of player items with which to populate the queue.

# initWithItems: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an object that plays a queue of items.

## Declaration

```objectivec
- (instancetype) initWithItems:(NSArray<AVPlayerItem *> *) items;
```

## Parameters

- `items`: The array of player items with which to populate the queue.

## See Also

### Creating a queue player

- [queuePlayerWithItems:](queueplayerwithitems_.md): Returns an object that plays a queue of items.
