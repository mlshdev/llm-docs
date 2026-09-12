> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysession/setdelegate(_:queue:)](https://developer.apple.com/documentation/avfoundation/avcontentkeysession/setdelegate(_:queue:))

# setDelegate(\_:queue:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Sets the session’s delegate object and the dispatch queue on which to call the delegate’s methods.

## Declaration

```swift
func setDelegate(_ delegate: (any AVContentKeySessionDelegate)?, queue delegateQueue: dispatch_queue_t?)
```

## Parameters

- `delegate`: An object that conforms to the [AVContentKeySessionDelegate](../avcontentkeysessiondelegate.md) protocol.
- `delegateQueue`: The dispatch queue on which the session calls the delegate object.

## See Also

### Managing the delegate object

- [delegate](delegate.md): The content key session’s delegate object.
- [delegateQueue](delegatequeue.md): The dispatch queue the session uses to invoke delegate callbacks.

# setDelegate:queue: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Sets the session’s delegate object and the dispatch queue on which to call the delegate’s methods.

## Declaration

```objectivec
- (void) setDelegate:(id<AVContentKeySessionDelegate>) delegate queue:(dispatch_queue_t) delegateQueue;
```

## Parameters

- `delegate`: An object that conforms to the [AVContentKeySessionDelegate](../avcontentkeysessiondelegate.md) protocol.
- `delegateQueue`: The dispatch queue on which the session calls the delegate object.

## See Also

### Managing the delegate object

- [delegate](delegate.md): The content key session’s delegate object.
- [delegateQueue](delegatequeue.md): The dispatch queue the session uses to invoke delegate callbacks.
