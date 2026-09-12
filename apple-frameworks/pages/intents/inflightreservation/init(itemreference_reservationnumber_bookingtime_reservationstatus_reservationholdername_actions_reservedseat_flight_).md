> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inflightreservation/init(itemreference:reservationnumber:bookingtime:reservationstatus:reservationholdername:actions:reservedseat:flight:)](https://developer.apple.com/documentation/intents/inflightreservation/init(itemreference:reservationnumber:bookingtime:reservationstatus:reservationholdername:actions:reservedseat:flight:))

# init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:reservedSeat:flight:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new flight reservation with the specified contents and attributes.

## Declaration

```swift
convenience init(itemReference: INSpeakableString, reservationNumber: String?, bookingTime: Date?, reservationStatus: INReservationStatus, reservationHolderName: String?, actions: [INReservationAction]?, reservedSeat: INSeat?, flight: INFlight)
```

## Parameters

- `itemReference`: A unique value for the reservation item.
- `reservationNumber`: The reservation or booking number provided by the app.
- `bookingTime`: The date and time the user made the reservation.
- `reservationStatus`: The current reservation status.
- `reservationHolderName`: The name of the person the reservation is under.
- `actions`: The available actions for the reservation. For example, checking in for the reservation from your phone.
- `reservedSeat`: The seat assigned to the user for the flight.
- `flight`: The flight information for the reservation.

<a id="return-value"></a>

## Return Value

A new [INRestaurantReservation](../inrestaurantreservation.md) object or `nil` if unable to create one.

## See Also

### Creating a Flight Reservation

- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:url:reservedSeat:flight:)](init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_flight_%29-4b34z.md): Creates a flight reservation with the specified contents and attributes.

# initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:reservedSeat:flight: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new flight reservation with the specified contents and attributes.

## Declaration

```objectivec
- (instancetype) initWithItemReference:(INSpeakableString *) itemReference reservationNumber:(NSString *) reservationNumber bookingTime:(NSDate *) bookingTime reservationStatus:(INReservationStatus) reservationStatus reservationHolderName:(NSString *) reservationHolderName actions:(NSArray<INReservationAction *> *) actions reservedSeat:(INSeat *) reservedSeat flight:(INFlight *) flight;
```

## Parameters

- `itemReference`: A unique value for the reservation item.
- `reservationNumber`: The reservation or booking number provided by the app.
- `bookingTime`: The date and time the user made the reservation.
- `reservationStatus`: The current reservation status.
- `reservationHolderName`: The name of the person the reservation is under.
- `actions`: The available actions for the reservation. For example, checking in for the reservation from your phone.
- `reservedSeat`: The seat assigned to the user for the flight.
- `flight`: The flight information for the reservation.

<a id="return-value"></a>

## Return Value

A new [INRestaurantReservation](../inrestaurantreservation.md) object or `nil` if unable to create one.

## See Also

### Creating a Flight Reservation

- [initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:URL:reservedSeat:flight:](init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_flight_%29-4b34z.md): Creates a flight reservation with the specified contents and attributes.
