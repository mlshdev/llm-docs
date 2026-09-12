> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetradiostationintentresponsecode](https://developer.apple.com/documentation/intents/insetradiostationintentresponsecode)

# INSetRadioStationIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INSetRadioStationIntentResponseCode
```

## Topics

### Constants

- [INSetRadioStationIntentResponseCode.unspecified](insetradiostationintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetRadioStationIntentResponseCode.ready](insetradiostationintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSetRadioStationIntentResponseCode.inProgress](insetradiostationintentresponsecode/inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetRadioStationIntentResponseCode.success](insetradiostationintentresponsecode/success.md): Deprecated. You successfully handled the intent.
- [INSetRadioStationIntentResponseCode.failure](insetradiostationintentresponsecode/failure.md): Deprecated. You were unable to change the radio station.
- [INSetRadioStationIntentResponseCode.failureRequiringAppLaunch](insetradiostationintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the radio station.
- [INSetRadioStationIntentResponseCode.failureNotSubscribed](insetradiostationintentresponsecode/failurenotsubscribed.md): Deprecated. You were unable to change the radio station because the user doesn’t have a subscription to the corresponding service.

### Initializers

- [init(rawValue:)](insetradiostationintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](insetradiostationintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INSetRadioStationIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INSetRadioStationIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INSetRadioStationIntentResponseCodeUnspecified](insetradiostationintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetRadioStationIntentResponseCodeReady](insetradiostationintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSetRadioStationIntentResponseCodeInProgress](insetradiostationintentresponsecode/inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetRadioStationIntentResponseCodeSuccess](insetradiostationintentresponsecode/success.md): Deprecated. You successfully handled the intent.
- [INSetRadioStationIntentResponseCodeFailure](insetradiostationintentresponsecode/failure.md): Deprecated. You were unable to change the radio station.
- [INSetRadioStationIntentResponseCodeFailureRequiringAppLaunch](insetradiostationintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the radio station.
- [INSetRadioStationIntentResponseCodeFailureNotSubscribed](insetradiostationintentresponsecode/failurenotsubscribed.md): Deprecated. You were unable to change the radio station because the user doesn’t have a subscription to the corresponding service.

## See Also

### Getting the Response Code

- [code](insetradiostationintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
