> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/discardingtaskgroup/addtaskunlesscancelled(name:executorpreference:priority:operation:)](https://developer.apple.com/documentation/swift/discardingtaskgroup/addtaskunlesscancelled(name:executorpreference:priority:operation:))

# addTaskUnlessCancelled(name:executorPreference:priority:operation:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Adds a child task to the group, unless the group has been canceled. Returns a boolean value indicating if the task was successfully added to the group or not.

## Declaration

```swift
mutating func addTaskUnlessCancelled(name: String?, executorPreference taskExecutor: (any TaskExecutor)? = nil, priority: TaskPriority? = nil, operation: sending @escaping @isolated(any) () async -> Void) -> Bool
```

## Parameters

- `name`: Human readable name of this task.
- `taskExecutor`: The task executor that the child task should be started on and keep using. Explicitly passing `nil` as the executor preference is equivalent to calling the `addTaskUnlessCancelled` method without a preference, and effectively means to inherit the outer context’s executor preference. You can also pass the [globalConcurrentExecutor](../globalconcurrentexecutor.md) global executor explicitly.
- `priority`: The priority of the operation task. Omit this parameter or pass `nil` to inherit the task group’s base priority.
- `operation`: The operation to execute as part of the task group.

<a id="return-value"></a>

## Return Value

`true` if the child task was added to the group; otherwise `false`.
