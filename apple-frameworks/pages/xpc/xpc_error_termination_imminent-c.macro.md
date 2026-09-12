> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_error_termination_imminent-c.macro](https://developer.apple.com/documentation/xpc/xpc_error_termination_imminent-c.macro)

# XPC_ERROR_TERMINATION_IMMINENT

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An error that sends to a peer connection’s event handler when the XPC runtime determines that the program needs to exit and that all outstanding transactions must wind down.

## Declaration

```objectivec
#define XPC_ERROR_TERMINATION_IMMINENT
```

<a id="Discussion"></a>

## Discussion

This error will be delivered to a peer connection’s event handler when the XPC runtime has determined that the program should exit and that all outstanding transactions must be wound down, and no new transactions can be opened.

After this error has been delivered to the event handler, no more messages will be received by the connection. The runtime will still attempt to deliver outgoing messages, but this error should be treated as an indication that the program will exit very soon, and any outstanding business over the connection should be wrapped up as quickly as possible and the connection canceled shortly thereafter.

This error will only be delivered to peer connections received through a listener or the [xpc_main](xpc_main%28__%29.md) event handler.

## See Also

### Errors

- [XPC_ERROR_CONNECTION_INVALID](xpc_error_connection_invalid-c.macro.md): An error that sends to the connection’s event handler to indicate that the connection is no longer usable.
- [XPC_ERROR_CONNECTION_INTERRUPTED](xpc_error_connection_interrupted-c.macro.md): An error that sends to the connection’s event handler when the remote service exits.
