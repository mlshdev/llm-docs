> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolwebsocket/metadata/additionalserverheaders](https://developer.apple.com/documentation/network/nwprotocolwebsocket/metadata/additionalserverheaders)

# additionalServerHeaders

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Additional HTTP headers sent by the server during the WebSocket handshake.

## Declaration

```swift
var additionalServerHeaders: [(String, String)]? { get }
```

## See Also

### Inspecting Handshake Results

- [selectedSubprotocol](selectedsubprotocol.md): The subprotocol selected by the server during the WebSocket handshake.
