> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchworkitemflags/inheritqos](https://developer.apple.com/documentation/dispatch/dispatchworkitemflags/inheritqos)

# inheritQoS

**Framework:** Dispatch  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

Prefer the quality-of-service class associated with the current execution context.

## Declaration

```swift
static let inheritQoS: DispatchWorkItemFlags
```

<a id="Discussion"></a>

## Discussion

This flag prioritizes the quality-of-service class of the current execution context over the one associated with the block, as long as doing so does not lower the quality of service.

## See Also

### Work Item Flags

- [assignCurrentContext](assigncurrentcontext.md): Set the attributes of the work item to match the attributes of the current execution context.
- [barrier](barrier.md): Cause the work item to act as a barrier block when submitted to a concurrent queue.
- [detached](detached.md): Disassociate the work item’s attributes from the current execution context.
- [enforceQoS](enforceqos.md): Prefer the quality-of-service class associated with the block.
- [noQoS](noqos.md): Execute the work item without assigning a quality-of-service class.
