> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inactivatecarsignalintentresponsecode](https://developer.apple.com/documentation/intents/inactivatecarsignalintentresponsecode)

# INActivateCarSignalIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the status of the response.

## Declaration

```swift
enum INActivateCarSignalIntentResponseCode
```

## Topics

### Constants

- [INActivateCarSignalIntentResponseCode.failure](inactivatecarsignalintentresponsecode/failure.md): An error code indicating that you were unable to activate the car’s signals.
- [INActivateCarSignalIntentResponseCode.failureRequiringAppLaunch](inactivatecarsignalintentresponsecode/failurerequiringapplaunch.md): An error code indicating that the user must launch your app to activate the car’s signals.
- [INActivateCarSignalIntentResponseCode.inProgress](inactivatecarsignalintentresponsecode/inprogress.md): A response code indicating that you are activating the signals but do not yet have the results.
- [INActivateCarSignalIntentResponseCode.ready](inactivatecarsignalintentresponsecode/ready.md): A response code indicating that you are ready to handle the intent.
- [INActivateCarSignalIntentResponseCode.success](inactivatecarsignalintentresponsecode/success.md): A response code indicating that you have successfully handled the intent.
- [INActivateCarSignalIntentResponseCode.unspecified](inactivatecarsignalintentresponsecode/unspecified.md): A response code indicating that the status was not specified.

### Initializers

- [init(rawValue:)](inactivatecarsignalintentresponsecode/init%28rawvalue_%29.md)

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

- [code](inactivatecarsignalintentresponse/code.md): The code indicating success or failure when confirming or handling an intent.

# INActivateCarSignalIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the status of the response.

## Declaration

```objectivec
enum INActivateCarSignalIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INActivateCarSignalIntentResponseCodeFailure](inactivatecarsignalintentresponsecode/failure.md): An error code indicating that you were unable to activate the car’s signals.
- [INActivateCarSignalIntentResponseCodeFailureRequiringAppLaunch](inactivatecarsignalintentresponsecode/failurerequiringapplaunch.md): An error code indicating that the user must launch your app to activate the car’s signals.
- [INActivateCarSignalIntentResponseCodeInProgress](inactivatecarsignalintentresponsecode/inprogress.md): A response code indicating that you are activating the signals but do not yet have the results.
- [INActivateCarSignalIntentResponseCodeReady](inactivatecarsignalintentresponsecode/ready.md): A response code indicating that you are ready to handle the intent.
- [INActivateCarSignalIntentResponseCodeSuccess](inactivatecarsignalintentresponsecode/success.md): A response code indicating that you have successfully handled the intent.
- [INActivateCarSignalIntentResponseCodeUnspecified](inactivatecarsignalintentresponsecode/unspecified.md): A response code indicating that the status was not specified.

## See Also

### Getting the Response Code

- [code](inactivatecarsignalintentresponse/code.md): The code indicating success or failure when confirming or handling an intent.
