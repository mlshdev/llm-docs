> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/requestmodes-c.property](https://developer.apple.com/documentation/foundation/nsconnection/requestmodes-c.property)

# requestModes

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

The set of request modes the receiver’s receive port is registered for with its `NSRunLoop` object.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * requestModes;
```

<a id="Discussion"></a>

## Discussion

An array of `NSString` objects that represents the set of request modes the receiver’s receive port is registered for with its [NSRunLoop](../runloop.md) object.

## See Also

### Related Documentation

- [addPort:forMode:](../runloop/add%28__formode_%29-6z982.md): Adds a port as an input source to the specified mode of the run loop.

### Configuring Instances

- [requestTimeout](requesttimeout.md): Deprecated. The timeout interval for outgoing remote messages.
- [replyTimeout](replytimeout.md): Deprecated. The timeout interval for replies to outgoing remote messages.
- [independentConversationQueueing](independentconversationqueueing.md): Deprecated. A Boolean value that indicates whether the receiver handles remote messages atomically.
- [addRequestMode:](addrequestmode_.md): Deprecated. Adds `mode` to the set of run-loop input modes that the receiver uses for connection requests.
- [removeRequestMode:](removerequestmode_.md): Deprecated. Removes `mode` from the set of run-loop input modes the receiver uses for connection requests.
- [invalidate](invalidate.md): Deprecated. Invalidates the receiver.
- [valid](valid.md): Deprecated. A Boolean value that indicates whether the receiver is known to be valid.
