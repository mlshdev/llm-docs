> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkbrowser/run(_:)-wqyo](https://developer.apple.com/documentation/network/networkbrowser/run(_:)-wqyo)

# run(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
final func run<Return>(_ handler: @escaping @isolated(any) @Sendable ([Provider.Endpoint]) async throws -> NetworkBrowser<Provider>.RunResult<Return>) async throws -> Return
```
