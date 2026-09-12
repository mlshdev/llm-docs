> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarlockstatusintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/ingetcarlockstatusintentresponsecode/inprogress)

# INGetCarLockStatusIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code indicating that you are getting the car’s lock status but do not yet have the results.

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

When handling the intent, return this code if your request may take longer than a few seconds to complete.

## See Also

### Constants

- [INGetCarLockStatusIntentResponseCode.failure](failure.md): An error code indicating that you were unable to get the car’s lock status.
- [INGetCarLockStatusIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): An error code indicating that the user must launch your app to get the car’s lock status.
- [INGetCarLockStatusIntentResponseCode.ready](ready.md): A response code indicating that you are ready to handle the intent.
- [INGetCarLockStatusIntentResponseCode.success](success.md): A response code indicating that you have successfully handled the intent.
- [INGetCarLockStatusIntentResponseCode.unspecified](unspecified.md): A response code indicating that the status was not specified.

# INGetCarLockStatusIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code indicating that you are getting the car’s lock status but do not yet have the results.

## Declaration

```objectivec
INGetCarLockStatusIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

When handling the intent, return this code if your request may take longer than a few seconds to complete.

## See Also

### Constants

- [INGetCarLockStatusIntentResponseCodeFailure](failure.md): An error code indicating that you were unable to get the car’s lock status.
- [INGetCarLockStatusIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): An error code indicating that the user must launch your app to get the car’s lock status.
- [INGetCarLockStatusIntentResponseCodeReady](ready.md): A response code indicating that you are ready to handle the intent.
- [INGetCarLockStatusIntentResponseCodeSuccess](success.md): A response code indicating that you have successfully handled the intent.
- [INGetCarLockStatusIntentResponseCodeUnspecified](unspecified.md): A response code indicating that the status was not specified.
