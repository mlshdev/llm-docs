> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networklistener/onstateupdate(_:)](https://developer.apple.com/documentation/network/networklistener/onstateupdate(_:))

# onStateUpdate(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set a closure to be called when the listener’s state changes.

## Declaration

```swift
@discardableResult final func onStateUpdate(_ handler: @escaping @isolated(any) @Sendable (NetworkListener<ApplicationProtocol>, NetworkListener<ApplicationProtocol>.State) -> Void) -> Self
```

## Parameters

- `handler`: A handler to be called with state updates.

<a id="discussion"></a>

## Discussion

The closure may be called multiple times until the listener is cancelled.

The closure inherits the isolation domain of the caller.
