> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemmetadatacollector/delegatequeue](https://developer.apple.com/documentation/avfoundation/avplayeritemmetadatacollector/delegatequeue)

# delegateQueue (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

The dispatch queue on which the delegate’s methods are called.

## Declaration

```swift
var delegateQueue: dispatch_queue_t? { get }
```

<a id="Discussion"></a>

## Discussion

This property is not key-value observable.

## See Also

### Accessing the delegate and callback queue

- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate will be called.
- [delegate](delegate.md): Accesses the metadata collector’s delegate object.
- [AVPlayerItemMetadataCollectorPushDelegate](../avplayeritemmetadatacollectorpushdelegate.md): A protocol you implement to receive metadata callbacks from a player item metadata collector.

# delegateQueue (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

The dispatch queue on which the delegate’s methods are called.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) dispatch_queue_t delegateQueue;
```

<a id="Discussion"></a>

## Discussion

This property is not key-value observable.

## See Also

### Accessing the delegate and callback queue

- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate will be called.
- [delegate](delegate.md): Accesses the metadata collector’s delegate object.
- [AVPlayerItemMetadataCollectorPushDelegate](../avplayeritemmetadatacollectorpushdelegate.md): A protocol you implement to receive metadata callbacks from a player item metadata collector.
