> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafecurrenttask/cancel()](https://developer.apple.com/documentation/swift/unsafecurrenttask/cancel())

# cancel()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Cancel the current task.

## Declaration

```swift
func cancel()
```

<a id="discussion"></a>

## Discussion

The task will be immediately cancelled and cancellation will propagate towards any child tasks it has.

<a id="Interaction-with-Task-Cancellation-Shields"></a>

### Interaction with Task Cancellation Shields

Note that cancellation may not be observed if a task is currently executing with an active task cancellation shield. Refer to cancellation shield documentation for detailed semantics.

> **See Also**

> `withTaskCancellationShield(operation:)-(()->Value)`

> **See Also**

> [hasActiveCancellationShield](../task/hasactivecancellationshield.md)
