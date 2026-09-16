> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/continuousclock/measure(_:)-9npzl

# measure(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Measure the elapsed time to execute an asynchronous closure.

## Declaration

```swift
nonisolated(nonsending) func measure(_ work: nonisolated(nonsending) () async throws -> Void) async rethrows -> Self.Instant.Duration
```

<a id="discussion"></a>

## Discussion

```swift
  let clock = ContinuousClock()
  let elapsed = await clock.measure {
     await someWork()
  }
```
