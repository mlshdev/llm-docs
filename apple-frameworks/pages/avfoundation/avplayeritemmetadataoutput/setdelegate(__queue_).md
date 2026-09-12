> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemmetadataoutput/setdelegate(_:queue:)](https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutput/setdelegate(_:queue:))

# setDelegate(\_:queue:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the delegate and a dispatch queue on which the delegate is called.

## Declaration

```swift
func setDelegate(_ delegate: (any AVPlayerItemMetadataOutputPushDelegate)?, queue delegateQueue: dispatch_queue_t?)
```

## Parameters

- `delegate`: An object conforming to [AVPlayerItemMetadataOutputPushDelegate](../avplayeritemmetadataoutputpushdelegate.md) protocol.
- `delegateQueue`: A dispatch queue on which all delegate methods will be called.

<a id="Discussion"></a>

## Discussion

You specify the metadata delegate, and a dispatch queue on which it will be called, to be notified as new metadata is encountered in the source media.

> **Important**

>  The values set for the `delegate` and `delegateQueue` arguments can be `nil` , but passing `nil` for one requires you to do the same for the other. Passing a `nil` value for only one argument results in an exception being raised at runtime.

## See Also

### Configuring the delegate

- [advanceIntervalForDelegateInvocation](advanceintervalfordelegateinvocation.md): The time interval, in seconds, the player item metadata output object messages its delegate earlier than normal.
- [delegate](delegate.md): The delegate object.
- [AVPlayerItemMetadataOutputPushDelegate](../avplayeritemmetadataoutputpushdelegate.md): Methods you can implement to provide additional metadata.
- [delegateQueue](delegatequeue.md): The dispatch queue on which messages are sent to the delegate.

# setDelegate:queue: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the delegate and a dispatch queue on which the delegate is called.

## Declaration

```objectivec
- (void) setDelegate:(id<AVPlayerItemMetadataOutputPushDelegate>) delegate queue:(dispatch_queue_t) delegateQueue;
```

## Parameters

- `delegate`: An object conforming to [AVPlayerItemMetadataOutputPushDelegate](../avplayeritemmetadataoutputpushdelegate.md) protocol.
- `delegateQueue`: A dispatch queue on which all delegate methods will be called.

<a id="Discussion"></a>

## Discussion

You specify the metadata delegate, and a dispatch queue on which it will be called, to be notified as new metadata is encountered in the source media.

> **Important**

>  The values set for the `delegate` and `delegateQueue` arguments can be `nil` , but passing `nil` for one requires you to do the same for the other. Passing a `nil` value for only one argument results in an exception being raised at runtime.

## See Also

### Configuring the delegate

- [advanceIntervalForDelegateInvocation](advanceintervalfordelegateinvocation.md): The time interval, in seconds, the player item metadata output object messages its delegate earlier than normal.
- [delegate](delegate.md): The delegate object.
- [AVPlayerItemMetadataOutputPushDelegate](../avplayeritemmetadataoutputpushdelegate.md): Methods you can implement to provide additional metadata.
- [delegateQueue](delegatequeue.md): The dispatch queue on which messages are sent to the delegate.
