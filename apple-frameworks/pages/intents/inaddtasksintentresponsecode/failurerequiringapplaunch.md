> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtasksintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/inaddtasksintentresponsecode/failurerequiringapplaunch)

# INAddTasksIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The user must add the tasks from within your app.

> INAddTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t add the tasks from your Intents extension but the user can do so from your app. Don’t use this code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INAddTasksIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INAddTasksIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INAddTasksIntentResponseCode.inProgress](inprogress.md): Deprecated. The addition of tasks into the task list is still in progress.
- [INAddTasksIntentResponseCode.success](success.md): Deprecated. You successfully created the task.
- [INAddTasksIntentResponseCode.failure](failure.md): Deprecated. You were unable to add the tasks to the task list.

# INAddTasksIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The user must add the tasks from within your app.

> INAddTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
INAddTasksIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t add the tasks from your Intents extension but the user can do so from your app. Don’t use this code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INAddTasksIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INAddTasksIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INAddTasksIntentResponseCodeInProgress](inprogress.md): Deprecated. The addition of tasks into the task list is still in progress.
- [INAddTasksIntentResponseCodeSuccess](success.md): Deprecated. You successfully created the task.
- [INAddTasksIntentResponseCodeFailure](failure.md): Deprecated. You were unable to add the tasks to the task list.
