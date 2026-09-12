> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/insettaskattributeintentresponsecode/failurerequiringapplaunch)

# INSetTaskAttributeIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The user must modify tasks from within your app.

> INSetTaskAttributeIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot modify task attributes from your Intents extension but the user can do so from your app. Do not use this code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INSetTaskAttributeIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSetTaskAttributeIntentResponseCode.ready](ready.md): Deprecated. You are ready to handle the intent.
- [INSetTaskAttributeIntentResponseCode.inProgress](inprogress.md): Deprecated. The modification of the task list is still in progress.
- [INSetTaskAttributeIntentResponseCode.success](success.md): Deprecated. You successfully modified the task attributes.
- [INSetTaskAttributeIntentResponseCode.failure](failure.md): Deprecated. You were unable to modify the task attributes.

# INSetTaskAttributeIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The user must modify tasks from within your app.

> INSetTaskAttributeIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
INSetTaskAttributeIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot modify task attributes from your Intents extension but the user can do so from your app. Do not use this code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INSetTaskAttributeIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSetTaskAttributeIntentResponseCodeReady](ready.md): Deprecated. You are ready to handle the intent.
- [INSetTaskAttributeIntentResponseCodeInProgress](inprogress.md): Deprecated. The modification of the task list is still in progress.
- [INSetTaskAttributeIntentResponseCodeSuccess](success.md): Deprecated. You successfully modified the task attributes.
- [INSetTaskAttributeIntentResponseCodeFailure](failure.md): Deprecated. You were unable to modify the task attributes.
