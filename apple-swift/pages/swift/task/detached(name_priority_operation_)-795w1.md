> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/task/detached(name:priority:operation:)-795w1](https://developer.apple.com/documentation/swift/task/detached(name:priority:operation:)-795w1)

# detached(name:priority:operation:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Runs the given throwing operation asynchronously as part of a new *unstructured* *detached* top-level task.

## Declaration

```swift
@discardableResult static func detached(name: String? = nil, priority: TaskPriority? = nil, operation: sending @escaping @isolated(any) () async throws -> Success) -> Task<Success, any Error>
```

## Parameters

- `name`: Human readable name of the task.
- `priority`: The priority of the operation task. Omit this parameter or pass `nil` to inherit the enclosing context’s base priority.
- `operation`: The operation to perform.

<a id="return-value"></a>

## Return Value

A reference to the task.

<a id="discussion"></a>

## Discussion

If the `operation` throws an error, it is caught by the `Task` and will be rethrown only when the task’s `value` is awaited. Take care to not accidentally dismiss errors by not awaiting on the task’s resulting value.

Don’t use a detached unstructured task if it’s possible to model the operation using structured concurrency features like child tasks. Child tasks inherit the parent task’s priority and task-local storage, and canceling a parent task automatically cancels all of its child tasks. You need to handle these considerations manually with a detached task.

You need to keep a reference to the task if you want to cancel it by calling the `Task.cancel()` method. Discarding your reference to a task doesn’t implicitly cancel that task, it only makes it impossible for you to explicitly cancel the task.

## See Also

### Creating a Detached Task

- [detached(name:priority:operation:)](detached%28name_priority_operation_%29-9xki7.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `Never`. Runs the given nonthrowing operation asynchronously as part of a new *unstructured* *detached* top-level task.
- [detached(name:executorPreference:priority:operation:)](detached%28name_executorpreference_priority_operation_%29-6r16s.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Runs the given throwing operation asynchronously as part of a new *unstructured* *detached* top-level task.
- [detached(name:executorPreference:priority:operation:)](detached%28name_executorpreference_priority_operation_%29-75ffe.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `Never`. Runs the given nonthrowing operation asynchronously as part of a new *unstructured* *detached* top-level task.
