> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetvisualcodeintentresponsecode](https://developer.apple.com/documentation/intents/ingetvisualcodeintentresponsecode)

# INGetVisualCodeIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INGetVisualCodeIntentResponseCode
```

## Topics

### Constants

- [INGetVisualCodeIntentResponseCode.unspecified](ingetvisualcodeintentresponsecode/unspecified.md): Deprecated. The response didnt specify a code.
- [INGetVisualCodeIntentResponseCode.ready](ingetvisualcodeintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INGetVisualCodeIntentResponseCode.continueInApp](ingetvisualcodeintentresponsecode/continueinapp.md): Deprecated. You must launch the app to display the visual code.
- [INGetVisualCodeIntentResponseCode.inProgress](ingetvisualcodeintentresponsecode/inprogress.md): Deprecated. You’re in the process of generating the code but aren’t yet finished.
- [INGetVisualCodeIntentResponseCode.success](ingetvisualcodeintentresponsecode/success.md): Deprecated. You successfully generated the visual code.
- [INGetVisualCodeIntentResponseCode.failure](ingetvisualcodeintentresponsecode/failure.md): Deprecated. You were unable to generate the visual code.
- [INGetVisualCodeIntentResponseCode.failureRequiringAppLaunch](ingetvisualcodeintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to request the visual code.
- [INGetVisualCodeIntentResponseCode.failureAppConfigurationRequired](ingetvisualcodeintentresponsecode/failureappconfigurationrequired.md): Deprecated. Your app wasn’t configured to display visual codes.

### Initializers

- [init(rawValue:)](ingetvisualcodeintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](ingetvisualcodeintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INGetVisualCodeIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INGetVisualCodeIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INGetVisualCodeIntentResponseCodeUnspecified](ingetvisualcodeintentresponsecode/unspecified.md): Deprecated. The response didnt specify a code.
- [INGetVisualCodeIntentResponseCodeReady](ingetvisualcodeintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INGetVisualCodeIntentResponseCodeContinueInApp](ingetvisualcodeintentresponsecode/continueinapp.md): Deprecated. You must launch the app to display the visual code.
- [INGetVisualCodeIntentResponseCodeInProgress](ingetvisualcodeintentresponsecode/inprogress.md): Deprecated. You’re in the process of generating the code but aren’t yet finished.
- [INGetVisualCodeIntentResponseCodeSuccess](ingetvisualcodeintentresponsecode/success.md): Deprecated. You successfully generated the visual code.
- [INGetVisualCodeIntentResponseCodeFailure](ingetvisualcodeintentresponsecode/failure.md): Deprecated. You were unable to generate the visual code.
- [INGetVisualCodeIntentResponseCodeFailureRequiringAppLaunch](ingetvisualcodeintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to request the visual code.
- [INGetVisualCodeIntentResponseCodeFailureAppConfigurationRequired](ingetvisualcodeintentresponsecode/failureappconfigurationrequired.md): Deprecated. Your app wasn’t configured to display visual codes.

## See Also

### Getting the Response Code

- [code](ingetvisualcodeintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
