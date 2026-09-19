> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwconnection/forcecancel()

# forceCancel()

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Cancels the connection and immediately disconnects any established network protocols.

## Declaration

```swift
final func forceCancel()
```

## See Also

### Canceling Connections

- [cancel()](cancel%28%29.md): Cancels the connection and gracefully disconnects any established network protocols.
- [cancelCurrentEndpoint()](cancelcurrentendpoint%28%29.md): Causes the current endpoint to be rejected, allowing the connection to try another resolved address.
