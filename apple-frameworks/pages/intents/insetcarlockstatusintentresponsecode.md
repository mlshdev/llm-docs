> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetcarlockstatusintentresponsecode](https://developer.apple.com/documentation/intents/insetcarlockstatusintentresponsecode)

# INSetCarLockStatusIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the status of the response.

## Declaration

```swift
enum INSetCarLockStatusIntentResponseCode
```

## Topics

### Constants

- [INSetCarLockStatusIntentResponseCode.failure](insetcarlockstatusintentresponsecode/failure.md): An error code indicating that you were unable to lock or unlock the car.
- [INSetCarLockStatusIntentResponseCode.failureRequiringAppLaunch](insetcarlockstatusintentresponsecode/failurerequiringapplaunch.md): An error code indicating that the user must launch your app to lock or unlock the car.
- [INSetCarLockStatusIntentResponseCode.inProgress](insetcarlockstatusintentresponsecode/inprogress.md): A response code indicating that your app has attempted to lock or unlock the car, but does not yet have the results.
- [INSetCarLockStatusIntentResponseCode.ready](insetcarlockstatusintentresponsecode/ready.md): A response code indicating that you are ready to handle the intent.
- [INSetCarLockStatusIntentResponseCode.success](insetcarlockstatusintentresponsecode/success.md): A response code indicating that you have successfully handled the intent.
- [INSetCarLockStatusIntentResponseCode.unspecified](insetcarlockstatusintentresponsecode/unspecified.md): A response code indicating that the status was not specified.

### Initializers

- [init(rawValue:)](insetcarlockstatusintentresponsecode/init%28rawvalue_%29.md)

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

- [code](insetcarlockstatusintentresponse/code.md): The code indicating success or failure when confirming or handling an intent.

# INSetCarLockStatusIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the status of the response.

## Declaration

```objectivec
enum INSetCarLockStatusIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INSetCarLockStatusIntentResponseCodeFailure](insetcarlockstatusintentresponsecode/failure.md): An error code indicating that you were unable to lock or unlock the car.
- [INSetCarLockStatusIntentResponseCodeFailureRequiringAppLaunch](insetcarlockstatusintentresponsecode/failurerequiringapplaunch.md): An error code indicating that the user must launch your app to lock or unlock the car.
- [INSetCarLockStatusIntentResponseCodeInProgress](insetcarlockstatusintentresponsecode/inprogress.md): A response code indicating that your app has attempted to lock or unlock the car, but does not yet have the results.
- [INSetCarLockStatusIntentResponseCodeReady](insetcarlockstatusintentresponsecode/ready.md): A response code indicating that you are ready to handle the intent.
- [INSetCarLockStatusIntentResponseCodeSuccess](insetcarlockstatusintentresponsecode/success.md): A response code indicating that you have successfully handled the intent.
- [INSetCarLockStatusIntentResponseCodeUnspecified](insetcarlockstatusintentresponsecode/unspecified.md): A response code indicating that the status was not specified.

## See Also

### Getting the Response Code

- [code](insetcarlockstatusintentresponse/code.md): The code indicating success or failure when confirming or handling an intent.
