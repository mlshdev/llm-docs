> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intrainreservation/init(itemreference:reservationnumber:bookingtime:reservationstatus:reservationholdername:actions:reservedseat:traintrip:)](https://developer.apple.com/documentation/intents/intrainreservation/init(itemreference:reservationnumber:bookingtime:reservationstatus:reservationholdername:actions:reservedseat:traintrip:))

# init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:reservedSeat:trainTrip:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new train reservation with the specified contents and attributes.

## Declaration

```swift
convenience init(itemReference: INSpeakableString, reservationNumber: String?, bookingTime: Date?, reservationStatus: INReservationStatus, reservationHolderName: String?, actions: [INReservationAction]?, reservedSeat: INSeat?, trainTrip: INTrainTrip)
```

## Parameters

- `itemReference`: A unique identifier for the reservation.
- `reservationNumber`: The reservation or booking number for the reservation.
- `bookingTime`: The date and time the user made the reservation.
- `reservationStatus`: The current status of the reservation.
- `reservationHolderName`: The reservation holder’s name.
- `actions`: The available actions associated with the reservation.
- `reservedSeat`: The seat assigned to the passenger.
- `trainTrip`: The information that describes the train trip.

<a id="return-value"></a>

## Return Value

A new [INTrainReservation](../intrainreservation.md) object or `nil` if one can’t be created.

## See Also

### Creating a Train Reservation

- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:url:reservedSeat:trainTrip:)](init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_traintrip_%29-3z3wm.md): Creates a train reservation with the specified contents and attributes.

# initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:reservedSeat:trainTrip: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new train reservation with the specified contents and attributes.

## Declaration

```objectivec
- (instancetype) initWithItemReference:(INSpeakableString *) itemReference reservationNumber:(NSString *) reservationNumber bookingTime:(NSDate *) bookingTime reservationStatus:(INReservationStatus) reservationStatus reservationHolderName:(NSString *) reservationHolderName actions:(NSArray<INReservationAction *> *) actions reservedSeat:(INSeat *) reservedSeat trainTrip:(INTrainTrip *) trainTrip;
```

## Parameters

- `itemReference`: A unique identifier for the reservation.
- `reservationNumber`: The reservation or booking number for the reservation.
- `bookingTime`: The date and time the user made the reservation.
- `reservationStatus`: The current status of the reservation.
- `reservationHolderName`: The reservation holder’s name.
- `actions`: The available actions associated with the reservation.
- `reservedSeat`: The seat assigned to the passenger.
- `trainTrip`: The information that describes the train trip.

<a id="return-value"></a>

## Return Value

A new [INTrainReservation](../intrainreservation.md) object or `nil` if one can’t be created.

## See Also

### Creating a Train Reservation

- [initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:URL:reservedSeat:trainTrip:](init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_traintrip_%29-3z3wm.md): Creates a train reservation with the specified contents and attributes.
