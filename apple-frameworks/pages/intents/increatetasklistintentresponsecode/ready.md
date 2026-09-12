> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatetasklistintentresponsecode/ready](https://developer.apple.com/documentation/intents/increatetasklistintentresponsecode/ready)

# INCreateTaskListIntentResponseCode.ready (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

You’re ready to handle the intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case ready
```

<a id="Discussion"></a>

## Discussion

Return this response code during the confirmation phase after you’ve verified that you’re able to create the task list. Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Constants

- [INCreateTaskListIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INCreateTaskListIntentResponseCode.inProgress](inprogress.md): Deprecated. Task list creation is still in progress.
- [INCreateTaskListIntentResponseCode.success](success.md): Deprecated. You successfully created the task list.
- [INCreateTaskListIntentResponseCode.failure](failure.md): Deprecated. You were unable to create the task list.
- [INCreateTaskListIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must create the task list from within your app.

# INCreateTaskListIntentResponseCodeReady (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

You’re ready to handle the intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INCreateTaskListIntentResponseCodeReady
```

<a id="Discussion"></a>

## Discussion

Return this response code during the confirmation phase after you’ve verified that you’re able to create the task list. Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Constants

- [INCreateTaskListIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INCreateTaskListIntentResponseCodeInProgress](inprogress.md): Deprecated. Task list creation is still in progress.
- [INCreateTaskListIntentResponseCodeSuccess](success.md): Deprecated. You successfully created the task list.
- [INCreateTaskListIntentResponseCodeFailure](failure.md): Deprecated. You were unable to create the task list.
- [INCreateTaskListIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must create the task list from within your app.
