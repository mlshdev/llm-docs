> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetasksintentresponsecode/unspecified](https://developer.apple.com/documentation/intents/insnoozetasksintentresponsecode/unspecified)

# INSnoozeTasksIntentResponseCode.unspecified (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A response code that indicates an unknown state.

> INSnoozeTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
case unspecified
```

<a id="Discussion"></a>

## Discussion

Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Response State

- [INSnoozeTasksIntentResponseCode.ready](ready.md): Deprecated. A response code that indicates app readiness.
- [INSnoozeTasksIntentResponseCode.inProgress](inprogress.md): Deprecated. A response code that indicates deletion is still in progress.
- [INSnoozeTasksIntentResponseCode.success](success.md): Deprecated. A response code that indicates your app succeeded.
- [INSnoozeTasksIntentResponseCode.failure](failure.md): Deprecated. A response code that indicates you were unable to snooze the task.
- [INSnoozeTasksIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to snooze the tasks.

# INSnoozeTasksIntentResponseCodeUnspecified (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A response code that indicates an unknown state.

> INSnoozeTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
INSnoozeTasksIntentResponseCodeUnspecified
```

<a id="Discussion"></a>

## Discussion

Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Response State

- [INSnoozeTasksIntentResponseCodeReady](ready.md): Deprecated. A response code that indicates app readiness.
- [INSnoozeTasksIntentResponseCodeInProgress](inprogress.md): Deprecated. A response code that indicates deletion is still in progress.
- [INSnoozeTasksIntentResponseCodeSuccess](success.md): Deprecated. A response code that indicates your app succeeded.
- [INSnoozeTasksIntentResponseCodeFailure](failure.md): Deprecated. A response code that indicates you were unable to snooze the task.
- [INSnoozeTasksIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to snooze the tasks.
