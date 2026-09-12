> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inactivatecarsignalintentresponsecode/failure](https://developer.apple.com/documentation/intents/inactivatecarsignalintentresponsecode/failure)

# INActivateCarSignalIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An error code indicating that you were unable to activate the car’s signals.

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this response code for both transient and unrecoverable errors that would prevent your app from activating the car’s signals.

## See Also

### Constants

- [INActivateCarSignalIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): An error code indicating that the user must launch your app to activate the car’s signals.
- [INActivateCarSignalIntentResponseCode.inProgress](inprogress.md): A response code indicating that you are activating the signals but do not yet have the results.
- [INActivateCarSignalIntentResponseCode.ready](ready.md): A response code indicating that you are ready to handle the intent.
- [INActivateCarSignalIntentResponseCode.success](success.md): A response code indicating that you have successfully handled the intent.
- [INActivateCarSignalIntentResponseCode.unspecified](unspecified.md): A response code indicating that the status was not specified.

# INActivateCarSignalIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An error code indicating that you were unable to activate the car’s signals.

## Declaration

```objectivec
INActivateCarSignalIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this response code for both transient and unrecoverable errors that would prevent your app from activating the car’s signals.

## See Also

### Constants

- [INActivateCarSignalIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): An error code indicating that the user must launch your app to activate the car’s signals.
- [INActivateCarSignalIntentResponseCodeInProgress](inprogress.md): A response code indicating that you are activating the signals but do not yet have the results.
- [INActivateCarSignalIntentResponseCodeReady](ready.md): A response code indicating that you are ready to handle the intent.
- [INActivateCarSignalIntentResponseCodeSuccess](success.md): A response code indicating that you have successfully handled the intent.
- [INActivateCarSignalIntentResponseCodeUnspecified](unspecified.md): A response code indicating that the status was not specified.
