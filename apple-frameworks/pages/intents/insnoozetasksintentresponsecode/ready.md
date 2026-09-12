> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetasksintentresponsecode/ready](https://developer.apple.com/documentation/intents/insnoozetasksintentresponsecode/ready)

# INSnoozeTasksIntentResponseCode.ready (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A response code that indicates app readiness.

> INSnoozeTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
case ready
```

<a id="Discussion"></a>

## Discussion

Return this response code during the confirmation phase, after you’ve verified that you’re able to snooze the tasks in the specified task list. Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Response State

- [INSnoozeTasksIntentResponseCode.unspecified](unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INSnoozeTasksIntentResponseCode.inProgress](inprogress.md): Deprecated. A response code that indicates deletion is still in progress.
- [INSnoozeTasksIntentResponseCode.success](success.md): Deprecated. A response code that indicates your app succeeded.
- [INSnoozeTasksIntentResponseCode.failure](failure.md): Deprecated. A response code that indicates you were unable to snooze the task.
- [INSnoozeTasksIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to snooze the tasks.

# INSnoozeTasksIntentResponseCodeReady (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A response code that indicates app readiness.

> INSnoozeTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
INSnoozeTasksIntentResponseCodeReady
```

<a id="Discussion"></a>

## Discussion

Return this response code during the confirmation phase, after you’ve verified that you’re able to snooze the tasks in the specified task list. Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Response State

- [INSnoozeTasksIntentResponseCodeUnspecified](unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INSnoozeTasksIntentResponseCodeInProgress](inprogress.md): Deprecated. A response code that indicates deletion is still in progress.
- [INSnoozeTasksIntentResponseCodeSuccess](success.md): Deprecated. A response code that indicates your app succeeded.
- [INSnoozeTasksIntentResponseCodeFailure](failure.md): Deprecated. A response code that indicates you were unable to snooze the task.
- [INSnoozeTasksIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to snooze the tasks.
