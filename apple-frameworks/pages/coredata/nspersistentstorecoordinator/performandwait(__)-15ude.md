> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/performandwait(_:)-15ude](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/performandwait(_:)-15ude)

# performAndWait(\_:)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Executes the provided closure on the coordinator’s queue and waits for it to finish.

## Declaration

```swift
@preconcurrency func performAndWait<T>(_ block: @Sendable () throws -> T) rethrows -> T
```

## Parameters

- `block`: The closure to execute.

## See Also

### Performing tasks

- [perform(\_:)](perform%28__%29-74udx.md): Executes the provided closure asynchronously on the coordinator’s queue and awaits the result.
- [perform(\_:)](perform%28__%29-7jqb.md): Deprecated. Executes the provided closure asynchronously on the coordinator’s queue.
- [performAndWait(\_:)](performandwait%28__%29-d3kq.md): Deprecated. Executes the provided closure on the coordinator’s queue and waits for it to finish.
- [execute(\_:with:)](execute%28__with_%29.md): Executes the specified request on each of the coordinator’s persistent stores.
