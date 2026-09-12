> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkbrowser/onstateupdate(_:)](https://developer.apple.com/documentation/network/networkbrowser/onstateupdate(_:))

# onStateUpdate(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set a closure to be called when the browser’s state changes.

## Declaration

```swift
@discardableResult final func onStateUpdate(_ handler: @escaping @isolated(any) @Sendable (NetworkBrowser<Provider>, NetworkBrowser<Provider>.State) -> Void) -> Self
```

<a id="discussion"></a>

## Discussion

The closure may be called multiple times until the browser is cancelled.

The closure inherits the isolation domain of the caller.
