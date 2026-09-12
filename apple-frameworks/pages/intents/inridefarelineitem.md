> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridefarelineitem](https://developer.apple.com/documentation/intents/inridefarelineitem)

# INRideFareLineItem (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

A specific type of ride-related charge.

## Declaration

```swift
class INRideFareLineItem
```

<a id="overview"></a>

## Overview

Create one or more [INRideFareLineItem](inridefarelineitem.md) objects when you need to break down the cost of a ride using different pricing rules. For example, one line item might specify the base charge of the ride and a second line item might specify the per-mile charge. When displaying the ride information to the user, Siri and Maps display the line-item information.

The inclusion of line items in an [INRideOption](inrideoption.md) object is optional but recommended when the cost of the ride involves separate charges. When appropriate, create one or more [INRideFareLineItem](inridefarelineitem.md) objects and attach them to your ride option object. Siri and Maps use the currency code you specify to apply the appropriate currency designator to the price information.

## Topics

### Initializing a Ride Fare Object

- [init(title:price:currencyCode:)](inridefarelineitem/init%28title_price_currencycode_%29.md): Initializes the line item object with the specified title and pricing information.

### Getting the Line Item Information

- [title](inridefarelineitem/title.md): The localized string containing a description of the charge.
- [price](inridefarelineitem/price.md): The cost value of the line item.
- [currencyCode](inridefarelineitem/currencycode.md): The ISO 4217 currency code that applies to the price information.

### Initializers

- [init(coder:)](inridefarelineitem/init%28coder_%29.md)

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
- [INRidePartySizeOption](inridepartysizeoption.md): The price of a ride involving the specified number of people.
- [INRideCompletionStatus](inridecompletionstatus.md): Additional details about whether a ride completed successfully or someone canceled the ride.

# INRideFareLineItem (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

A specific type of ride-related charge.

## Declaration

```objectivec
@interface INRideFareLineItem : NSObject
```

<a id="overview"></a>

## Overview

Create one or more [INRideFareLineItem](inridefarelineitem.md) objects when you need to break down the cost of a ride using different pricing rules. For example, one line item might specify the base charge of the ride and a second line item might specify the per-mile charge. When displaying the ride information to the user, Siri and Maps display the line-item information.

The inclusion of line items in an [INRideOption](inrideoption.md) object is optional but recommended when the cost of the ride involves separate charges. When appropriate, create one or more [INRideFareLineItem](inridefarelineitem.md) objects and attach them to your ride option object. Siri and Maps use the currency code you specify to apply the appropriate currency designator to the price information.

## Topics

### Initializing a Ride Fare Object

- [initWithTitle:price:currencyCode:](inridefarelineitem/init%28title_price_currencycode_%29.md): Initializes the line item object with the specified title and pricing information.

### Getting the Line Item Information

- [title](inridefarelineitem/title.md): The localized string containing a description of the charge.
- [price](inridefarelineitem/price.md): The cost value of the line item.
- [currencyCode](inridefarelineitem/currencycode.md): The ISO 4217 currency code that applies to the price information.

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
- [INRidePartySizeOption](inridepartysizeoption.md): The price of a ride involving the specified number of people.
- [INRideCompletionStatus](inridecompletionstatus.md): Additional details about whether a ride completed successfully or someone canceled the ride.
