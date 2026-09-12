> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtasksintentresponsecode/failure](https://developer.apple.com/documentation/intents/inaddtasksintentresponsecode/failure)

# INAddTasksIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

You were unable to add the tasks to the task list.

> INAddTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this response code for both transient and unrecoverable errors that prevented you from adding the tasks to the task list.

## See Also

### Constants

- [INAddTasksIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INAddTasksIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INAddTasksIntentResponseCode.inProgress](inprogress.md): Deprecated. The addition of tasks into the task list is still in progress.
- [INAddTasksIntentResponseCode.success](success.md): Deprecated. You successfully created the task.
- [INAddTasksIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must add the tasks from within your app.

# INAddTasksIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

You were unable to add the tasks to the task list.

> INAddTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
INAddTasksIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this response code for both transient and unrecoverable errors that prevented you from adding the tasks to the task list.

## See Also

### Constants

- [INAddTasksIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INAddTasksIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INAddTasksIntentResponseCodeInProgress](inprogress.md): Deprecated. The addition of tasks into the task list is still in progress.
- [INAddTasksIntentResponseCodeSuccess](success.md): Deprecated. You successfully created the task.
- [INAddTasksIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must add the tasks from within your app.
