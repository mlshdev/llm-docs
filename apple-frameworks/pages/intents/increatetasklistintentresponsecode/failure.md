> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatetasklistintentresponsecode/failure](https://developer.apple.com/documentation/intents/increatetasklistintentresponsecode/failure)

# INCreateTaskListIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

You were unable to create the task list.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this response code for both transient and unrecoverable errors that prevented you from creating the task list.

## See Also

### Constants

- [INCreateTaskListIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INCreateTaskListIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INCreateTaskListIntentResponseCode.inProgress](inprogress.md): Deprecated. Task list creation is still in progress.
- [INCreateTaskListIntentResponseCode.success](success.md): Deprecated. You successfully created the task list.
- [INCreateTaskListIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must create the task list from within your app.

# INCreateTaskListIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

You were unable to create the task list.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INCreateTaskListIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this response code for both transient and unrecoverable errors that prevented you from creating the task list.

## See Also

### Constants

- [INCreateTaskListIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INCreateTaskListIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INCreateTaskListIntentResponseCodeInProgress](inprogress.md): Deprecated. Task list creation is still in progress.
- [INCreateTaskListIntentResponseCodeSuccess](success.md): Deprecated. You successfully created the task list.
- [INCreateTaskListIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must create the task list from within your app.
