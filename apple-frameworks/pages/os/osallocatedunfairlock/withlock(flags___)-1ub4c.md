> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/osallocatedunfairlock/withlock(flags:_:)-1ub4c](https://developer.apple.com/documentation/os/osallocatedunfairlock/withlock(flags:_:)-1ub4c)

# withLock(flags:\_:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
func withLock<R>(flags: OSAllocatedUnfairLockFlags, _ body: @Sendable (inout State) throws -> R) rethrows -> R where R : Sendable
```
