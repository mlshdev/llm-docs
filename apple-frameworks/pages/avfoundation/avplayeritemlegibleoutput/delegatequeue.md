> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemlegibleoutput/delegatequeue](https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/delegatequeue)

# delegateQueue (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The dispatch queue on which the delegate is called.

## Declaration

```swift
var delegateQueue: dispatch_queue_t? { get }
```

<a id="Discussion"></a>

## Discussion

This property does not support key-value observing.

## See Also

### Configuring the delegate

- [delegate](delegate.md): The delegate of the output class.
- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the receiver’s delegate and a dispatch queue on which the delegate is called.
- [AVPlayerItemLegibleOutputPushDelegate](../avplayeritemlegibleoutputpushdelegate.md): Methods you can implement to provide alternative attributed-string output.
- [advanceIntervalForDelegateInvocation](advanceintervalfordelegateinvocation.md): The time interval, in seconds, that a player item legible output object messages its delegate earlier than normal.

# delegateQueue (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The dispatch queue on which the delegate is called.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) dispatch_queue_t delegateQueue;
```

<a id="Discussion"></a>

## Discussion

This property does not support key-value observing.

## See Also

### Configuring the delegate

- [delegate](delegate.md): The delegate of the output class.
- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the receiver’s delegate and a dispatch queue on which the delegate is called.
- [AVPlayerItemLegibleOutputPushDelegate](../avplayeritemlegibleoutputpushdelegate.md): Methods you can implement to provide alternative attributed-string output.
- [advanceIntervalForDelegateInvocation](advanceintervalfordelegateinvocation.md): The time interval, in seconds, that a player item legible output object messages its delegate earlier than normal.
