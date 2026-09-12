> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtasksintentresponsecode/unspecified](https://developer.apple.com/documentation/intents/inaddtasksintentresponsecode/unspecified)

# INAddTasksIntentResponseCode.unspecified (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The response didn’t specify a response code.

> INAddTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
case unspecified
```

<a id="Discussion"></a>

## Discussion

Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Constants

- [INAddTasksIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INAddTasksIntentResponseCode.inProgress](inprogress.md): Deprecated. The addition of tasks into the task list is still in progress.
- [INAddTasksIntentResponseCode.success](success.md): Deprecated. You successfully created the task.
- [INAddTasksIntentResponseCode.failure](failure.md): Deprecated. You were unable to add the tasks to the task list.
- [INAddTasksIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must add the tasks from within your app.

# INAddTasksIntentResponseCodeUnspecified (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The response didn’t specify a response code.

> INAddTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
INAddTasksIntentResponseCodeUnspecified
```

<a id="Discussion"></a>

## Discussion

Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Constants

- [INAddTasksIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INAddTasksIntentResponseCodeInProgress](inprogress.md): Deprecated. The addition of tasks into the task list is still in progress.
- [INAddTasksIntentResponseCodeSuccess](success.md): Deprecated. You successfully created the task.
- [INAddTasksIntentResponseCodeFailure](failure.md): Deprecated. You were unable to add the tasks to the task list.
- [INAddTasksIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must add the tasks from within your app.
