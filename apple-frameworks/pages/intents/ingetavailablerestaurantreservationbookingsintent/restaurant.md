> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintent/restaurant

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

Use this object to determine the restaurant at which to create the reservation.

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

Use this object to determine the restaurant at which to create the reservation.
