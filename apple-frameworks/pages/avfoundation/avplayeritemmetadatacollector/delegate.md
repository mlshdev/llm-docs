> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemmetadatacollector/delegate](https://developer.apple.com/documentation/avfoundation/avplayeritemmetadatacollector/delegate)

# delegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

Accesses the metadata collector’s delegate object.

## Declaration

```swift
weak var delegate: (any AVPlayerItemMetadataCollectorPushDelegate)? { get }
```

<a id="Discussion"></a>

## Discussion

The delegate is held using a zeroing-weak reference, so this property will have a value of `nil` after a delegate that was previously set has been deallocated.

This property is not key-value observable.

## See Also

### Accessing the delegate and callback queue

- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate will be called.
- [AVPlayerItemMetadataCollectorPushDelegate](../avplayeritemmetadatacollectorpushdelegate.md): A protocol you implement to receive metadata callbacks from a player item metadata collector.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the delegate’s methods are called.

# delegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

Accesses the metadata collector’s delegate object.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<AVPlayerItemMetadataCollectorPushDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate is held using a zeroing-weak reference, so this property will have a value of `nil` after a delegate that was previously set has been deallocated.

This property is not key-value observable.

## See Also

### Accessing the delegate and callback queue

- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate will be called.
- [AVPlayerItemMetadataCollectorPushDelegate](../avplayeritemmetadatacollectorpushdelegate.md): A protocol you implement to receive metadata callbacks from a player item metadata collector.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the delegate’s methods are called.
