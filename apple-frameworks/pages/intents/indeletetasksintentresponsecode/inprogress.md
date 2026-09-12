> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetasksintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/indeletetasksintentresponsecode/inprogress)

# INDeleteTasksIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

A response code that indicates deletion is still in progress.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

Return this code if you began deleting tasks from the task list but didn’t confirm the process was complete. For example, when a server handles the deletion and you’ve not yet received a confirmation from that server. Configure a timer to fire if your server doesn’t return within a few seconds. Use your timer’s handler block to provide the in-progress response back to Siri.

## See Also

### Response state

- [INDeleteTasksIntentResponseCode.unspecified](unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INDeleteTasksIntentResponseCode.ready](ready.md): Deprecated. A response code that indicates app readiness.
- [INDeleteTasksIntentResponseCode.success](success.md): Deprecated. A response code that indicates your app succeeded.
- [INDeleteTasksIntentResponseCode.failure](failure.md): Deprecated. A response code that indicates you were unable to delete the task.
- [INDeleteTasksIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to delete the tasks.

# INDeleteTasksIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

A response code that indicates deletion is still in progress.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INDeleteTasksIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Return this code if you began deleting tasks from the task list but didn’t confirm the process was complete. For example, when a server handles the deletion and you’ve not yet received a confirmation from that server. Configure a timer to fire if your server doesn’t return within a few seconds. Use your timer’s handler block to provide the in-progress response back to Siri.

## See Also

### Response state

- [INDeleteTasksIntentResponseCodeUnspecified](unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INDeleteTasksIntentResponseCodeReady](ready.md): Deprecated. A response code that indicates app readiness.
- [INDeleteTasksIntentResponseCodeSuccess](success.md): Deprecated. A response code that indicates your app succeeded.
- [INDeleteTasksIntentResponseCodeFailure](failure.md): Deprecated. A response code that indicates you were unable to delete the task.
- [INDeleteTasksIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to delete the tasks.
