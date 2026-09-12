> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networklistener/run(_:)-4iov3](https://developer.apple.com/documentation/network/networklistener/run(_:)-4iov3)

# run(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Run the listener and receive incoming connections.

## Declaration

```swift
final func run(_ handler: @escaping @isolated(any) @Sendable (NetworkConnection<ApplicationProtocol>) async throws -> Void) async throws
```

## Parameters

- `handler`: A handler to receive incoming connections.

<a id="discussion"></a>

## Discussion

When the listener state moves to ready, the listener is registered with the system and can receive incoming connections.

`run()` should only be called once on a listener, and multiple calls to `run()` will throw an exception.

The closure inherits the isolation domain of the caller.
