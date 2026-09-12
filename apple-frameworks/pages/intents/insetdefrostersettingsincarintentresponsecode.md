> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetdefrostersettingsincarintentresponsecode](https://developer.apple.com/documentation/intents/insetdefrostersettingsincarintentresponsecode)

# INSetDefrosterSettingsInCarIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INSetDefrosterSettingsInCarIntentResponseCode
```

## Topics

### Constants

- [INSetDefrosterSettingsInCarIntentResponseCode.unspecified](insetdefrostersettingsincarintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetDefrosterSettingsInCarIntentResponseCode.ready](insetdefrostersettingsincarintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSetDefrosterSettingsInCarIntentResponseCode.inProgress](insetdefrostersettingsincarintentresponsecode/inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetDefrosterSettingsInCarIntentResponseCode.success](insetdefrostersettingsincarintentresponsecode/success.md): Deprecated. You successfully handled the intent.
- [INSetDefrosterSettingsInCarIntentResponseCode.failure](insetdefrostersettingsincarintentresponsecode/failure.md): Deprecated. You were unable to change the defroster settings.
- [INSetDefrosterSettingsInCarIntentResponseCode.failureRequiringAppLaunch](insetdefrostersettingsincarintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the defroster setting.

### Initializers

- [init(rawValue:)](insetdefrostersettingsincarintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](insetdefrostersettingsincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INSetDefrosterSettingsInCarIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INSetDefrosterSettingsInCarIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INSetDefrosterSettingsInCarIntentResponseCodeUnspecified](insetdefrostersettingsincarintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetDefrosterSettingsInCarIntentResponseCodeReady](insetdefrostersettingsincarintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSetDefrosterSettingsInCarIntentResponseCodeInProgress](insetdefrostersettingsincarintentresponsecode/inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetDefrosterSettingsInCarIntentResponseCodeSuccess](insetdefrostersettingsincarintentresponsecode/success.md): Deprecated. You successfully handled the intent.
- [INSetDefrosterSettingsInCarIntentResponseCodeFailure](insetdefrostersettingsincarintentresponsecode/failure.md): Deprecated. You were unable to change the defroster settings.
- [INSetDefrosterSettingsInCarIntentResponseCodeFailureRequiringAppLaunch](insetdefrostersettingsincarintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the defroster setting.

## See Also

### Getting the Response Code

- [code](insetdefrostersettingsincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
