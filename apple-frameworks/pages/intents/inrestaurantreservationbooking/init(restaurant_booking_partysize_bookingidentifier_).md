> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationbooking/init(restaurant:booking:partysize:bookingidentifier:)](https://developer.apple.com/documentation/intents/inrestaurantreservationbooking/init(restaurant:booking:partysize:bookingidentifier:))

# init(restaurant:booking:partySize:bookingIdentifier:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the reservation object with the specified information and status.

## Declaration

```swift
init(restaurant: INRestaurant, booking bookingDate: Date, partySize: Int, bookingIdentifier: String)
```

## Parameters

- `restaurant`: The restaurant at which the reservation is to be made.
- `bookingDate`: The date and time of the reservation.
- `partySize`: The number of guests in the party.
- `bookingIdentifier`: The unique identifier for the reservation in your system.

<a id="return-value"></a>

## Return Value

An initialized reservation booking object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

After initializing the reservation booking object, update the other properties of the object with details about special offers or the requirements for completing the reservation.

# initWithRestaurant:bookingDate:partySize:bookingIdentifier: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the reservation object with the specified information and status.

## Declaration

```objectivec
- (instancetype) initWithRestaurant:(INRestaurant *) restaurant bookingDate:(NSDate *) bookingDate partySize:(NSUInteger) partySize bookingIdentifier:(NSString *) bookingIdentifier;
```

## Parameters

- `restaurant`: The restaurant at which the reservation is to be made.
- `bookingDate`: The date and time of the reservation.
- `partySize`: The number of guests in the party.
- `bookingIdentifier`: The unique identifier for the reservation in your system.

<a id="return-value"></a>

## Return Value

An initialized reservation booking object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

After initializing the reservation booking object, update the other properties of the object with details about special offers or the requirements for completing the reservation.
