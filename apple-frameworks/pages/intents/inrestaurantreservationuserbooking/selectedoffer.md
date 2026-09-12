> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationuserbooking/selectedoffer](https://developer.apple.com/documentation/intents/inrestaurantreservationuserbooking/selectedoffer)

# selectedOffer (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The offer selected by the user.

## Declaration

```swift
@NSCopying var selectedOffer: INRestaurantOffer? { get set }
```

<a id="Discussion"></a>

## Discussion

If the user selects a special offer when making the reservation, use this property to store the selected offer. You can retrieve the selected offer from the [selectedOffer](../inbookrestaurantreservationintent/selectedoffer.md) property of the [INBookRestaurantReservationIntent](../inbookrestaurantreservationintent.md) object when providing your response to that intent.

## See Also

### Accessing Special Offers

- [advisementText](advisementtext.md): A user-readable string containing policies and information related to the reservation.

# selectedOffer (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The offer selected by the user.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) INRestaurantOffer * selectedOffer;
```

```objectivec
@property (atomic, copy, nullable) INRestaurantOffer * selectedOffer;
```

<a id="Discussion"></a>

## Discussion

If the user selects a special offer when making the reservation, use this property to store the selected offer. You can retrieve the selected offer from the [selectedOffer](../inbookrestaurantreservationintent/selectedoffer.md) property of the [INBookRestaurantReservationIntent](../inbookrestaurantreservationintent.md) object when providing your response to that intent.

## See Also

### Accessing Special Offers

- [advisementText](advisementtext.md): A user-readable string containing policies and information related to the reservation.
