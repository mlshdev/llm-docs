> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlooper/itemordering](https://developer.apple.com/documentation/avfoundation/avplayerlooper/itemordering)

# AVPlayerLooper.ItemOrdering (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Constants that define the ordering of items in a player looper.

## Declaration

```swift
enum ItemOrdering
```

## Topics

### Ordering

- [AVPlayerLooper.ItemOrdering.loopingItemsPrecedeExistingItems](itemordering/loopingitemsprecedeexistingitems.md): Indicates to insert replica items before any existing items in the specified player’s queue.
- [AVPlayerLooper.ItemOrdering.loopingItemsFollowExistingItems](itemordering/loopingitemsfollowexistingitems.md): Indicates to insert replica items after any existing items in the specified player’s queue.

### Initializers

- [init(rawValue:)](itemordering/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AVPlayerLooperItemOrdering (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Constants that define the ordering of items in a player looper.

## Declaration

```objectivec
enum AVPlayerLooperItemOrdering : NSInteger;
```

## Topics

### Ordering

- [AVPlayerLooperItemOrderingLoopingItemsPrecedeExistingItems](itemordering/loopingitemsprecedeexistingitems.md): Indicates to insert replica items before any existing items in the specified player’s queue.
- [AVPlayerLooperItemOrderingLoopingItemsFollowExistingItems](itemordering/loopingitemsfollowexistingitems.md): Indicates to insert replica items after any existing items in the specified player’s queue.
