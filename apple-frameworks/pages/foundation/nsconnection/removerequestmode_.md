> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/removerequestmode:](https://developer.apple.com/documentation/foundation/nsconnection/removerequestmode:)

# removeRequestMode:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Removes `mode` from the set of run-loop input modes the receiver uses for connection requests.

## Declaration

```objectivec
- (void) removeRequestMode:(NSString *) rmode;
```

## Parameters

- `rmode`: The mode to remove from the set of run-loop input modes the receiver uses for connection requests.

## See Also

### Related Documentation

- [removePort:forMode:](../runloop/remove%28__formode_%29.md): Removes a port from the specified input mode of the run loop.

### Configuring Instances

- [requestTimeout](requesttimeout.md): Deprecated. The timeout interval for outgoing remote messages.
- [replyTimeout](replytimeout.md): Deprecated. The timeout interval for replies to outgoing remote messages.
- [independentConversationQueueing](independentconversationqueueing.md): Deprecated. A Boolean value that indicates whether the receiver handles remote messages atomically.
- [addRequestMode:](addrequestmode_.md): Deprecated. Adds `mode` to the set of run-loop input modes that the receiver uses for connection requests.
- [requestModes](requestmodes-c.property.md): Deprecated. The set of request modes the receiver’s receive port is registered for with its `NSRunLoop` object.
- [invalidate](invalidate.md): Deprecated. Invalidates the receiver.
- [valid](valid.md): Deprecated. A Boolean value that indicates whether the receiver is known to be valid.
