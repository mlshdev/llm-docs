> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/websocket/skiphandshake(_:)](https://developer.apple.com/documentation/network/websocket/skiphandshake(_:))

# skipHandshake(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Configure the WebSocket protocol to skip the opening handshake and begin framing data as soon as the underlying connection is established.

## Declaration

```swift
func skipHandshake(_ skip: Bool) -> WebSocket
```

## Parameters

- `skip`: True to skip the handshake. Defaults to false.

<a id="discussion"></a>

## Discussion

> **Note**

> This option should not be set when communicating with a generic WebSocket server or client. This option allows a custom handshake (or no handshake) to be implemented below the WebSocket layer when both client and server are coordinated.
