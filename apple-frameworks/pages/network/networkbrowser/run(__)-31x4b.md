> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkbrowser/run(_:)-31x4b](https://developer.apple.com/documentation/network/networkbrowser/run(_:)-31x4b)

# run(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Run the browser and receive updates when when the set of discovered endpoints change.

## Declaration

```swift
final func run(_ handler: @escaping @isolated(any) @Sendable ([Provider.Endpoint]) async throws -> Void) async throws
```

## Parameters

- `handler`: The closure to which discovered endpoints will be delivered. Return `.continue` from this closure to continue browsing, `finish(endpoints)` to return the discovered endpoints from `run()`, and do not return anything to browse forever.

<a id="discussion"></a>

## Discussion

Starts the browser, which will cause the browser to begin browsing for services on the network. A `stateUpdateHandler` may be used to determine when the state changes. If the browser fails, the state will transition to failed with an associated `NWError` value. Otherwise, the state will transition to ready. A failed state will cause `run()` to throw an exception.

Return `.continue` from the closure passed to `run()` if the desired endpoints have not been found to continue browsing. Return `.finish(endpoints)` if the desired endpoints have been found. The value associated with `.finish` will be returned from `run()`. To browse forever, do not return any value from the closure.

`run()` should only be called once on a browser, and multiple calls to `run()` will throw exceptions.
