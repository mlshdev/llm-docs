> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_block_flags_t](https://developer.apple.com/documentation/dispatch/dispatch_block_flags_t)

# dispatch_block_flags_t

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Flags to pass to the [dispatch_block_create](dispatch_block_create.md) and [dispatch_block_create_with_qos_class](dispatch_block_create_with_qos_class.md) functions.

## Declaration

```objectivec
typedef enum { ... } dispatch_block_flags_t;
```

## Topics

### Flags

- [DISPATCH_BLOCK_ASSIGN_CURRENT](dispatch_block_flags_t/dispatch_block_assign_current.md): Set the attributes of the work item to match the attributes of the current execution context.
- [DISPATCH_BLOCK_BARRIER](dispatch_block_flags_t/dispatch_block_barrier.md): Cause the work item to act as a barrier block when submitted to a concurrent queue.
- [DISPATCH_BLOCK_DETACHED](dispatch_block_flags_t/dispatch_block_detached.md): Disassociate the work item’s attributes from the current execution context.
- [DISPATCH_BLOCK_ENFORCE_QOS_CLASS](dispatch_block_flags_t/dispatch_block_enforce_qos_class.md): Prefer the quality-of-service class associated with the block.
- [DISPATCH_BLOCK_INHERIT_QOS_CLASS](dispatch_block_flags_t/dispatch_block_inherit_qos_class.md): Prefer the quality-of-service class associated with the current execution context.
- [DISPATCH_BLOCK_NO_QOS_CLASS](dispatch_block_flags_t/dispatch_block_no_qos_class.md): Execute the work item without assigning a quality-of-service class.

## See Also

### Creating a Work Item

- [dispatch_block_create](dispatch_block_create.md): Creates a new dispatch block on the heap using an existing block and the given flags.
- [dispatch_block_create_with_qos_class](dispatch_block_create_with_qos_class.md): Creates a new dispatch block from an existing block and the given flags, and assigns it the specified quality-of-service class and relative priority.
- [dispatch_block_t](dispatch_block_t.md): The prototype of blocks submitted to dispatch queues, which take no arguments and have no return value.
