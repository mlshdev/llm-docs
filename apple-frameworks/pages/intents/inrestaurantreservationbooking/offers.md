> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationbooking/offers](https://developer.apple.com/documentation/intents/inrestaurantreservationbooking/offers)

# offers (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of special offers from the restaurant.

## Declaration

```swift
var offers: [INRestaurantOffer]? { get set }
```

<a id="Discussion"></a>

## Discussion

If a given reservation has associated special offers, assign those offers to this property. The system presents the offers to the user, who then has the option of selecting one. Specify `nil` if there are no available offers. The default value of this property is `nil`.

## See Also

### Accessing the Reservation Information

- [restaurant](restaurant.md): The restaurant associated with the reservation.
- [partySize](partysize.md): The total number of guests in the party.

# offers (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of special offers from the restaurant.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<INRestaurantOffer *> * offers;
```

```objectivec
@property (atomic, copy, nullable) NSArray<INRestaurantOffer *> * offers;
```

<a id="Discussion"></a>

## Discussion

If a given reservation has associated special offers, assign those offers to this property. The system presents the offers to the user, who then has the option of selecting one. Specify `nil` if there are no available offers. The default value of this property is `nil`.

## See Also

### Accessing the Reservation Information

- [restaurant](restaurant.md): The restaurant associated with the reservation.
- [partySize](partysize.md): The total number of guests in the party.
