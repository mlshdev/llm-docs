> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/currentconversation](https://developer.apple.com/documentation/foundation/nsconnection/currentconversation)

# currentConversation

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns a token object representing any conversation in progress in the current thread.

## Declaration

```objectivec
+ (id) currentConversation;
```

<a id="return-value"></a>

## Return Value

A token object representing any conversation in progress in the current thread, or `nil` if there is no conversation in progress.

## See Also

### Related Documentation

- [createConversationForConnection:](../nsconnectiondelegate/createconversationforconnection_.md): Deprecated. Returns an arbitrary object identifying a new conversation being created for the connection in the current thread.
