> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/clock/sleep(for:tolerance:)

# sleep(for:tolerance:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Suspends for the given duration.

## Declaration

```swift
func sleep(for duration: Self.Instant.Duration, tolerance: Self.Instant.Duration? = nil) async throws
```

<a id="discussion"></a>

## Discussion

Prefer to use the `sleep(until:tolerance:)` method on `Clock` if you have access to an absolute instant.
