> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/valid](https://developer.apple.com/documentation/foundation/nsconnection/valid)

# valid

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

A Boolean value that indicates whether the receiver is known to be valid.

## Declaration

```objectivec
@property (readonly, getter=isValid) BOOL valid;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is known to be valid, otherwise [false](https://developer.apple.com/documentation/swift/false).

An `NSConnection` object becomes invalid when either of its ports becomes invalid, but only notes that it has become invalid when it tries to send or receive a message. When this happens it posts an [NSConnectionDidDieNotification](../nsconnectiondiddienotification.md) to the default notification center.

## See Also

### Related Documentation

- [valid](../port/isvalid.md): A Boolean value that indicates whether the receiver is valid.

### Configuring Instances

- [requestTimeout](requesttimeout.md): Deprecated. The timeout interval for outgoing remote messages.
- [replyTimeout](replytimeout.md): Deprecated. The timeout interval for replies to outgoing remote messages.
- [independentConversationQueueing](independentconversationqueueing.md): Deprecated. A Boolean value that indicates whether the receiver handles remote messages atomically.
- [addRequestMode:](addrequestmode_.md): Deprecated. Adds `mode` to the set of run-loop input modes that the receiver uses for connection requests.
- [removeRequestMode:](removerequestmode_.md): Deprecated. Removes `mode` from the set of run-loop input modes the receiver uses for connection requests.
- [requestModes](requestmodes-c.property.md): Deprecated. The set of request modes the receiver’s receive port is registered for with its `NSRunLoop` object.
- [invalidate](invalidate.md): Deprecated. Invalidates the receiver.
