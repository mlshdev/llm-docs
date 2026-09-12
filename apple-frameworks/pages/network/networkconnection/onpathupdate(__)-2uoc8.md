> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkconnection/onpathupdate(_:)-2uoc8](https://developer.apple.com/documentation/network/networkconnection/onpathupdate(_:)-2uoc8)

# onPathUpdate(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Set a closure to be called when the connection’s path has changed, which may be called multiple times until the connection is cancelled.

## Declaration

```swift
@discardableResult final func onPathUpdate(_ handler: @escaping @isolated(any) @Sendable (NetworkConnection<ApplicationProtocol>, NWPath) -> Void) -> Self
```

<a id="discussion"></a>

## Discussion

This closure will inherit the isolation domain of the caller.
