> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarlockstatusintentresponsecode/failure](https://developer.apple.com/documentation/intents/ingetcarlockstatusintentresponsecode/failure)

# INGetCarLockStatusIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An error code indicating that you were unable to get the car’s lock status.

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this response code for both transient and unrecoverable errors that would prevent your app from getting the car’s lock status.

## See Also

### Constants

- [INGetCarLockStatusIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): An error code indicating that the user must launch your app to get the car’s lock status.
- [INGetCarLockStatusIntentResponseCode.inProgress](inprogress.md): A response code indicating that you are getting the car’s lock status but do not yet have the results.
- [INGetCarLockStatusIntentResponseCode.ready](ready.md): A response code indicating that you are ready to handle the intent.
- [INGetCarLockStatusIntentResponseCode.success](success.md): A response code indicating that you have successfully handled the intent.
- [INGetCarLockStatusIntentResponseCode.unspecified](unspecified.md): A response code indicating that the status was not specified.

# INGetCarLockStatusIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An error code indicating that you were unable to get the car’s lock status.

## Declaration

```objectivec
INGetCarLockStatusIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this response code for both transient and unrecoverable errors that would prevent your app from getting the car’s lock status.

## See Also

### Constants

- [INGetCarLockStatusIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): An error code indicating that the user must launch your app to get the car’s lock status.
- [INGetCarLockStatusIntentResponseCodeInProgress](inprogress.md): A response code indicating that you are getting the car’s lock status but do not yet have the results.
- [INGetCarLockStatusIntentResponseCodeReady](ready.md): A response code indicating that you are ready to handle the intent.
- [INGetCarLockStatusIntentResponseCodeSuccess](success.md): A response code indicating that you have successfully handled the intent.
- [INGetCarLockStatusIntentResponseCodeUnspecified](unspecified.md): A response code indicating that the status was not specified.
