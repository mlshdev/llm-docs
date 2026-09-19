> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insnoozetasksintent/tasks

# tasks (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

An array of tasks to snooze.

> INSnoozeTasksIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var tasks: [INTask]? { get }
```

## See Also

### Getting the Task Information

- [nextTriggerTime](nexttriggertime.md): Deprecated. The next time after the current time that triggers a task to snooze.
- [all](all-spsb.md): A Boolean value that indicates whether to snooze all of the tasks.

# tasks (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

An array of tasks to snooze.

> INSnoozeTasksIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INTask *> * tasks;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INTask *> * tasks;
```

## See Also

### Getting the Task Information

- [nextTriggerTime](nexttriggertime.md): Deprecated. The next time after the current time that triggers a task to snooze.
- [all](https://developer.apple.com/documentation/intents/insnoozetasksintent/all-62ujw): Deprecated. A Boolean value that indicates whether to snooze all of the tasks.
