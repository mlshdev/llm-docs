> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintent/selectedoffer](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintent/selectedoffer)

# selectedOffer (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The special offer, if any, selected by the user.

## Declaration

```swift
@NSCopying var selectedOffer: INRestaurantOffer? { get set }
```

<a id="Discussion"></a>

## Discussion

If the reservation option selected by the user contained any special offers, this property contains the offer that the user selected. Prior to booking, you create [INRestaurantReservationBooking](../inrestaurantreservationbooking.md) objects with the details of the reservation options, including any special offers available at that time. If the user selects one of the options, the system puts the information about the selected offer in this property. You should convey the offer data to the restaurant along with the other details of the user’s reservation.

## See Also

### Getting Special Requests and Offers

- [guestProvidedSpecialRequestText](guestprovidedspecialrequesttext.md): Information about any special requests made by the user.

# selectedOffer (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The special offer, if any, selected by the user.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) INRestaurantOffer * selectedOffer;
```

```objectivec
@property (atomic, copy, nullable) INRestaurantOffer * selectedOffer;
```

<a id="Discussion"></a>

## Discussion

If the reservation option selected by the user contained any special offers, this property contains the offer that the user selected. Prior to booking, you create [INRestaurantReservationBooking](../inrestaurantreservationbooking.md) objects with the details of the reservation options, including any special offers available at that time. If the user selects one of the options, the system puts the information about the selected offer in this property. You should convey the offer data to the restaurant along with the other details of the user’s reservation.

## See Also

### Getting Special Requests and Offers

- [guestProvidedSpecialRequestText](guestprovidedspecialrequesttext.md): Information about any special requests made by the user.
