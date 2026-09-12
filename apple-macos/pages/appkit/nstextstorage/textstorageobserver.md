> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextstorage/textstorageobserver](https://developer.apple.com/documentation/appkit/nstextstorage/textstorageobserver)

# textStorageObserver (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The observer for the text storage object.

## Declaration

```swift
weak var textStorageObserver: (any NSTextStorageObserving)? { get set }
```

## See Also

### Accessing the storage controller

- [NSTextStorageObserving](../nstextstorageobserving.md): Optional methods that delegates implement to handle editing and transaction processing.

# textStorageObserver (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The observer for the text storage object.

## Declaration

```objectivec
@property (weak, nullable) id<NSTextStorageObserving> textStorageObserver;
```

## See Also

### Accessing the storage controller

- [NSTextStorageObserving](../nstextstorageobserving.md): Optional methods that delegates implement to handle editing and transaction processing.
