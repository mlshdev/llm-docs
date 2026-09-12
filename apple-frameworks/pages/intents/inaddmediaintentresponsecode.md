> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediaintentresponsecode](https://developer.apple.com/documentation/intents/inaddmediaintentresponsecode)

# INAddMediaIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Codes returned by an app or Intents app extension when handling or confirming an add media intent.

## Declaration

```swift
enum INAddMediaIntentResponseCode
```

## Topics

### Response Code

- [INAddMediaIntentResponseCode.unspecified](inaddmediaintentresponsecode/unspecified.md): An unknown state.
- [INAddMediaIntentResponseCode.ready](inaddmediaintentresponsecode/ready.md): The app is ready to add media.
- [INAddMediaIntentResponseCode.inProgress](inaddmediaintentresponsecode/inprogress.md): The app is currently trying to process the add media request.
- [INAddMediaIntentResponseCode.success](inaddmediaintentresponsecode/success.md): The app successfully added the media.
- [INAddMediaIntentResponseCode.handleInApp](inaddmediaintentresponsecode/handleinapp.md): The system should launch the app in the background to handle the intent.
- [INAddMediaIntentResponseCode.failure](inaddmediaintentresponsecode/failure.md): The app was unable to add the media.
- [INAddMediaIntentResponseCode.failureRequiringAppLaunch](inaddmediaintentresponsecode/failurerequiringapplaunch.md): The user must launch the app to add media.

### Initializers

- [init(rawValue:)](inaddmediaintentresponsecode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Providing the Response Code

- [code](inaddmediaintentresponse/code.md): A response code that indicates whether the app successfully added the media.

# INAddMediaIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Codes returned by an app or Intents app extension when handling or confirming an add media intent.

## Declaration

```objectivec
enum INAddMediaIntentResponseCode : NSInteger;
```

## Topics

### Response Code

- [INAddMediaIntentResponseCodeUnspecified](inaddmediaintentresponsecode/unspecified.md): An unknown state.
- [INAddMediaIntentResponseCodeReady](inaddmediaintentresponsecode/ready.md): The app is ready to add media.
- [INAddMediaIntentResponseCodeInProgress](inaddmediaintentresponsecode/inprogress.md): The app is currently trying to process the add media request.
- [INAddMediaIntentResponseCodeSuccess](inaddmediaintentresponsecode/success.md): The app successfully added the media.
- [INAddMediaIntentResponseCodeHandleInApp](inaddmediaintentresponsecode/handleinapp.md): The system should launch the app in the background to handle the intent.
- [INAddMediaIntentResponseCodeFailure](inaddmediaintentresponsecode/failure.md): The app was unable to add the media.
- [INAddMediaIntentResponseCodeFailureRequiringAppLaunch](inaddmediaintentresponsecode/failurerequiringapplaunch.md): The user must launch the app to add media.

## See Also

### Providing the Response Code

- [code](inaddmediaintentresponse/code.md): A response code that indicates whether the app successfully added the media.
