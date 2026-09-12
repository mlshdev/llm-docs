> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemrenderedlegibleoutputpushdelegate](https://developer.apple.com/documentation/avfoundation/avplayeritemrenderedlegibleoutputpushdelegate)

# AVPlayerItemRenderedLegibleOutputPushDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A delegate that handles the rendered pixel buffers produced by a rendered legible output object.

## Declaration

```swift
protocol AVPlayerItemRenderedLegibleOutputPushDelegate : AVPlayerItemOutputPushDelegate
```

## Topics

### Handling rendered pixel buffers

- [renderedLegibleOutput(\_:didOutputRenderedCaptionImages:forItemTime:)](avplayeritemrenderedlegibleoutputpushdelegate/renderedlegibleoutput%28__didoutputrenderedcaptionimages_foritemtime_%29.md): Tells the delegate that new rendered caption images are available.

## Relationships

### Inherits From

- [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting a delegate

- [delegate](avplayeritemrenderedlegibleoutput/delegate.md): A delegate object for this output.
- [setDelegate(\_:queue:)](avplayeritemrenderedlegibleoutput/setdelegate%28__queue_%29.md): Sets the delegate object and the queue on which it’s invoked.
- [delegateQueue](avplayeritemrenderedlegibleoutput/delegatequeue.md): The dispatch queue on which the output calls the delegate object.

# AVPlayerItemRenderedLegibleOutputPushDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A delegate that handles the rendered pixel buffers produced by a rendered legible output object.

## Declaration

```objectivec
@protocol AVPlayerItemRenderedLegibleOutputPushDelegate <AVPlayerItemOutputPushDelegate>
```

## Topics

### Handling rendered pixel buffers

- [renderedLegibleOutput:didOutputRenderedCaptionImages:forItemTime:](avplayeritemrenderedlegibleoutputpushdelegate/renderedlegibleoutput%28__didoutputrenderedcaptionimages_foritemtime_%29.md): Tells the delegate that new rendered caption images are available.

## Relationships

### Inherits From

- [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md)

## See Also

### Setting a delegate

- [delegate](avplayeritemrenderedlegibleoutput/delegate.md): A delegate object for this output.
- [setDelegate:queue:](avplayeritemrenderedlegibleoutput/setdelegate%28__queue_%29.md): Sets the delegate object and the queue on which it’s invoked.
- [delegateQueue](avplayeritemrenderedlegibleoutput/delegatequeue.md): The dispatch queue on which the output calls the delegate object.
