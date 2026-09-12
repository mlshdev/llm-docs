> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/taskpriority](https://developer.apple.com/documentation/swift/taskpriority)

# TaskPriority

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The priority of a task.

## Declaration

```swift
struct TaskPriority
```

<a id="overview"></a>

## Overview

The executor determines how priority information affects the way tasks are scheduled. The behavior varies depending on the executor currently being used. Typically, executors attempt to run tasks with a higher priority before tasks with a lower priority. However, the semantics of how priority is treated are left up to each platform and `Executor` implementation.

Child tasks automatically inherit their parent task’s priority. Detached tasks created by `detach(priority:operation:)` don’t inherit task priority because they aren’t attached to the current task.

In some situations the priority of a task is elevated — that is, the task is treated as it if had a higher priority, without actually changing the priority of the task:

- If a task runs on behalf of an actor, and a new higher-priority task is enqueued to the actor, then the actor’s current task is temporarily elevated to the priority of the enqueued task. This priority elevation allows the new task to be processed at the priority it was enqueued with.
- If a higher-priority task accesses the `value` property, then the priority of this task increases until the task completes.

In both cases, priority elevation helps you prevent a low-priority task from blocking the execution of a high priority task, which is also known as *priority inversion*.

## Topics

### Operators

- [!=(\_:\_:)](taskpriority/!=%28____%29.md)

### Initializers

- [init(\_:)](taskpriority/init%28__%29.md): Convert this [JobPriority](jobpriority.md) to a [TaskPriority](taskpriority.md).
- [init(rawValue:)](taskpriority/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

### Instance Properties

- [rawValue](taskpriority/rawvalue-swift.property.md): The corresponding value of the raw type.

### Type Aliases

- [TaskPriority.RawValue](taskpriority/rawvalue-swift.typealias.md): The raw type that can be used to represent all values of the conforming type.

### Type Properties

- [background](taskpriority/background.md)
- [default](taskpriority/default.md): Deprecated.
- [high](taskpriority/high.md)
- [low](taskpriority/low.md)
- [medium](taskpriority/medium.md)
- [unspecified](taskpriority/unspecified.md): Deprecated.
- [userInitiated](taskpriority/userinitiated.md)
- [userInteractive](taskpriority/userinteractive.md): Deprecated.
- [utility](taskpriority/utility.md)

### Default Implementations

- [Comparable Implementations](taskpriority/comparable-implementations.md)
- [CustomStringConvertible Implementations](taskpriority/customstringconvertible-implementations.md)
- [Equatable Implementations](taskpriority/equatable-implementations.md)
- [RawRepresentable Implementations](taskpriority/rawrepresentable-implementations.md)

## Relationships

### Conforms To

- [Comparable](comparable.md)
- [Copyable](copyable.md)
- [CustomStringConvertible](customstringconvertible.md)
- [Decodable](decodable.md)
- [Encodable](encodable.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [RawRepresentable](rawrepresentable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Tasks

- [Task](task.md): A unit of asynchronous work.
- [TaskGroup](taskgroup.md): A group that contains dynamically created child tasks.
- [withTaskGroup(of:returning:isolation:body:)](withtaskgroup%28of_returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of child tasks.
- [ThrowingTaskGroup](throwingtaskgroup.md): A group that contains throwing, dynamically created child tasks.
- [withThrowingTaskGroup(of:returning:isolation:body:)](withthrowingtaskgroup%28of_returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of throwing child tasks.
- [DiscardingTaskGroup](discardingtaskgroup.md): A discarding group that contains dynamically created child tasks.
- [withDiscardingTaskGroup(returning:isolation:body:)](withdiscardingtaskgroup%28returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of child tasks.
- [ThrowingDiscardingTaskGroup](throwingdiscardingtaskgroup.md): A throwing discarding group that contains dynamically created child tasks.
- [withThrowingDiscardingTaskGroup(returning:isolation:body:)](withthrowingdiscardingtaskgroup%28returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of child tasks.
- [UnsafeCurrentTask](unsafecurrenttask.md): An unsafe reference to the current task.
