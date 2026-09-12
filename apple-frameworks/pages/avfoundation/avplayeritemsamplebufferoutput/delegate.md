> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemsamplebufferoutput/delegate](https://developer.apple.com/documentation/avfoundation/avplayeritemsamplebufferoutput/delegate)

# delegate

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The receiver’s delegate.

## Declaration

```objectivec
@property (weak, readonly) id<AVPlayerItemSampleBufferOutputDelegate> delegate;
```

## See Also

### Configuring the delegate

- [delegateQueue](delegatequeue.md): The dispatch queue where the delegate is messaged.
- [setDelegate:queue:](setdelegate_queue_.md): Sets the receiver’s delegate and a dispatch queue on which the delegate will be called.
