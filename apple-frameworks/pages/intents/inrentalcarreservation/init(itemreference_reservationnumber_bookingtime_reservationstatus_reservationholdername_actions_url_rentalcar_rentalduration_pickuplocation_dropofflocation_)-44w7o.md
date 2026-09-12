> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrentalcarreservation/init(itemreference:reservationnumber:bookingtime:reservationstatus:reservationholdername:actions:url:rentalcar:rentalduration:pickuplocation:dropofflocation:)-44w7o](https://developer.apple.com/documentation/intents/inrentalcarreservation/init(itemreference:reservationnumber:bookingtime:reservationstatus:reservationholdername:actions:url:rentalcar:rentalduration:pickuplocation:dropofflocation:)-44w7o)

# init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:url:rentalCar:rentalDuration:pickupLocation:dropOffLocation:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a rental car reservation with the specified contents and attributes.

## Declaration

```swift
init(itemReference: INSpeakableString, reservationNumber: String?, bookingTime: Date?, reservationStatus: INReservationStatus, reservationHolderName: String?, actions: [INReservationAction]?, url URL: URL?, rentalCar: INRentalCar, rentalDuration: INDateComponentsRange, pickupLocation: CLPlacemark?, dropOffLocation: CLPlacemark?)
```

## Parameters

- `itemReference`: A unique identifier for the reservation.
- `reservationNumber`: The reservation number.
- `bookingTime`: The date and time the user made the reservation.
- `reservationStatus`: The current status of the reservation.
- `reservationHolderName`: The reservation holder’s name.
- `actions`: Available actions associated with the reservation.
- `URL`: A webpage containing reservation information.
- `rentalCar`: Information describing the rental car.
- `rentalDuration`: The date and time range that determines the pickup and drop off times for the rental.
- `pickupLocation`: The name and location of the place where the user can pick up the car.
- `dropOffLocation`: The name and location of the place where the user can drop off the car.

<a id="return-value"></a>

## Return Value

A new [INRentalCarReservation](../inrentalcarreservation.md) object or `nil` if unable to create one.

## See Also

### Creating a Rental Car Reservation

- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:rentalCar:rentalDuration:pickupLocation:dropOffLocation:)](init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_rentalcar_rentalduration_pickuplocation_dropofflocation_%29.md): Creates a new rental car reservation with the specified contents and attributes.

# initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:URL:rentalCar:rentalDuration:pickupLocation:dropOffLocation: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a rental car reservation with the specified contents and attributes.

## Declaration

```objectivec
- (instancetype) initWithItemReference:(INSpeakableString *) itemReference reservationNumber:(NSString *) reservationNumber bookingTime:(NSDate *) bookingTime reservationStatus:(INReservationStatus) reservationStatus reservationHolderName:(NSString *) reservationHolderName actions:(NSArray<INReservationAction *> *) actions URL:(NSURL *) URL rentalCar:(INRentalCar *) rentalCar rentalDuration:(INDateComponentsRange *) rentalDuration pickupLocation:(CLPlacemark *) pickupLocation dropOffLocation:(CLPlacemark *) dropOffLocation;
```

## Parameters

- `itemReference`: A unique identifier for the reservation.
- `reservationNumber`: The reservation number.
- `bookingTime`: The date and time the user made the reservation.
- `reservationStatus`: The current status of the reservation.
- `reservationHolderName`: The reservation holder’s name.
- `actions`: Available actions associated with the reservation.
- `URL`: A webpage containing reservation information.
- `rentalCar`: Information describing the rental car.
- `rentalDuration`: The date and time range that determines the pickup and drop off times for the rental.
- `pickupLocation`: The name and location of the place where the user can pick up the car.
- `dropOffLocation`: The name and location of the place where the user can drop off the car.

<a id="return-value"></a>

## Return Value

A new [INRentalCarReservation](../inrentalcarreservation.md) object or `nil` if unable to create one.

## See Also

### Creating a Rental Car Reservation

- [initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:rentalCar:rentalDuration:pickupLocation:dropOffLocation:](init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_rentalcar_rentalduration_pickuplocation_dropofflocation_%29.md): Creates a new rental car reservation with the specified contents and attributes.
