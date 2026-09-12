> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inactivatecarsignalintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/inactivatecarsignalintentresponsecode/failurerequiringapplaunch)

# INActivateCarSignalIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An error code indicating that the user must launch your app to activate the car’s signals.

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot handle the request through Siri for a reason not covered by any other response code. For example, you might use this code if the user has not set up the car in your app. Do not use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INActivateCarSignalIntentResponseCode.failure](failure.md): An error code indicating that you were unable to activate the car’s signals.
- [INActivateCarSignalIntentResponseCode.inProgress](inprogress.md): A response code indicating that you are activating the signals but do not yet have the results.
- [INActivateCarSignalIntentResponseCode.ready](ready.md): A response code indicating that you are ready to handle the intent.
- [INActivateCarSignalIntentResponseCode.success](success.md): A response code indicating that you have successfully handled the intent.
- [INActivateCarSignalIntentResponseCode.unspecified](unspecified.md): A response code indicating that the status was not specified.

# INActivateCarSignalIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An error code indicating that the user must launch your app to activate the car’s signals.

## Declaration

```objectivec
INActivateCarSignalIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot handle the request through Siri for a reason not covered by any other response code. For example, you might use this code if the user has not set up the car in your app. Do not use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INActivateCarSignalIntentResponseCodeFailure](failure.md): An error code indicating that you were unable to activate the car’s signals.
- [INActivateCarSignalIntentResponseCodeInProgress](inprogress.md): A response code indicating that you are activating the signals but do not yet have the results.
- [INActivateCarSignalIntentResponseCodeReady](ready.md): A response code indicating that you are ready to handle the intent.
- [INActivateCarSignalIntentResponseCodeSuccess](success.md): A response code indicating that you have successfully handled the intent.
- [INActivateCarSignalIntentResponseCodeUnspecified](unspecified.md): A response code indicating that the status was not specified.
