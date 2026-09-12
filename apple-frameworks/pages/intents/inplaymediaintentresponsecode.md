> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaintentresponsecode](https://developer.apple.com/documentation/intents/inplaymediaintentresponsecode)

# INPlayMediaIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Codes returned by an app or Intents app extension when handling or confirming a play media intent.

## Declaration

```swift
enum INPlayMediaIntentResponseCode
```

## Topics

### Intents App Extensions

Response codes returned by an Intents app extension when confirming or handling a play media intent.

- [INPlayMediaIntentResponseCode.ready](inplaymediaintentresponsecode/ready.md): The intents handler is ready to handle the intent.
- [INPlayMediaIntentResponseCode.continueInApp](inplaymediaintentresponsecode/continueinapp.md): The system should launch the app in the foreground to play the media.
- [INPlayMediaIntentResponseCode.handleInApp](inplaymediaintentresponsecode/handleinapp.md): The system should launch the app in the background to play the media.

### App

Response codes returned by an app when handling a play media intent.

- [INPlayMediaIntentResponseCode.inProgress](inplaymediaintentresponsecode/inprogress.md): The app is preparing to play the media content.
- [INPlayMediaIntentResponseCode.success](inplaymediaintentresponsecode/success.md): The app is playing the media.

### General

Response codes returned by either an app or an Intents app extension.

- [INPlayMediaIntentResponseCode.unspecified](inplaymediaintentresponsecode/unspecified.md): An unspecified response code.

### Failures

Failure response codes returned by an app or an Intents app extension.

- [INPlayMediaIntentResponseCode.failure](inplaymediaintentresponsecode/failure.md): A failure occurred while confirming or handling the intent.
- [INPlayMediaIntentResponseCode.failureNoUnplayedContent](inplaymediaintentresponsecode/failurenounplayedcontent.md): The media container has no unplayed content.
- [INPlayMediaIntentResponseCode.failureRequiringAppLaunch](inplaymediaintentresponsecode/failurerequiringapplaunch.md): The user must launch the app before media playback can begin.
- [INPlayMediaIntentResponseCode.failureRestrictedContent](inplaymediaintentresponsecode/failurerestrictedcontent.md): The app cannot play the media because of content restrictions.
- [INPlayMediaIntentResponseCode.failureUnknownMediaType](inplaymediaintentresponsecode/failureunknownmediatype.md): The app cannot play the media because the type is unknown or not supported.

### Enumeration Cases

- [INPlayMediaIntentResponseCode.failureMaxStreamLimitReached](inplaymediaintentresponsecode/failuremaxstreamlimitreached.md)

### Initializers

- [init(rawValue:)](inplaymediaintentresponsecode/init%28rawvalue_%29.md)

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

- [code](inplaymediaintentresponse/code.md): A response code that indicates whether the app can play the media.

# INPlayMediaIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Codes returned by an app or Intents app extension when handling or confirming a play media intent.

## Declaration

```objectivec
enum INPlayMediaIntentResponseCode : NSInteger;
```

## Topics

### Intents App Extensions

Response codes returned by an Intents app extension when confirming or handling a play media intent.

- [INPlayMediaIntentResponseCodeReady](inplaymediaintentresponsecode/ready.md): The intents handler is ready to handle the intent.
- [INPlayMediaIntentResponseCodeContinueInApp](inplaymediaintentresponsecode/continueinapp.md): The system should launch the app in the foreground to play the media.
- [INPlayMediaIntentResponseCodeHandleInApp](inplaymediaintentresponsecode/handleinapp.md): The system should launch the app in the background to play the media.

### App

Response codes returned by an app when handling a play media intent.

- [INPlayMediaIntentResponseCodeInProgress](inplaymediaintentresponsecode/inprogress.md): The app is preparing to play the media content.
- [INPlayMediaIntentResponseCodeSuccess](inplaymediaintentresponsecode/success.md): The app is playing the media.

### General

Response codes returned by either an app or an Intents app extension.

- [INPlayMediaIntentResponseCodeUnspecified](inplaymediaintentresponsecode/unspecified.md): An unspecified response code.

### Failures

Failure response codes returned by an app or an Intents app extension.

- [INPlayMediaIntentResponseCodeFailure](inplaymediaintentresponsecode/failure.md): A failure occurred while confirming or handling the intent.
- [INPlayMediaIntentResponseCodeFailureNoUnplayedContent](inplaymediaintentresponsecode/failurenounplayedcontent.md): The media container has no unplayed content.
- [INPlayMediaIntentResponseCodeFailureRequiringAppLaunch](inplaymediaintentresponsecode/failurerequiringapplaunch.md): The user must launch the app before media playback can begin.
- [INPlayMediaIntentResponseCodeFailureRestrictedContent](inplaymediaintentresponsecode/failurerestrictedcontent.md): The app cannot play the media because of content restrictions.
- [INPlayMediaIntentResponseCodeFailureUnknownMediaType](inplaymediaintentresponsecode/failureunknownmediatype.md): The app cannot play the media because the type is unknown or not supported.

### Enumeration Cases

- [INPlayMediaIntentResponseCodeFailureMaxStreamLimitReached](inplaymediaintentresponsecode/failuremaxstreamlimitreached.md)

## See Also

### Providing the Response Code

- [code](inplaymediaintentresponse/code.md): A response code that indicates whether the app can play the media.
