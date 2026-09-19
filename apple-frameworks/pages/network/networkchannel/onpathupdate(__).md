> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/networkchannel/onpathupdate(_:)

# onPathUpdate(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Set a closure to be called when the connection’s path has changed, which may be called multiple times until the connection is cancelled.

## Declaration

```swift
@discardableResult func onPathUpdate(_ handler: @escaping @isolated(any) @Sendable (Self, NWPath) -> Void) -> Self
```

<a id="discussion"></a>

## Discussion

This closure will inherit the isolation domain of the caller.
