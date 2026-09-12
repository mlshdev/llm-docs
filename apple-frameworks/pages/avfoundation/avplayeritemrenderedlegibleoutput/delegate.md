> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemrenderedlegibleoutput/delegate](https://developer.apple.com/documentation/avfoundation/avplayeritemrenderedlegibleoutput/delegate)

# delegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A delegate object for this output.

## Declaration

```swift
weak var delegate: (any AVPlayerItemRenderedLegibleOutputPushDelegate)? { get }
```

## See Also

### Setting a delegate

- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the delegate object and the queue on which it’s invoked.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the output calls the delegate object.
- [AVPlayerItemRenderedLegibleOutputPushDelegate](../avplayeritemrenderedlegibleoutputpushdelegate.md): A delegate that handles the rendered pixel buffers produced by a rendered legible output object.

# delegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A delegate object for this output.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<AVPlayerItemRenderedLegibleOutputPushDelegate> delegate;
```

## See Also

### Setting a delegate

- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the delegate object and the queue on which it’s invoked.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the output calls the delegate object.
- [AVPlayerItemRenderedLegibleOutputPushDelegate](../avplayeritemrenderedlegibleoutputpushdelegate.md): A delegate that handles the rendered pixel buffers produced by a rendered legible output object.
