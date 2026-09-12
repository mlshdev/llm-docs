> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnectiongroup/message/reply(content:message:)](https://developer.apple.com/documentation/network/nwconnectiongroup/message/reply(content:message:))

# reply(content:message:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sends a reply to the specific endpoint that originates a group message you receive.

## Declaration

```swift
func reply(content: Data?, message: NWConnectionGroup.Message = .default)
```

## See Also

### Replying to Received Messages

- [extractConnection()](extractconnection%28%29.md): Converts a message you receive from an endpoint into a connection object that you use for long-term communication with that endpoint.
