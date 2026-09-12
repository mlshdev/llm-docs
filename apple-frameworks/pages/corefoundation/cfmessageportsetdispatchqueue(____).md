> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmessageportsetdispatchqueue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfmessageportsetdispatchqueue(_:_:))

# CFMessagePortSetDispatchQueue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Schedules callbacks for the specified message port on the specified dispatch queue.

## Declaration

```swift
func CFMessagePortSetDispatchQueue(_ ms: CFMessagePort!, _ queue: dispatch_queue_t!)
```

## Parameters

- `ms`: The message port to schedule.
- `queue`: The libdispatch queue.

## See Also

### Using a Message Port

- [CFMessagePortInvalidate(\_:)](cfmessageportinvalidate%28__%29.md): Invalidates a CFMessagePort object, stopping it from receiving or sending any more messages.
- [CFMessagePortSendRequest(\_:\_:\_:\_:\_:\_:\_:)](cfmessageportsendrequest%28______________%29.md): Sends a message to a remote CFMessagePort object.

# CFMessagePortSetDispatchQueue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Schedules callbacks for the specified message port on the specified dispatch queue.

## Declaration

```objectivec
extern void CFMessagePortSetDispatchQueue(CFMessagePortRef ms, dispatch_queue_t queue);
```

## Parameters

- `ms`: The message port to schedule.
- `queue`: The libdispatch queue.

## See Also

### Using a Message Port

- [CFMessagePortInvalidate](cfmessageportinvalidate%28__%29.md): Invalidates a CFMessagePort object, stopping it from receiving or sending any more messages.
- [CFMessagePortSendRequest](cfmessageportsendrequest%28______________%29.md): Sends a message to a remote CFMessagePort object.
