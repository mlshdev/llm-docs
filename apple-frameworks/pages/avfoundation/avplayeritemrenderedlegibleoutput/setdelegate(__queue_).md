> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemrenderedlegibleoutput/setdelegate(_:queue:)](https://developer.apple.com/documentation/avfoundation/avplayeritemrenderedlegibleoutput/setdelegate(_:queue:))

# setDelegate(\_:queue:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Sets the delegate object and the queue on which it’s invoked.

## Declaration

```swift
func setDelegate(_ delegate: (any AVPlayerItemRenderedLegibleOutputPushDelegate)?, queue delegateQueue: dispatch_queue_t?)
```

## Parameters

- `delegate`: A delegate object for this output.
- `delegateQueue`: A dispatch queue on which the system calls all delegate methods.

## See Also

### Setting a delegate

- [delegate](delegate.md): A delegate object for this output.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the output calls the delegate object.
- [AVPlayerItemRenderedLegibleOutputPushDelegate](../avplayeritemrenderedlegibleoutputpushdelegate.md): A delegate that handles the rendered pixel buffers produced by a rendered legible output object.

# setDelegate:queue: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Sets the delegate object and the queue on which it’s invoked.

## Declaration

```objectivec
- (void) setDelegate:(id<AVPlayerItemRenderedLegibleOutputPushDelegate>) delegate queue:(dispatch_queue_t) delegateQueue;
```

## Parameters

- `delegate`: A delegate object for this output.
- `delegateQueue`: A dispatch queue on which the system calls all delegate methods.

## See Also

### Setting a delegate

- [delegate](delegate.md): A delegate object for this output.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the output calls the delegate object.
- [AVPlayerItemRenderedLegibleOutputPushDelegate](../avplayeritemrenderedlegibleoutputpushdelegate.md): A delegate that handles the rendered pixel buffers produced by a rendered legible output object.
