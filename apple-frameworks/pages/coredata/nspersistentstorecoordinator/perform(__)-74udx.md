> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/perform(_:)-74udx](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/perform(_:)-74udx)

# perform(\_:)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Executes the provided closure asynchronously on the coordinator’s queue and awaits the result.

## Declaration

```swift
@preconcurrency func perform<T>(_ block: @escaping @Sendable () throws -> T) async rethrows -> T
```

## Parameters

- `block`: The closure to execute.

## See Also

### Performing tasks

- [performAndWait(\_:)](performandwait%28__%29-15ude.md): Executes the provided closure on the coordinator’s queue and waits for it to finish.
- [perform(\_:)](perform%28__%29-7jqb.md): Deprecated. Executes the provided closure asynchronously on the coordinator’s queue.
- [performAndWait(\_:)](performandwait%28__%29-d3kq.md): Deprecated. Executes the provided closure on the coordinator’s queue and waits for it to finish.
- [execute(\_:with:)](execute%28__with_%29.md): Executes the specified request on each of the coordinator’s persistent stores.
