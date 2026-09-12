> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/contentcontext/defaultmessage](https://developer.apple.com/documentation/network/nwconnection/contentcontext/defaultmessage)

# defaultMessage

**Framework:** Network  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A static context representing a message with default properties.

## Declaration

```swift
static let defaultMessage: NWConnection.ContentContext
```

<a id="Discussion"></a>

## Discussion

You should use this context for sending content unless there is a reason to override some values.

## See Also

### Using Constant Send Contexts

- [finalMessage](finalmessage.md): A static context that’s marked as the final message in a connection.
- [defaultStream](defaultstream.md): A static context representing the total stream of bytes on a connection.
