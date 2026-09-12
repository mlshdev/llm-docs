> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/performandwait(_:)-6aaf1](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/performandwait(_:)-6aaf1)

# performAndWait(\_:)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Submits a closure to the context’s queue for synchronous execution.

## Declaration

```swift
@preconcurrency nonisolated func performAndWait<T>(_ block: @Sendable () throws -> T) rethrows -> T
```

## Parameters

- `block`: The closure to perform.

<a id="Discussion"></a>

## Discussion

This method supports *reentrancy* — meaning it’s safe to call the method again, from within the closure, before the previous invocation completes.

## See Also

### Performing block operations

- [perform(\_:)](perform%28__%29.md): Asynchronously performs the specified closure on the context’s queue.
- [perform(schedule:\_:)](perform%28schedule___%29.md): Submits a closure to the context’s queue for asynchronous execution.
- [performAndWait(\_:)](performandwait%28__%29-ypye.md): Synchronously performs the specified closure on the context’s queue.
- [NSManagedObjectContext.ScheduledTaskType](scheduledtasktype.md): The different types of scheduled tasks.
