> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridepartysizeoption](https://developer.apple.com/documentation/intents/inridepartysizeoption)

# INRidePartySizeOption (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The price of a ride involving the specified number of people.

## Declaration

```swift
class INRidePartySizeOption
```

## Mentioned In

- [Generating a List of Ride Options](../sirikit/generating-a-list-of-ride-options.md)

<a id="overview"></a>

## Overview

An [INRidePartySizeOption](inridepartysizeoption.md) object describes many passengers and the special pricing that applies to a party of that size. When configuring a [INRideOption](inrideoption.md) object, you create one or more instances of this class to specify pricing for the user’s party. Present this information to the user along with the other ride option information.

## Topics

### Initializing a Party Size Object

- [init(partySizeRange:sizeDescription:priceRange:)](inridepartysizeoption/init%28partysizerange_sizedescription_pricerange_%29.md): Initializes the object with the specified party size and price ranges.

### Getting the Party Size Information

- [partySizeRange](inridepartysizeoption/partysizerange.md): The number of people in the party, specified as a minimum and maximum value.
- [sizeDescription](inridepartysizeoption/sizedescription.md): The user-visible description of the party size.
- [priceRange](inridepartysizeoption/pricerange.md): The pricing information for parties of the specified size.

### Initializers

- [init(coder:)](inridepartysizeoption/init%28coder_%29.md)

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
- [INRideVehicle](inridevehicle.md): A specific vehicle used by a ride-booking service.
- [INRideFareLineItem](inridefarelineitem.md): A specific type of ride-related charge.
- [INRideCompletionStatus](inridecompletionstatus.md): Additional details about whether a ride completed successfully or someone canceled the ride.

# INRidePartySizeOption (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The price of a ride involving the specified number of people.

## Declaration

```objectivec
@interface INRidePartySizeOption : NSObject
```

## Mentioned In

- [Generating a List of Ride Options](../sirikit/generating-a-list-of-ride-options.md)

<a id="overview"></a>

## Overview

An [INRidePartySizeOption](inridepartysizeoption.md) object describes many passengers and the special pricing that applies to a party of that size. When configuring a [INRideOption](inrideoption.md) object, you create one or more instances of this class to specify pricing for the user’s party. Present this information to the user along with the other ride option information.

## Topics

### Initializing a Party Size Object

- [initWithPartySizeRange:sizeDescription:priceRange:](inridepartysizeoption/init%28partysizerange_sizedescription_pricerange_%29.md): Initializes the object with the specified party size and price ranges.

### Getting the Party Size Information

- [partySizeRange](inridepartysizeoption/partysizerange.md): The number of people in the party, specified as a minimum and maximum value.
- [sizeDescription](inridepartysizeoption/sizedescription.md): The user-visible description of the party size.
- [priceRange](inridepartysizeoption/pricerange.md): The pricing information for parties of the specified size.

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
- [INRideVehicle](inridevehicle.md): A specific vehicle used by a ride-booking service.
- [INRideFareLineItem](inridefarelineitem.md): A specific type of ride-related charge.
- [INRideCompletionStatus](inridecompletionstatus.md): Additional details about whether a ride completed successfully or someone canceled the ride.
