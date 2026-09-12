> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_block_flags_t/dispatch_block_detached](https://developer.apple.com/documentation/dispatch/dispatch_block_flags_t/dispatch_block_detached)

# DISPATCH_BLOCK_DETACHED

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Disassociate the work item’s attributes from the current execution context.

## Declaration

```objectivec
DISPATCH_BLOCK_DETACHED
```

<a id="Discussion"></a>

## Discussion

Indicates that a dispatch block should execute disassociated from current execution context attributes such as QoS class, `os_activity_t`, and properties of the current IPC request, if any. If invoked directly, the block removes these attributes from the calling thread for the duration of the block body before applying attributes assigned to the block, if any. If submitted to a queue, the block object will be executed with the attributes of the queue, or any attributes specifically assigned to the block object.

## See Also

### Flags

- [DISPATCH_BLOCK_ASSIGN_CURRENT](dispatch_block_assign_current.md): Set the attributes of the work item to match the attributes of the current execution context.
- [DISPATCH_BLOCK_BARRIER](dispatch_block_barrier.md): Cause the work item to act as a barrier block when submitted to a concurrent queue.
- [DISPATCH_BLOCK_ENFORCE_QOS_CLASS](dispatch_block_enforce_qos_class.md): Prefer the quality-of-service class associated with the block.
- [DISPATCH_BLOCK_INHERIT_QOS_CLASS](dispatch_block_inherit_qos_class.md): Prefer the quality-of-service class associated with the current execution context.
- [DISPATCH_BLOCK_NO_QOS_CLASS](dispatch_block_no_qos_class.md): Execute the work item without assigning a quality-of-service class.
