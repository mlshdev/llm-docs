> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtasksintentresponse/addedtasks](https://developer.apple.com/documentation/intents/inaddtasksintentresponse/addedtasks)

# addedTasks (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The tasks that you added to the task list.

> INAddTasksIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var addedTasks: [INTask]? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to an array of [INTask](../intask.md) objects, each of which represents a single task that you added.

## See Also

### Providing the Task Information

- [modifiedTaskList](modifiedtasklist.md): Deprecated. The task list that you modified.

# addedTasks (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The tasks that you added to the task list.

> INAddTasksIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<INTask *> * addedTasks;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSArray<INTask *> * addedTasks;
```

<a id="Discussion"></a>

## Discussion

Set this property to an array of [INTask](../intask.md) objects, each of which represents a single task that you added.

## See Also

### Providing the Task Information

- [modifiedTaskList](modifiedtasklist.md): Deprecated. The task list that you modified.
