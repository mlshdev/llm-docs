> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemmetadataoutput/delegatequeue](https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutput/delegatequeue)

# delegateQueue (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The dispatch queue on which messages are sent to the delegate.

## Declaration

```swift
var delegateQueue: dispatch_queue_t? { get }
```

## See Also

### Configuring the delegate

- [advanceIntervalForDelegateInvocation](advanceintervalfordelegateinvocation.md): The time interval, in seconds, the player item metadata output object messages its delegate earlier than normal.
- [delegate](delegate.md): The delegate object.
- [AVPlayerItemMetadataOutputPushDelegate](../avplayeritemmetadataoutputpushdelegate.md): Methods you can implement to provide additional metadata.
- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate is called.

# delegateQueue (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The dispatch queue on which messages are sent to the delegate.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) dispatch_queue_t delegateQueue;
```

## See Also

### Configuring the delegate

- [advanceIntervalForDelegateInvocation](advanceintervalfordelegateinvocation.md): The time interval, in seconds, the player item metadata output object messages its delegate earlier than normal.
- [delegate](delegate.md): The delegate object.
- [AVPlayerItemMetadataOutputPushDelegate](../avplayeritemmetadataoutputpushdelegate.md): Methods you can implement to provide additional metadata.
- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate is called.
