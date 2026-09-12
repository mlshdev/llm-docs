> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservation/reservationduration](https://developer.apple.com/documentation/intents/inrestaurantreservation/reservationduration)

# reservationDuration (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The date and time range that defines beginning and end of the restaurant reservation.

## Declaration

```swift
@NSCopying var reservationDuration: INDateComponentsRange { get }
```

## See Also

### Getting the Restaurant Reservation Information

- [restaurantLocation](restaurantlocation.md): The name and location of the restaurant.
- [partySize](partysize-9ux0p.md): The number of people in the party.

# reservationDuration (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The date and time range that defines beginning and end of the restaurant reservation.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INDateComponentsRange * reservationDuration;
```

```objectivec
@property (atomic, copy, readonly) INDateComponentsRange * reservationDuration;
```

## See Also

### Getting the Restaurant Reservation Information

- [restaurantLocation](restaurantlocation.md): The name and location of the restaurant.
- [partySize](https://developer.apple.com/documentation/intents/inrestaurantreservation/partysize-9mtpk): The number of people in the party.
