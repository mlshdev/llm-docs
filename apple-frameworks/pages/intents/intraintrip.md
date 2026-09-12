> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intraintrip](https://developer.apple.com/documentation/intents/intraintrip)

# INTrainTrip (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a train trip.

## Declaration

```swift
class INTrainTrip
```

## Topics

### Creating a Train Trip

- [init(provider:trainName:trainNumber:tripDuration:departureStationLocation:departurePlatform:arrivalStationLocation:arrivalPlatform:)](intraintrip/init%28provider_trainname_trainnumber_tripduration_departurestationlocation_departureplatform_arrivalstationlocation_arrivalplatform_%29.md): Creates a new train trip with the specified contents and attributes.

### Getting the Train Trip Information

- [provider](intraintrip/provider.md): The name for the train company.
- [trainName](intraintrip/trainname.md): The name of the train.
- [trainNumber](intraintrip/trainnumber.md): The unique identifier for the train.
- [tripDuration](intraintrip/tripduration.md): The date and time range for the departure and arrival of the train.
- [departureStationLocation](intraintrip/departurestationlocation.md): The station from which the train departs.
- [departurePlatform](intraintrip/departureplatform.md): The platform from which the train departs.
- [arrivalStationLocation](intraintrip/arrivalstationlocation.md): The station at which the train arrives.
- [arrivalPlatform](intraintrip/arrivalplatform.md): The platform at which the train arrives.

### Initializers

- [init(coder:)](intraintrip/init%28coder_%29.md)

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

### Getting the Train Reservation Information

- [reservedSeat](intrainreservation/reservedseat.md): The seat reserved for the user.
- [trainTrip](intrainreservation/traintrip.md): An object containing the detailed information about the train trip.

# INTrainTrip (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a train trip.

## Declaration

```objectivec
@interface INTrainTrip : NSObject
```

## Topics

### Creating a Train Trip

- [initWithProvider:trainName:trainNumber:tripDuration:departureStationLocation:departurePlatform:arrivalStationLocation:arrivalPlatform:](intraintrip/init%28provider_trainname_trainnumber_tripduration_departurestationlocation_departureplatform_arrivalstationlocation_arrivalplatform_%29.md): Creates a new train trip with the specified contents and attributes.

### Getting the Train Trip Information

- [provider](intraintrip/provider.md): The name for the train company.
- [trainName](intraintrip/trainname.md): The name of the train.
- [trainNumber](intraintrip/trainnumber.md): The unique identifier for the train.
- [tripDuration](intraintrip/tripduration.md): The date and time range for the departure and arrival of the train.
- [departureStationLocation](intraintrip/departurestationlocation.md): The station from which the train departs.
- [departurePlatform](intraintrip/departureplatform.md): The platform from which the train departs.
- [arrivalStationLocation](intraintrip/arrivalstationlocation.md): The station at which the train arrives.
- [arrivalPlatform](intraintrip/arrivalplatform.md): The platform at which the train arrives.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Getting the Train Reservation Information

- [reservedSeat](intrainreservation/reservedseat.md): The seat reserved for the user.
- [trainTrip](intrainreservation/traintrip.md): An object containing the detailed information about the train trip.
