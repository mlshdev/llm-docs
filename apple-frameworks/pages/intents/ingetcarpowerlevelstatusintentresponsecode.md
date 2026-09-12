> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponsecode](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponsecode)

# INGetCarPowerLevelStatusIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate the status of the response.

## Declaration

```swift
enum INGetCarPowerLevelStatusIntentResponseCode
```

## Topics

### Constants

- [INGetCarPowerLevelStatusIntentResponseCode.failure](ingetcarpowerlevelstatusintentresponsecode/failure.md): An error code indicating that you were unable to get the car’s power level.
- [INGetCarPowerLevelStatusIntentResponseCode.failureRequiringAppLaunch](ingetcarpowerlevelstatusintentresponsecode/failurerequiringapplaunch.md): An error code indicating that the user must launch your app to get the car’s current power level.
- [INGetCarPowerLevelStatusIntentResponseCode.inProgress](ingetcarpowerlevelstatusintentresponsecode/inprogress.md): A response code indicating that your app has requested the power level data, but has not yet received the results.
- [INGetCarPowerLevelStatusIntentResponseCode.ready](ingetcarpowerlevelstatusintentresponsecode/ready.md): A response code indicating that you are ready to handle the intent.
- [INGetCarPowerLevelStatusIntentResponseCode.success](ingetcarpowerlevelstatusintentresponsecode/success.md): A response code indicating that you successfully handled the intent.
- [INGetCarPowerLevelStatusIntentResponseCode.unspecified](ingetcarpowerlevelstatusintentresponsecode/unspecified.md): A response code indicating that the status was not specified.

### Initializers

- [init(rawValue:)](ingetcarpowerlevelstatusintentresponsecode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Response Code

- [code](ingetcarpowerlevelstatusintentresponse/code.md): The code that indicates success or failure when confirming or handling an intent.

# INGetCarPowerLevelStatusIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate the status of the response.

## Declaration

```objectivec
enum INGetCarPowerLevelStatusIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INGetCarPowerLevelStatusIntentResponseCodeFailure](ingetcarpowerlevelstatusintentresponsecode/failure.md): An error code indicating that you were unable to get the car’s power level.
- [INGetCarPowerLevelStatusIntentResponseCodeFailureRequiringAppLaunch](ingetcarpowerlevelstatusintentresponsecode/failurerequiringapplaunch.md): An error code indicating that the user must launch your app to get the car’s current power level.
- [INGetCarPowerLevelStatusIntentResponseCodeInProgress](ingetcarpowerlevelstatusintentresponsecode/inprogress.md): A response code indicating that your app has requested the power level data, but has not yet received the results.
- [INGetCarPowerLevelStatusIntentResponseCodeReady](ingetcarpowerlevelstatusintentresponsecode/ready.md): A response code indicating that you are ready to handle the intent.
- [INGetCarPowerLevelStatusIntentResponseCodeSuccess](ingetcarpowerlevelstatusintentresponsecode/success.md): A response code indicating that you successfully handled the intent.
- [INGetCarPowerLevelStatusIntentResponseCodeUnspecified](ingetcarpowerlevelstatusintentresponsecode/unspecified.md): A response code indicating that the status was not specified.

## See Also

### Getting the Response Code

- [code](ingetcarpowerlevelstatusintentresponse/code.md): The code that indicates success or failure when confirming or handling an intent.
