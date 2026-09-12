> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemrenderedlegibleoutput/delegatequeue](https://developer.apple.com/documentation/avfoundation/avplayeritemrenderedlegibleoutput/delegatequeue)

# delegateQueue (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

The dispatch queue on which the output calls the delegate object.

## Declaration

```swift
var delegateQueue: dispatch_queue_t? { get }
```

## See Also

### Setting a delegate

- [delegate](delegate.md): A delegate object for this output.
- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the delegate object and the queue on which it’s invoked.
- [AVPlayerItemRenderedLegibleOutputPushDelegate](../avplayeritemrenderedlegibleoutputpushdelegate.md): A delegate that handles the rendered pixel buffers produced by a rendered legible output object.

# delegateQueue (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

The dispatch queue on which the output calls the delegate object.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) dispatch_queue_t delegateQueue;
```

## See Also

### Setting a delegate

- [delegate](delegate.md): A delegate object for this output.
- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the delegate object and the queue on which it’s invoked.
- [AVPlayerItemRenderedLegibleOutputPushDelegate](../avplayeritemrenderedlegibleoutputpushdelegate.md): A delegate that handles the rendered pixel buffers produced by a rendered legible output object.
