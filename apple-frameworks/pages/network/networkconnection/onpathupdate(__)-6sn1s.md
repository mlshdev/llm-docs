> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkconnection/onpathupdate(_:)-6sn1s](https://developer.apple.com/documentation/network/networkconnection/onpathupdate(_:)-6sn1s)

# onPathUpdate(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set a closure to be called when the connection’s path has changed, which may be called multiple times until the connection is cancelled.

## Declaration

```swift
@discardableResult final func onPathUpdate(_ handler: @escaping @isolated(any) @Sendable (NetworkConnection<ApplicationProtocol>, NWPath) -> Void) -> Self
```

<a id="discussion"></a>

## Discussion

This closure will inherit the isolation domain of the caller.
