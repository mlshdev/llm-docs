> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/withtaskgroup(of:returning:isolation:body:)](https://developer.apple.com/documentation/swift/withtaskgroup(of:returning:isolation:body:))

# withTaskGroup(of:returning:isolation:body:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Starts a new scope that can contain a dynamic number of child tasks.

## Declaration

```swift
@backDeployed(before: macOS 15.0, iOS 18.0, watchOS 11.0, tvOS 18.0, visionOS 2.0)
func withTaskGroup<ChildTaskResult, GroupResult>(of childTaskResultType: ChildTaskResult.Type = ChildTaskResult.self, returning returnType: GroupResult.Type = GroupResult.self, isolation: isolated (any Actor)? = #isolation, body: (inout TaskGroup<ChildTaskResult>) async -> GroupResult) async -> GroupResult where ChildTaskResult : Sendable
```

<a id="discussion"></a>

## Discussion

A group *always* waits for all of its child tasks to complete before it returns. Even canceled tasks must run until completion before this function returns. Canceled child tasks cooperatively react to cancellation and attempt to return as early as possible. After this function returns, the task group is always empty.

To collect the results of the group’s child tasks, you can use a `for`-`await`-`in` loop:

```swift
var sum = 0
for await result in group {
    sum += result
}
```

If you need more control or only a few results, you can call `next()` directly:

```swift
guard let first = await group.next() else {
    group.cancelAll()
    return 0
}
let second = await group.next() ?? 0
group.cancelAll()
return first + second
```

Refer to [TaskGroup](taskgroup.md) documentation for detailed discussion of semantics shared between all task groups.

> **See Also**

> [TaskGroup](taskgroup.md)

## See Also

### Tasks

- [Task](task.md): A unit of asynchronous work.
- [TaskGroup](taskgroup.md): A group that contains dynamically created child tasks.
- [ThrowingTaskGroup](throwingtaskgroup.md): A group that contains throwing, dynamically created child tasks.
- [withThrowingTaskGroup(of:returning:isolation:body:)](withthrowingtaskgroup%28of_returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of throwing child tasks.
- [TaskPriority](taskpriority.md): The priority of a task.
- [DiscardingTaskGroup](discardingtaskgroup.md): A discarding group that contains dynamically created child tasks.
- [withDiscardingTaskGroup(returning:isolation:body:)](withdiscardingtaskgroup%28returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of child tasks.
- [ThrowingDiscardingTaskGroup](throwingdiscardingtaskgroup.md): A throwing discarding group that contains dynamically created child tasks.
- [withThrowingDiscardingTaskGroup(returning:isolation:body:)](withthrowingdiscardingtaskgroup%28returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of child tasks.
- [UnsafeCurrentTask](unsafecurrenttask.md): An unsafe reference to the current task.
