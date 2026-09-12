> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetasksintentresponsecode/success](https://developer.apple.com/documentation/intents/insnoozetasksintentresponsecode/success)

# INSnoozeTasksIntentResponseCode.success (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A response code that indicates your app succeeded.

> INSnoozeTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
case success
```

<a id="Discussion"></a>

## Discussion

Use this code after successfully snoozing the tasks in the task list. Your response should contain the details of the task list and tasks that you changed.

## See Also

### Response State

- [INSnoozeTasksIntentResponseCode.unspecified](unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INSnoozeTasksIntentResponseCode.ready](ready.md): Deprecated. A response code that indicates app readiness.
- [INSnoozeTasksIntentResponseCode.inProgress](inprogress.md): Deprecated. A response code that indicates deletion is still in progress.
- [INSnoozeTasksIntentResponseCode.failure](failure.md): Deprecated. A response code that indicates you were unable to snooze the task.
- [INSnoozeTasksIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to snooze the tasks.

# INSnoozeTasksIntentResponseCodeSuccess (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A response code that indicates your app succeeded.

> INSnoozeTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
INSnoozeTasksIntentResponseCodeSuccess
```

<a id="Discussion"></a>

## Discussion

Use this code after successfully snoozing the tasks in the task list. Your response should contain the details of the task list and tasks that you changed.

## See Also

### Response State

- [INSnoozeTasksIntentResponseCodeUnspecified](unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INSnoozeTasksIntentResponseCodeReady](ready.md): Deprecated. A response code that indicates app readiness.
- [INSnoozeTasksIntentResponseCodeInProgress](inprogress.md): Deprecated. A response code that indicates deletion is still in progress.
- [INSnoozeTasksIntentResponseCodeFailure](failure.md): Deprecated. A response code that indicates you were unable to snooze the task.
- [INSnoozeTasksIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to snooze the tasks.
