> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmessageportinvalidate(_:)](https://developer.apple.com/documentation/corefoundation/cfmessageportinvalidate(_:))

# CFMessagePortInvalidate(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invalidates a CFMessagePort object, stopping it from receiving or sending any more messages.

## Declaration

```swift
func CFMessagePortInvalidate(_ ms: CFMessagePort!)
```

## Parameters

- `ms`: The message port to invalidate.

<a id="Discussion"></a>

## Discussion

Invalidating a message port prevents the port from ever sending or receiving any more messages; the message port is not deallocated, though. If the port has not already been invalidated, the port’s invalidation callback function is invoked, if one has been set with [CFMessagePortSetInvalidationCallBack(\_:\_:)](cfmessageportsetinvalidationcallback%28____%29.md). The [CFMessagePortContext](cfmessageportcontext.md)  `info` information for `ms` is also released, if a release callback was specified in the port’s context structure. Finally, if a run loop source was created for `ms`, the run loop source is also invalidated.

## See Also

### Using a Message Port

- [CFMessagePortSendRequest(\_:\_:\_:\_:\_:\_:\_:)](cfmessageportsendrequest%28______________%29.md): Sends a message to a remote CFMessagePort object.
- [CFMessagePortSetDispatchQueue(\_:\_:)](cfmessageportsetdispatchqueue%28____%29.md): Schedules callbacks for the specified message port on the specified dispatch queue.

# CFMessagePortInvalidate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invalidates a CFMessagePort object, stopping it from receiving or sending any more messages.

## Declaration

```objectivec
extern void CFMessagePortInvalidate(CFMessagePortRef ms);
```

## Parameters

- `ms`: The message port to invalidate.

<a id="Discussion"></a>

## Discussion

Invalidating a message port prevents the port from ever sending or receiving any more messages; the message port is not deallocated, though. If the port has not already been invalidated, the port’s invalidation callback function is invoked, if one has been set with [CFMessagePortSetInvalidationCallBack](cfmessageportsetinvalidationcallback%28____%29.md). The [CFMessagePortContext](cfmessageportcontext.md)  `info` information for `ms` is also released, if a release callback was specified in the port’s context structure. Finally, if a run loop source was created for `ms`, the run loop source is also invalidated.

## See Also

### Using a Message Port

- [CFMessagePortSendRequest](cfmessageportsendrequest%28______________%29.md): Sends a message to a remote CFMessagePort object.
- [CFMessagePortSetDispatchQueue](cfmessageportsetdispatchqueue%28____%29.md): Schedules callbacks for the specified message port on the specified dispatch queue.
