> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetcarlockstatusintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/insetcarlockstatusintentresponsecode/inprogress)

# INSetCarLockStatusIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code indicating that your app has attempted to lock or unlock the car, but does not yet have the results.

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

When handling the intent, return this code if the action may take longer than a few seconds to complete.

## See Also

### Constants

- [INSetCarLockStatusIntentResponseCode.failure](failure.md): An error code indicating that you were unable to lock or unlock the car.
- [INSetCarLockStatusIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): An error code indicating that the user must launch your app to lock or unlock the car.
- [INSetCarLockStatusIntentResponseCode.ready](ready.md): A response code indicating that you are ready to handle the intent.
- [INSetCarLockStatusIntentResponseCode.success](success.md): A response code indicating that you have successfully handled the intent.
- [INSetCarLockStatusIntentResponseCode.unspecified](unspecified.md): A response code indicating that the status was not specified.

# INSetCarLockStatusIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code indicating that your app has attempted to lock or unlock the car, but does not yet have the results.

## Declaration

```objectivec
INSetCarLockStatusIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

When handling the intent, return this code if the action may take longer than a few seconds to complete.

## See Also

### Constants

- [INSetCarLockStatusIntentResponseCodeFailure](failure.md): An error code indicating that you were unable to lock or unlock the car.
- [INSetCarLockStatusIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): An error code indicating that the user must launch your app to lock or unlock the car.
- [INSetCarLockStatusIntentResponseCodeReady](ready.md): A response code indicating that you are ready to handle the intent.
- [INSetCarLockStatusIntentResponseCodeSuccess](success.md): A response code indicating that you have successfully handled the intent.
- [INSetCarLockStatusIntentResponseCodeUnspecified](unspecified.md): A response code indicating that the status was not specified.
