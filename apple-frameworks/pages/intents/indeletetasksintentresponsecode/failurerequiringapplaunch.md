> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetasksintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/indeletetasksintentresponsecode/failurerequiringapplaunch)

# INDeleteTasksIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

A response code that indicates the user must launch your app to delete the tasks.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t delete the tasks from your Intents extension, but the user can do so from your app. Don’t use this code for general errors or to force the user to launch your app.

## See Also

### Response state

- [INDeleteTasksIntentResponseCode.unspecified](unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INDeleteTasksIntentResponseCode.ready](ready.md): Deprecated. A response code that indicates app readiness.
- [INDeleteTasksIntentResponseCode.inProgress](inprogress.md): Deprecated. A response code that indicates deletion is still in progress.
- [INDeleteTasksIntentResponseCode.success](success.md): Deprecated. A response code that indicates your app succeeded.
- [INDeleteTasksIntentResponseCode.failure](failure.md): Deprecated. A response code that indicates you were unable to delete the task.

# INDeleteTasksIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

A response code that indicates the user must launch your app to delete the tasks.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INDeleteTasksIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t delete the tasks from your Intents extension, but the user can do so from your app. Don’t use this code for general errors or to force the user to launch your app.

## See Also

### Response state

- [INDeleteTasksIntentResponseCodeUnspecified](unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INDeleteTasksIntentResponseCodeReady](ready.md): Deprecated. A response code that indicates app readiness.
- [INDeleteTasksIntentResponseCodeInProgress](inprogress.md): Deprecated. A response code that indicates deletion is still in progress.
- [INDeleteTasksIntentResponseCodeSuccess](success.md): Deprecated. A response code that indicates your app succeeded.
- [INDeleteTasksIntentResponseCodeFailure](failure.md): Deprecated. A response code that indicates you were unable to delete the task.
