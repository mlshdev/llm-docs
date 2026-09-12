> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetprofileincarintentresponsecode](https://developer.apple.com/documentation/intents/insetprofileincarintentresponsecode)

# INSetProfileInCarIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INSetProfileInCarIntentResponseCode
```

## Topics

### Constants

- [INSetProfileInCarIntentResponseCode.unspecified](insetprofileincarintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSetProfileInCarIntentResponseCode.ready](insetprofileincarintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSetProfileInCarIntentResponseCode.inProgress](insetprofileincarintentresponsecode/inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetProfileInCarIntentResponseCode.success](insetprofileincarintentresponsecode/success.md): Deprecated. You successfully handled the intent.
- [INSetProfileInCarIntentResponseCode.failure](insetprofileincarintentresponsecode/failure.md): Deprecated. You were unable to restore the information from the designated profile.
- [INSetProfileInCarIntentResponseCode.failureRequiringAppLaunch](insetprofileincarintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to restore information from a profile.

### Initializers

- [init(rawValue:)](insetprofileincarintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](insetprofileincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INSetProfileInCarIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INSetProfileInCarIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INSetProfileInCarIntentResponseCodeUnspecified](insetprofileincarintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSetProfileInCarIntentResponseCodeReady](insetprofileincarintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSetProfileInCarIntentResponseCodeInProgress](insetprofileincarintentresponsecode/inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetProfileInCarIntentResponseCodeSuccess](insetprofileincarintentresponsecode/success.md): Deprecated. You successfully handled the intent.
- [INSetProfileInCarIntentResponseCodeFailure](insetprofileincarintentresponsecode/failure.md): Deprecated. You were unable to restore the information from the designated profile.
- [INSetProfileInCarIntentResponseCodeFailureRequiringAppLaunch](insetprofileincarintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to restore information from a profile.

## See Also

### Getting the Response Code

- [code](insetprofileincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
