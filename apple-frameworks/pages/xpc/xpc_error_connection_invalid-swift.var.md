> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_error_connection_invalid-swift.var](https://developer.apple.com/documentation/xpc/xpc_error_connection_invalid-swift.var)

# XPC_ERROR_CONNECTION_INVALID

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 2.0+

An error that sends to the connection’s event handler to indicate that the connection is no longer usable.

## Declaration

```swift
var XPC_ERROR_CONNECTION_INVALID: xpc_object_t { get }
```

<a id="Discussion"></a>

## Discussion

Will be delivered to the connection’s event handler if the named service provided to [xpc_connection_create(\_:\_:)](xpc_connection_create%28____%29.md) could not be found in the XPC service namespace. The connection is useless and should be disposed of.

Any messages in the queue to be sent will be unwound and canceled when this error occurs, similarly to the behavior when [XPC_ERROR_CONNECTION_INTERRUPTED](xpc_error_connection_interrupted-swift.var.md) occurs. The only difference is that the [XPC_ERROR_CONNECTION_INVALID](xpc_error_connection_invalid-swift.var.md) will be given to outstanding reply handlers and the connection’s event handler.

This error may be given to any type of connection.

## See Also

### Errors

- [XPC_ERROR_CONNECTION_INTERRUPTED](xpc_error_connection_interrupted-swift.var.md): An error that sends to the connection’s event handler when the remote service exits.
- [XPC_ERROR_TERMINATION_IMMINENT](xpc_error_termination_imminent-swift.var.md): An error that sends to a peer connection’s event handler when the XPC runtime determines that the program needs to exit and that all outstanding transactions must wind down.
