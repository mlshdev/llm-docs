> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdistantobjectrequest/invocation](https://developer.apple.com/documentation/foundation/nsdistantobjectrequest/invocation)

# invocation

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns the `NSInvocation` object for the request.

## Declaration

```objectivec
@property (retain, readonly) NSInvocation * invocation;
```

<a id="return-value"></a>

## Return Value

The `NSInvocation` object for the request.

## See Also

### Getting Information About a Request

- [connection](connection.md): Deprecated. Returns the `NSConnection` object involved in the request.
- [conversation](conversation.md): Deprecated. Returns the token object representing the conversation in which the receiver was created.
