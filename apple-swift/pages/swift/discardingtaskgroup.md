> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/discardingtaskgroup](https://developer.apple.com/documentation/swift/discardingtaskgroup)

# DiscardingTaskGroup

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A discarding group that contains dynamically created child tasks.

## Declaration

```swift
@frozen struct DiscardingTaskGroup
```

<a id="overview"></a>

## Overview

To create a discarding task group, call the [withDiscardingTaskGroup(returning:isolation:body:)](withdiscardingtaskgroup%28returning_isolation_body_%29.md) method.

Don’t use a task group from outside the task where you created it. In most cases, the Swift type system prevents a task group from escaping like that because adding a child task to a task group is a mutating operation, and mutation operations can’t be performed from a concurrent execution context like a child task.

Refer to [TaskGroup](taskgroup.md) documentation for detailed discussion of semantics shared between all task groups.

<a id="Discarding-behavior"></a>

### Discarding behavior

A discarding task group eagerly discards and releases its child tasks as soon as they complete. This allows for the efficient releasing of memory used by those tasks, which are not retained for future `next()` calls, as would be the case with a [TaskGroup](taskgroup.md).

<a id="Cancellation-behavior"></a>

### Cancellation behavior

A discarding task group becomes canceled in one of the following ways:

- when [cancelAll()](discardingtaskgroup/cancelall%28%29.md) is invoked on it,
- when the [Task](task.md) running this task group is canceled.

Since a `DiscardingTaskGroup` is a structured concurrency primitive, cancellation is automatically propagated through all of its child-tasks (and their child tasks).

A canceled task group can still keep adding tasks, however they will start being immediately canceled, and may act accordingly to this. To avoid adding new tasks to an already canceled task group, use [addTaskUnlessCancelled(priority:operation:)](discardingtaskgroup/addtaskunlesscancelled%28priority_operation_%29.md) rather than the plain [addTask(priority:operation:)](discardingtaskgroup/addtask%28priority_operation_%29.md) which adds tasks unconditionally.

For information about the language-level concurrency model that `DiscardingTaskGroup` is part of, see [Concurrency](https://docs.swift.org/swift-book/LanguageGuide/Concurrency.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/).

> **See Also**

> [TaskGroup](taskgroup.md)

> **See Also**

> [ThrowingTaskGroup](throwingtaskgroup.md)

> **See Also**

> [ThrowingDiscardingTaskGroup](throwingdiscardingtaskgroup.md)

## Topics

### Instance Properties

- [isCancelled](discardingtaskgroup/iscancelled.md): A Boolean value that indicates whether the group was canceled.
- [isEmpty](discardingtaskgroup/isempty.md): A Boolean value that indicates whether the group has any remaining tasks.

### Instance Methods

- [addImmediateTask(name:priority:executorPreference:operation:)](discardingtaskgroup/addimmediatetask%28name_priority_executorpreference_operation_%29.md): Add a child task to the group and immediately start running it in the context of the calling thread/task.
- [addImmediateTaskUnlessCancelled(name:priority:executorPreference:operation:)](discardingtaskgroup/addimmediatetaskunlesscancelled%28name_priority_executorpreference_operation_%29.md): Add a child task to the group and immediately start running it in the context of the calling thread/task.
- [addTask(executorPreference:priority:operation:)](discardingtaskgroup/addtask%28executorpreference_priority_operation_%29.md): Adds a child task to the group.
- [addTask(name:executorPreference:priority:operation:)](discardingtaskgroup/addtask%28name_executorpreference_priority_operation_%29.md): Adds a child task to the group.
- [addTask(name:priority:operation:)](discardingtaskgroup/addtask%28name_priority_operation_%29.md): Adds a child task to the group.
- [addTask(priority:operation:)](discardingtaskgroup/addtask%28priority_operation_%29.md): Adds a child task to the group.
- [addTaskUnlessCancelled(executorPreference:priority:operation:)](discardingtaskgroup/addtaskunlesscancelled%28executorpreference_priority_operation_%29.md): Adds a child task to the group, unless the group has been canceled. Returns a boolean value indicating if the task was successfully added to the group or not.
- [addTaskUnlessCancelled(name:executorPreference:priority:operation:)](discardingtaskgroup/addtaskunlesscancelled%28name_executorpreference_priority_operation_%29.md): Adds a child task to the group, unless the group has been canceled. Returns a boolean value indicating if the task was successfully added to the group or not.
- [addTaskUnlessCancelled(name:priority:operation:)](discardingtaskgroup/addtaskunlesscancelled%28name_priority_operation_%29.md): Adds a child task to the group, unless the group has been canceled. Returns a boolean value indicating if the task was successfully added to the group or not.
- [addTaskUnlessCancelled(priority:operation:)](discardingtaskgroup/addtaskunlesscancelled%28priority_operation_%29.md): Adds a child task to the group, unless the group has been canceled. Returns a boolean value indicating if the task was successfully added to the group or not.
- [cancelAll()](discardingtaskgroup/cancelall%28%29.md): Cancel all of the remaining tasks in the group.

## Relationships

### Conforms To

- [BitwiseCopyable](bitwisecopyable.md)
- [Copyable](copyable.md)

## See Also

### Tasks

- [Task](task.md): A unit of asynchronous work.
- [TaskGroup](taskgroup.md): A group that contains dynamically created child tasks.
- [withTaskGroup(of:returning:isolation:body:)](withtaskgroup%28of_returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of child tasks.
- [ThrowingTaskGroup](throwingtaskgroup.md): A group that contains throwing, dynamically created child tasks.
- [withThrowingTaskGroup(of:returning:isolation:body:)](withthrowingtaskgroup%28of_returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of throwing child tasks.
- [TaskPriority](taskpriority.md): The priority of a task.
- [withDiscardingTaskGroup(returning:isolation:body:)](withdiscardingtaskgroup%28returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of child tasks.
- [ThrowingDiscardingTaskGroup](throwingdiscardingtaskgroup.md): A throwing discarding group that contains dynamically created child tasks.
- [withThrowingDiscardingTaskGroup(returning:isolation:body:)](withthrowingdiscardingtaskgroup%28returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of child tasks.
- [UnsafeCurrentTask](unsafecurrenttask.md): An unsafe reference to the current task.
