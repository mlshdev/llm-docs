> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmessageportsendrequest(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfmessageportsendrequest(_:_:_:_:_:_:_:))

# CFMessagePortSendRequest(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sends a message to a remote CFMessagePort object.

## Declaration

```swift
func CFMessagePortSendRequest(_ remote: CFMessagePort!, _ msgid: Int32, _ data: CFData!, _ sendTimeout: CFTimeInterval, _ rcvTimeout: CFTimeInterval, _ replyMode: CFString!, _ returnData: UnsafeMutablePointer<Unmanaged<CFData>?>!) -> Int32
```

## Parameters

- `remote`: The message port to which `data` should be sent.
- `msgid`: An arbitrary integer value that you can send with the message.
- `data`: The data to send to `remote`.
- `sendTimeout`: The time to wait for `data` to be sent.
- `rcvTimeout`: The time to wait for a reply to be returned.
- `replyMode`: The run loop mode in which the function should wait for a reply. If the message is a `oneway` (so no response is expected), then `replyMode` should be `NULL`. If `replyMode` is non-`NULL`, the function runs the run loop waiting for a reply, in that mode. `replyMode` can be any string name of a run loop mode, but it should be one with input sources installed. You should use the `kCFRunLoopDefaultMode` constant unless you have a specific reason to use a different mode.
- `returnData`: Upon return, contains a CFData object containing the reply data. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

Error code indicating success or failure. See [CFMessagePortSendRequest Error Codes](1561514-cfmessageportsendrequest-error-c.md) for the possible return values.

## See Also

### Using a Message Port

- [CFMessagePortInvalidate(\_:)](cfmessageportinvalidate%28__%29.md): Invalidates a CFMessagePort object, stopping it from receiving or sending any more messages.
- [CFMessagePortSetDispatchQueue(\_:\_:)](cfmessageportsetdispatchqueue%28____%29.md): Schedules callbacks for the specified message port on the specified dispatch queue.

# CFMessagePortSendRequest (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sends a message to a remote CFMessagePort object.

## Declaration

```objectivec
extern SInt32 CFMessagePortSendRequest(CFMessagePortRef remote, SInt32 msgid, CFDataRef data, CFTimeInterval sendTimeout, CFTimeInterval rcvTimeout, CFStringRef replyMode, CFDataRef*returnData);
```

## Parameters

- `remote`: The message port to which `data` should be sent.
- `msgid`: An arbitrary integer value that you can send with the message.
- `data`: The data to send to `remote`.
- `sendTimeout`: The time to wait for `data` to be sent.
- `rcvTimeout`: The time to wait for a reply to be returned.
- `replyMode`: The run loop mode in which the function should wait for a reply. If the message is a `oneway` (so no response is expected), then `replyMode` should be `NULL`. If `replyMode` is non-`NULL`, the function runs the run loop waiting for a reply, in that mode. `replyMode` can be any string name of a run loop mode, but it should be one with input sources installed. You should use the `kCFRunLoopDefaultMode` constant unless you have a specific reason to use a different mode.
- `returnData`: Upon return, contains a CFData object containing the reply data. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

Error code indicating success or failure. See [CFMessagePortSendRequest Error Codes](1561514-cfmessageportsendrequest-error-c.md) for the possible return values.

## See Also

### Using a Message Port

- [CFMessagePortInvalidate](cfmessageportinvalidate%28__%29.md): Invalidates a CFMessagePort object, stopping it from receiving or sending any more messages.
- [CFMessagePortSetDispatchQueue](cfmessageportsetdispatchqueue%28____%29.md): Schedules callbacks for the specified message port on the specified dispatch queue.
