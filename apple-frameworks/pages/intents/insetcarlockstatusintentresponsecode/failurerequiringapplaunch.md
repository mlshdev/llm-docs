> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetcarlockstatusintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/insetcarlockstatusintentresponsecode/failurerequiringapplaunch)

# INSetCarLockStatusIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An error code indicating that the user must launch your app to lock or unlock the car.

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot handle the request through Siri for a reason not covered by any other response code. For example, you might use this code if the user has not set up the car in your app. Do not use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INSetCarLockStatusIntentResponseCode.failure](failure.md): An error code indicating that you were unable to lock or unlock the car.
- [INSetCarLockStatusIntentResponseCode.inProgress](inprogress.md): A response code indicating that your app has attempted to lock or unlock the car, but does not yet have the results.
- [INSetCarLockStatusIntentResponseCode.ready](ready.md): A response code indicating that you are ready to handle the intent.
- [INSetCarLockStatusIntentResponseCode.success](success.md): A response code indicating that you have successfully handled the intent.
- [INSetCarLockStatusIntentResponseCode.unspecified](unspecified.md): A response code indicating that the status was not specified.

# INSetCarLockStatusIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An error code indicating that the user must launch your app to lock or unlock the car.

## Declaration

```objectivec
INSetCarLockStatusIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot handle the request through Siri for a reason not covered by any other response code. For example, you might use this code if the user has not set up the car in your app. Do not use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INSetCarLockStatusIntentResponseCodeFailure](failure.md): An error code indicating that you were unable to lock or unlock the car.
- [INSetCarLockStatusIntentResponseCodeInProgress](inprogress.md): A response code indicating that your app has attempted to lock or unlock the car, but does not yet have the results.
- [INSetCarLockStatusIntentResponseCodeReady](ready.md): A response code indicating that you are ready to handle the intent.
- [INSetCarLockStatusIntentResponseCodeSuccess](success.md): A response code indicating that you have successfully handled the intent.
- [INSetCarLockStatusIntentResponseCodeUnspecified](unspecified.md): A response code indicating that the status was not specified.
