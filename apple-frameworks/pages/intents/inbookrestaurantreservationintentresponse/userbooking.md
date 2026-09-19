> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inbookrestaurantreservationintentresponse/userbooking

# userBooking (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The detailed information about the reservation.

## Declaration

```swift
@NSCopying var userBooking: INRestaurantReservationUserBooking? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the details of the user’s reservation. When creating the [INRestaurantReservationUserBooking](../inrestaurantreservationuserbooking.md) object, provide as much information as possible. The system conveys information from this object back to the user through the system’s reservation interfaces.

## See Also

### Accessing the Response Information

- [code](code.md): The code indicating whether you successfully handled the intent.
- [INBookRestaurantReservationIntentCode](../inbookrestaurantreservationintentcode.md): Constants indicating the state of the response.

# userBooking (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The detailed information about the reservation.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) INRestaurantReservationUserBooking * userBooking;
```

```objectivec
@property (atomic, copy, nullable) INRestaurantReservationUserBooking * userBooking;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the details of the user’s reservation. When creating the [INRestaurantReservationUserBooking](../inrestaurantreservationuserbooking.md) object, provide as much information as possible. The system conveys information from this object back to the user through the system’s reservation interfaces.

## See Also

### Accessing the Response Information

- [code](code.md): The code indicating whether you successfully handled the intent.
- [INBookRestaurantReservationIntentCode](../inbookrestaurantreservationintentcode.md): Constants indicating the state of the response.
