> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestrideintentresponsecode](https://developer.apple.com/documentation/intents/inrequestrideintentresponsecode)

# INRequestRideIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the state of the response.

## Declaration

```swift
enum INRequestRideIntentResponseCode
```

## Topics

### Constants

- [INRequestRideIntentResponseCode.unspecified](inrequestrideintentresponsecode/unspecified.md): There is no specified response code.
- [INRequestRideIntentResponseCode.ready](inrequestrideintentresponsecode/ready.md): You are ready to handle the intent.
- [INRequestRideIntentResponseCode.inProgress](inrequestrideintentresponsecode/inprogress.md): Deprecated. You are in the process of handling the intent.
- [INRequestRideIntentResponseCode.success](inrequestrideintentresponsecode/success.md): You successfully handled the intent.
- [INRequestRideIntentResponseCode.failure](inrequestrideintentresponsecode/failure.md): You were unable to book the ride.
- [INRequestRideIntentResponseCode.failureRequiringAppLaunch](inrequestrideintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to book the ride.
- [INRequestRideIntentResponseCode.failureRequiringAppLaunchMustVerifyCredentials](inrequestrideintentresponsecode/failurerequiringapplaunchmustverifycredentials.md): The user must launch your app and verify their credentials to continue.
- [INRequestRideIntentResponseCode.failureRequiringAppLaunchNoServiceInArea](inrequestrideintentresponsecode/failurerequiringapplaunchnoserviceinarea.md): You do not provide rides in the area requested by the user.
- [INRequestRideIntentResponseCode.failureRequiringAppLaunchServiceTemporarilyUnavailable](inrequestrideintentresponsecode/failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.
- [INRequestRideIntentResponseCode.failureRequiringAppLaunchPreviousRideNeedsCompletion](inrequestrideintentresponsecode/failurerequiringapplaunchpreviousrideneedscompletion.md): An existing ride is currently in progress and the app can’t book a new ride.
- [INRequestRideIntentResponseCode.failureRequiringAppLaunchRideScheduledTooFar](inrequestrideintentresponsecode/failurerequiringapplaunchridescheduledtoofar.md): The scheduled ride is out of the ride area and requires the user to open the app to fix the problem.

### Initializers

- [init(rawValue:)](inrequestrideintentresponsecode/init%28rawvalue_%29.md)

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

- [code](inrequestrideintentresponse/code.md): The code indicating whether you successfully handled the intent.

# INRequestRideIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the state of the response.

## Declaration

```objectivec
enum INRequestRideIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INRequestRideIntentResponseCodeUnspecified](inrequestrideintentresponsecode/unspecified.md): There is no specified response code.
- [INRequestRideIntentResponseCodeReady](inrequestrideintentresponsecode/ready.md): You are ready to handle the intent.
- [INRequestRideIntentResponseCodeInProgress](inrequestrideintentresponsecode/inprogress.md): Deprecated. You are in the process of handling the intent.
- [INRequestRideIntentResponseCodeSuccess](inrequestrideintentresponsecode/success.md): You successfully handled the intent.
- [INRequestRideIntentResponseCodeFailure](inrequestrideintentresponsecode/failure.md): You were unable to book the ride.
- [INRequestRideIntentResponseCodeFailureRequiringAppLaunch](inrequestrideintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to book the ride.
- [INRequestRideIntentResponseCodeFailureRequiringAppLaunchMustVerifyCredentials](inrequestrideintentresponsecode/failurerequiringapplaunchmustverifycredentials.md): The user must launch your app and verify their credentials to continue.
- [INRequestRideIntentResponseCodeFailureRequiringAppLaunchNoServiceInArea](inrequestrideintentresponsecode/failurerequiringapplaunchnoserviceinarea.md): You do not provide rides in the area requested by the user.
- [INRequestRideIntentResponseCodeFailureRequiringAppLaunchServiceTemporarilyUnavailable](inrequestrideintentresponsecode/failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.
- [INRequestRideIntentResponseCodeFailureRequiringAppLaunchPreviousRideNeedsCompletion](inrequestrideintentresponsecode/failurerequiringapplaunchpreviousrideneedscompletion.md): An existing ride is currently in progress and the app can’t book a new ride.
- [INRequestRideIntentResponseCodeFailureRequiringAppLaunchRideScheduledTooFar](inrequestrideintentresponsecode/failurerequiringapplaunchridescheduledtoofar.md): The scheduled ride is out of the ride area and requires the user to open the app to fix the problem.

## See Also

### Getting the Response Code

- [code](inrequestrideintentresponse/code.md): The code indicating whether you successfully handled the intent.
