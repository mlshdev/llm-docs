> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/contentcontext/defaultstream](https://developer.apple.com/documentation/network/nwconnection/contentcontext/defaultstream)

# defaultStream

**Framework:** Network  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A static context representing the total stream of bytes on a connection.

## Declaration

```swift
static let defaultStream: NWConnection.ContentContext
```

<a id="Discussion"></a>

## Discussion

Once this context is used for sending, and the send is marked as complete, no more data can be sent on the connection.

## See Also

### Using Constant Send Contexts

- [defaultMessage](defaultmessage.md): A static context representing a message with default properties.
- [finalMessage](finalmessage.md): A static context that’s marked as the final message in a connection.
