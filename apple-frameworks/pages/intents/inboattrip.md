> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inboattrip](https://developer.apple.com/documentation/intents/inboattrip)

# INBoatTrip (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

The information that describes a boat trip.

## Declaration

```swift
class INBoatTrip
```

## Topics

### Creating a Boat Trip

- [init(provider:boatName:boatNumber:tripDuration:departureBoatTerminalLocation:arrivalBoatTerminalLocation:)](inboattrip/init%28provider_boatname_boatnumber_tripduration_departureboatterminallocation_arrivalboatterminallocation_%29.md): Creates a boat trip with the specified contents and attributes.

### Getting the Boat Trip Information

- [provider](inboattrip/provider.md): The operator of the boat line.
- [boatName](inboattrip/boatname.md): The name of the boat.
- [boatNumber](inboattrip/boatnumber.md): The number associated with the boat.
- [tripDuration](inboattrip/tripduration.md): The timespan of the boat trip from departure to arrival.
- [departureBoatTerminalLocation](inboattrip/departureboatterminallocation.md): The place where the boat trip starts.
- [arrivalBoatTerminalLocation](inboattrip/arrivalboatterminallocation.md): The place where the boat trip ends.

### Initializers

- [init(coder:)](inboattrip/init%28coder_%29.md)

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

### Getting the Boat Reservation Information

- [boatTrip](inboatreservation/boattrip.md): Information describing a voyage.
- [reservedSeat](inboatreservation/reservedseat.md): The passenger’s seat on a boat reservation.

# INBoatTrip (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

The information that describes a boat trip.

## Declaration

```objectivec
@interface INBoatTrip : NSObject
```

## Topics

### Creating a Boat Trip

- [initWithProvider:boatName:boatNumber:tripDuration:departureBoatTerminalLocation:arrivalBoatTerminalLocation:](inboattrip/init%28provider_boatname_boatnumber_tripduration_departureboatterminallocation_arrivalboatterminallocation_%29.md): Creates a boat trip with the specified contents and attributes.

### Getting the Boat Trip Information

- [provider](inboattrip/provider.md): The operator of the boat line.
- [boatName](inboattrip/boatname.md): The name of the boat.
- [boatNumber](inboattrip/boatnumber.md): The number associated with the boat.
- [tripDuration](inboattrip/tripduration.md): The timespan of the boat trip from departure to arrival.
- [departureBoatTerminalLocation](inboattrip/departureboatterminallocation.md): The place where the boat trip starts.
- [arrivalBoatTerminalLocation](inboattrip/arrivalboatterminallocation.md): The place where the boat trip ends.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Getting the Boat Reservation Information

- [boatTrip](inboatreservation/boattrip.md): Information describing a voyage.
- [reservedSeat](inboatreservation/reservedseat.md): The passenger’s seat on a boat reservation.
