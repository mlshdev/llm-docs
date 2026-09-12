> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/osallocatedunfairlock/withlockunchecked(flags:_:)-8cv64](https://developer.apple.com/documentation/os/osallocatedunfairlock/withlockunchecked(flags:_:)-8cv64)

# withLockUnchecked(flags:\_:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
func withLockUnchecked<R>(flags: OSAllocatedUnfairLockFlags, _ body: (inout State) throws -> R) rethrows -> R
```
