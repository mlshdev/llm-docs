> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incancelrideintentresponsecode](https://developer.apple.com/documentation/intents/incancelrideintentresponsecode)

# INCancelRideIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating the state of the response.

## Declaration

```swift
enum INCancelRideIntentResponseCode
```

## Topics

### Constants

- [INCancelRideIntentResponseCode.unspecified](incancelrideintentresponsecode/unspecified.md): There is no specified response code.
- [INCancelRideIntentResponseCode.ready](incancelrideintentresponsecode/ready.md): You are ready to handle the intent.
- [INCancelRideIntentResponseCode.success](incancelrideintentresponsecode/success.md): You successfully canceled the ride.
- [INCancelRideIntentResponseCode.failure](incancelrideintentresponsecode/failure.md): You were unable to cancel the ride.

### Initializers

- [init(rawValue:)](incancelrideintentresponsecode/init%28rawvalue_%29.md)

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

- [code](incancelrideintentresponse/code.md): The code indicating whether you successfully handled the intent.

# INCancelRideIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating the state of the response.

## Declaration

```objectivec
enum INCancelRideIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INCancelRideIntentResponseCodeUnspecified](incancelrideintentresponsecode/unspecified.md): There is no specified response code.
- [INCancelRideIntentResponseCodeReady](incancelrideintentresponsecode/ready.md): You are ready to handle the intent.
- [INCancelRideIntentResponseCodeSuccess](incancelrideintentresponsecode/success.md): You successfully canceled the ride.
- [INCancelRideIntentResponseCodeFailure](incancelrideintentresponsecode/failure.md): You were unable to cancel the ride.

## See Also

### Getting the Response Code

- [code](incancelrideintentresponse/code.md): The code indicating whether you successfully handled the intent.
