> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatetasklistintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/increatetasklistintentresponsecode/inprogress)

# INCreateTaskListIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Task list creation is still in progress.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

Return this code if you initiated the task list creation process but didn’t receive a timely response. You might use this code when a server handles creation and you haven’t yet received a confirmation from that server.

When handling the intent, you might want to first configure a timer to fire if your server doesn’t return within a few seconds. Use your timer’s handler block to provide the in-progress response back to Siri.

## See Also

### Constants

- [INCreateTaskListIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INCreateTaskListIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INCreateTaskListIntentResponseCode.success](success.md): Deprecated. You successfully created the task list.
- [INCreateTaskListIntentResponseCode.failure](failure.md): Deprecated. You were unable to create the task list.
- [INCreateTaskListIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must create the task list from within your app.

# INCreateTaskListIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Task list creation is still in progress.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INCreateTaskListIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Return this code if you initiated the task list creation process but didn’t receive a timely response. You might use this code when a server handles creation and you haven’t yet received a confirmation from that server.

When handling the intent, you might want to first configure a timer to fire if your server doesn’t return within a few seconds. Use your timer’s handler block to provide the in-progress response back to Siri.

## See Also

### Constants

- [INCreateTaskListIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INCreateTaskListIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INCreateTaskListIntentResponseCodeSuccess](success.md): Deprecated. You successfully created the task list.
- [INCreateTaskListIntentResponseCodeFailure](failure.md): Deprecated. You were unable to create the task list.
- [INCreateTaskListIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must create the task list from within your app.
