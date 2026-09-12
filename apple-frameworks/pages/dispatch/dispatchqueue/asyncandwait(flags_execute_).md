> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/asyncandwait(flags:execute:)](https://developer.apple.com/documentation/dispatch/dispatchqueue/asyncandwait(flags:execute:))

# asyncAndWait(flags:execute:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS · watchOS 5.0+

## Declaration

```swift
func asyncAndWait<T>(flags: DispatchWorkItemFlags, execute work: () throws -> T) rethrows -> T
```
