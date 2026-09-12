> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartvideocallintentresponsecode](https://developer.apple.com/documentation/intents/instartvideocallintentresponsecode)

# INStartVideoCallIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Constants indicating the status of the response.

> INStartVideoCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```swift
enum INStartVideoCallIntentResponseCode
```

## Topics

### Constants

- [INStartVideoCallIntentResponseCode.unspecified](instartvideocallintentresponsecode/unspecified.md): Deprecated. Your app can’t provide a more specific response.
- [INStartVideoCallIntentResponseCode.ready](instartvideocallintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INStartVideoCallIntentResponseCode.continueInApp](instartvideocallintentresponsecode/continueinapp.md): Deprecated. Your extension is ready to transfer control to the app so that your app can place the call.
- [INStartVideoCallIntentResponseCode.failure](instartvideocallintentresponsecode/failure.md): Deprecated. You were unable to initiate the call.
- [INStartVideoCallIntentResponseCode.failureRequiringAppLaunch](instartvideocallintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to initiate the call.
- [INStartVideoCallIntentResponseCode.failureAppConfigurationRequired](instartvideocallintentresponsecode/failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before initiating a call is possible.
- [INStartVideoCallIntentResponseCode.failureCallingServiceNotAvailable](instartvideocallintentresponsecode/failurecallingservicenotavailable.md): Deprecated. Your app’s calling service isn’t currently available.
- [INStartVideoCallIntentResponseCode.failureContactNotSupportedByApp](instartvideocallintentresponsecode/failurecontactnotsupportedbyapp.md): Deprecated. Your app can’t use the specified contact to place the call.
- [INStartVideoCallIntentResponseCode.failureInvalidNumber](instartvideocallintentresponsecode/failureinvalidnumber.md): Deprecated. The specified number doesn’t support video calls.

### Initializers

- [init(rawValue:)](instartvideocallintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](instartvideocallintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INStartVideoCallIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Constants indicating the status of the response.

> INStartVideoCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```objectivec
enum INStartVideoCallIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INStartVideoCallIntentResponseCodeUnspecified](instartvideocallintentresponsecode/unspecified.md): Deprecated. Your app can’t provide a more specific response.
- [INStartVideoCallIntentResponseCodeReady](instartvideocallintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INStartVideoCallIntentResponseCodeContinueInApp](instartvideocallintentresponsecode/continueinapp.md): Deprecated. Your extension is ready to transfer control to the app so that your app can place the call.
- [INStartVideoCallIntentResponseCodeFailure](instartvideocallintentresponsecode/failure.md): Deprecated. You were unable to initiate the call.
- [INStartVideoCallIntentResponseCodeFailureRequiringAppLaunch](instartvideocallintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to initiate the call.
- [INStartVideoCallIntentResponseCodeFailureAppConfigurationRequired](instartvideocallintentresponsecode/failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before initiating a call is possible.
- [INStartVideoCallIntentResponseCodeFailureCallingServiceNotAvailable](instartvideocallintentresponsecode/failurecallingservicenotavailable.md): Deprecated. Your app’s calling service isn’t currently available.
- [INStartVideoCallIntentResponseCodeFailureContactNotSupportedByApp](instartvideocallintentresponsecode/failurecontactnotsupportedbyapp.md): Deprecated. Your app can’t use the specified contact to place the call.
- [INStartVideoCallIntentResponseCodeFailureInvalidNumber](instartvideocallintentresponsecode/failureinvalidnumber.md): Deprecated. The specified number doesn’t support video calls.

## See Also

### Getting the Response Code

- [code](instartvideocallintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
