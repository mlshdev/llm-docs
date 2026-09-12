> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtasksintentresponse/modifiedtasklist](https://developer.apple.com/documentation/intents/inaddtasksintentresponse/modifiedtasklist)

# modifiedTaskList (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The task list that you modified.

> INAddTasksIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var modifiedTaskList: INTaskList? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to the [INTaskList](../intasklist.md) object containing the newly created tasks.

## See Also

### Providing the Task Information

- [addedTasks](addedtasks.md): Deprecated. The tasks that you added to the task list.

# modifiedTaskList (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The task list that you modified.

> INAddTasksIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INTaskList * modifiedTaskList;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INTaskList * modifiedTaskList;
```

<a id="Discussion"></a>

## Discussion

Set this property to the [INTaskList](../intasklist.md) object containing the newly created tasks.

## See Also

### Providing the Task Information

- [addedTasks](addedtasks.md): Deprecated. The tasks that you added to the task list.
