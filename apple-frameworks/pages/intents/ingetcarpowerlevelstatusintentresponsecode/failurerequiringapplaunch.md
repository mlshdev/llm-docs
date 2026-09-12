> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponsecode/failurerequiringapplaunch)

# INGetCarPowerLevelStatusIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An error code indicating that the user must launch your app to get the car’s current power level.

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot handle the request through Siri for a reason not covered by any other response code. For example, you might use this code if the user has not set up the car in your app. Do not use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INGetCarPowerLevelStatusIntentResponseCode.failure](failure.md): An error code indicating that you were unable to get the car’s power level.
- [INGetCarPowerLevelStatusIntentResponseCode.inProgress](inprogress.md): A response code indicating that your app has requested the power level data, but has not yet received the results.
- [INGetCarPowerLevelStatusIntentResponseCode.ready](ready.md): A response code indicating that you are ready to handle the intent.
- [INGetCarPowerLevelStatusIntentResponseCode.success](success.md): A response code indicating that you successfully handled the intent.
- [INGetCarPowerLevelStatusIntentResponseCode.unspecified](unspecified.md): A response code indicating that the status was not specified.

# INGetCarPowerLevelStatusIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An error code indicating that the user must launch your app to get the car’s current power level.

## Declaration

```objectivec
INGetCarPowerLevelStatusIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot handle the request through Siri for a reason not covered by any other response code. For example, you might use this code if the user has not set up the car in your app. Do not use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INGetCarPowerLevelStatusIntentResponseCodeFailure](failure.md): An error code indicating that you were unable to get the car’s power level.
- [INGetCarPowerLevelStatusIntentResponseCodeInProgress](inprogress.md): A response code indicating that your app has requested the power level data, but has not yet received the results.
- [INGetCarPowerLevelStatusIntentResponseCodeReady](ready.md): A response code indicating that you are ready to handle the intent.
- [INGetCarPowerLevelStatusIntentResponseCodeSuccess](success.md): A response code indicating that you successfully handled the intent.
- [INGetCarPowerLevelStatusIntentResponseCodeUnspecified](unspecified.md): A response code indicating that the status was not specified.
