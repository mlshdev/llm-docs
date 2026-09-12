> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_queue_priority_background](https://developer.apple.com/documentation/dispatch/dispatch_queue_priority_background)

# DISPATCH_QUEUE_PRIORITY_BACKGROUND (Swift)

**Framework:** Dispatch  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tasks run at the background priority, which is equivalent to the background quality-of-service level.

## Declaration

```swift
var DISPATCH_QUEUE_PRIORITY_BACKGROUND: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

Use quality-of-service constants instead. This constant maps to the `QOS_CLASS_BACKGROUND` class.

Items dispatched to the queue run at background priority; the queue is scheduled for execution after all high priority queues have been scheduled and the system runs items on a thread whose priority is set for background status. Such a thread has the lowest priority and any disk I/O is throttled to minimize the impact on the system.

## See Also

### Priorities

- [DISPATCH_QUEUE_PRIORITY_HIGH](dispatch_queue_priority_high.md): Tasks run at the highest priority, which is equivalent to the user-initiated quality-of-service level.
- [DISPATCH_QUEUE_PRIORITY_DEFAULT](dispatch_queue_priority_default.md): Tasks run at the default priority, which is equivalent to the default quality-of-service.
- [DISPATCH_QUEUE_PRIORITY_LOW](dispatch_queue_priority_low.md): Tasks run at a low priority, which is equivalent to the utility quality-of-service level.

# DISPATCH_QUEUE_PRIORITY_BACKGROUND (Objective-C)

**Framework:** Dispatch  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tasks run at the background priority, which is equivalent to the background quality-of-service level.

## Declaration

```objectivec
#define DISPATCH_QUEUE_PRIORITY_BACKGROUND
```

<a id="Discussion"></a>

## Discussion

Use quality-of-service constants instead. This constant maps to the `QOS_CLASS_BACKGROUND` class.

Items dispatched to the queue run at background priority; the queue is scheduled for execution after all high priority queues have been scheduled and the system runs items on a thread whose priority is set for background status. Such a thread has the lowest priority and any disk I/O is throttled to minimize the impact on the system.

## See Also

### Priorities

- [DISPATCH_QUEUE_PRIORITY_HIGH](dispatch_queue_priority_high.md): Tasks run at the highest priority, which is equivalent to the user-initiated quality-of-service level.
- [DISPATCH_QUEUE_PRIORITY_DEFAULT](dispatch_queue_priority_default.md): Tasks run at the default priority, which is equivalent to the default quality-of-service.
- [DISPATCH_QUEUE_PRIORITY_LOW](dispatch_queue_priority_low.md): Tasks run at a low priority, which is equivalent to the utility quality-of-service level.
