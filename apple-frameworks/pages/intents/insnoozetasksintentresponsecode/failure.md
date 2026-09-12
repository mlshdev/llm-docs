> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetasksintentresponsecode/failure](https://developer.apple.com/documentation/intents/insnoozetasksintentresponsecode/failure)

# INSnoozeTasksIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A response code that indicates you were unable to snooze the task.

> INSnoozeTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this response code for both transient and unrecoverable errors that prevent you from snoozing the tasks in the task list.

## See Also

### Response State

- [INSnoozeTasksIntentResponseCode.unspecified](unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INSnoozeTasksIntentResponseCode.ready](ready.md): Deprecated. A response code that indicates app readiness.
- [INSnoozeTasksIntentResponseCode.inProgress](inprogress.md): Deprecated. A response code that indicates deletion is still in progress.
- [INSnoozeTasksIntentResponseCode.success](success.md): Deprecated. A response code that indicates your app succeeded.
- [INSnoozeTasksIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to snooze the tasks.

# INSnoozeTasksIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A response code that indicates you were unable to snooze the task.

> INSnoozeTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
INSnoozeTasksIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this response code for both transient and unrecoverable errors that prevent you from snoozing the tasks in the task list.

## See Also

### Response State

- [INSnoozeTasksIntentResponseCodeUnspecified](unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INSnoozeTasksIntentResponseCodeReady](ready.md): Deprecated. A response code that indicates app readiness.
- [INSnoozeTasksIntentResponseCodeInProgress](inprogress.md): Deprecated. A response code that indicates deletion is still in progress.
- [INSnoozeTasksIntentResponseCodeSuccess](success.md): Deprecated. A response code that indicates your app succeeded.
- [INSnoozeTasksIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to snooze the tasks.
