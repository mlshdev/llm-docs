> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnectiongroup/message/path](https://developer.apple.com/documentation/network/nwconnectiongroup/message/path)

# path

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The network path on which you receive the message.

## Declaration

```swift
var path: NWPath? { get }
```

## See Also

### Inspecting Received Messages

- [remoteEndpoint](remoteendpoint.md): The endpoint that originates the message you receive.
- [localEndpoint](localendpoint.md): The local address and port you use to receive the message.
