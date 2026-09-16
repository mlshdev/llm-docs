> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/continuousclock/measure(isolation:_:)

# measure(isolation:\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

> Replaced by nonisolated(nonsending) overload

## Declaration

```swift
func measure(isolation: isolated (any Actor)? = #isolation, _ work: () async throws -> Void) async rethrows -> Self.Instant.Duration
```
