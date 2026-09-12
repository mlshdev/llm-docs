> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetaudiosourceincarintentresponsecode](https://developer.apple.com/documentation/intents/insetaudiosourceincarintentresponsecode)

# INSetAudioSourceInCarIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INSetAudioSourceInCarIntentResponseCode
```

## Topics

### Constants

- [INSetAudioSourceInCarIntentResponseCode.unspecified](insetaudiosourceincarintentresponsecode/unspecified.md): Deprecated. A response code indicating that the status isn’t specified.
- [INSetAudioSourceInCarIntentResponseCode.ready](insetaudiosourceincarintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSetAudioSourceInCarIntentResponseCode.inProgress](insetaudiosourceincarintentresponsecode/inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetAudioSourceInCarIntentResponseCode.success](insetaudiosourceincarintentresponsecode/success.md): Deprecated. You successfully handled the intent.
- [INSetAudioSourceInCarIntentResponseCode.failure](insetaudiosourceincarintentresponsecode/failure.md): Deprecated. You were unable to change the audio source.
- [INSetAudioSourceInCarIntentResponseCode.failureRequiringAppLaunch](insetaudiosourceincarintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the audio source.

### Initializers

- [init(rawValue:)](insetaudiosourceincarintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](insetaudiosourceincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INSetAudioSourceInCarIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INSetAudioSourceInCarIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INSetAudioSourceInCarIntentResponseCodeUnspecified](insetaudiosourceincarintentresponsecode/unspecified.md): Deprecated. A response code indicating that the status isn’t specified.
- [INSetAudioSourceInCarIntentResponseCodeReady](insetaudiosourceincarintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSetAudioSourceInCarIntentResponseCodeInProgress](insetaudiosourceincarintentresponsecode/inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetAudioSourceInCarIntentResponseCodeSuccess](insetaudiosourceincarintentresponsecode/success.md): Deprecated. You successfully handled the intent.
- [INSetAudioSourceInCarIntentResponseCodeFailure](insetaudiosourceincarintentresponsecode/failure.md): Deprecated. You were unable to change the audio source.
- [INSetAudioSourceInCarIntentResponseCodeFailureRequiringAppLaunch](insetaudiosourceincarintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the audio source.

## See Also

### Getting the Response Code

- [code](insetaudiosourceincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
