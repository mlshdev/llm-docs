> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inaddtasksintent/targettasklist

# targetTaskList (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The task list to receive the new tasks.

> INAddTasksIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var targetTaskList: INTaskList? { get }
```

## See Also

### Getting the Task Details

- [taskTitles](tasktitles.md): Deprecated. An array of strings containing the titles of the new tasks.
- [priority](priority.md): Deprecated. The priority for the new task.

# targetTaskList (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The task list to receive the new tasks.

> INAddTasksIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INTaskList * targetTaskList;
```

```objectivec
@property (atomic, copy, readonly, nullable) INTaskList * targetTaskList;
```

## See Also

### Getting the Task Details

- [taskTitles](tasktitles.md): Deprecated. An array of strings containing the titles of the new tasks.
- [priority](priority.md): Deprecated. The priority for the new task.
