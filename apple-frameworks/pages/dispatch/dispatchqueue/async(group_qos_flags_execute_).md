> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/async(group:qos:flags:execute:)](https://developer.apple.com/documentation/dispatch/dispatchqueue/async(group:qos:flags:execute:))

# async(group:qos:flags:execute:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Schedules a block asynchronously for execution and optionally associates it with a dispatch group.

## Declaration

```swift
@preconcurrency func async(group: DispatchGroup? = nil, qos: DispatchQoS = .unspecified, flags: DispatchWorkItemFlags = [], execute work: @escaping @Sendable () -> Void)
```

## Parameters

- `group`: The dispatch group to associate with the work item. If you specify `NULL`, the block is not associated with a group.
- `qos`: The quality-of-service class to use when executing the block. This parameter determines the priority with which the block is scheduled and executed. For a list of possible values, see [DispatchQoS](../dispatchqos.md).
- `flags`: Additional attributes to apply when executing the block. For a list of possible values, see [DispatchWorkItemFlags](../dispatchworkitemflags.md).
- `work`: The block containing the work to perform. This block has no return value and no parameters.

## See Also

### Dispatching Work to Groups

- [async(group:execute:)](async%28group_execute_%29.md): Schedules a work item asynchronously for execution and associates it with the specified dispatch group.
