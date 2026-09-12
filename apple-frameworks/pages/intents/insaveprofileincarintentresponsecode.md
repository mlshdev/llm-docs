> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insaveprofileincarintentresponsecode](https://developer.apple.com/documentation/intents/insaveprofileincarintentresponsecode)

# INSaveProfileInCarIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INSaveProfileInCarIntentResponseCode
```

## Topics

### Constants

- [INSaveProfileInCarIntentResponseCode.unspecified](insaveprofileincarintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSaveProfileInCarIntentResponseCode.ready](insaveprofileincarintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSaveProfileInCarIntentResponseCode.inProgress](insaveprofileincarintentresponsecode/inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSaveProfileInCarIntentResponseCode.success](insaveprofileincarintentresponsecode/success.md): Deprecated. You successfully handled the intent.
- [INSaveProfileInCarIntentResponseCode.failure](insaveprofileincarintentresponsecode/failure.md): Deprecated. You were unable to save the information to the designated profile.
- [INSaveProfileInCarIntentResponseCode.failureRequiringAppLaunch](insaveprofileincarintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to save information to a profile.

### Initializers

- [init(rawValue:)](insaveprofileincarintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](insaveprofileincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INSaveProfileInCarIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INSaveProfileInCarIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INSaveProfileInCarIntentResponseCodeUnspecified](insaveprofileincarintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSaveProfileInCarIntentResponseCodeReady](insaveprofileincarintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSaveProfileInCarIntentResponseCodeInProgress](insaveprofileincarintentresponsecode/inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSaveProfileInCarIntentResponseCodeSuccess](insaveprofileincarintentresponsecode/success.md): Deprecated. You successfully handled the intent.
- [INSaveProfileInCarIntentResponseCodeFailure](insaveprofileincarintentresponsecode/failure.md): Deprecated. You were unable to save the information to the designated profile.
- [INSaveProfileInCarIntentResponseCodeFailureRequiringAppLaunch](insaveprofileincarintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to save information to a profile.

## See Also

### Getting the Response Code

- [code](insaveprofileincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
