> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrentalcarreservation](https://developer.apple.com/documentation/intents/inrentalcarreservation)

# INRentalCarReservation (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a rental car reservation.

## Declaration

```swift
class INRentalCarReservation
```

## Topics

### Creating a Rental Car Reservation

- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:url:rentalCar:rentalDuration:pickupLocation:dropOffLocation:)](inrentalcarreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_rentalcar_rentalduration_pickuplocation_dropofflocation_%29-44w7o.md): Creates a rental car reservation with the specified contents and attributes.
- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:rentalCar:rentalDuration:pickupLocation:dropOffLocation:)](inrentalcarreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_rentalcar_rentalduration_pickuplocation_dropofflocation_%29.md): Creates a new rental car reservation with the specified contents and attributes.

### Getting the Rental Car Reservation Information

- [rentalCar](inrentalcarreservation/rentalcar.md): An object containing detailed information about the rental car.
- [INRentalCar](inrentalcar.md): The information that describes a rental car.
- [rentalDuration](inrentalcarreservation/rentalduration.md): The date and time range that indicates the pickup and drop off times for the rental.
- [pickupLocation](inrentalcarreservation/pickuplocation.md): The name and location where the user can pick up the car.
- [dropOffLocation](inrentalcarreservation/dropofflocation.md): The name and location where the user can drop off the car.

### Initializers

- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:URL:rentalCar:rentalDuration:pickupLocation:dropOffLocation:)](inrentalcarreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_rentalcar_rentalduration_pickuplocation_dropofflocation_%29-4zr96.md)

## Relationships

### Inherits From

- [INReservation](inreservation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Travel Reservations

- [INFlightReservation](inflightreservation.md): The information that describes a flight reservation.
- [INTrainReservation](intrainreservation.md): The information that describes a train reservation.
- [INBoatReservation](inboatreservation.md): The information that describes a boat reservation.
- [INBusReservation](inbusreservation.md): The information that describes a bus reservation.

# INRentalCarReservation (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a rental car reservation.

## Declaration

```objectivec
@interface INRentalCarReservation : INReservation
```

## Topics

### Creating a Rental Car Reservation

- [initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:URL:rentalCar:rentalDuration:pickupLocation:dropOffLocation:](inrentalcarreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_rentalcar_rentalduration_pickuplocation_dropofflocation_%29-44w7o.md): Creates a rental car reservation with the specified contents and attributes.
- [initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:rentalCar:rentalDuration:pickupLocation:dropOffLocation:](inrentalcarreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_rentalcar_rentalduration_pickuplocation_dropofflocation_%29.md): Creates a new rental car reservation with the specified contents and attributes.

### Getting the Rental Car Reservation Information

- [rentalCar](inrentalcarreservation/rentalcar.md): An object containing detailed information about the rental car.
- [INRentalCar](inrentalcar.md): The information that describes a rental car.
- [rentalDuration](inrentalcarreservation/rentalduration.md): The date and time range that indicates the pickup and drop off times for the rental.
- [pickupLocation](inrentalcarreservation/pickuplocation.md): The name and location where the user can pick up the car.
- [dropOffLocation](inrentalcarreservation/dropofflocation.md): The name and location where the user can drop off the car.

## Relationships

### Inherits From

- [INReservation](inreservation.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Travel Reservations

- [INFlightReservation](inflightreservation.md): The information that describes a flight reservation.
- [INTrainReservation](intrainreservation.md): The information that describes a train reservation.
- [INBoatReservation](inboatreservation.md): The information that describes a boat reservation.
- [INBusReservation](inbusreservation.md): The information that describes a bus reservation.
