> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarlockstatusintentresponsecode](https://developer.apple.com/documentation/intents/ingetcarlockstatusintentresponsecode)

# INGetCarLockStatusIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the status of the response.

## Declaration

```swift
enum INGetCarLockStatusIntentResponseCode
```

## Topics

### Constants

- [INGetCarLockStatusIntentResponseCode.failure](ingetcarlockstatusintentresponsecode/failure.md): An error code indicating that you were unable to get the car’s lock status.
- [INGetCarLockStatusIntentResponseCode.failureRequiringAppLaunch](ingetcarlockstatusintentresponsecode/failurerequiringapplaunch.md): An error code indicating that the user must launch your app to get the car’s lock status.
- [INGetCarLockStatusIntentResponseCode.inProgress](ingetcarlockstatusintentresponsecode/inprogress.md): A response code indicating that you are getting the car’s lock status but do not yet have the results.
- [INGetCarLockStatusIntentResponseCode.ready](ingetcarlockstatusintentresponsecode/ready.md): A response code indicating that you are ready to handle the intent.
- [INGetCarLockStatusIntentResponseCode.success](ingetcarlockstatusintentresponsecode/success.md): A response code indicating that you have successfully handled the intent.
- [INGetCarLockStatusIntentResponseCode.unspecified](ingetcarlockstatusintentresponsecode/unspecified.md): A response code indicating that the status was not specified.

### Initializers

- [init(rawValue:)](ingetcarlockstatusintentresponsecode/init%28rawvalue_%29.md)

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

- [code](ingetcarlockstatusintentresponse/code.md): The code indicating success or failure when confirming or handling an intent.

# INGetCarLockStatusIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the status of the response.

## Declaration

```objectivec
enum INGetCarLockStatusIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INGetCarLockStatusIntentResponseCodeFailure](ingetcarlockstatusintentresponsecode/failure.md): An error code indicating that you were unable to get the car’s lock status.
- [INGetCarLockStatusIntentResponseCodeFailureRequiringAppLaunch](ingetcarlockstatusintentresponsecode/failurerequiringapplaunch.md): An error code indicating that the user must launch your app to get the car’s lock status.
- [INGetCarLockStatusIntentResponseCodeInProgress](ingetcarlockstatusintentresponsecode/inprogress.md): A response code indicating that you are getting the car’s lock status but do not yet have the results.
- [INGetCarLockStatusIntentResponseCodeReady](ingetcarlockstatusintentresponsecode/ready.md): A response code indicating that you are ready to handle the intent.
- [INGetCarLockStatusIntentResponseCodeSuccess](ingetcarlockstatusintentresponsecode/success.md): A response code indicating that you have successfully handled the intent.
- [INGetCarLockStatusIntentResponseCodeUnspecified](ingetcarlockstatusintentresponsecode/unspecified.md): A response code indicating that the status was not specified.

## See Also

### Getting the Response Code

- [code](ingetcarlockstatusintentresponse/code.md): The code indicating success or failure when confirming or handling an intent.
