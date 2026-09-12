> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemmetadataoutput/delegate](https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutput/delegate)

# delegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The delegate object.

## Declaration

```swift
weak var delegate: (any AVPlayerItemMetadataOutputPushDelegate)? { get }
```

## See Also

### Configuring the delegate

- [advanceIntervalForDelegateInvocation](advanceintervalfordelegateinvocation.md): The time interval, in seconds, the player item metadata output object messages its delegate earlier than normal.
- [AVPlayerItemMetadataOutputPushDelegate](../avplayeritemmetadataoutputpushdelegate.md): Methods you can implement to provide additional metadata.
- [delegateQueue](delegatequeue.md): The dispatch queue on which messages are sent to the delegate.
- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate is called.

# delegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The delegate object.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<AVPlayerItemMetadataOutputPushDelegate> delegate;
```

## See Also

### Configuring the delegate

- [advanceIntervalForDelegateInvocation](advanceintervalfordelegateinvocation.md): The time interval, in seconds, the player item metadata output object messages its delegate earlier than normal.
- [AVPlayerItemMetadataOutputPushDelegate](../avplayeritemmetadataoutputpushdelegate.md): Methods you can implement to provide additional metadata.
- [delegateQueue](delegatequeue.md): The dispatch queue on which messages are sent to the delegate.
- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate is called.
