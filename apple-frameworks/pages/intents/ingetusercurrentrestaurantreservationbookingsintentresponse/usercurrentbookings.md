> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/ingetusercurrentrestaurantreservationbookingsintentresponse/usercurrentbookings

# userCurrentBookings (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of the user’s current reservations.

## Declaration

```swift
var userCurrentBookings: [INRestaurantReservationUserBooking] { get set }
```

<a id="Discussion"></a>

## Discussion

During the handling phase of the intent, your handler object should put the user’s reservations in this property. If there are no outstanding reservations associated with the user and matching the criteria in the intent object, specify an empty array for this property.

# userCurrentBookings (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of the user’s current reservations.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<INRestaurantReservationUserBooking *> * userCurrentBookings;
```

```objectivec
@property (atomic, copy) NSArray<INRestaurantReservationUserBooking *> * userCurrentBookings;
```

<a id="Discussion"></a>

## Discussion

During the handling phase of the intent, your handler object should put the user’s reservations in this property. If there are no outstanding reservations associated with the user and matching the criteria in the intent object, specify an empty array for this property.
