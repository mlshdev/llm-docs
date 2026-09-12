> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/throwingdiscardingtaskgroup/iscancelled](https://developer.apple.com/documentation/swift/throwingdiscardingtaskgroup/iscancelled)

# isCancelled

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean value that indicates whether the group was canceled.

## Declaration

```swift
var isCancelled: Bool { get }
```

<a id="discussion"></a>

## Discussion

To cancel a group, call the `ThrowingDiscardingTaskGroup.cancelAll()` method.

If the task that’s currently running this group is canceled, the group is also implicitly canceled, which is also reflected in this property’s value.

<a id="Interaction-with-task-cancellation-shields"></a>

### Interaction with task cancellation shields

Cancellation may be suppressed by an active task cancellation shield ([withTaskCancellationShield(operation:)](../withtaskcancellationshield%28operation_%29-2lzl8.md)), which may cause `isCancelled` to return `false` even though the task has been cancelled externally.

> **See Also**

> [withTaskCancellationShield(operation:)](../withtaskcancellationshield%28operation_%29-2lzl8.md)
