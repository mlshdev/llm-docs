> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_event_key_name-swift.var](https://developer.apple.com/documentation/xpc/xpc_event_key_name-swift.var)

# XPC_EVENT_KEY_NAME

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 2.0+

A key for querying an XPC event dictionary to retrieve a string that identifies the event.

## Declaration

```swift
nonisolated(unsafe) let XPC_EVENT_KEY_NAME: UnsafePointer<CChar>
```

## See Also

### Event handling

- [xpc_set_event_stream_handler(\_:\_:\_:)](xpc_set_event_stream_handler%28______%29.md): Sets the event handler to invoke when receiving streamed events.
