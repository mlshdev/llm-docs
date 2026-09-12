> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdistantobjectrequest/connection](https://developer.apple.com/documentation/foundation/nsdistantobjectrequest/connection)

# connection

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns the `NSConnection` object involved in the request.

## Declaration

```objectivec
@property (retain, readonly) NSConnection * connection;
```

<a id="return-value"></a>

## Return Value

The `NSConnection` object involved in the request.

## See Also

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)

### Getting Information About a Request

- [conversation](conversation.md): Deprecated. Returns the token object representing the conversation in which the receiver was created.
- [invocation](invocation.md): Deprecated. Returns the `NSInvocation` object for the request.
