> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatetasklistintentresponsecode/unspecified](https://developer.apple.com/documentation/intents/increatetasklistintentresponsecode/unspecified)

# INCreateTaskListIntentResponseCode.unspecified (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The response didn’t specify a response code.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case unspecified
```

<a id="Discussion"></a>

## Discussion

Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Constants

- [INCreateTaskListIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INCreateTaskListIntentResponseCode.inProgress](inprogress.md): Deprecated. Task list creation is still in progress.
- [INCreateTaskListIntentResponseCode.success](success.md): Deprecated. You successfully created the task list.
- [INCreateTaskListIntentResponseCode.failure](failure.md): Deprecated. You were unable to create the task list.
- [INCreateTaskListIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must create the task list from within your app.

# INCreateTaskListIntentResponseCodeUnspecified (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The response didn’t specify a response code.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INCreateTaskListIntentResponseCodeUnspecified
```

<a id="Discussion"></a>

## Discussion

Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Constants

- [INCreateTaskListIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INCreateTaskListIntentResponseCodeInProgress](inprogress.md): Deprecated. Task list creation is still in progress.
- [INCreateTaskListIntentResponseCodeSuccess](success.md): Deprecated. You successfully created the task list.
- [INCreateTaskListIntentResponseCodeFailure](failure.md): Deprecated. You were unable to create the task list.
- [INCreateTaskListIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must create the task list from within your app.
