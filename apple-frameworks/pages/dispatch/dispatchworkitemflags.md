> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchworkitemflags](https://developer.apple.com/documentation/dispatch/dispatchworkitemflags)

# DispatchWorkItemFlags

**Framework:** Dispatch  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of behaviors for a work item, such as its quality-of-service class and whether to create a barrier or spawn a new detached thread.

## Declaration

```swift
struct DispatchWorkItemFlags
```

## Topics

### Work Item Flags

- [assignCurrentContext](dispatchworkitemflags/assigncurrentcontext.md): Set the attributes of the work item to match the attributes of the current execution context.
- [barrier](dispatchworkitemflags/barrier.md): Cause the work item to act as a barrier block when submitted to a concurrent queue.
- [detached](dispatchworkitemflags/detached.md): Disassociate the work item’s attributes from the current execution context.
- [enforceQoS](dispatchworkitemflags/enforceqos.md): Prefer the quality-of-service class associated with the block.
- [inheritQoS](dispatchworkitemflags/inheritqos.md): Prefer the quality-of-service class associated with the current execution context.
- [noQoS](dispatchworkitemflags/noqos.md): Execute the work item without assigning a quality-of-service class.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating a Work Item

- [init(qos:flags:block:)](dispatchworkitem/init%28qos_flags_block_%29.md): Creates a new dispatch work item from an existing block and assigns it the specified quality-of-service class.
