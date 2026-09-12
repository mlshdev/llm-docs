> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrentalcarreservation/rentalduration](https://developer.apple.com/documentation/intents/inrentalcarreservation/rentalduration)

# rentalDuration (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The date and time range that indicates the pickup and drop off times for the rental.

## Declaration

```swift
@NSCopying var rentalDuration: INDateComponentsRange { get }
```

## See Also

### Getting the Rental Car Reservation Information

- [rentalCar](rentalcar.md): An object containing detailed information about the rental car.
- [INRentalCar](../inrentalcar.md): The information that describes a rental car.
- [pickupLocation](pickuplocation.md): The name and location where the user can pick up the car.
- [dropOffLocation](dropofflocation.md): The name and location where the user can drop off the car.

# rentalDuration (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The date and time range that indicates the pickup and drop off times for the rental.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INDateComponentsRange * rentalDuration;
```

```objectivec
@property (atomic, copy, readonly) INDateComponentsRange * rentalDuration;
```

## See Also

### Getting the Rental Car Reservation Information

- [rentalCar](rentalcar.md): An object containing detailed information about the rental car.
- [INRentalCar](../inrentalcar.md): The information that describes a rental car.
- [pickupLocation](pickuplocation.md): The name and location where the user can pick up the car.
- [dropOffLocation](dropofflocation.md): The name and location where the user can drop off the car.
