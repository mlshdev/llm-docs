> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/scheduledtasktype/immediate

# NSManagedObjectContext.ScheduledTaskType.immediate

**Framework:** Core Data  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The immediate scheduled task type.

## Declaration

```swift
case immediate
```

<a id="Discussion"></a>

## Discussion

Immediate tasks execute right away if the context operates within the current scope; otherwise, the context enqueues the task. Tasks of this type are reentrant, nonblocking, and continuation-aware.

## See Also

### Scheduled Task Types

- [NSManagedObjectContext.ScheduledTaskType.enqueued](enqueued.md): The enqueued scheduled task type.
