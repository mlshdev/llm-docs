> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrideoption](https://developer.apple.com/documentation/intents/inrideoption)

# INRideOption (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

Details about a type of ride offered by your ride-booking service.

## Declaration

```swift
class INRideOption
```

## Mentioned In

- [Generating a List of Ride Options](../sirikit/generating-a-list-of-ride-options.md)

<a id="overview"></a>

## Overview

When the user books a ride through Siri or Maps, you use [INRideOption](inrideoption.md) objects to convey information about pricing and passenger capacity for that ride. Prior to booking, Maps asks for ride option objects representing the rides that are available from your service at that moment. Siri and Maps present ride option information to the user in appropriate contexts so that the user has information about potential rides.

You create [INRideOption](inrideoption.md) objects in response to ride requests and when providing the user with a list of available rides. Always fill in as many properties of ride option objects as makes sense for that ride. Ride options let you specify pricing in several different ways, including as a range of values or as a set of line-item costs. You can also specify information about any special pricing that applies to the ride right now. After configuring the ride option, deliver it with the response object you return back to SiriKit.

## Topics

### Initializing a Ride Option

- [init(name:estimatedPickupDate:)](inrideoption/init%28name_estimatedpickupdate_%29.md): Initializes and returns a ride option object with the specified name and pickup information.
- [init(coder:)](inrideoption/init%28coder_%29.md)

### Specifying the Ride Information

- [name](inrideoption/name.md): The name of this ride option.
- [estimatedPickupDate](inrideoption/estimatedpickupdate.md): The date and time when a ride of this type could be at the user’s location.
- [disclaimerMessage](inrideoption/disclaimermessage.md): A localized disclaimer message to display to the user before confirming the ride.
- [availablePartySizeOptions](inrideoption/availablepartysizeoptions.md): An array of size options for the user to choose from.
- [availablePartySizeOptionsSelectionPrompt](inrideoption/availablepartysizeoptionsselectionprompt.md): The localized text to display for selecting party size options.

### Specifying Pricing Information

- [priceRange](inrideoption/pricerange.md): The range of prices for this ride option.
- [specialPricing](inrideoption/specialpricing.md): A user-visible string describing any special pricing considerations that apply to this ride.
- [specialPricingBadgeImage](inrideoption/specialpricingbadgeimage.md): A template image for Maps to display when special prices apply.
- [usesMeteredFare](inrideoption/usesmeteredfare-1sig1.md): A Boolean value indicating whether the price uses a metered fare instead of a fixed price.
- [fareLineItems](inrideoption/farelineitems.md): An array of price-related items that break down the costs of the ride.

### Identifying the Ride Option

- [identifier](inrideoption/identifier.md): A unique identifier for the ride option.

### Launching Your App

- [userActivityForBookingInApplication](inrideoption/useractivityforbookinginapplication.md): A user activity object that you can use to launch the app.

### Instance Properties

- [usesMeteredFare](inrideoption/usesmeteredfare-2xw1.md)

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

- [INRideStatus](inridestatus.md): The status of a ride booked through a ride-booking service.
- [INRideDriver](inridedriver.md): Identifying information about a driver of a ride service.
- [INRideVehicle](inridevehicle.md): A specific vehicle used by a ride-booking service.
- [INRideFareLineItem](inridefarelineitem.md): A specific type of ride-related charge.
- [INRidePartySizeOption](inridepartysizeoption.md): The price of a ride involving the specified number of people.
- [INRideCompletionStatus](inridecompletionstatus.md): Additional details about whether a ride completed successfully or someone canceled the ride.

# INRideOption (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

Details about a type of ride offered by your ride-booking service.

## Declaration

```objectivec
@interface INRideOption : NSObject
```

## Mentioned In

- [Generating a List of Ride Options](../sirikit/generating-a-list-of-ride-options.md)

<a id="overview"></a>

## Overview

When the user books a ride through Siri or Maps, you use [INRideOption](inrideoption.md) objects to convey information about pricing and passenger capacity for that ride. Prior to booking, Maps asks for ride option objects representing the rides that are available from your service at that moment. Siri and Maps present ride option information to the user in appropriate contexts so that the user has information about potential rides.

You create [INRideOption](inrideoption.md) objects in response to ride requests and when providing the user with a list of available rides. Always fill in as many properties of ride option objects as makes sense for that ride. Ride options let you specify pricing in several different ways, including as a range of values or as a set of line-item costs. You can also specify information about any special pricing that applies to the ride right now. After configuring the ride option, deliver it with the response object you return back to SiriKit.

## Topics

### Initializing a Ride Option

- [initWithName:estimatedPickupDate:](inrideoption/init%28name_estimatedpickupdate_%29.md): Initializes and returns a ride option object with the specified name and pickup information.
- [initWithCoder:](inrideoption/init%28coder_%29.md)

### Specifying the Ride Information

- [name](inrideoption/name.md): The name of this ride option.
- [estimatedPickupDate](inrideoption/estimatedpickupdate.md): The date and time when a ride of this type could be at the user’s location.
- [disclaimerMessage](inrideoption/disclaimermessage.md): A localized disclaimer message to display to the user before confirming the ride.
- [availablePartySizeOptions](inrideoption/availablepartysizeoptions.md): An array of size options for the user to choose from.
- [availablePartySizeOptionsSelectionPrompt](inrideoption/availablepartysizeoptionsselectionprompt.md): The localized text to display for selecting party size options.

### Specifying Pricing Information

- [priceRange](inrideoption/pricerange.md): The range of prices for this ride option.
- [specialPricing](inrideoption/specialpricing.md): A user-visible string describing any special pricing considerations that apply to this ride.
- [specialPricingBadgeImage](inrideoption/specialpricingbadgeimage.md): A template image for Maps to display when special prices apply.
- [usesMeteredFare](https://developer.apple.com/documentation/intents/inrideoption/usesmeteredfare-25g1c): A Boolean value indicating whether the price uses a metered fare instead of a fixed price.
- [fareLineItems](inrideoption/farelineitems.md): An array of price-related items that break down the costs of the ride.

### Identifying the Ride Option

- [identifier](inrideoption/identifier.md): A unique identifier for the ride option.

### Launching Your App

- [userActivityForBookingInApplication](inrideoption/useractivityforbookinginapplication.md): A user activity object that you can use to launch the app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INRideStatus](inridestatus.md): The status of a ride booked through a ride-booking service.
- [INRideDriver](inridedriver.md): Identifying information about a driver of a ride service.
- [INRideVehicle](inridevehicle.md): A specific vehicle used by a ride-booking service.
- [INRideFareLineItem](inridefarelineitem.md): A specific type of ride-related charge.
- [INRidePartySizeOption](inridepartysizeoption.md): The price of a ride involving the specified number of people.
- [INRideCompletionStatus](inridecompletionstatus.md): Additional details about whether a ride completed successfully or someone canceled the ride.
