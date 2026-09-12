> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnectiongroup/message/localendpoint](https://developer.apple.com/documentation/network/nwconnectiongroup/message/localendpoint)

# localEndpoint

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The local address and port you use to receive the message.

## Declaration

```swift
var localEndpoint: NWEndpoint? { get }
```

## See Also

### Inspecting Received Messages

- [remoteEndpoint](remoteendpoint.md): The endpoint that originates the message you receive.
- [path](path.md): The network path on which you receive the message.
