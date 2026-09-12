> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservation/restaurantlocation](https://developer.apple.com/documentation/intents/inrestaurantreservation/restaurantlocation)

# restaurantLocation (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The name and location of the restaurant.

## Declaration

```swift
@NSCopying var restaurantLocation: CLPlacemark { get }
```

## See Also

### Getting the Restaurant Reservation Information

- [reservationDuration](reservationduration.md): The date and time range that defines beginning and end of the restaurant reservation.
- [partySize](partysize-9ux0p.md): The number of people in the party.

# restaurantLocation (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The name and location of the restaurant.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) CLPlacemark * restaurantLocation;
```

```objectivec
@property (atomic, copy, readonly) CLPlacemark * restaurantLocation;
```

## See Also

### Getting the Restaurant Reservation Information

- [reservationDuration](reservationduration.md): The date and time range that defines beginning and end of the restaurant reservation.
- [partySize](https://developer.apple.com/documentation/intents/inrestaurantreservation/partysize-9mtpk): The number of people in the party.
