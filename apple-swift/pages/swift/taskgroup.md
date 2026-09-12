> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/taskgroup](https://developer.apple.com/documentation/swift/taskgroup)

# TaskGroup

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A group that contains dynamically created child tasks.

## Declaration

```swift
@frozen struct TaskGroup<ChildTaskResult> where ChildTaskResult : Sendable
```

<a id="overview"></a>

## Overview

To create a task group, call the `withTaskGroup(of:returning:body:)` method.

Don’t use a task group from outside the task where you created it. In most cases, the Swift type system prevents a task group from escaping like that because adding a child task to a task group is a mutating operation, and mutation operations can’t be performed from a concurrent execution context like a child task.

<a id="Structured-Concurrency"></a>

## Structured Concurrency

Structured concurrency is a way to organize your program, and tasks, in such a way that tasks don’t outlive the scope in which they are created. Within a structured task hierarchy, no child task remains running longer than its parent task. This guarantee simplifies reasoning about resource usage, and is a powerful mechanism that you can use to write well-behaved concurrent programs.

A task group is the primary way to create structured concurrency tasks in Swift. Another way of creating structured tasks is an `async let` declaration.

Structured concurrency tasks are often called “child tasks” because of their relationship with their parent task. A child task inherits the parent’s priority, task-local values, and is structured in the sense that its lifetime never exceeds the lifetime of the parent task.

A task group *always* waits for all child tasks to complete before it’s destroyed. Specifically, `with...TaskGroup` APIs don’t return until all the child tasks created in the group’s scope have completed running.

Structured concurrency APIs (including task groups and `async let`), *always* waits for the completion of tasks contained within their scope before returning. Specifically, this means that even if you await a single task result and return it from a `withTaskGroup` function body, the group automatically waits for all the remaining tasks before returning:

```swift
func takeFirst(actions: [@Sendable () -> Int]) async -> Int? {
    await withTaskGroup { group in
        for action in actions {
            group.addTask { action() }
        }

        return await group.next() // return the first action to complete
    } // the group will ALWAYS await the completion of all the actions (!)
}
```

In the above example, even though the code returns the first collected integer from all actions added to the task group, the task group *always*, automatically, waits for the completion of all the resulting tasks.

You can use `group.cancelAll()` to signal cancellation to the remaining in-progress tasks, however this doesn’t interrupt their execution automatically. Rather, the child tasks need to cooperatively react to the cancellation, and return early if that’s possible.

To create unstructured concurrency tasks, you can use `Task.init`, `Task.detached` or `Task.immediate`.

<a id="Task-Group-Cancellation"></a>

## Task Group Cancellation

You can cancel a task group and all of its child tasks by calling the `cancelAll()` method on the task group, or by canceling the task in which the group is running.

If you call `addTask(name:priority:operation:)` to create a new task in a canceled group, that task is immediately canceled after creation. Alternatively, you can call `addTaskUnlessCancelled(name:priority:operation:)`, which doesn’t create the task if the group has already been canceled. Choosing between these two functions lets you control how to react to cancellation within a group: some child tasks need to run regardless of cancellation, but other tasks are better not even being created when you know they can’t produce useful results.

In nonthrowing task groups the tasks you add to a group with this method are nonthrowing, those tasks can’t respond to cancellation by throwing `CancellationError`. The tasks must handle cancellation in some other way, such as returning the work completed so far, returning an empty result, or returning `nil`. For tasks that need to handle cancellation by throwing an error, use the `withThrowingTaskGroup(of:returning:body:)` method instead.

<a id="Task-execution-order"></a>

### Task execution order

Tasks added to a task group execute concurrently, and may be scheduled in any order.

<a id="Cancellation-behavior"></a>

### Cancellation behavior

A task group becomes canceled in one of the following ways:

- When [cancelAll()](taskgroup/cancelall%28%29.md) is invoked on it.
- When the [Task](task.md) running this task group is canceled.

Because a `TaskGroup` is a structured concurrency primitive, cancellation is automatically propagated through all of its child-tasks (and their child tasks).

A canceled task group can still keep adding tasks, however they will start being immediately canceled, and might respond accordingly. To avoid adding new tasks to an already canceled task group, use [addTaskUnlessCancelled(name:priority:operation:)](taskgroup/addtaskunlesscancelled%28name_priority_operation_%29.md) rather than the plain [addTask(name:priority:operation:)](taskgroup/addtask%28name_priority_operation_%29.md) which adds tasks unconditionally.

For information about the language-level concurrency model that `TaskGroup` is part of, see [Concurrency](https://docs.swift.org/swift-book/LanguageGuide/Concurrency.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/).

> **See Also**

> [ThrowingTaskGroup](throwingtaskgroup.md)

> **See Also**

> [DiscardingTaskGroup](discardingtaskgroup.md)

> **See Also**

> [ThrowingDiscardingTaskGroup](throwingdiscardingtaskgroup.md)

## Topics

### Adding Tasks to a Task Group

- [addTask(priority:operation:)](taskgroup/addtask%28priority_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Adds a child task to the group.
- [addTask(name:priority:operation:)](taskgroup/addtask%28name_priority_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Adds a child task to the group.
- [addTask(executorPreference:priority:operation:)](taskgroup/addtask%28executorpreference_priority_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Adds a child task to the group.
- [addTask(name:executorPreference:priority:operation:)](taskgroup/addtask%28name_executorpreference_priority_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Adds a child task to the group.
- [addTaskUnlessCancelled(name:executorPreference:priority:operation:)](taskgroup/addtaskunlesscancelled%28name_executorpreference_priority_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Adds a child task to the group, unless the group has been canceled. Returns a boolean value indicating if the task was successfully added to the group or not.
- [addTaskUnlessCancelled(executorPreference:priority:operation:)](taskgroup/addtaskunlesscancelled%28executorpreference_priority_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Adds a child task to the group, unless the group has been canceled. Returns a boolean value indicating if the task was successfully added to the group or not.
- [addTaskUnlessCancelled(name:priority:operation:)](taskgroup/addtaskunlesscancelled%28name_priority_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Adds a child task to the group, unless the group has been canceled. Returns a boolean value indicating if the task was successfully added to the group or not.
- [addTaskUnlessCancelled(priority:operation:)](taskgroup/addtaskunlesscancelled%28priority_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Adds a child task to the group, unless the group has been canceled. Returns a boolean value indicating if the task was successfully added to the group or not.
- [addImmediateTask(name:priority:executorPreference:operation:)](taskgroup/addimmediatetask%28name_priority_executorpreference_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Add a child task to the group and immediately start running it in the context of the calling thread/task.
- [addImmediateTaskUnlessCancelled(name:priority:executorPreference:operation:)](taskgroup/addimmediatetaskunlesscancelled%28name_priority_executorpreference_operation_%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Add a child task to the group and immediately start running it in the context of the calling thread/task.

### Accessing Individual Results

- [next()](taskgroup/next%28%29.md)
- [next(isolation:)](taskgroup/next%28isolation_%29.md): Waits for the next child task to complete, and returns the value it returned.
- [isEmpty](taskgroup/isempty.md): A Boolean value that indicates whether the group has any remaining tasks.
- [waitForAll()](taskgroup/waitforall%28%29.md): Wait for all of the group’s remaining tasks to complete.

### Accessing an Asynchronous Sequence of Results

- [makeAsyncIterator()](taskgroup/makeasynciterator%28%29.md): Conforms when `ChildTaskResult` conforms to `Sendable`. Creates the asynchronous iterator that produces elements of this asynchronous sequence.
- [allSatisfy(\_:)](taskgroup/allsatisfy%28__%29.md): Returns a Boolean value that indicates whether all elements produced by the asynchronous sequence satisfy the given predicate.
- [compactMap(\_:)](taskgroup/compactmap%28__%29-944od.md): Creates an asynchronous sequence that maps an error-throwing closure over the base sequence’s elements, omitting results that don’t return a value.
- [compactMap(\_:)](taskgroup/compactmap%28__%29-7mgj1.md): Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements, omitting results that don’t return a value.
- [contains(\_:)](taskgroup/contains%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value that indicates whether the asynchronous sequence contains the given element.
- [contains(where:)](taskgroup/contains%28where_%29.md): Returns a Boolean value that indicates whether the asynchronous sequence contains an element that satisfies the given predicate.
- [drop(while:)](taskgroup/drop%28while_%29.md): Omits elements from the base asynchronous sequence until a given closure returns false, after which it passes through all remaining elements.
- [dropFirst(\_:)](taskgroup/dropfirst%28__%29.md): Omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.
- [filter(\_:)](taskgroup/filter%28__%29.md): Creates an asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given predicate.
- [first(where:)](taskgroup/first%28where_%29.md): Returns the first element of the sequence that satisfies the given predicate.
- [flatMap(\_:)](taskgroup/flatmap%28__%29-vhi3.md): Creates an asynchronous sequence that concatenates the results of calling the given error-throwing transformation with each element of this sequence.
- [map(\_:)](taskgroup/map%28__%29-58nsr.md): Creates an asynchronous sequence that maps the given error-throwing closure over the asynchronous sequence’s elements.
- [map(\_:)](taskgroup/map%28__%29-4a4kq.md): Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements.
- [max()](taskgroup/max%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the maximum element in an asynchronous sequence of comparable elements.
- [max(by:)](taskgroup/max%28by_%29.md): Returns the maximum element in the asynchronous sequence, using the given predicate as the comparison between elements.
- [min()](taskgroup/min%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the minimum element in an asynchronous sequence of comparable elements.
- [min(by:)](taskgroup/min%28by_%29.md): Returns the minimum element in the asynchronous sequence, using the given predicate as the comparison between elements.
- [prefix(\_:)](taskgroup/prefix%28__%29.md): Returns an asynchronous sequence, up to the specified maximum length, containing the initial elements of the base asynchronous sequence.
- [prefix(while:)](taskgroup/prefix%28while_%29.md): Returns an asynchronous sequence, containing the initial, consecutive elements of the base sequence that satisfy the given predicate.
- [reduce(\_:\_:)](taskgroup/reduce%28____%29.md): Returns the result of combining the elements of the asynchronous sequence using the given closure.
- [reduce(into:\_:)](taskgroup/reduce%28into___%29.md): Returns the result of combining the elements of the asynchronous sequence using the given closure, given a mutable initial value.

### Canceling Tasks

- [isCancelled](taskgroup/iscancelled.md): A Boolean value that indicates whether the group was canceled.
- [cancelAll()](taskgroup/cancelall%28%29.md): Cancel all of the remaining tasks in the group.

### Supporting Types

- [TaskGroup.Element](taskgroup/element.md): Conforms when `ChildTaskResult` conforms to `Sendable`. The type of element produced by this asynchronous sequence.
- [TaskGroup.Iterator](taskgroup/iterator.md): Conforms when `ChildTaskResult` conforms to `Sendable`. A type that provides an iteration interface over the results of tasks added to the group.
- [TaskGroup.AsyncIterator](taskgroup/asynciterator.md): Conforms when `ChildTaskResult` conforms to `Sendable`. The type of asynchronous iterator that produces elements of this asynchronous sequence.

### Deprecated

- [add(priority:operation:)](taskgroup/add%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable`.
- [async(priority:operation:)](taskgroup/async%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable`.
- [asyncUnlessCancelled(priority:operation:)](taskgroup/asyncunlesscancelled%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable`.
- [spawn(priority:operation:)](taskgroup/spawn%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable`.
- [spawnUnlessCancelled(priority:operation:)](taskgroup/spawnunlesscancelled%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable`.
- [waitForAll(isolation:)](taskgroup/waitforall%28isolation_%29.md): Deprecated. Wait for all of the group’s remaining tasks to complete.

### Default Implementations

- [AsyncSequence Implementations](taskgroup/asyncsequence-implementations.md)

## Relationships

### Conforms To

- [AsyncSequence](asyncsequence.md)
- [BitwiseCopyable](bitwisecopyable.md)
- [Copyable](copyable.md)
- [Escapable](escapable.md)

## See Also

### Tasks

- [Task](task.md): A unit of asynchronous work.
- [withTaskGroup(of:returning:isolation:body:)](withtaskgroup%28of_returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of child tasks.
- [ThrowingTaskGroup](throwingtaskgroup.md): A group that contains throwing, dynamically created child tasks.
- [withThrowingTaskGroup(of:returning:isolation:body:)](withthrowingtaskgroup%28of_returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of throwing child tasks.
- [TaskPriority](taskpriority.md): The priority of a task.
- [DiscardingTaskGroup](discardingtaskgroup.md): A discarding group that contains dynamically created child tasks.
- [withDiscardingTaskGroup(returning:isolation:body:)](withdiscardingtaskgroup%28returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of child tasks.
- [ThrowingDiscardingTaskGroup](throwingdiscardingtaskgroup.md): A throwing discarding group that contains dynamically created child tasks.
- [withThrowingDiscardingTaskGroup(returning:isolation:body:)](withthrowingdiscardingtaskgroup%28returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of child tasks.
- [UnsafeCurrentTask](unsafecurrenttask.md): An unsafe reference to the current task.
