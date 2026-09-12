> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridestatus](https://developer.apple.com/documentation/intents/inridestatus)

# INRideStatus (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The status of a ride booked through a ride-booking service.

## Declaration

```swift
class INRideStatus
```

## Mentioned In

- [Providing Live Status Updates](../sirikit/providing-live-status-updates.md)
- [Handling an Intent](../sirikit/handling-an-intent.md)

<a id="overview"></a>

## Overview

When the user books a ride or requests the status of a ride, you create an [INRideStatus](inridestatus.md) object as part of your response and fill it with the relevant information. A ride status object conveys information about the current status of a ride, such as whether the ride is ongoing, completed, or has yet to occur. This object also contains details about the ride such as the pickup location, drop-off location, and information about the driver and vehicle. Siri and Maps display the information in this object to the user at appropriate times.

When configuring ride status objects, always provide values for as many properties as possible. Siri and Maps display almost all of the information that you provide to the user, so it is good to offer as many details as you can.

## Topics

### Accessing the Ride Identifier

- [rideIdentifier](inridestatus/rideidentifier.md): The unique string that you use to identify the ride.

### Specifying the Ride Status

- [phase](inridestatus/phase.md): The current status of the ride.
- [INRidePhase](inridephase.md): Constants indicating the current ride status.
- [completionStatus](inridestatus/completionstatus.md): Information about how the ride ended.

### Accessing Ride Information

- [vehicle](inridestatus/vehicle.md): The vehicle assigned to pick up the user.
- [driver](inridestatus/driver.md): The driver providing the ride.
- [rideOption](inridestatus/rideoption.md): Information about the type of ride that you are offering to the user.

### Accessing the Pickup and Drop Off Times

- [scheduledPickupTime](inridestatus/scheduledpickuptime.md): The scheduled pickup time for the user.
- [estimatedPickupDate](inridestatus/estimatedpickupdate.md): The estimated pickup time for the ride.
- [estimatedPickupEndDate](inridestatus/estimatedpickupenddate.md): The date after which the driver may stop waiting for the user.
- [estimatedDropOffDate](inridestatus/estimateddropoffdate.md): The estimated drop-off time for the ride.

### Accessing the Route Information

- [pickupLocation](inridestatus/pickuplocation.md): The starting location for the ride.
- [waypoints](inridestatus/waypoints.md): The intermediate waypoints for the journey.
- [dropOffLocation](inridestatus/dropofflocation.md): The destination of the user.

### Providing User Activity Objects

- [userActivityForCancelingInApplication](inridestatus/useractivityforcancelinginapplication.md): A user activity object for canceling the ride request.
- [additionalActionActivities](inridestatus/additionalactionactivities.md): Additional activities that the user may choose to perform while the ride request is active.

### Initializers

- [init(coder:)](inridestatus/init%28coder_%29.md)

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
- [INRideDriver](inridedriver.md): Identifying information about a driver of a ride service.
- [INRideVehicle](inridevehicle.md): A specific vehicle used by a ride-booking service.
- [INRideFareLineItem](inridefarelineitem.md): A specific type of ride-related charge.
- [INRidePartySizeOption](inridepartysizeoption.md): The price of a ride involving the specified number of people.
- [INRideCompletionStatus](inridecompletionstatus.md): Additional details about whether a ride completed successfully or someone canceled the ride.

# INRideStatus (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The status of a ride booked through a ride-booking service.

## Declaration

```objectivec
@interface INRideStatus : NSObject
```

## Mentioned In

- [Providing Live Status Updates](../sirikit/providing-live-status-updates.md)
- [Handling an Intent](../sirikit/handling-an-intent.md)

<a id="overview"></a>

## Overview

When the user books a ride or requests the status of a ride, you create an [INRideStatus](inridestatus.md) object as part of your response and fill it with the relevant information. A ride status object conveys information about the current status of a ride, such as whether the ride is ongoing, completed, or has yet to occur. This object also contains details about the ride such as the pickup location, drop-off location, and information about the driver and vehicle. Siri and Maps display the information in this object to the user at appropriate times.

When configuring ride status objects, always provide values for as many properties as possible. Siri and Maps display almost all of the information that you provide to the user, so it is good to offer as many details as you can.

## Topics

### Accessing the Ride Identifier

- [rideIdentifier](inridestatus/rideidentifier.md): The unique string that you use to identify the ride.

### Specifying the Ride Status

- [phase](inridestatus/phase.md): The current status of the ride.
- [INRidePhase](inridephase.md): Constants indicating the current ride status.
- [completionStatus](inridestatus/completionstatus.md): Information about how the ride ended.

### Accessing Ride Information

- [vehicle](inridestatus/vehicle.md): The vehicle assigned to pick up the user.
- [driver](inridestatus/driver.md): The driver providing the ride.
- [rideOption](inridestatus/rideoption.md): Information about the type of ride that you are offering to the user.

### Accessing the Pickup and Drop Off Times

- [scheduledPickupTime](inridestatus/scheduledpickuptime.md): The scheduled pickup time for the user.
- [estimatedPickupDate](inridestatus/estimatedpickupdate.md): The estimated pickup time for the ride.
- [estimatedPickupEndDate](inridestatus/estimatedpickupenddate.md): The date after which the driver may stop waiting for the user.
- [estimatedDropOffDate](inridestatus/estimateddropoffdate.md): The estimated drop-off time for the ride.

### Accessing the Route Information

- [pickupLocation](inridestatus/pickuplocation.md): The starting location for the ride.
- [waypoints](inridestatus/waypoints.md): The intermediate waypoints for the journey.
- [dropOffLocation](inridestatus/dropofflocation.md): The destination of the user.

### Providing User Activity Objects

- [userActivityForCancelingInApplication](inridestatus/useractivityforcancelinginapplication.md): A user activity object for canceling the ride request.
- [additionalActionActivities](inridestatus/additionalactionactivities.md): Additional activities that the user may choose to perform while the ride request is active.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INRideOption](inrideoption.md): Details about a type of ride offered by your ride-booking service.
- [INRideDriver](inridedriver.md): Identifying information about a driver of a ride service.
- [INRideVehicle](inridevehicle.md): A specific vehicle used by a ride-booking service.
- [INRideFareLineItem](inridefarelineitem.md): A specific type of ride-related charge.
- [INRidePartySizeOption](inridepartysizeoption.md): The price of a ride involving the specified number of people.
- [INRideCompletionStatus](inridecompletionstatus.md): Additional details about whether a ride completed successfully or someone canceled the ride.
