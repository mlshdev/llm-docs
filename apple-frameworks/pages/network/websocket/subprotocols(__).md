> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/websocket/subprotocols(_:)](https://developer.apple.com/documentation/network/websocket/subprotocols(_:))

# subprotocols(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set the list of supported application protocols that will be presented to a WebSocket server during connection establishment.

## Declaration

```swift
func subprotocols(_ subprotocols: [String]) -> WebSocket
```

## Parameters

- `subprotocols`: An array of subprotocol strings.

<a id="discussion"></a>

## Discussion

> **Note**

> This function will only take effect on WebSocket clients.
