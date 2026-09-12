> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/cancelcurrentendpoint()](https://developer.apple.com/documentation/network/nwconnection/cancelcurrentendpoint())

# cancelCurrentEndpoint()

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Causes the current endpoint to be rejected, allowing the connection to try another resolved address.

## Declaration

```swift
final func cancelCurrentEndpoint()
```

<a id="Discussion"></a>

## Discussion

Protocols that do not have handshakes, such as UDP, do not allow connections to validate connectivity on their own. Cancelling an endpoint allows you to indicate that a certain endpoint should be rejected due to a lack of valid response. If other addresses were resolved for the remote endpoint, those will be attempted next.

## See Also

### Canceling Connections

- [cancel()](cancel%28%29.md): Cancels the connection and gracefully disconnects any established network protocols.
- [forceCancel()](forcecancel%28%29.md): Cancels the connection and immediately disconnects any established network protocols.
