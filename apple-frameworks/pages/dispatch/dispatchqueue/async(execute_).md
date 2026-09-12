> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/async(execute:)](https://developer.apple.com/documentation/dispatch/dispatchqueue/async(execute:))

# async(execute:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

Schedules a work item for immediate execution, and returns immediately.

## Declaration

```swift
func async(execute workItem: DispatchWorkItem)
```

## Parameters

- `workItem`: The work item containing the task to execute. For information on how to create this work item, see [DispatchWorkItem](../dispatchworkitem.md).

## See Also

### Executing Tasks Asynchronously

- [asyncAfter(deadline:execute:)](asyncafter%28deadline_execute_%29.md): Schedules a work item for execution at the specified time, and returns immediately.
- [asyncAfter(deadline:qos:flags:execute:)](asyncafter%28deadline_qos_flags_execute_%29.md): Schedules a block for execution using the specified attributes, and returns immediately.
- [asyncAfter(wallDeadline:execute:)](asyncafter%28walldeadline_execute_%29.md): Schedules a work item for execution after the specified time, and returns immediately.
- [asyncAfter(wallDeadline:qos:flags:execute:)](asyncafter%28walldeadline_qos_flags_execute_%29.md): Schedules a block for execution using the specified attributes, and returns immediately.
