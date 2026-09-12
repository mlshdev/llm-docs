> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridevehicle](https://developer.apple.com/documentation/intents/inridevehicle)

# INRideVehicle (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

A specific vehicle used by a ride-booking service.

## Declaration

```swift
class INRideVehicle
```

## Mentioned In

- [Providing Live Status Updates](../sirikit/providing-live-status-updates.md)

<a id="overview"></a>

## Overview

An [INRideVehicle](inridevehicle.md) object provides information about a vehicle in your fleet. Use a vehicle object to convey details about a specific vehicle to the user. Siri and Maps present information about your vehicle’s location on the map and let the user know when the vehicle arrives.

You create an [INRideVehicle](inridevehicle.md) object when the user books a ride or when you provide the current status of a ride. You assign the vehicle object to the [vehicle](inridestatus/vehicle.md) property of the [INRideStatus](inridestatus.md) object that you include with your response.

## Topics

### Specifying the Vehicle’s Location

- [location](inridevehicle/location.md): The most recent location of the vehicle.
- [mapAnnotationImage](inridevehicle/mapannotationimage.md): The image to use for the vehicle when displaying its position on the map.

### Specifying the Vehicle Description

- [registrationPlate](inridevehicle/registrationplate.md): The text on the license plate or registration plate of the vehicle.
- [manufacturer](inridevehicle/manufacturer.md): The name of the vehicle’s manufacturer.
- [model](inridevehicle/model.md): The model of the vehicle.

### Initializers

- [init(coder:)](inridevehicle/init%28coder_%29.md)

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

### Data Objects

- [INRideOption](inrideoption.md): Details about a type of ride offered by your ride-booking service.
- [INRideStatus](inridestatus.md): The status of a ride booked through a ride-booking service.
- [INRideDriver](inridedriver.md): Identifying information about a driver of a ride service.
- [INRideFareLineItem](inridefarelineitem.md): A specific type of ride-related charge.
- [INRidePartySizeOption](inridepartysizeoption.md): The price of a ride involving the specified number of people.
- [INRideCompletionStatus](inridecompletionstatus.md): Additional details about whether a ride completed successfully or someone canceled the ride.

# INRideVehicle (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

A specific vehicle used by a ride-booking service.

## Declaration

```objectivec
@interface INRideVehicle : NSObject
```

## Mentioned In

- [Providing Live Status Updates](../sirikit/providing-live-status-updates.md)

<a id="overview"></a>

## Overview

An [INRideVehicle](inridevehicle.md) object provides information about a vehicle in your fleet. Use a vehicle object to convey details about a specific vehicle to the user. Siri and Maps present information about your vehicle’s location on the map and let the user know when the vehicle arrives.

You create an [INRideVehicle](inridevehicle.md) object when the user books a ride or when you provide the current status of a ride. You assign the vehicle object to the [vehicle](inridestatus/vehicle.md) property of the [INRideStatus](inridestatus.md) object that you include with your response.

## Topics

### Specifying the Vehicle’s Location

- [location](inridevehicle/location.md): The most recent location of the vehicle.
- [mapAnnotationImage](inridevehicle/mapannotationimage.md): The image to use for the vehicle when displaying its position on the map.

### Specifying the Vehicle Description

- [registrationPlate](inridevehicle/registrationplate.md): The text on the license plate or registration plate of the vehicle.
- [manufacturer](inridevehicle/manufacturer.md): The name of the vehicle’s manufacturer.
- [model](inridevehicle/model.md): The model of the vehicle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INRideOption](inrideoption.md): Details about a type of ride offered by your ride-booking service.
- [INRideStatus](inridestatus.md): The status of a ride booked through a ride-booking service.
- [INRideDriver](inridedriver.md): Identifying information about a driver of a ride service.
- [INRideFareLineItem](inridefarelineitem.md): A specific type of ride-related charge.
- [INRidePartySizeOption](inridepartysizeoption.md): The price of a ride involving the specified number of people.
- [INRideCompletionStatus](inridecompletionstatus.md): Additional details about whether a ride completed successfully or someone canceled the ride.
