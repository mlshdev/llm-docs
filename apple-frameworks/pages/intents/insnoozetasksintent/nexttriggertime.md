> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetasksintent/nexttriggertime](https://developer.apple.com/documentation/intents/insnoozetasksintent/nexttriggertime)

# nextTriggerTime (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

The next time after the current time that triggers a task to snooze.

> INSnoozeTasksIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var nextTriggerTime: INDateComponentsRange? { get }
```

## See Also

### Getting the Task Information

- [tasks](tasks.md): Deprecated. An array of tasks to snooze.
- [all](all-spsb.md): A Boolean value that indicates whether to snooze all of the tasks.

# nextTriggerTime (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

The next time after the current time that triggers a task to snooze.

> INSnoozeTasksIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INDateComponentsRange * nextTriggerTime;
```

```objectivec
@property (atomic, copy, readonly, nullable) INDateComponentsRange * nextTriggerTime;
```

## See Also

### Getting the Task Information

- [tasks](tasks.md): Deprecated. An array of tasks to snooze.
- [all](https://developer.apple.com/documentation/intents/insnoozetasksintent/all-62ujw): Deprecated. A Boolean value that indicates whether to snooze all of the tasks.
