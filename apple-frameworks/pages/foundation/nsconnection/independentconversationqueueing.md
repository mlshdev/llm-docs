> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/independentconversationqueueing](https://developer.apple.com/documentation/foundation/nsconnection/independentconversationqueueing)

# independentConversationQueueing

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

A Boolean value that indicates whether the receiver handles remote messages atomically.

## Declaration

```objectivec
@property BOOL independentConversationQueueing;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver handles remote messages atomically, otherwise [false](https://developer.apple.com/documentation/swift/false).

The default is [false](https://developer.apple.com/documentation/swift/false). An `NSConnection` object normally forwards remote message to the intended recipients as they come in. See [Configuring a Connection](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/Tasks/configuring.html#//apple_ref/doc/uid/20000766) for more information.

## See Also

### Configuring Instances

- [requestTimeout](requesttimeout.md): Deprecated. The timeout interval for outgoing remote messages.
- [replyTimeout](replytimeout.md): Deprecated. The timeout interval for replies to outgoing remote messages.
- [addRequestMode:](addrequestmode_.md): Deprecated. Adds `mode` to the set of run-loop input modes that the receiver uses for connection requests.
- [removeRequestMode:](removerequestmode_.md): Deprecated. Removes `mode` from the set of run-loop input modes the receiver uses for connection requests.
- [requestModes](requestmodes-c.property.md): Deprecated. The set of request modes the receiver’s receive port is registered for with its `NSRunLoop` object.
- [invalidate](invalidate.md): Deprecated. Invalidates the receiver.
- [valid](valid.md): Deprecated. A Boolean value that indicates whether the receiver is known to be valid.
