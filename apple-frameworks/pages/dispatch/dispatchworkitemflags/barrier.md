> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchworkitemflags/barrier](https://developer.apple.com/documentation/dispatch/dispatchworkitemflags/barrier)

# barrier

**Framework:** Dispatch  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Cause the work item to act as a barrier block when submitted to a concurrent queue.

## Declaration

```swift
static let barrier: DispatchWorkItemFlags
```

<a id="Discussion"></a>

## Discussion

When submitted to a concurrent queue, a work item with this flag acts as a barrier. Work items submitted prior to the barrier execute to completion, at which point the barrier work item executes. Once the barrier work item finishes, the queue returns to scheduling work items that were submitted after the barrier.

## See Also

### Work Item Flags

- [assignCurrentContext](assigncurrentcontext.md): Set the attributes of the work item to match the attributes of the current execution context.
- [detached](detached.md): Disassociate the work item’s attributes from the current execution context.
- [enforceQoS](enforceqos.md): Prefer the quality-of-service class associated with the block.
- [inheritQoS](inheritqos.md): Prefer the quality-of-service class associated with the current execution context.
- [noQoS](noqos.md): Execute the work item without assigning a quality-of-service class.
