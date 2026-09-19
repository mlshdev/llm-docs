> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/os/osallocatedunfairlock/withlockifavailableunchecked(_:)-15q0y

# withLockIfAvailableUnchecked(\_:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
func withLockIfAvailableUnchecked<R>(_ body: (inout State) throws -> R) rethrows -> R?
```
