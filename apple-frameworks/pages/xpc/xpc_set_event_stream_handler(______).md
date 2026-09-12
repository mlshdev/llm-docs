> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_set_event_stream_handler(_:_:_:)](https://developer.apple.com/documentation/xpc/xpc_set_event_stream_handler(_:_:_:))

# xpc_set_event_stream_handler(\_:\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 10.7+

Sets the event handler to invoke when receiving streamed events.

## Declaration

```swift
func xpc_set_event_stream_handler(_ stream: UnsafePointer<CChar>, _ targetq: dispatch_queue_t?, _ handler: @escaping @Sendable (xpc_object_t) -> Void)
```

## Parameters

- `stream`: The name of the event stream for which this handler will be invoked.
- `targetq`: The GCD queue to which the event handler block will be submitted. This parameter may be NULL, in which case the connection’s target queue will be the default target queue of `libdispatch`, defined as `DISPATCH_TARGET_QUEUE_DEFAULT`.
- `handler`: The event handler block. The event which this block receives as its first parameter will always be a dictionary which contains the [XPC_EVENT_KEY_NAME](xpc_event_key_name-swift.var.md) key. The value for this key will be a string whose value is the name assigned to the XPC event specified in the `launchd.plist`. Future keys may be added to this dictionary.

<a id="Discussion"></a>

## Discussion

Multiple calls to this function for the same event stream will result in undefined behavior.

## See Also

### Event handling

- [XPC_EVENT_KEY_NAME](xpc_event_key_name-swift.var.md): A key for querying an XPC event dictionary to retrieve a string that identifies the event.

# xpc_set_event_stream_handler (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 10.7+

Sets the event handler to invoke when receiving streamed events.

## Declaration

```objectivec
extern void xpc_set_event_stream_handler(const char *stream, dispatch_queue_t targetq, xpc_handler_t handler);
```

## Parameters

- `stream`: The name of the event stream for which this handler will be invoked.
- `targetq`: The GCD queue to which the event handler block will be submitted. This parameter may be NULL, in which case the connection’s target queue will be the default target queue of `libdispatch`, defined as `DISPATCH_TARGET_QUEUE_DEFAULT`.
- `handler`: The event handler block. The event which this block receives as its first parameter will always be a dictionary which contains the [XPC_EVENT_KEY_NAME](xpc_event_key_name-swift.var.md) key. The value for this key will be a string whose value is the name assigned to the XPC event specified in the `launchd.plist`. Future keys may be added to this dictionary.

<a id="Discussion"></a>

## Discussion

Multiple calls to this function for the same event stream will result in undefined behavior.

## See Also

### Event handling

- [XPC_EVENT_KEY_NAME](xpc_event_key_name-c.macro.md): A key for querying an XPC event dictionary to retrieve a string that identifies the event.
