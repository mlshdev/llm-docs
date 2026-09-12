> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnectiondelegate/connection:shouldmakenewconnection:](https://developer.apple.com/documentation/foundation/nsconnectiondelegate/connection:shouldmakenewconnection:)

# connection:shouldMakeNewConnection:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns a Boolean value that indicates whether the parent connection should allow a given new connection to be created.

## Declaration

```objectivec
- (BOOL) connection:(NSConnection *) ancestor shouldMakeNewConnection:(NSConnection *) conn;
```

## Parameters

- `ancestor`: The connection object for which the receiver is the delegate.
- `conn`: The new connection.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `ancestor` should allow `conn` to be created and set up, [false](https://developer.apple.com/documentation/swift/false) if `ancestor` should refuse and immediately release `conn`.

<a id="Discussion"></a>

## Discussion

Use this method to limit the amount of `NSConnection` objects created in your application or to change the parameters of child `NSConnection` objects.

Use [NSConnectionDidInitializeNotification](../nsconnectiondidinitializenotification.md) instead of this delegate method if possible.

## See Also

### Responding to a Connection

- [connection:handleRequest:](connection_handlerequest_.md): Deprecated. This method should be implemented by `NSConnection` object delegates that want to intercept distant object requests.
- [createConversationForConnection:](createconversationforconnection_.md): Deprecated. Returns an arbitrary object identifying a new conversation being created for the connection in the current thread.
- [makeNewConnection:sender:](makenewconnection_sender_.md): Deprecated. Returns a Boolean value that indicates whether the parent should allow a given new connection to be created and configured.
