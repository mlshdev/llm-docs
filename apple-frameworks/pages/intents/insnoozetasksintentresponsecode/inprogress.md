> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetasksintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/insnoozetasksintentresponsecode/inprogress)

# INSnoozeTasksIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A response code that indicates deletion is still in progress.

> INSnoozeTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

Return this code if you began snoozing tasks in the task list but didn’t confirm that the process was complete. For example, when a server handles the snoozing and you’ve not yet received a confirmation from that server. Configure a timer to fire if your server doesn’t return within a few seconds. Use your timer’s handler block to provide the in-progress response back to Siri.

## See Also

### Response State

- [INSnoozeTasksIntentResponseCode.unspecified](unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INSnoozeTasksIntentResponseCode.ready](ready.md): Deprecated. A response code that indicates app readiness.
- [INSnoozeTasksIntentResponseCode.success](success.md): Deprecated. A response code that indicates your app succeeded.
- [INSnoozeTasksIntentResponseCode.failure](failure.md): Deprecated. A response code that indicates you were unable to snooze the task.
- [INSnoozeTasksIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to snooze the tasks.

# INSnoozeTasksIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A response code that indicates deletion is still in progress.

> INSnoozeTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
INSnoozeTasksIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Return this code if you began snoozing tasks in the task list but didn’t confirm that the process was complete. For example, when a server handles the snoozing and you’ve not yet received a confirmation from that server. Configure a timer to fire if your server doesn’t return within a few seconds. Use your timer’s handler block to provide the in-progress response back to Siri.

## See Also

### Response State

- [INSnoozeTasksIntentResponseCodeUnspecified](unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INSnoozeTasksIntentResponseCodeReady](ready.md): Deprecated. A response code that indicates app readiness.
- [INSnoozeTasksIntentResponseCodeSuccess](success.md): Deprecated. A response code that indicates your app succeeded.
- [INSnoozeTasksIntentResponseCodeFailure](failure.md): Deprecated. A response code that indicates you were unable to snooze the task.
- [INSnoozeTasksIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to snooze the tasks.
