> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintentcode

# INGetAvailableRestaurantReservationBookingsIntentCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration

Constants indicating the state of the response.

## Declaration

```swift
enum INGetAvailableRestaurantReservationBookingsIntentCode
```

## Topics

### Constants

- [INGetAvailableRestaurantReservationBookingsIntentCode.success](ingetavailablerestaurantreservationbookingsintentcode/success.md): You successfully handled the intent.
- [INGetAvailableRestaurantReservationBookingsIntentCode.failure](ingetavailablerestaurantreservationbookingsintentcode/failure.md): You were unable to provide a list of possible reservation times.
- [INGetAvailableRestaurantReservationBookingsIntentCode.failureRequestUnsatisfiable](ingetavailablerestaurantreservationbookingsintentcode/failurerequestunsatisfiable.md): You could not complete the request because the data you received from Maps was invalid.
- [INGetAvailableRestaurantReservationBookingsIntentCode.failureRequestUnspecified](ingetavailablerestaurantreservationbookingsintentcode/failurerequestunspecified.md): There was a failure in getting the requested booking times and the cause of the failure is unknown.

### Initializers

- [init(rawValue:)](ingetavailablerestaurantreservationbookingsintentcode/init%28rawvalue_%29.md)

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

- [code](ingetavailablerestaurantreservationbookingsintentresponse/code.md): The code indicating whether you successfully handled the intent.

# INGetAvailableRestaurantReservationBookingsIntentCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration

Constants indicating the state of the response.

## Declaration

```objectivec
enum INGetAvailableRestaurantReservationBookingsIntentCode : NSInteger;
```

## Topics

### Constants

- [INGetAvailableRestaurantReservationBookingsIntentCodeSuccess](ingetavailablerestaurantreservationbookingsintentcode/success.md): You successfully handled the intent.
- [INGetAvailableRestaurantReservationBookingsIntentCodeFailure](ingetavailablerestaurantreservationbookingsintentcode/failure.md): You were unable to provide a list of possible reservation times.
- [INGetAvailableRestaurantReservationBookingsIntentCodeFailureRequestUnsatisfiable](ingetavailablerestaurantreservationbookingsintentcode/failurerequestunsatisfiable.md): You could not complete the request because the data you received from Maps was invalid.
- [INGetAvailableRestaurantReservationBookingsIntentCodeFailureRequestUnspecified](ingetavailablerestaurantreservationbookingsintentcode/failurerequestunspecified.md): There was a failure in getting the requested booking times and the cause of the failure is unknown.

## See Also

### Getting the Response Code

- [code](ingetavailablerestaurantreservationbookingsintentresponse/code.md): The code indicating whether you successfully handled the intent.
