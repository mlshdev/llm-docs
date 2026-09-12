> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchworkitemflags/detached](https://developer.apple.com/documentation/dispatch/dispatchworkitemflags/detached)

# detached

**Framework:** Dispatch  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

Disassociate the work item’s attributes from the current execution context.

## Declaration

```swift
static let detached: DispatchWorkItemFlags
```

<a id="Discussion"></a>

## Discussion

When this flag is set, the system does not apply attributes from the current execution context to the work item.

## See Also

### Work Item Flags

- [assignCurrentContext](assigncurrentcontext.md): Set the attributes of the work item to match the attributes of the current execution context.
- [barrier](barrier.md): Cause the work item to act as a barrier block when submitted to a concurrent queue.
- [enforceQoS](enforceqos.md): Prefer the quality-of-service class associated with the block.
- [inheritQoS](inheritqos.md): Prefer the quality-of-service class associated with the current execution context.
- [noQoS](noqos.md): Execute the work item without assigning a quality-of-service class.
