> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemlegibleoutput/advanceintervalfordelegateinvocation](https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/advanceintervalfordelegateinvocation)

# advanceIntervalForDelegateInvocation (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The time interval, in seconds, that a player item legible output object messages its delegate earlier than normal.

## Declaration

```swift
var advanceIntervalForDelegateInvocation: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

If possible, an `AVPlayerItemLegibleOutput` instance messages its delegate `advanceIntervalForDelegateInvocation` seconds earlier than it otherwise would.

If the value provided is large, the delegate methods are invoked as soon as possible.

## See Also

### Configuring the delegate

- [delegate](delegate.md): The delegate of the output class.
- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the receiver’s delegate and a dispatch queue on which the delegate is called.
- [AVPlayerItemLegibleOutputPushDelegate](../avplayeritemlegibleoutputpushdelegate.md): Methods you can implement to provide alternative attributed-string output.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the delegate is called.

# advanceIntervalForDelegateInvocation (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The time interval, in seconds, that a player item legible output object messages its delegate earlier than normal.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSTimeInterval advanceIntervalForDelegateInvocation;
```

<a id="Discussion"></a>

## Discussion

If possible, an `AVPlayerItemLegibleOutput` instance messages its delegate `advanceIntervalForDelegateInvocation` seconds earlier than it otherwise would.

If the value provided is large, the delegate methods are invoked as soon as possible.

## See Also

### Configuring the delegate

- [delegate](delegate.md): The delegate of the output class.
- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the receiver’s delegate and a dispatch queue on which the delegate is called.
- [AVPlayerItemLegibleOutputPushDelegate](../avplayeritemlegibleoutputpushdelegate.md): Methods you can implement to provide alternative attributed-string output.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the delegate is called.
