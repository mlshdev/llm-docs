> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistrideoptionsintentresponsecode](https://developer.apple.com/documentation/intents/inlistrideoptionsintentresponsecode)

# INListRideOptionsIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the state of the response.

## Declaration

```swift
enum INListRideOptionsIntentResponseCode
```

## Topics

### Constants

- [INListRideOptionsIntentResponseCode.unspecified](inlistrideoptionsintentresponsecode/unspecified.md): No response didn’t specify a response code.
- [INListRideOptionsIntentResponseCode.ready](inlistrideoptionsintentresponsecode/ready.md): You are ready to handle the intent.
- [INListRideOptionsIntentResponseCode.inProgress](inlistrideoptionsintentresponsecode/inprogress.md): Deprecated. You failed to handle the intent in a timely manner.
- [INListRideOptionsIntentResponseCode.success](inlistrideoptionsintentresponsecode/success.md): You successfully handled the intent.
- [INListRideOptionsIntentResponseCode.failure](inlistrideoptionsintentresponsecode/failure.md): You were unable to retrieve the list of ride options.
- [INListRideOptionsIntentResponseCode.failureRequiringAppLaunch](inlistrideoptionsintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to get information about the ride options.
- [INListRideOptionsIntentResponseCode.failureRequiringAppLaunchMustVerifyCredentials](inlistrideoptionsintentresponsecode/failurerequiringapplaunchmustverifycredentials.md): The user must launch your app and verify their credentials to continue.
- [INListRideOptionsIntentResponseCode.failureRequiringAppLaunchNoServiceInArea](inlistrideoptionsintentresponsecode/failurerequiringapplaunchnoserviceinarea.md): You do not provide service in the area requested by the user.
- [INListRideOptionsIntentResponseCode.failureRequiringAppLaunchServiceTemporarilyUnavailable](inlistrideoptionsintentresponsecode/failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.
- [INListRideOptionsIntentResponseCode.failureRequiringAppLaunchPreviousRideNeedsCompletion](inlistrideoptionsintentresponsecode/failurerequiringapplaunchpreviousrideneedscompletion.md): You can’t book a new ride because an existing ride is currently in progress.
- [INListRideOptionsIntentResponseCode.failurePreviousRideNeedsFeedback](inlistrideoptionsintentresponsecode/failurepreviousrideneedsfeedback.md): You can’t book a new ride because an existing ride is currently in progress.

### Initializers

- [init(rawValue:)](inlistrideoptionsintentresponsecode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# INListRideOptionsIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the state of the response.

## Declaration

```objectivec
enum INListRideOptionsIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INListRideOptionsIntentResponseCodeUnspecified](inlistrideoptionsintentresponsecode/unspecified.md): No response didn’t specify a response code.
- [INListRideOptionsIntentResponseCodeReady](inlistrideoptionsintentresponsecode/ready.md): You are ready to handle the intent.
- [INListRideOptionsIntentResponseCodeInProgress](inlistrideoptionsintentresponsecode/inprogress.md): Deprecated. You failed to handle the intent in a timely manner.
- [INListRideOptionsIntentResponseCodeSuccess](inlistrideoptionsintentresponsecode/success.md): You successfully handled the intent.
- [INListRideOptionsIntentResponseCodeFailure](inlistrideoptionsintentresponsecode/failure.md): You were unable to retrieve the list of ride options.
- [INListRideOptionsIntentResponseCodeFailureRequiringAppLaunch](inlistrideoptionsintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to get information about the ride options.
- [INListRideOptionsIntentResponseCodeFailureRequiringAppLaunchMustVerifyCredentials](inlistrideoptionsintentresponsecode/failurerequiringapplaunchmustverifycredentials.md): The user must launch your app and verify their credentials to continue.
- [INListRideOptionsIntentResponseCodeFailureRequiringAppLaunchNoServiceInArea](inlistrideoptionsintentresponsecode/failurerequiringapplaunchnoserviceinarea.md): You do not provide service in the area requested by the user.
- [INListRideOptionsIntentResponseCodeFailureRequiringAppLaunchServiceTemporarilyUnavailable](inlistrideoptionsintentresponsecode/failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.
- [INListRideOptionsIntentResponseCodeFailureRequiringAppLaunchPreviousRideNeedsCompletion](inlistrideoptionsintentresponsecode/failurerequiringapplaunchpreviousrideneedscompletion.md): You can’t book a new ride because an existing ride is currently in progress.
- [INListRideOptionsIntentResponseCodeFailurePreviousRideNeedsFeedback](inlistrideoptionsintentresponsecode/failurepreviousrideneedsfeedback.md): You can’t book a new ride because an existing ride is currently in progress.
