> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemmetadatacollector/setdelegate(_:queue:)](https://developer.apple.com/documentation/avfoundation/avplayeritemmetadatacollector/setdelegate(_:queue:))

# setDelegate(\_:queue:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

Sets the delegate and a dispatch queue on which the delegate will be called.

## Declaration

```swift
func setDelegate(_ delegate: (any AVPlayerItemMetadataCollectorPushDelegate)?, queue delegateQueue: dispatch_queue_t?)
```

## Parameters

- `delegate`: An object conforming to [AVPlayerItemMetadataCollectorPushDelegate](../avplayeritemmetadatacollectorpushdelegate.md) protocol.
- `delegateQueue`: A dispatch queue on which all delegate methods will be called.

## See Also

### Accessing the delegate and callback queue

- [delegate](delegate.md): Accesses the metadata collector’s delegate object.
- [AVPlayerItemMetadataCollectorPushDelegate](../avplayeritemmetadatacollectorpushdelegate.md): A protocol you implement to receive metadata callbacks from a player item metadata collector.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the delegate’s methods are called.

# setDelegate:queue: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

Sets the delegate and a dispatch queue on which the delegate will be called.

## Declaration

```objectivec
- (void) setDelegate:(id<AVPlayerItemMetadataCollectorPushDelegate>) delegate queue:(dispatch_queue_t) delegateQueue;
```

## Parameters

- `delegate`: An object conforming to [AVPlayerItemMetadataCollectorPushDelegate](../avplayeritemmetadatacollectorpushdelegate.md) protocol.
- `delegateQueue`: A dispatch queue on which all delegate methods will be called.

## See Also

### Accessing the delegate and callback queue

- [delegate](delegate.md): Accesses the metadata collector’s delegate object.
- [AVPlayerItemMetadataCollectorPushDelegate](../avplayeritemmetadatacollectorpushdelegate.md): A protocol you implement to receive metadata callbacks from a player item metadata collector.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the delegate’s methods are called.
