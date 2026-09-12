> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemlegibleoutput/delegate](https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/delegate)

# delegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The delegate of the output class.

## Declaration

```swift
weak var delegate: (any AVPlayerItemLegibleOutputPushDelegate)? { get }
```

<a id="Discussion"></a>

## Discussion

Because the delegate is held using a zeroing-weak reference, this property has a value of `nil` after a delegate that was previously set has been deallocated.

This property does not support key-value observing.

## See Also

### Configuring the delegate

- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the receiver’s delegate and a dispatch queue on which the delegate is called.
- [AVPlayerItemLegibleOutputPushDelegate](../avplayeritemlegibleoutputpushdelegate.md): Methods you can implement to provide alternative attributed-string output.
- [advanceIntervalForDelegateInvocation](advanceintervalfordelegateinvocation.md): The time interval, in seconds, that a player item legible output object messages its delegate earlier than normal.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the delegate is called.

# delegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The delegate of the output class.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<AVPlayerItemLegibleOutputPushDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Because the delegate is held using a zeroing-weak reference, this property has a value of `nil` after a delegate that was previously set has been deallocated.

This property does not support key-value observing.

## See Also

### Configuring the delegate

- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the receiver’s delegate and a dispatch queue on which the delegate is called.
- [AVPlayerItemLegibleOutputPushDelegate](../avplayeritemlegibleoutputpushdelegate.md): Methods you can implement to provide alternative attributed-string output.
- [advanceIntervalForDelegateInvocation](advanceintervalfordelegateinvocation.md): The time interval, in seconds, that a player item legible output object messages its delegate earlier than normal.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the delegate is called.
