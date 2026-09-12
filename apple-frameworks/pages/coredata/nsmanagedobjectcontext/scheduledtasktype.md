> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/scheduledtasktype](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/scheduledtasktype)

# NSManagedObjectContext.ScheduledTaskType

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The different types of scheduled tasks.

## Declaration

```swift
enum ScheduledTaskType
```

## Topics

### Scheduled Task Types

- [NSManagedObjectContext.ScheduledTaskType.enqueued](scheduledtasktype/enqueued.md): The enqueued scheduled task type.
- [NSManagedObjectContext.ScheduledTaskType.immediate](scheduledtasktype/immediate.md): The immediate scheduled task type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Performing block operations

- [perform(\_:)](perform%28__%29.md): Asynchronously performs the specified closure on the context’s queue.
- [perform(schedule:\_:)](perform%28schedule___%29.md): Submits a closure to the context’s queue for asynchronous execution.
- [performAndWait(\_:)](performandwait%28__%29-ypye.md): Synchronously performs the specified closure on the context’s queue.
- [performAndWait(\_:)](performandwait%28__%29-6aaf1.md): Submits a closure to the context’s queue for synchronous execution.
