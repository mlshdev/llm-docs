> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_queue_priority_default](https://developer.apple.com/documentation/dispatch/dispatch_queue_priority_default)

# DISPATCH_QUEUE_PRIORITY_DEFAULT (Swift)

**Framework:** Dispatch  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tasks run at the default priority, which is equivalent to the default quality-of-service.

## Declaration

```swift
var DISPATCH_QUEUE_PRIORITY_DEFAULT: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

Use quality-of-service constants instead. This constant maps to the `QOS_CLASS_DEFAULT` class.

Items dispatched to the queue run at the default priority; the queue is scheduled for execution after all high priority queues have been scheduled, but before any low priority queues have been scheduled.

## See Also

### Priorities

- [DISPATCH_QUEUE_PRIORITY_HIGH](dispatch_queue_priority_high.md): Tasks run at the highest priority, which is equivalent to the user-initiated quality-of-service level.
- [DISPATCH_QUEUE_PRIORITY_LOW](dispatch_queue_priority_low.md): Tasks run at a low priority, which is equivalent to the utility quality-of-service level.
- [DISPATCH_QUEUE_PRIORITY_BACKGROUND](dispatch_queue_priority_background.md): Tasks run at the background priority, which is equivalent to the background quality-of-service level.

# DISPATCH_QUEUE_PRIORITY_DEFAULT (Objective-C)

**Framework:** Dispatch  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tasks run at the default priority, which is equivalent to the default quality-of-service.

## Declaration

```objectivec
#define DISPATCH_QUEUE_PRIORITY_DEFAULT
```

<a id="Discussion"></a>

## Discussion

Use quality-of-service constants instead. This constant maps to the `QOS_CLASS_DEFAULT` class.

Items dispatched to the queue run at the default priority; the queue is scheduled for execution after all high priority queues have been scheduled, but before any low priority queues have been scheduled.

## See Also

### Priorities

- [DISPATCH_QUEUE_PRIORITY_HIGH](dispatch_queue_priority_high.md): Tasks run at the highest priority, which is equivalent to the user-initiated quality-of-service level.
- [DISPATCH_QUEUE_PRIORITY_LOW](dispatch_queue_priority_low.md): Tasks run at a low priority, which is equivalent to the utility quality-of-service level.
- [DISPATCH_QUEUE_PRIORITY_BACKGROUND](dispatch_queue_priority_background.md): Tasks run at the background priority, which is equivalent to the background quality-of-service level.
