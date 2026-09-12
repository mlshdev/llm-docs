> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inactivatecarsignalintentresponsecode/ready](https://developer.apple.com/documentation/intents/inactivatecarsignalintentresponsecode/ready)

# INActivateCarSignalIntentResponseCode.ready (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code indicating that you are ready to handle the intent.

## Declaration

```swift
case ready
```

<a id="Discussion"></a>

## Discussion

During the confirmation phase of an intent, use this code to signal that your app is ready and able to act on the intent.

## See Also

### Constants

- [INActivateCarSignalIntentResponseCode.failure](failure.md): An error code indicating that you were unable to activate the car’s signals.
- [INActivateCarSignalIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): An error code indicating that the user must launch your app to activate the car’s signals.
- [INActivateCarSignalIntentResponseCode.inProgress](inprogress.md): A response code indicating that you are activating the signals but do not yet have the results.
- [INActivateCarSignalIntentResponseCode.success](success.md): A response code indicating that you have successfully handled the intent.
- [INActivateCarSignalIntentResponseCode.unspecified](unspecified.md): A response code indicating that the status was not specified.

# INActivateCarSignalIntentResponseCodeReady (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code indicating that you are ready to handle the intent.

## Declaration

```objectivec
INActivateCarSignalIntentResponseCodeReady
```

<a id="Discussion"></a>

## Discussion

During the confirmation phase of an intent, use this code to signal that your app is ready and able to act on the intent.

## See Also

### Constants

- [INActivateCarSignalIntentResponseCodeFailure](failure.md): An error code indicating that you were unable to activate the car’s signals.
- [INActivateCarSignalIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): An error code indicating that the user must launch your app to activate the car’s signals.
- [INActivateCarSignalIntentResponseCodeInProgress](inprogress.md): A response code indicating that you are activating the signals but do not yet have the results.
- [INActivateCarSignalIntentResponseCodeSuccess](success.md): A response code indicating that you have successfully handled the intent.
- [INActivateCarSignalIntentResponseCodeUnspecified](unspecified.md): A response code indicating that the status was not specified.
