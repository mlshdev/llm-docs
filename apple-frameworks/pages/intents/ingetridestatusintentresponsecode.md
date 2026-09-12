> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetridestatusintentresponsecode](https://developer.apple.com/documentation/intents/ingetridestatusintentresponsecode)

# INGetRideStatusIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the state of the response.

## Declaration

```swift
enum INGetRideStatusIntentResponseCode
```

## Topics

### Constants

- [INGetRideStatusIntentResponseCode.unspecified](ingetridestatusintentresponsecode/unspecified.md): There is no specified response code.
- [INGetRideStatusIntentResponseCode.ready](ingetridestatusintentresponsecode/ready.md): You are ready to handle the intent.
- [INGetRideStatusIntentResponseCode.inProgress](ingetridestatusintentresponsecode/inprogress.md): Deprecated. You are in the process of handling the intent.
- [INGetRideStatusIntentResponseCode.success](ingetridestatusintentresponsecode/success.md): You successfully handled the intent.
- [INGetRideStatusIntentResponseCode.failure](ingetridestatusintentresponsecode/failure.md): You were unable to retrieve information about the current ride.
- [INGetRideStatusIntentResponseCode.failureRequiringAppLaunch](ingetridestatusintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to get information about the current ride.
- [INGetRideStatusIntentResponseCode.failureRequiringAppLaunchMustVerifyCredentials](ingetridestatusintentresponsecode/failurerequiringapplaunchmustverifycredentials.md): The user must launch your app and verify their credentials to continue.
- [INGetRideStatusIntentResponseCode.failureRequiringAppLaunchServiceTemporarilyUnavailable](ingetridestatusintentresponsecode/failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.

### Initializers

- [init(rawValue:)](ingetridestatusintentresponsecode/init%28rawvalue_%29.md)

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

- [code](ingetridestatusintentresponse/code.md): The code indicating whether you successfully handled the intent.

# INGetRideStatusIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the state of the response.

## Declaration

```objectivec
enum INGetRideStatusIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INGetRideStatusIntentResponseCodeUnspecified](ingetridestatusintentresponsecode/unspecified.md): There is no specified response code.
- [INGetRideStatusIntentResponseCodeReady](ingetridestatusintentresponsecode/ready.md): You are ready to handle the intent.
- [INGetRideStatusIntentResponseCodeInProgress](ingetridestatusintentresponsecode/inprogress.md): Deprecated. You are in the process of handling the intent.
- [INGetRideStatusIntentResponseCodeSuccess](ingetridestatusintentresponsecode/success.md): You successfully handled the intent.
- [INGetRideStatusIntentResponseCodeFailure](ingetridestatusintentresponsecode/failure.md): You were unable to retrieve information about the current ride.
- [INGetRideStatusIntentResponseCodeFailureRequiringAppLaunch](ingetridestatusintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to get information about the current ride.
- [INGetRideStatusIntentResponseCodeFailureRequiringAppLaunchMustVerifyCredentials](ingetridestatusintentresponsecode/failurerequiringapplaunchmustverifycredentials.md): The user must launch your app and verify their credentials to continue.
- [INGetRideStatusIntentResponseCodeFailureRequiringAppLaunchServiceTemporarilyUnavailable](ingetridestatusintentresponsecode/failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.

## See Also

### Getting the Response Code

- [code](ingetridestatusintentresponse/code.md): The code indicating whether you successfully handled the intent.
