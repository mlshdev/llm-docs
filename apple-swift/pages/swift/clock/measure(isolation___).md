> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/clock/measure(isolation:_:)](https://developer.apple.com/documentation/swift/clock/measure(isolation:_:))

# measure(isolation:\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

> Replaced by nonisolated(nonsending) overload

## Declaration

```swift
func measure(isolation: isolated (any Actor)? = #isolation, _ work: () async throws -> Void) async rethrows -> Self.Instant.Duration
```
