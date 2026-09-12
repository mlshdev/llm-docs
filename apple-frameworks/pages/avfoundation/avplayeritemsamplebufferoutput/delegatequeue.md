> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemsamplebufferoutput/delegatequeue](https://developer.apple.com/documentation/avfoundation/avplayeritemsamplebufferoutput/delegatequeue)

# delegateQueue

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The dispatch queue where the delegate is messaged.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) dispatch_queue_t delegateQueue;
```

## See Also

### Configuring the delegate

- [delegate](delegate.md): The receiver’s delegate.
- [setDelegate:queue:](setdelegate_queue_.md): Sets the receiver’s delegate and a dispatch queue on which the delegate will be called.
