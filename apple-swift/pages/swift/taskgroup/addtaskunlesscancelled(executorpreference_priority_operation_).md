> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/taskgroup/addtaskunlesscancelled(executorpreference:priority:operation:)](https://developer.apple.com/documentation/swift/taskgroup/addtaskunlesscancelled(executorpreference:priority:operation:))

# addTaskUnlessCancelled(executorPreference:priority:operation:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Adds a child task to the group, unless the group has been canceled. Returns a boolean value indicating if the task was successfully added to the group or not.

## Declaration

```swift
mutating func addTaskUnlessCancelled(executorPreference taskExecutor: (any TaskExecutor)? = nil, priority: TaskPriority? = nil, operation: sending @escaping @isolated(any) () async -> ChildTaskResult) -> Bool
```

## Parameters

- `taskExecutor`: The task executor that the child task should be started on and keep using. Explicitly passing `nil` as the executor preference is equivalent to calling the `addTaskUnlessCancelled` method without a preference, and effectively means to inherit the outer context’s executor preference. You can also pass the [globalConcurrentExecutor](../globalconcurrentexecutor.md) global executor explicitly.
- `priority`: The priority of the operation task. Omit this parameter or pass `nil` to inherit the task group’s base priority.
- `operation`: The operation to execute as part of the task group.

<a id="return-value"></a>

## Return Value

`true` if the child task was added to the group; otherwise `false`.

## See Also

### Adding Tasks to a Task Group

- [addTask(priority:operation:)](addtask%28priority_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Adds a child task to the group.
- [addTask(name:priority:operation:)](addtask%28name_priority_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Adds a child task to the group.
- [addTask(executorPreference:priority:operation:)](addtask%28executorpreference_priority_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Adds a child task to the group.
- [addTask(name:executorPreference:priority:operation:)](addtask%28name_executorpreference_priority_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Adds a child task to the group.
- [addTaskUnlessCancelled(name:executorPreference:priority:operation:)](addtaskunlesscancelled%28name_executorpreference_priority_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Adds a child task to the group, unless the group has been canceled. Returns a boolean value indicating if the task was successfully added to the group or not.
- [addTaskUnlessCancelled(name:priority:operation:)](addtaskunlesscancelled%28name_priority_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Adds a child task to the group, unless the group has been canceled. Returns a boolean value indicating if the task was successfully added to the group or not.
- [addTaskUnlessCancelled(priority:operation:)](addtaskunlesscancelled%28priority_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Adds a child task to the group, unless the group has been canceled. Returns a boolean value indicating if the task was successfully added to the group or not.
- [addImmediateTask(name:priority:executorPreference:operation:)](addimmediatetask%28name_priority_executorpreference_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Add a child task to the group and immediately start running it in the context of the calling thread/task.
- [addImmediateTaskUnlessCancelled(name:priority:executorPreference:operation:)](addimmediatetaskunlesscancelled%28name_priority_executorpreference_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Add a child task to the group and immediately start running it in the context of the calling thread/task.
