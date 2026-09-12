> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrentalcar](https://developer.apple.com/documentation/intents/inrentalcar)

# INRentalCar (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a rental car.

## Declaration

```swift
class INRentalCar
```

## Topics

### Creating a Rental Car Object

- [init(rentalCompanyName:type:make:model:rentalCarDescription:)](inrentalcar/init%28rentalcompanyname_type_make_model_rentalcardescription_%29.md): Creates a new rental car object with the specified contents and attributes.

### Getting the Rental Car Information

- [rentalCompanyName](inrentalcar/rentalcompanyname.md): The name of the rental car company.
- [type](inrentalcar/type.md): The type of rental car the user reserved.
- [make](inrentalcar/make.md): The name of the company that made the rental car.
- [model](inrentalcar/model.md): The name of the rental car model.
- [rentalCarDescription](inrentalcar/rentalcardescription.md): A description of the rental car.

### Initializers

- [init(coder:)](inrentalcar/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Getting the Rental Car Reservation Information

- [rentalCar](inrentalcarreservation/rentalcar.md): An object containing detailed information about the rental car.
- [rentalDuration](inrentalcarreservation/rentalduration.md): The date and time range that indicates the pickup and drop off times for the rental.
- [pickupLocation](inrentalcarreservation/pickuplocation.md): The name and location where the user can pick up the car.
- [dropOffLocation](inrentalcarreservation/dropofflocation.md): The name and location where the user can drop off the car.

# INRentalCar (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a rental car.

## Declaration

```objectivec
@interface INRentalCar : NSObject
```

## Topics

### Creating a Rental Car Object

- [initWithRentalCompanyName:type:make:model:rentalCarDescription:](inrentalcar/init%28rentalcompanyname_type_make_model_rentalcardescription_%29.md): Creates a new rental car object with the specified contents and attributes.

### Getting the Rental Car Information

- [rentalCompanyName](inrentalcar/rentalcompanyname.md): The name of the rental car company.
- [type](inrentalcar/type.md): The type of rental car the user reserved.
- [make](inrentalcar/make.md): The name of the company that made the rental car.
- [model](inrentalcar/model.md): The name of the rental car model.
- [rentalCarDescription](inrentalcar/rentalcardescription.md): A description of the rental car.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Getting the Rental Car Reservation Information

- [rentalCar](inrentalcarreservation/rentalcar.md): An object containing detailed information about the rental car.
- [rentalDuration](inrentalcarreservation/rentalduration.md): The date and time range that indicates the pickup and drop off times for the rental.
- [pickupLocation](inrentalcarreservation/pickuplocation.md): The name and location where the user can pick up the car.
- [dropOffLocation](inrentalcarreservation/dropofflocation.md): The name and location where the user can drop off the car.
