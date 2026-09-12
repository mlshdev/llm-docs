> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetasksintentresponsecode/success](https://developer.apple.com/documentation/intents/indeletetasksintentresponsecode/success)

# INDeleteTasksIntentResponseCode.success (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

A response code that indicates your app succeeded.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case success
```

<a id="Discussion"></a>

## Discussion

Use this code after successfully deleting the tasks from the task list successfully. Your response should contain the details of the task list and tasks you changed.

## See Also

### Response state

- [INDeleteTasksIntentResponseCode.unspecified](unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INDeleteTasksIntentResponseCode.ready](ready.md): Deprecated. A response code that indicates app readiness.
- [INDeleteTasksIntentResponseCode.inProgress](inprogress.md): Deprecated. A response code that indicates deletion is still in progress.
- [INDeleteTasksIntentResponseCode.failure](failure.md): Deprecated. A response code that indicates you were unable to delete the task.
- [INDeleteTasksIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to delete the tasks.

# INDeleteTasksIntentResponseCodeSuccess (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

A response code that indicates your app succeeded.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INDeleteTasksIntentResponseCodeSuccess
```

<a id="Discussion"></a>

## Discussion

Use this code after successfully deleting the tasks from the task list successfully. Your response should contain the details of the task list and tasks you changed.

## See Also

### Response state

- [INDeleteTasksIntentResponseCodeUnspecified](unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INDeleteTasksIntentResponseCodeReady](ready.md): Deprecated. A response code that indicates app readiness.
- [INDeleteTasksIntentResponseCodeInProgress](inprogress.md): Deprecated. A response code that indicates deletion is still in progress.
- [INDeleteTasksIntentResponseCodeFailure](failure.md): Deprecated. A response code that indicates you were unable to delete the task.
- [INDeleteTasksIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to delete the tasks.
