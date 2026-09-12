> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextstorage/textstorageobserver](https://developer.apple.com/documentation/uikit/nstextstorage/textstorageobserver)

# textStorageObserver (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The observer for the text storage object.

## Declaration

```swift
weak var textStorageObserver: (any NSTextStorageObserving)? { get set }
```

## See Also

### Accessing the storage controller

- [NSTextStorageObserving](../nstextstorageobserving.md): Optional methods that delegates implement to handle editing and transaction processing.

# textStorageObserver (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The observer for the text storage object.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<NSTextStorageObserving> textStorageObserver;
```

## See Also

### Accessing the storage controller

- [NSTextStorageObserving](../nstextstorageobserving.md): Optional methods that delegates implement to handle editing and transaction processing.
