> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/insettaskattributeintentresponsecode/inprogress)

# INSetTaskAttributeIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The modification of the task list is still in progress.

> INSetTaskAttributeIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

Return this code if you began adding modifying the task list but did not confirm that the process was complete. You might use this code when a server handles modifications and you have not yet received a confirmation from that server.

When handling the intent, you might want to first configure a timer to fire if your server does not return within a few seconds. Use your timer’s handler block to provide the in-progress response back to Siri.

## See Also

### Constants

- [INSetTaskAttributeIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSetTaskAttributeIntentResponseCode.ready](ready.md): Deprecated. You are ready to handle the intent.
- [INSetTaskAttributeIntentResponseCode.success](success.md): Deprecated. You successfully modified the task attributes.
- [INSetTaskAttributeIntentResponseCode.failure](failure.md): Deprecated. You were unable to modify the task attributes.
- [INSetTaskAttributeIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must modify tasks from within your app.

# INSetTaskAttributeIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The modification of the task list is still in progress.

> INSetTaskAttributeIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
INSetTaskAttributeIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Return this code if you began adding modifying the task list but did not confirm that the process was complete. You might use this code when a server handles modifications and you have not yet received a confirmation from that server.

When handling the intent, you might want to first configure a timer to fire if your server does not return within a few seconds. Use your timer’s handler block to provide the in-progress response back to Siri.

## See Also

### Constants

- [INSetTaskAttributeIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSetTaskAttributeIntentResponseCodeReady](ready.md): Deprecated. You are ready to handle the intent.
- [INSetTaskAttributeIntentResponseCodeSuccess](success.md): Deprecated. You successfully modified the task attributes.
- [INSetTaskAttributeIntentResponseCodeFailure](failure.md): Deprecated. You were unable to modify the task attributes.
- [INSetTaskAttributeIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must modify tasks from within your app.
