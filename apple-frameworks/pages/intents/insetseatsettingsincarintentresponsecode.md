> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetseatsettingsincarintentresponsecode](https://developer.apple.com/documentation/intents/insetseatsettingsincarintentresponsecode)

# INSetSeatSettingsInCarIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INSetSeatSettingsInCarIntentResponseCode
```

## Topics

### Constants

- [INSetSeatSettingsInCarIntentResponseCode.unspecified](insetseatsettingsincarintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetSeatSettingsInCarIntentResponseCode.ready](insetseatsettingsincarintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSetSeatSettingsInCarIntentResponseCode.inProgress](insetseatsettingsincarintentresponsecode/inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetSeatSettingsInCarIntentResponseCode.success](insetseatsettingsincarintentresponsecode/success.md): Deprecated. You successfully handled the intent.
- [INSetSeatSettingsInCarIntentResponseCode.failure](insetseatsettingsincarintentresponsecode/failure.md): Deprecated. You were unable to change the seat settings.
- [INSetSeatSettingsInCarIntentResponseCode.failureRequiringAppLaunch](insetseatsettingsincarintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the seat settings.

### Initializers

- [init(rawValue:)](insetseatsettingsincarintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](insetseatsettingsincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INSetSeatSettingsInCarIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INSetSeatSettingsInCarIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INSetSeatSettingsInCarIntentResponseCodeUnspecified](insetseatsettingsincarintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetSeatSettingsInCarIntentResponseCodeReady](insetseatsettingsincarintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSetSeatSettingsInCarIntentResponseCodeInProgress](insetseatsettingsincarintentresponsecode/inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetSeatSettingsInCarIntentResponseCodeSuccess](insetseatsettingsincarintentresponsecode/success.md): Deprecated. You successfully handled the intent.
- [INSetSeatSettingsInCarIntentResponseCodeFailure](insetseatsettingsincarintentresponsecode/failure.md): Deprecated. You were unable to change the seat settings.
- [INSetSeatSettingsInCarIntentResponseCodeFailureRequiringAppLaunch](insetseatsettingsincarintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the seat settings.

## See Also

### Getting the Response Code

- [code](insetseatsettingsincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
