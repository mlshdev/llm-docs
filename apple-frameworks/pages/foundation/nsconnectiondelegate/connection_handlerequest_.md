> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnectiondelegate/connection:handlerequest:](https://developer.apple.com/documentation/foundation/nsconnectiondelegate/connection:handlerequest:)

# connection:handleRequest:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

This method should be implemented by `NSConnection` object delegates that want to intercept distant object requests.

## Declaration

```objectivec
- (BOOL) connection:(NSConnection *) connection handleRequest:(NSDistantObjectRequest *) doreq;
```

## Parameters

- `connection`: The connection object for which the receiver is the delegate.
- `doreq`: The distant object request.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the request was handled by the delegate, [false](https://developer.apple.com/documentation/swift/false) if the request should proceed as if the delegate did not intercept it.

## See Also

### Responding to a Connection

- [connection:shouldMakeNewConnection:](connection_shouldmakenewconnection_.md): Deprecated. Returns a Boolean value that indicates whether the parent connection should allow a given new connection to be created.
- [createConversationForConnection:](createconversationforconnection_.md): Deprecated. Returns an arbitrary object identifying a new conversation being created for the connection in the current thread.
- [makeNewConnection:sender:](makenewconnection_sender_.md): Deprecated. Returns a Boolean value that indicates whether the parent should allow a given new connection to be created and configured.
