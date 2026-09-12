> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/osallocatedunfairlock/withlockifavailableunchecked(_:)-15q0y](https://developer.apple.com/documentation/os/osallocatedunfairlock/withlockifavailableunchecked(_:)-15q0y)

# withLockIfAvailableUnchecked(\_:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
func withLockIfAvailableUnchecked<R>(_ body: (inout State) throws -> R) rethrows -> R?
```
