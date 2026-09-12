> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_qos_class_t](https://developer.apple.com/documentation/dispatch/dispatch_qos_class_t)

# dispatch_qos_class_t

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Quality-of-service classes that specify the priorities for executing tasks.

## Declaration

```objectivec
typedef qos_class_t dispatch_qos_class_t;
```

## See Also

### Thread Scheduling

- [dispatch_queue_priority_t](dispatch_queue_priority_t.md): The execution priority for tasks in a global concurrent queue.
- [dispatch_set_qos_class_floor](dispatch_set_qos_class_floor.md): Specifies the minimum quality-of-service level for a dispatch queue, source, or workloop.
