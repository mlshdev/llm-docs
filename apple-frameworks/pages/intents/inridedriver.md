> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridedriver](https://developer.apple.com/documentation/intents/inridedriver)

# INRideDriver (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Identifying information about a driver of a ride service.

## Declaration

```swift
class INRideDriver
```

<a id="overview"></a>

## Overview

An [INRideDriver](inridedriver.md) object encapsulates information about a driver associated with your ride service. This object stores basic information about the driver, including the driver’s name, picture, and phone number. You create an [INRideDriver](inridedriver.md) object and assign it to the [driver](inridestatus/driver.md) property of a [INRideStatus](inridestatus.md) object when the user books a ride or when you update the status of an existing ride. SiriKit displays the driver information to the user at appropriate times.

This class is a subclass of [INPerson](inperson.md) and contains properties that are relevant only for ride-booking services. For additional driver properties, see [INPerson](inperson.md).

## Topics

### Initializing a Ride Driver Object

- [init(phoneNumber:nameComponents:displayName:image:rating:)](inridedriver/init%28phonenumber_namecomponents_displayname_image_rating_%29.md): Initializes and returns a ride driver object using a set of name components and other driver information.
- [init(handle:displayName:image:rating:phoneNumber:)](inridedriver/init%28handle_displayname_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a display name and other driver information.
- [init(handle:nameComponents:image:rating:phoneNumber:)](inridedriver/init%28handle_namecomponents_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a set of name components and other driver information
- [init(personHandle:nameComponents:displayName:image:rating:phoneNumber:)](inridedriver/init%28personhandle_namecomponents_displayname_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a set of name components and other driver information.

### Getting the Driver Information

- [rating](inridedriver/rating.md): The driver’s current rating.
- [phoneNumber](inridedriver/phonenumber.md): The driver’s phone number.

## Relationships

### Inherits From

- [INPerson](inperson.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INSpeakable](inspeakable.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INRideOption](inrideoption.md): Details about a type of ride offered by your ride-booking service.
- [INRideStatus](inridestatus.md): The status of a ride booked through a ride-booking service.
- [INRideVehicle](inridevehicle.md): A specific vehicle used by a ride-booking service.
- [INRideFareLineItem](inridefarelineitem.md): A specific type of ride-related charge.
- [INRidePartySizeOption](inridepartysizeoption.md): The price of a ride involving the specified number of people.
- [INRideCompletionStatus](inridecompletionstatus.md): Additional details about whether a ride completed successfully or someone canceled the ride.

# INRideDriver (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Identifying information about a driver of a ride service.

## Declaration

```objectivec
@interface INRideDriver : INPerson
```

<a id="overview"></a>

## Overview

An [INRideDriver](inridedriver.md) object encapsulates information about a driver associated with your ride service. This object stores basic information about the driver, including the driver’s name, picture, and phone number. You create an [INRideDriver](inridedriver.md) object and assign it to the [driver](inridestatus/driver.md) property of a [INRideStatus](inridestatus.md) object when the user books a ride or when you update the status of an existing ride. SiriKit displays the driver information to the user at appropriate times.

This class is a subclass of [INPerson](inperson.md) and contains properties that are relevant only for ride-booking services. For additional driver properties, see [INPerson](inperson.md).

## Topics

### Initializing a Ride Driver Object

- [initWithPhoneNumber:nameComponents:displayName:image:rating:](inridedriver/init%28phonenumber_namecomponents_displayname_image_rating_%29.md): Initializes and returns a ride driver object using a set of name components and other driver information.
- [initWithHandle:displayName:image:rating:phoneNumber:](inridedriver/init%28handle_displayname_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a display name and other driver information.
- [initWithHandle:nameComponents:image:rating:phoneNumber:](inridedriver/init%28handle_namecomponents_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a set of name components and other driver information
- [initWithPersonHandle:nameComponents:displayName:image:rating:phoneNumber:](inridedriver/init%28personhandle_namecomponents_displayname_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a set of name components and other driver information.

### Getting the Driver Information

- [rating](inridedriver/rating.md): The driver’s current rating.
- [phoneNumber](inridedriver/phonenumber.md): The driver’s phone number.

## Relationships

### Inherits From

- [INPerson](inperson.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INRideOption](inrideoption.md): Details about a type of ride offered by your ride-booking service.
- [INRideStatus](inridestatus.md): The status of a ride booked through a ride-booking service.
- [INRideVehicle](inridevehicle.md): A specific vehicle used by a ride-booking service.
- [INRideFareLineItem](inridefarelineitem.md): A specific type of ride-related charge.
- [INRidePartySizeOption](inridepartysizeoption.md): The price of a ride involving the specified number of people.
- [INRideCompletionStatus](inridecompletionstatus.md): Additional details about whether a ride completed successfully or someone canceled the ride.
