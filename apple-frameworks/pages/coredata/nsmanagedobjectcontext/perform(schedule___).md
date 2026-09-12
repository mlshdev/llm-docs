> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/perform(schedule:_:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/perform(schedule:_:))

# perform(schedule:\_:)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Submits a closure to the context’s queue for asynchronous execution.

## Declaration

```swift
@preconcurrency nonisolated func perform<T>(schedule: NSManagedObjectContext.ScheduledTaskType = .immediate, _ block: @escaping @Sendable () throws -> T) async rethrows -> T
```

## Parameters

- `schedule`: The required execution schedule. For more information, see [NSManagedObjectContext.ScheduledTaskType](scheduledtasktype.md).
- `block`: The closure to perform.

## See Also

### Performing block operations

- [perform(\_:)](perform%28__%29.md): Asynchronously performs the specified closure on the context’s queue.
- [performAndWait(\_:)](performandwait%28__%29-ypye.md): Synchronously performs the specified closure on the context’s queue.
- [performAndWait(\_:)](performandwait%28__%29-6aaf1.md): Submits a closure to the context’s queue for synchronous execution.
- [NSManagedObjectContext.ScheduledTaskType](scheduledtasktype.md): The different types of scheduled tasks.
