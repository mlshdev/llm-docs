> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnectiondelegate/createconversationforconnection:](https://developer.apple.com/documentation/foundation/nsconnectiondelegate/createconversationforconnection:)

# createConversationForConnection:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns an arbitrary object identifying a new conversation being created for the connection in the current thread.

## Declaration

```objectivec
- (id) createConversationForConnection:(NSConnection *) conn;
```

## Parameters

- `conn`: The connection object for which the receiver is the delegate.

<a id="return-value"></a>

## Return Value

An arbitrary object identifying a new conversation being created for the connection in the current thread.

<a id="Discussion"></a>

## Discussion

New conversations are created only if [independentConversationQueueing](../nsconnection/independentconversationqueueing.md) is [true](https://developer.apple.com/documentation/swift/true) for `conn`. If you do not implement this method, `NSConnection` object creates an instance of `NSObject`.

## See Also

### Related Documentation

- [currentConversation](../nsconnection/currentconversation.md): Deprecated. Returns a token object representing any conversation in progress in the current thread.

### Responding to a Connection

- [connection:shouldMakeNewConnection:](connection_shouldmakenewconnection_.md): Deprecated. Returns a Boolean value that indicates whether the parent connection should allow a given new connection to be created.
- [connection:handleRequest:](connection_handlerequest_.md): Deprecated. This method should be implemented by `NSConnection` object delegates that want to intercept distant object requests.
- [makeNewConnection:sender:](makenewconnection_sender_.md): Deprecated. Returns a Boolean value that indicates whether the parent should allow a given new connection to be created and configured.
