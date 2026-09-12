> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdistantobjectrequest/conversation](https://developer.apple.com/documentation/foundation/nsdistantobjectrequest/conversation)

# conversation

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns the token object representing the conversation in which the receiver was created.

## Declaration

```objectivec
@property (retain, readonly) id conversation;
```

<a id="return-value"></a>

## Return Value

The token object representing the conversation in which the receiver was created.

<a id="discussion"></a>

## Discussion

If both ends of the distributed objects connection has [independentConversationQueueing](../nsconnection/independentconversationqueueing.md) set to [false](https://developer.apple.com/documentation/swift/false) (the default), the conversation object is always `nil`. Otherwise, it is either a proxy (or a copy) of the object created by the sender of the message or a locally created object, depending which end of the connection has independent queueing on.

## See Also

### Getting Information About a Request

- [connection](connection.md): Deprecated. Returns the `NSConnection` object involved in the request.
- [invocation](invocation.md): Deprecated. Returns the `NSInvocation` object for the request.
