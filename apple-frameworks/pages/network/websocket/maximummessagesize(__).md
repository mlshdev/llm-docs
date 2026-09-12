> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/websocket/maximummessagesize(_:)](https://developer.apple.com/documentation/network/websocket/maximummessagesize(_:))

# maximumMessageSize(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set the maximum allowed message size to be received by the WebSocket connection.

## Declaration

```swift
func maximumMessageSize(_ size: Int) -> WebSocket
```

## Parameters

- `size`: The maximum message size.

<a id="discussion"></a>

## Discussion

This does not limit the sending message size.

A maximum message size of 0 means there is no receive limit. The default maximum message size is 0.
