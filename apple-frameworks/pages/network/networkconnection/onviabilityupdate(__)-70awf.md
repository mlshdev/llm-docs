> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkconnection/onviabilityupdate(_:)-70awf](https://developer.apple.com/documentation/network/networkconnection/onviabilityupdate(_:)-70awf)

# onViabilityUpdate(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set a closure to be called when the connection’s viability changes, which may be called multiple times until the connection is cancelled.

## Declaration

```swift
@discardableResult final func onViabilityUpdate(_ handler: @escaping @isolated(any) @Sendable (NetworkConnection<ApplicationProtocol>, Bool) -> Void) -> Self
```

<a id="discussion"></a>

## Discussion

Connections that are not currently viable do not have a route, and packets will not be sent or received. There is a possibility that the connection will become viable again when network connectivity changes.

This closure will inherit the isolation domain of the caller.
