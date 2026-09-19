> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/networkconnection/onstateupdate(_:)

# onStateUpdate(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set a closure to be called when the connection’s state changes, which may be called multiple times until the connection is cancelled.

## Declaration

```swift
@discardableResult final func onStateUpdate(_ handler: @escaping @isolated(any) @Sendable (NetworkConnection<ApplicationProtocol>, NetworkChannel<ApplicationProtocol>.State) -> Void) -> Self
```

<a id="discussion"></a>

## Discussion

This closure will inherit the isolation domain of the caller.
