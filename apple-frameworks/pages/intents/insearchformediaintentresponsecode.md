> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformediaintentresponsecode](https://developer.apple.com/documentation/intents/insearchformediaintentresponsecode)

# INSearchForMediaIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Codes returned by an intents handler in response to a search request.

## Declaration

```swift
enum INSearchForMediaIntentResponseCode
```

## Topics

### Response Code

- [INSearchForMediaIntentResponseCode.unspecified](insearchformediaintentresponsecode/unspecified.md): An unknown state.
- [INSearchForMediaIntentResponseCode.ready](insearchformediaintentresponsecode/ready.md): The app is ready to perform the search.
- [INSearchForMediaIntentResponseCode.continueInApp](insearchformediaintentresponsecode/continueinapp.md): The system should launch your app in the foreground to search for the media.
- [INSearchForMediaIntentResponseCode.inProgress](insearchformediaintentresponsecode/inprogress.md): The app is currently trying to process the search request.
- [INSearchForMediaIntentResponseCode.success](insearchformediaintentresponsecode/success.md): The app successfully performed the search.
- [INSearchForMediaIntentResponseCode.failure](insearchformediaintentresponsecode/failure.md): The app is unable to search for the media.
- [INSearchForMediaIntentResponseCode.failureRequiringAppLaunch](insearchformediaintentresponsecode/failurerequiringapplaunch.md): The user needs to launch your app to search for the media.

### Initializers

- [init(rawValue:)](insearchformediaintentresponsecode/init%28rawvalue_%29.md)

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

- [code](insearchformediaintentresponse/code.md): A response code that indicates whether the app successfully searched for the media.

# INSearchForMediaIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Codes returned by an intents handler in response to a search request.

## Declaration

```objectivec
enum INSearchForMediaIntentResponseCode : NSInteger;
```

## Topics

### Response Code

- [INSearchForMediaIntentResponseCodeUnspecified](insearchformediaintentresponsecode/unspecified.md): An unknown state.
- [INSearchForMediaIntentResponseCodeReady](insearchformediaintentresponsecode/ready.md): The app is ready to perform the search.
- [INSearchForMediaIntentResponseCodeContinueInApp](insearchformediaintentresponsecode/continueinapp.md): The system should launch your app in the foreground to search for the media.
- [INSearchForMediaIntentResponseCodeInProgress](insearchformediaintentresponsecode/inprogress.md): The app is currently trying to process the search request.
- [INSearchForMediaIntentResponseCodeSuccess](insearchformediaintentresponsecode/success.md): The app successfully performed the search.
- [INSearchForMediaIntentResponseCodeFailure](insearchformediaintentresponsecode/failure.md): The app is unable to search for the media.
- [INSearchForMediaIntentResponseCodeFailureRequiringAppLaunch](insearchformediaintentresponsecode/failurerequiringapplaunch.md): The user needs to launch your app to search for the media.

## See Also

### Providing the Response Code

- [code](insearchformediaintentresponse/code.md): A response code that indicates whether the app successfully searched for the media.
