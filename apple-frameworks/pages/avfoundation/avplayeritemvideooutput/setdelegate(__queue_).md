> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemvideooutput/setdelegate(_:queue:)](https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/setdelegate(_:queue:))

# setDelegate(\_:queue:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Sets the delegate and dispatch queue for the receiver.

## Declaration

```swift
func setDelegate(_ delegate: (any AVPlayerItemOutputPullDelegate)?, queue delegateQueue: dispatch_queue_t?)
```

## Parameters

- `delegate`: The delegate object for the receiver. You may specify `nil` for this parameter.
- `delegateQueue`: The dispatch queue on which to call delegate methods. If you specify `nil` for this parameter, the video output object calls the delegate on the dispatch queue for your app’s main thread.

## See Also

### Configuring the delegate

- [delegate](delegate.md): The delegate for the video output object.
- [AVPlayerItemOutputPullDelegate](../avplayeritemoutputpulldelegate.md): Methods you can implement to respond to pixel buffer changes.
- [delegateQueue](delegatequeue.md): The dispatch queue on which to call delegate methods.

# setDelegate:queue: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Sets the delegate and dispatch queue for the receiver.

## Declaration

```objectivec
- (void) setDelegate:(id<AVPlayerItemOutputPullDelegate>) delegate queue:(dispatch_queue_t) delegateQueue;
```

## Parameters

- `delegate`: The delegate object for the receiver. You may specify `nil` for this parameter.
- `delegateQueue`: The dispatch queue on which to call delegate methods. If you specify `nil` for this parameter, the video output object calls the delegate on the dispatch queue for your app’s main thread.

## See Also

### Configuring the delegate

- [delegate](delegate.md): The delegate for the video output object.
- [AVPlayerItemOutputPullDelegate](../avplayeritemoutputpulldelegate.md): Methods you can implement to respond to pixel buffer changes.
- [delegateQueue](delegatequeue.md): The dispatch queue on which to call delegate methods.
