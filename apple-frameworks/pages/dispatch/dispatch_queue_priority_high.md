> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_queue_priority_high](https://developer.apple.com/documentation/dispatch/dispatch_queue_priority_high)

# DISPATCH_QUEUE_PRIORITY_HIGH (Swift)

**Framework:** Dispatch  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tasks run at the highest priority, which is equivalent to the user-initiated quality-of-service level.

## Declaration

```swift
var DISPATCH_QUEUE_PRIORITY_HIGH: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

Use quality-of-service constants instead. This constant maps to the `QOS_CLASS_USER_INITIATED` class.

Items dispatched to the queue run at high priority; the queue is scheduled for execution before any default priority or low priority queue.

## See Also

### Priorities

- [DISPATCH_QUEUE_PRIORITY_DEFAULT](dispatch_queue_priority_default.md): Tasks run at the default priority, which is equivalent to the default quality-of-service.
- [DISPATCH_QUEUE_PRIORITY_LOW](dispatch_queue_priority_low.md): Tasks run at a low priority, which is equivalent to the utility quality-of-service level.
- [DISPATCH_QUEUE_PRIORITY_BACKGROUND](dispatch_queue_priority_background.md): Tasks run at the background priority, which is equivalent to the background quality-of-service level.

# DISPATCH_QUEUE_PRIORITY_HIGH (Objective-C)

**Framework:** Dispatch  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tasks run at the highest priority, which is equivalent to the user-initiated quality-of-service level.

## Declaration

```objectivec
#define DISPATCH_QUEUE_PRIORITY_HIGH
```

<a id="Discussion"></a>

## Discussion

Use quality-of-service constants instead. This constant maps to the `QOS_CLASS_USER_INITIATED` class.

Items dispatched to the queue run at high priority; the queue is scheduled for execution before any default priority or low priority queue.

## See Also

### Priorities

- [DISPATCH_QUEUE_PRIORITY_DEFAULT](dispatch_queue_priority_default.md): Tasks run at the default priority, which is equivalent to the default quality-of-service.
- [DISPATCH_QUEUE_PRIORITY_LOW](dispatch_queue_priority_low.md): Tasks run at a low priority, which is equivalent to the utility quality-of-service level.
- [DISPATCH_QUEUE_PRIORITY_BACKGROUND](dispatch_queue_priority_background.md): Tasks run at the background priority, which is equivalent to the background quality-of-service level.
