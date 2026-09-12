> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/replytimeout](https://developer.apple.com/documentation/foundation/nsconnection/replytimeout)

# replyTimeout

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

The timeout interval for replies to outgoing remote messages.

## Declaration

```objectivec
@property NSTimeInterval replyTimeout;
```

<a id="Discussion"></a>

## Discussion

If a non-oneway remote message is sent and no reply is received by the timeout, an [NSPortTimeoutException](../nsexceptionname/porttimeoutexception.md) is raised. The default timeout is the maximum possible value.

## See Also

### Configuring Instances

- [requestTimeout](requesttimeout.md): Deprecated. The timeout interval for outgoing remote messages.
- [independentConversationQueueing](independentconversationqueueing.md): Deprecated. A Boolean value that indicates whether the receiver handles remote messages atomically.
- [addRequestMode:](addrequestmode_.md): Deprecated. Adds `mode` to the set of run-loop input modes that the receiver uses for connection requests.
- [removeRequestMode:](removerequestmode_.md): Deprecated. Removes `mode` from the set of run-loop input modes the receiver uses for connection requests.
- [requestModes](requestmodes-c.property.md): Deprecated. The set of request modes the receiver’s receive port is registered for with its `NSRunLoop` object.
- [invalidate](invalidate.md): Deprecated. Invalidates the receiver.
- [valid](valid.md): Deprecated. A Boolean value that indicates whether the receiver is known to be valid.
