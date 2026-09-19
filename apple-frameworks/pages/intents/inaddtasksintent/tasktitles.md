> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inaddtasksintent/tasktitles

# taskTitles (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

An array of strings containing the titles of the new tasks.

> INAddTasksIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var taskTitles: [INSpeakableString]? { get }
```

<a id="Discussion"></a>

## Discussion

Create a new task for each string in the array. Use the string contents as the title of the task.

## See Also

### Getting the Task Details

- [targetTaskList](targettasklist.md): Deprecated. The task list to receive the new tasks.
- [priority](priority.md): Deprecated. The priority for the new task.

# taskTitles (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

An array of strings containing the titles of the new tasks.

> INAddTasksIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INSpeakableString *> * taskTitles;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INSpeakableString *> * taskTitles;
```

<a id="Discussion"></a>

## Discussion

Create a new task for each string in the array. Use the string contents as the title of the task.

## See Also

### Getting the Task Details

- [targetTaskList](targettasklist.md): Deprecated. The task list to receive the new tasks.
- [priority](priority.md): Deprecated. The priority for the new task.
