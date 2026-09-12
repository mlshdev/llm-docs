> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutedetail](https://developer.apple.com/documentation/carplay/cproutedetail)

# CPRouteDetail (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
@MainActor class CPRouteDetail
```

<a id="overview"></a>

## Overview

Alongside standard routing details. This includes environmental data, vehicle consumption metrics, costs, and custom information specific to your app’s routing capabilities.

Route information appears in the route selection interface and during active navigation, helping users make informed decisions about their journey. The system automatically formats and displays this information using appropriate styling and placement.

Use route information to differentiate between routing options and provide transparency about journey characteristics. For example, display toll costs to help users choose between paid expressways and free alternatives, or show battery consumption for electric vehicles to ensure destination reachability.

> **Note**

> Route information is supplementary to core routing details (distance, time, maneuvers). The system may choose to display some or all information based on available space and user context.

## Topics

### Initializers

- [init(HOV:)](cproutedetail/init%28hov_%29-hin7.md)
- [init(batteryLevel:)](cproutedetail/init%28batterylevel_%29.md): Creates additional route information for battery percentage.
- [init(carbonFootprint:)](cproutedetail/init%28carbonfootprint_%29.md): Creates additional route information for carbon footprint.
- [init(coder:)](cproutedetail/init%28coder_%29.md)
- [init(ecoScore:)](cproutedetail/init%28ecoscore_%29.md): Creates additional route information for an eco-score rating.
- [init(emissions:)](cproutedetail/init%28emissions_%29.md): Creates additional route information for emissions data.
- [init(fuelEnergy:)](cproutedetail/init%28fuelenergy_%29.md): Creates additional route information for fuel energy content.
- [init(fuelLevel:)](cproutedetail/init%28fuellevel_%29.md): Creates additional route information for a fuel level.
- [init(fuelMass:)](cproutedetail/init%28fuelmass_%29.md): Creates additional route information for fuel mass.
- [init(hov:)](cproutedetail/init%28hov_%29-6ivii.md): Creates additional route information for High-Occupancy Vehicle (HOV) lane access.
- [init(info:)](cproutedetail/init%28info_%29.md): Creates additional route information with a freeform informational string.
- [init(kilowattHours:)](cproutedetail/init%28kilowatthours_%29.md): Creates additional route information for battery energy in kilowatt-hours.
- [init(parking:)](cproutedetail/init%28parking_%29.md): Creates additional route information describing parking at the destination.
- [init(rating:)](cproutedetail/init%28rating_%29.md): Creates additional route information for a route rating.
- [init(symbolName:value:)](cproutedetail/init%28symbolname_value_%29.md): Creates custom additional route information with a symbol name and value.
- [init(tollAmount:locale:)](cproutedetail/init%28tollamount_locale_%29.md): Creates additional route information for a toll amount.
- [init(trafficLights:)](cproutedetail/init%28trafficlights_%29.md): Creates additional route information for the number of traffic lights along the route.
- [init(warning:)](cproutedetail/init%28warning_%29.md): Creates additional route information for route warnings.

### Instance Properties

- [symbolTintColor](cproutedetail/symboltintcolor.md): The symbolTintColor to apply to the label.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# CPRouteDetail (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```objectivec
@interface CPRouteDetail : NSObject
```

<a id="overview"></a>

## Overview

Alongside standard routing details. This includes environmental data, vehicle consumption metrics, costs, and custom information specific to your app’s routing capabilities.

Route information appears in the route selection interface and during active navigation, helping users make informed decisions about their journey. The system automatically formats and displays this information using appropriate styling and placement.

Use route information to differentiate between routing options and provide transparency about journey characteristics. For example, display toll costs to help users choose between paid expressways and free alternatives, or show battery consumption for electric vehicles to ensure destination reachability.

> **Note**

> Route information is supplementary to core routing details (distance, time, maneuvers). The system may choose to display some or all information based on available space and user context.

## Topics

### Instance Properties

- [symbolTintColor](cproutedetail/symboltintcolor.md): The symbolTintColor to apply to the label.

### Type Methods

- [routeDetailWithBatteryLevel:](cproutedetail/init%28batterylevel_%29.md): Creates additional route information for battery percentage.
- [routeDetailWithCarbonFootprint:](cproutedetail/init%28carbonfootprint_%29.md): Creates additional route information for carbon footprint.
- [routeDetailWithEcoScore:](cproutedetail/init%28ecoscore_%29.md): Creates additional route information for an eco-score rating.
- [routeDetailWithEmissions:](cproutedetail/init%28emissions_%29.md): Creates additional route information for emissions data.
- [routeDetailWithFuelEnergy:](cproutedetail/init%28fuelenergy_%29.md): Creates additional route information for fuel energy content.
- [routeDetailWithFuelLevel:](cproutedetail/init%28fuellevel_%29.md): Creates additional route information for a fuel level.
- [routeDetailWithFuelMass:](cproutedetail/init%28fuelmass_%29.md): Creates additional route information for fuel mass.
- [routeDetailWithHOV:](cproutedetail/init%28hov_%29-6ivii.md): Creates additional route information for High-Occupancy Vehicle (HOV) lane access.
- [routeDetailWithInfo:](cproutedetail/init%28info_%29.md): Creates additional route information with a freeform informational string.
- [routeDetailWithKilowattHours:](cproutedetail/init%28kilowatthours_%29.md): Creates additional route information for battery energy in kilowatt-hours.
- [routeDetailWithParking:](cproutedetail/init%28parking_%29.md): Creates additional route information describing parking at the destination.
- [routeDetailWithRating:](cproutedetail/init%28rating_%29.md): Creates additional route information for a route rating.
- [routeDetailWithSymbolName:value:](cproutedetail/init%28symbolname_value_%29.md): Creates custom additional route information with a symbol name and value.
- [routeDetailWithTollAmount:locale:](cproutedetail/init%28tollamount_locale_%29.md): Creates additional route information for a toll amount.
- [routeDetailWithTrafficLights:](cproutedetail/init%28trafficlights_%29.md): Creates additional route information for the number of traffic lights along the route.
- [routeDetailWithWarning:](cproutedetail/init%28warning_%29.md): Creates additional route information for route warnings.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
