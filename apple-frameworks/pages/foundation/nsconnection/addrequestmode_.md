> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/addrequestmode:](https://developer.apple.com/documentation/foundation/nsconnection/addrequestmode:)

# addRequestMode:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Adds `mode` to the set of run-loop input modes that the receiver uses for connection requests.

## Declaration

```objectivec
- (void) addRequestMode:(NSString *) rmode;
```

## Parameters

- `rmode`: The mode to add to the receiver.

<a id="Discussion"></a>

## Discussion

The default input mode is `NSDefaultRunLoopMode`. See the [NSRunLoop](../runloop.md) class specification for more information on input modes.

## See Also

### Related Documentation

- [addPort:forMode:](../runloop/add%28__formode_%29-6z982.md): Adds a port as an input source to the specified mode of the run loop.

### Configuring Instances

- [requestTimeout](requesttimeout.md): Deprecated. The timeout interval for outgoing remote messages.
- [replyTimeout](replytimeout.md): Deprecated. The timeout interval for replies to outgoing remote messages.
- [independentConversationQueueing](independentconversationqueueing.md): Deprecated. A Boolean value that indicates whether the receiver handles remote messages atomically.
- [removeRequestMode:](removerequestmode_.md): Deprecated. Removes `mode` from the set of run-loop input modes the receiver uses for connection requests.
- [requestModes](requestmodes-c.property.md): Deprecated. The set of request modes the receiver’s receive port is registered for with its `NSRunLoop` object.
- [invalidate](invalidate.md): Deprecated. Invalidates the receiver.
- [valid](valid.md): Deprecated. A Boolean value that indicates whether the receiver is known to be valid.
