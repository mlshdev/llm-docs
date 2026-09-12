> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/cancel()](https://developer.apple.com/documentation/network/nwconnection/cancel())

# cancel()

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Cancels the connection and gracefully disconnects any established network protocols.

## Declaration

```swift
final func cancel()
```

## See Also

### Canceling Connections

- [forceCancel()](forcecancel%28%29.md): Cancels the connection and immediately disconnects any established network protocols.
- [cancelCurrentEndpoint()](cancelcurrentendpoint%28%29.md): Causes the current endpoint to be rejected, allowing the connection to try another resolved address.
