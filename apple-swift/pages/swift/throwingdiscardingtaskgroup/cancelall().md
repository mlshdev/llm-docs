> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/throwingdiscardingtaskgroup/cancelall()](https://developer.apple.com/documentation/swift/throwingdiscardingtaskgroup/cancelall())

# cancelAll()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Cancel all of the remaining tasks in the group.

## Declaration

```swift
func cancelAll()
```

<a id="discussion"></a>

## Discussion

If you add a task to a group after canceling the group, that task is canceled immediately after being added to the group.

Immediately canceled child tasks should therefore cooperatively check for and react  to cancellation, e.g. by throwing an `CancellationError` at their earliest convenience, or otherwise handling the cancellation.

There are no restrictions on where you can call this method. Code inside a child task or even another task can cancel a group, however one should be very careful to not keep a reference to the group longer than the `with...TaskGroup(...) { ... }` method body is executing.

> **See Also**

> `Task.isCancelled`

> **See Also**

> `ThrowingDiscardingTaskGroup.isCancelled`
