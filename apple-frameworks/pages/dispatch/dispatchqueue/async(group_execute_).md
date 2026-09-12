> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/async(group:execute:)](https://developer.apple.com/documentation/dispatch/dispatchqueue/async(group:execute:))

# async(group:execute:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

Schedules a work item asynchronously for execution and associates it with the specified dispatch group.

## Declaration

```swift
func async(group: DispatchGroup, execute workItem: DispatchWorkItem)
```

## Parameters

- `group`: The dispatch group to associate with the work item. This parameter cannot be `NULL`.
- `workItem`: The work item containing the task to execute. For information on how to create this work item, see [DispatchWorkItem](../dispatchworkitem.md).

<a id="Discussion"></a>

## Discussion

This method adds the work item to the group before scheduling it on the current queue.

## See Also

### Dispatching Work to Groups

- [async(group:qos:flags:execute:)](async%28group_qos_flags_execute_%29.md): Schedules a block asynchronously for execution and optionally associates it with a dispatch group.
