> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnectiongroup/message/extractconnection()](https://developer.apple.com/documentation/network/nwconnectiongroup/message/extractconnection())

# extractConnection()

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Converts a message you receive from an endpoint into a connection object that you use for long-term communication with that endpoint.

## Declaration

```swift
func extractConnection() -> NWConnection?
```

## See Also

### Replying to Received Messages

- [reply(content:message:)](reply%28content_message_%29.md): Sends a reply to the specific endpoint that originates a group message you receive.
