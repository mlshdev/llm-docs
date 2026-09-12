> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintentresponsecode](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintentresponsecode)

# INSetClimateSettingsInCarIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INSetClimateSettingsInCarIntentResponseCode
```

## Topics

### Constants

- [INSetClimateSettingsInCarIntentResponseCode.unspecified](insetclimatesettingsincarintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetClimateSettingsInCarIntentResponseCode.ready](insetclimatesettingsincarintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSetClimateSettingsInCarIntentResponseCode.inProgress](insetclimatesettingsincarintentresponsecode/inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetClimateSettingsInCarIntentResponseCode.success](insetclimatesettingsincarintentresponsecode/success.md): Deprecated. You successfully handled the intent.
- [INSetClimateSettingsInCarIntentResponseCode.failure](insetclimatesettingsincarintentresponsecode/failure.md): Deprecated. You were unable to change the climate control settings.
- [INSetClimateSettingsInCarIntentResponseCode.failureRequiringAppLaunch](insetclimatesettingsincarintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the climate control settings.

### Initializers

- [init(rawValue:)](insetclimatesettingsincarintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](insetclimatesettingsincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INSetClimateSettingsInCarIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INSetClimateSettingsInCarIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INSetClimateSettingsInCarIntentResponseCodeUnspecified](insetclimatesettingsincarintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetClimateSettingsInCarIntentResponseCodeReady](insetclimatesettingsincarintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSetClimateSettingsInCarIntentResponseCodeInProgress](insetclimatesettingsincarintentresponsecode/inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetClimateSettingsInCarIntentResponseCodeSuccess](insetclimatesettingsincarintentresponsecode/success.md): Deprecated. You successfully handled the intent.
- [INSetClimateSettingsInCarIntentResponseCodeFailure](insetclimatesettingsincarintentresponsecode/failure.md): Deprecated. You were unable to change the climate control settings.
- [INSetClimateSettingsInCarIntentResponseCodeFailureRequiringAppLaunch](insetclimatesettingsincarintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the climate control settings.

## See Also

### Getting the Response Code

- [code](insetclimatesettingsincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
