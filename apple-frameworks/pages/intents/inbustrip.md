> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbustrip](https://developer.apple.com/documentation/intents/inbustrip)

# INBusTrip (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Information describing a bus trip.

## Declaration

```swift
class INBusTrip
```

## Topics

### Creating a Bus Trip

- [init(provider:busName:busNumber:tripDuration:departureBusStopLocation:departurePlatform:arrivalBusStopLocation:arrivalPlatform:)](inbustrip/init%28provider_busname_busnumber_tripduration_departurebusstoplocation_departureplatform_arrivalbusstoplocation_arrivalplatform_%29.md): Creates a bus trip with the specified contents and attributes.

### Getting the Bus Trip Information

- [arrivalBusStopLocation](inbustrip/arrivalbusstoplocation.md): The bus stop where the trip ends.
- [arrivalPlatform](inbustrip/arrivalplatform.md): The platform at which the bus arrives.
- [busName](inbustrip/busname.md): The name of the bus.
- [busNumber](inbustrip/busnumber.md): The number of the bus or route.
- [departureBusStopLocation](inbustrip/departurebusstoplocation.md): The bus stop where the bus trip starts.
- [departurePlatform](inbustrip/departureplatform.md): The platform from which the bus departs.
- [provider](inbustrip/provider.md): The business or other entity operating the bus.
- [tripDuration](inbustrip/tripduration.md): The timespan of the bus trip from departure to arrival.

### Initializers

- [init(coder:)](inbustrip/init%28coder_%29.md)

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

### Getting the Bus Trip Reservation Information

- [busTrip](inbusreservation/bustrip.md): Information describing a bus trip.
- [reservedSeat](inbusreservation/reservedseat.md): Seat information for the bus reservation.

# INBusTrip (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Information describing a bus trip.

## Declaration

```objectivec
@interface INBusTrip : NSObject
```

## Topics

### Creating a Bus Trip

- [initWithProvider:busName:busNumber:tripDuration:departureBusStopLocation:departurePlatform:arrivalBusStopLocation:arrivalPlatform:](inbustrip/init%28provider_busname_busnumber_tripduration_departurebusstoplocation_departureplatform_arrivalbusstoplocation_arrivalplatform_%29.md): Creates a bus trip with the specified contents and attributes.

### Getting the Bus Trip Information

- [arrivalBusStopLocation](inbustrip/arrivalbusstoplocation.md): The bus stop where the trip ends.
- [arrivalPlatform](inbustrip/arrivalplatform.md): The platform at which the bus arrives.
- [busName](inbustrip/busname.md): The name of the bus.
- [busNumber](inbustrip/busnumber.md): The number of the bus or route.
- [departureBusStopLocation](inbustrip/departurebusstoplocation.md): The bus stop where the bus trip starts.
- [departurePlatform](inbustrip/departureplatform.md): The platform from which the bus departs.
- [provider](inbustrip/provider.md): The business or other entity operating the bus.
- [tripDuration](inbustrip/tripduration.md): The timespan of the bus trip from departure to arrival.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Getting the Bus Trip Reservation Information

- [busTrip](inbusreservation/bustrip.md): Information describing a bus trip.
- [reservedSeat](inbusreservation/reservedseat.md): Seat information for the bus reservation.
