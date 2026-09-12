> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemlegibleoutput/setdelegate(_:queue:)](https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/setdelegate(_:queue:))

# setDelegate(\_:queue:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Sets the receiver’s delegate and a dispatch queue on which the delegate is called.

## Declaration

```swift
func setDelegate(_ delegate: (any AVPlayerItemLegibleOutputPushDelegate)?, queue delegateQueue: dispatch_queue_t?)
```

## Parameters

- `delegate`: An object conforming to the [AVPlayerItemLegibleOutputPushDelegate](../avplayeritemlegibleoutputpushdelegate.md) protocol.
- `delegateQueue`: A dispatch queue on which all delegate methods will be called.

<a id="Discussion"></a>

## Discussion

Because the delegate is held using a zeroing-weak reference, it is safe to deallocate the delegate while the receiver still has a reference to it.

## See Also

### Configuring the delegate

- [delegate](delegate.md): The delegate of the output class.
- [AVPlayerItemLegibleOutputPushDelegate](../avplayeritemlegibleoutputpushdelegate.md): Methods you can implement to provide alternative attributed-string output.
- [advanceIntervalForDelegateInvocation](advanceintervalfordelegateinvocation.md): The time interval, in seconds, that a player item legible output object messages its delegate earlier than normal.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the delegate is called.

# setDelegate:queue: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Sets the receiver’s delegate and a dispatch queue on which the delegate is called.

## Declaration

```objectivec
- (void) setDelegate:(id<AVPlayerItemLegibleOutputPushDelegate>) delegate queue:(dispatch_queue_t) delegateQueue;
```

## Parameters

- `delegate`: An object conforming to the [AVPlayerItemLegibleOutputPushDelegate](../avplayeritemlegibleoutputpushdelegate.md) protocol.
- `delegateQueue`: A dispatch queue on which all delegate methods will be called.

<a id="Discussion"></a>

## Discussion

Because the delegate is held using a zeroing-weak reference, it is safe to deallocate the delegate while the receiver still has a reference to it.

## See Also

### Configuring the delegate

- [delegate](delegate.md): The delegate of the output class.
- [AVPlayerItemLegibleOutputPushDelegate](../avplayeritemlegibleoutputpushdelegate.md): Methods you can implement to provide alternative attributed-string output.
- [advanceIntervalForDelegateInvocation](advanceintervalfordelegateinvocation.md): The time interval, in seconds, that a player item legible output object messages its delegate earlier than normal.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the delegate is called.
