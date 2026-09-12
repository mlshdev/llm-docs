> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inactivatecarsignalintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/inactivatecarsignalintentresponsecode/inprogress)

# INActivateCarSignalIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code indicating that you are activating the signals but do not yet have the results.

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

When handling the intent, return this code if your activation attempt may take longer than a few seconds to complete.

## See Also

### Constants

- [INActivateCarSignalIntentResponseCode.failure](failure.md): An error code indicating that you were unable to activate the car’s signals.
- [INActivateCarSignalIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): An error code indicating that the user must launch your app to activate the car’s signals.
- [INActivateCarSignalIntentResponseCode.ready](ready.md): A response code indicating that you are ready to handle the intent.
- [INActivateCarSignalIntentResponseCode.success](success.md): A response code indicating that you have successfully handled the intent.
- [INActivateCarSignalIntentResponseCode.unspecified](unspecified.md): A response code indicating that the status was not specified.

# INActivateCarSignalIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code indicating that you are activating the signals but do not yet have the results.

## Declaration

```objectivec
INActivateCarSignalIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

When handling the intent, return this code if your activation attempt may take longer than a few seconds to complete.

## See Also

### Constants

- [INActivateCarSignalIntentResponseCodeFailure](failure.md): An error code indicating that you were unable to activate the car’s signals.
- [INActivateCarSignalIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): An error code indicating that the user must launch your app to activate the car’s signals.
- [INActivateCarSignalIntentResponseCodeReady](ready.md): A response code indicating that you are ready to handle the intent.
- [INActivateCarSignalIntentResponseCodeSuccess](success.md): A response code indicating that you have successfully handled the intent.
- [INActivateCarSignalIntentResponseCodeUnspecified](unspecified.md): A response code indicating that the status was not specified.
