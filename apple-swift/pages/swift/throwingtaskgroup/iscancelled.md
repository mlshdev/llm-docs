> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/throwingtaskgroup/iscancelled](https://developer.apple.com/documentation/swift/throwingtaskgroup/iscancelled)

# isCancelled

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the group was canceled.

## Declaration

```swift
var isCancelled: Bool { get }
```

<a id="discussion"></a>

## Discussion

To cancel a group, call the `ThrowingTaskGroup.cancelAll()` method.

If the task that’s currently running this group is canceled, the group is also implicitly canceled, which is also reflected in this property’s value.

<a id="Interaction-with-task-cancellation-shields"></a>

### Interaction with task cancellation shields

Cancellation may be suppressed by an active task cancellation shield (`withTaskCancellationShield(operation:)-(()->Value)`), which may cause `isCancelled` to return `false` even though the task has been cancelled externally.

> **See Also**

> `withTaskCancellationShield(operation:)-(()->Value)`

## See Also

### Canceling Tasks

- [cancelAll()](cancelall%28%29.md): Cancel all of the remaining tasks in the group.
