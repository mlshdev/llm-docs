> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/websocket/additionalheaders(_:)](https://developer.apple.com/documentation/network/websocket/additionalheaders(_:))

# additionalHeaders(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set additional HTTP header fields to be sent by the client during the WebSocket handshake.

## Declaration

```swift
func additionalHeaders(_ headers: [(name: String, value: String)]) -> WebSocket
```

## Parameters

- `headers`: An array of HTTP header field names and values.

<a id="discussion"></a>

## Discussion

This can be used for custom protocols and cookies. Multiple headers of the same name are not allowed, and the header will replaced by the most recently set value.

> **Note**

> This function will only take effect on WebSocket clients.
