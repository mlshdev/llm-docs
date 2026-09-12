> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchgroup/notify(qos:flags:queue:execute:)](https://developer.apple.com/documentation/dispatch/dispatchgroup/notify(qos:flags:queue:execute:))

# notify(qos:flags:queue:execute:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Schedules the submission of a block with the specified attributes to a queue when all tasks in the current group have finished executing.

## Declaration

```swift
func notify(qos: DispatchQoS = .unspecified, flags: DispatchWorkItemFlags = [], queue: DispatchQueue, execute work: @escaping () -> Void)
```

## Parameters

- `qos`: The quality of service class for the work to be performed.
- `flags`: Options for how the work is performed.

  For possible values, see [DispatchWorkItemFlags](../dispatchworkitemflags.md).
- `queue`: The queue to which the supplied block is submitted when the group completes.
- `work`: The work to be performed on the dispatch queue when the group is completed.

<a id="Discussion"></a>

## Discussion

This function schedules a notification block to be submitted to the specified queue when all blocks associated with the dispatch group have completed. If the group is empty (no block objects are associated with the dispatch group), the notification block object is submitted immediately. When the notification block is submitted, the group is empty.

## See Also

### Adding a Completion Handler

- [notify(queue:work:)](notify%28queue_work_%29.md): Schedules the submission of a block to a queue when all tasks in the current group have finished executing.
