> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/scheduledtasktype/enqueued

# NSManagedObjectContext.ScheduledTaskType.enqueued

**Framework:** Core Data  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The enqueued scheduled task type.

## Declaration

```swift
case enqueued
```

<a id="Discussion"></a>

## Discussion

Enqueued tasks execute asynchronously on the context’s queue. An enqueued task encapsulates an autorelease pool and a call to [processPendingChanges()](../processpendingchanges%28%29.md), and its behavior is analogous to [perform(\_:)](../perform%28__%29.md). The context’s queue executes tasks in the order you add them.

## See Also

### Scheduled Task Types

- [NSManagedObjectContext.ScheduledTaskType.immediate](immediate.md): The immediate scheduled task type.
