> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponsecode/inprogress)

# INGetCarPowerLevelStatusIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code indicating that your app has requested the power level data, but has not yet received the results.

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

When handling the intent, return this code if your request may take longer than a few seconds to complete.

## See Also

### Constants

- [INGetCarPowerLevelStatusIntentResponseCode.failure](failure.md): An error code indicating that you were unable to get the car’s power level.
- [INGetCarPowerLevelStatusIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): An error code indicating that the user must launch your app to get the car’s current power level.
- [INGetCarPowerLevelStatusIntentResponseCode.ready](ready.md): A response code indicating that you are ready to handle the intent.
- [INGetCarPowerLevelStatusIntentResponseCode.success](success.md): A response code indicating that you successfully handled the intent.
- [INGetCarPowerLevelStatusIntentResponseCode.unspecified](unspecified.md): A response code indicating that the status was not specified.

# INGetCarPowerLevelStatusIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code indicating that your app has requested the power level data, but has not yet received the results.

## Declaration

```objectivec
INGetCarPowerLevelStatusIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

When handling the intent, return this code if your request may take longer than a few seconds to complete.

## See Also

### Constants

- [INGetCarPowerLevelStatusIntentResponseCodeFailure](failure.md): An error code indicating that you were unable to get the car’s power level.
- [INGetCarPowerLevelStatusIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): An error code indicating that the user must launch your app to get the car’s current power level.
- [INGetCarPowerLevelStatusIntentResponseCodeReady](ready.md): A response code indicating that you are ready to handle the intent.
- [INGetCarPowerLevelStatusIntentResponseCodeSuccess](success.md): A response code indicating that you successfully handled the intent.
- [INGetCarPowerLevelStatusIntentResponseCodeUnspecified](unspecified.md): A response code indicating that the status was not specified.
