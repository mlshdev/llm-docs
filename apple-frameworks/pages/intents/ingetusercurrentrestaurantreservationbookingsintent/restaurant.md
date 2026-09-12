> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetusercurrentrestaurantreservationbookingsintent/restaurant](https://developer.apple.com/documentation/intents/ingetusercurrentrestaurantreservationbookingsintent/restaurant)

# restaurant (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A restaurant to use as a filter when searching for reservations.

## Declaration

```swift
@NSCopying var restaurant: INRestaurant? { get set }
```

<a id="Discussion"></a>

## Discussion

Use the restaurant information in this property as a filter when searching for the user’s current reservations. Associate any reservation you return with the specified restaurant If this property is `nil`, your search results can include reservations at any restaurant.

## See Also

### Getting the Search Parameters

- [reservationIdentifier](reservationidentifier.md): An identifier to use when searching for the user’s reservations.

# restaurant (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A restaurant to use as a filter when searching for reservations.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) INRestaurant * restaurant;
```

```objectivec
@property (atomic, copy, nullable) INRestaurant * restaurant;
```

<a id="Discussion"></a>

## Discussion

Use the restaurant information in this property as a filter when searching for the user’s current reservations. Associate any reservation you return with the specified restaurant If this property is `nil`, your search results can include reservations at any restaurant.

## See Also

### Getting the Search Parameters

- [reservationIdentifier](reservationidentifier.md): An identifier to use when searching for the user’s reservations.
