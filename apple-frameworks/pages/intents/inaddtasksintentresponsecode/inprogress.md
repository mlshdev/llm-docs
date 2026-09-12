> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtasksintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/inaddtasksintentresponsecode/inprogress)

# INAddTasksIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The addition of tasks into the task list is still in progress.

> INAddTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

Return this code if you began adding tasks to the task list but didn’t confirm that the process was complete. You might use this code when a server handles the creation and you’ve not yet received a confirmation from that server.

When handling the intent, you might want to first configure a timer to fire if your server doesn’t return within a few seconds. Use your timer’s handler block to provide the in-progress response back to Siri.

## See Also

### Constants

- [INAddTasksIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INAddTasksIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INAddTasksIntentResponseCode.success](success.md): Deprecated. You successfully created the task.
- [INAddTasksIntentResponseCode.failure](failure.md): Deprecated. You were unable to add the tasks to the task list.
- [INAddTasksIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must add the tasks from within your app.

# INAddTasksIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The addition of tasks into the task list is still in progress.

> INAddTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
INAddTasksIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Return this code if you began adding tasks to the task list but didn’t confirm that the process was complete. You might use this code when a server handles the creation and you’ve not yet received a confirmation from that server.

When handling the intent, you might want to first configure a timer to fire if your server doesn’t return within a few seconds. Use your timer’s handler block to provide the in-progress response back to Siri.

## See Also

### Constants

- [INAddTasksIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INAddTasksIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INAddTasksIntentResponseCodeSuccess](success.md): Deprecated. You successfully created the task.
- [INAddTasksIntentResponseCodeFailure](failure.md): Deprecated. You were unable to add the tasks to the task list.
- [INAddTasksIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must add the tasks from within your app.
