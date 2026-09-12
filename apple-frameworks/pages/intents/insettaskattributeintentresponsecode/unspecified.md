> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintentresponsecode/unspecified](https://developer.apple.com/documentation/intents/insettaskattributeintentresponsecode/unspecified)

# INSetTaskAttributeIntentResponseCode.unspecified (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The response didn’t specify a response code.

> INSetTaskAttributeIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
case unspecified
```

<a id="Discussion"></a>

## Discussion

Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Constants

- [INSetTaskAttributeIntentResponseCode.ready](ready.md): Deprecated. You are ready to handle the intent.
- [INSetTaskAttributeIntentResponseCode.inProgress](inprogress.md): Deprecated. The modification of the task list is still in progress.
- [INSetTaskAttributeIntentResponseCode.success](success.md): Deprecated. You successfully modified the task attributes.
- [INSetTaskAttributeIntentResponseCode.failure](failure.md): Deprecated. You were unable to modify the task attributes.
- [INSetTaskAttributeIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must modify tasks from within your app.

# INSetTaskAttributeIntentResponseCodeUnspecified (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The response didn’t specify a response code.

> INSetTaskAttributeIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
INSetTaskAttributeIntentResponseCodeUnspecified
```

<a id="Discussion"></a>

## Discussion

Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Constants

- [INSetTaskAttributeIntentResponseCodeReady](ready.md): Deprecated. You are ready to handle the intent.
- [INSetTaskAttributeIntentResponseCodeInProgress](inprogress.md): Deprecated. The modification of the task list is still in progress.
- [INSetTaskAttributeIntentResponseCodeSuccess](success.md): Deprecated. You successfully modified the task attributes.
- [INSetTaskAttributeIntentResponseCodeFailure](failure.md): Deprecated. You were unable to modify the task attributes.
- [INSetTaskAttributeIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must modify tasks from within your app.
