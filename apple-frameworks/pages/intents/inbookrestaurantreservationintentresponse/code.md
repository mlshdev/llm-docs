> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintentresponse/code](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintentresponse/code)

# code (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The code indicating whether you successfully handled the intent.

## Declaration

```swift
var code: INBookRestaurantReservationIntentCode { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

## See Also

### Accessing the Response Information

- [INBookRestaurantReservationIntentCode](../inbookrestaurantreservationintentcode.md): Constants indicating the state of the response.
- [userBooking](userbooking.md): The detailed information about the reservation.

# code (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The code indicating whether you successfully handled the intent.

## Declaration

```objectivec
@property (nonatomic, readonly) INBookRestaurantReservationIntentCode code;
```

```objectivec
@property (atomic, readonly) INBookRestaurantReservationIntentCode code;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

## See Also

### Accessing the Response Information

- [INBookRestaurantReservationIntentCode](../inbookrestaurantreservationintentcode.md): Constants indicating the state of the response.
- [userBooking](userbooking.md): The detailed information about the reservation.
