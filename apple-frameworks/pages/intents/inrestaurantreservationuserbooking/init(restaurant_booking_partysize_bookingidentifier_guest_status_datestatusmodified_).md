> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationuserbooking/init(restaurant:booking:partysize:bookingidentifier:guest:status:datestatusmodified:)](https://developer.apple.com/documentation/intents/inrestaurantreservationuserbooking/init(restaurant:booking:partysize:bookingidentifier:guest:status:datestatusmodified:))

# init(restaurant:booking:partySize:bookingIdentifier:guest:status:dateStatusModified:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the reservation object with the specified information and status.

## Declaration

```swift
init(restaurant: INRestaurant, booking bookingDate: Date, partySize: Int, bookingIdentifier: String, guest: INRestaurantGuest, status: INRestaurantReservationUserBookingStatus, dateStatusModified: Date)
```

## Parameters

- `restaurant`: The restaurant at which the reservation was made.
- `bookingDate`: The date and time of the reservation.
- `partySize`: The number of guests in the party.
- `bookingIdentifier`: The unique identifier for the reservation in your system.
- `guest`: The guest whose name is associated with the reservation.
- `status`: A value indicating whether the reservation was confirmed, declined, or is still pending.
- `dateStatusModified`: The date when the reservation’s status last changed.

<a id="return-value"></a>

## Return Value

An initialized reservation object or `nil` if the object could not be created.

# initWithRestaurant:bookingDate:partySize:bookingIdentifier:guest:status:dateStatusModified: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the reservation object with the specified information and status.

## Declaration

```objectivec
- (instancetype) initWithRestaurant:(INRestaurant *) restaurant bookingDate:(NSDate *) bookingDate partySize:(NSUInteger) partySize bookingIdentifier:(NSString *) bookingIdentifier guest:(INRestaurantGuest *) guest status:(INRestaurantReservationUserBookingStatus) status dateStatusModified:(NSDate *) dateStatusModified;
```

## Parameters

- `restaurant`: The restaurant at which the reservation was made.
- `bookingDate`: The date and time of the reservation.
- `partySize`: The number of guests in the party.
- `bookingIdentifier`: The unique identifier for the reservation in your system.
- `guest`: The guest whose name is associated with the reservation.
- `status`: A value indicating whether the reservation was confirmed, declined, or is still pending.
- `dateStatusModified`: The date when the reservation’s status last changed.

<a id="return-value"></a>

## Return Value

An initialized reservation object or `nil` if the object could not be created.
