> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insnoozetasksintentresponse/snoozedtasks

# snoozedTasks (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

An array of tasks to snooze.

> INSnoozeTasksIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var snoozedTasks: [INTask]? { get set }
```

# snoozedTasks (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

An array of tasks to snooze.

> INSnoozeTasksIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<INTask *> * snoozedTasks;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSArray<INTask *> * snoozedTasks;
```
