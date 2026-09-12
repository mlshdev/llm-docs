> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistcarsintentresponsecode](https://developer.apple.com/documentation/intents/inlistcarsintentresponsecode)

# INListCarsIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Constants that represent the status of a response.

## Declaration

```swift
enum INListCarsIntentResponseCode
```

## Topics

### Constants

- [INListCarsIntentResponseCode.failure](inlistcarsintentresponsecode/failure.md): A response code that indicates you’re unable to retrieve a list of the user’s electric vehicles.
- [INListCarsIntentResponseCode.failureRequiringAppLaunch](inlistcarsintentresponsecode/failurerequiringapplaunch.md): A response code that indicates the system must launch your app before you can provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCode.inProgress](inlistcarsintentresponsecode/inprogress.md): A response code that indicates you’re in the process of retrieving a list of the user’s electric vehicles, but they are not yet available.
- [INListCarsIntentResponseCode.ready](inlistcarsintentresponsecode/ready.md): A response code that indicates you’re ready to provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCode.success](inlistcarsintentresponsecode/success.md): A response code that indicates you’re able to provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCode.unspecified](inlistcarsintentresponsecode/unspecified.md): A response code that indicates the absence of a genuine response code.

### Initializers

- [init(rawValue:)](inlistcarsintentresponsecode/init%28rawvalue_%29.md)

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

- [code](inlistcarsintentresponse/code.md): The code that indicates success or failure when confirming or handling the intent.

# INListCarsIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Constants that represent the status of a response.

## Declaration

```objectivec
enum INListCarsIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INListCarsIntentResponseCodeFailure](inlistcarsintentresponsecode/failure.md): A response code that indicates you’re unable to retrieve a list of the user’s electric vehicles.
- [INListCarsIntentResponseCodeFailureRequiringAppLaunch](inlistcarsintentresponsecode/failurerequiringapplaunch.md): A response code that indicates the system must launch your app before you can provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCodeInProgress](inlistcarsintentresponsecode/inprogress.md): A response code that indicates you’re in the process of retrieving a list of the user’s electric vehicles, but they are not yet available.
- [INListCarsIntentResponseCodeReady](inlistcarsintentresponsecode/ready.md): A response code that indicates you’re ready to provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCodeSuccess](inlistcarsintentresponsecode/success.md): A response code that indicates you’re able to provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCodeUnspecified](inlistcarsintentresponsecode/unspecified.md): A response code that indicates the absence of a genuine response code.

## See Also

### Getting the Response Code

- [code](inlistcarsintentresponse/code.md): The code that indicates success or failure when confirming or handling the intent.
