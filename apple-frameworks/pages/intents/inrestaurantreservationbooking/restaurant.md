> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationbooking/restaurant](https://developer.apple.com/documentation/intents/inrestaurantreservationbooking/restaurant)

# restaurant (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The restaurant associated with the reservation.

## Declaration

```swift
@NSCopying var restaurant: INRestaurant { get set }
```

<a id="Discussion"></a>

## Discussion

This property must contain a valid restaurant object.

## See Also

### Accessing the Reservation Information

- [partySize](partysize.md): The total number of guests in the party.
- [offers](offers.md): An array of special offers from the restaurant.

# restaurant (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The restaurant associated with the reservation.

## Declaration

```objectivec
@property (nonatomic, copy) INRestaurant * restaurant;
```

```objectivec
@property (atomic, copy) INRestaurant * restaurant;
```

<a id="Discussion"></a>

## Discussion

This property must contain a valid restaurant object.

## See Also

### Accessing the Reservation Information

- [partySize](partysize.md): The total number of guests in the party.
- [offers](offers.md): An array of special offers from the restaurant.
