> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintent/init(restaurant:booking:partysize:bookingidentifier:guest:selectedoffer:guestprovidedspecialrequesttext:)](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintent/init(restaurant:booking:partysize:bookingidentifier:guest:selectedoffer:guestprovidedspecialrequesttext:))

# init(restaurant:booking:partySize:bookingIdentifier:guest:selectedOffer:guestProvidedSpecialRequestText:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the intent object with the specified booking information.

## Declaration

```swift
init(restaurant: INRestaurant, booking bookingDateComponents: DateComponents, partySize: Int, bookingIdentifier: String?, guest: INRestaurantGuest?, selectedOffer: INRestaurantOffer?, guestProvidedSpecialRequestText: String?)
```

## Parameters

- `restaurant`: The restaurant to contact regarding the booking.
- `bookingDateComponents`: The date and time of the reservation.
- `partySize`: The total number of people in the user’s party.
- `bookingIdentifier`: The unique identifier associated with the initial reservation data.
- `guest`: The identity of the guest associated to associate with the reservation.
- `selectedOffer`: The special offer, if any, selected by the user.
- `guestProvidedSpecialRequestText`: Information about any special requests made by the user.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when the user asks to create a restaurant booking. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

# initWithRestaurant:bookingDateComponents:partySize:bookingIdentifier:guest:selectedOffer:guestProvidedSpecialRequestText: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the intent object with the specified booking information.

## Declaration

```objectivec
- (instancetype) initWithRestaurant:(INRestaurant *) restaurant bookingDateComponents:(NSDateComponents *) bookingDateComponents partySize:(NSUInteger) partySize bookingIdentifier:(NSString *) bookingIdentifier guest:(INRestaurantGuest *) guest selectedOffer:(INRestaurantOffer *) selectedOffer guestProvidedSpecialRequestText:(NSString *) guestProvidedSpecialRequestText;
```

## Parameters

- `restaurant`: The restaurant to contact regarding the booking.
- `bookingDateComponents`: The date and time of the reservation.
- `partySize`: The total number of people in the user’s party.
- `bookingIdentifier`: The unique identifier associated with the initial reservation data.
- `guest`: The identity of the guest associated to associate with the reservation.
- `selectedOffer`: The special offer, if any, selected by the user.
- `guestProvidedSpecialRequestText`: Information about any special requests made by the user.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when the user asks to create a restaurant booking. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.
