> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incar](https://developer.apple.com/documentation/intents/incar)

# INCar (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A specific electric vehicle that Maps uses during route planning and navigation.

## Declaration

```swift
class INCar
```

<a id="overview"></a>

## Overview

An `INCar` object provides information about a specific electric vehicle that belongs to the user.

When planning a route, Maps may use an [INListCarsIntent](inlistcarsintent.md) intent to ask your app to provide a list of the user’s electric vehicles. In your handler, determine which of the user’s vehicles respond to [INGetCarPowerLevelStatusIntent](ingetcarpowerlevelstatusintent.md), and create an instance of `INCar` for each. You then assign these instances to the [cars](inlistcarsintentresponse/cars.md) property of your response object. When navigation begins using one of these vehicles, Maps regularly requests updates of the power level status using `INGetCarPowerLevelStatusIntent`.

For more information on handling `INListCarsIntent`, see [INListCarsIntentHandling](inlistcarsintenthandling.md).

## Topics

### Creating a Car

- [init(carIdentifier:displayName:year:make:model:color:headUnit:supportedChargingConnectors:)](incar/init%28caridentifier_displayname_year_make_model_color_headunit_supportedchargingconnectors_%29.md): Creates a car object with the specified attributes, head unit, and supported charging connectors.

### Identifying the Car

- [carIdentifier](incar/caridentifier.md): The electric vehicle’s unique identifier.
- [displayName](incar/displayname.md): The electric vehicle’s user-defined display name.

### Getting the Car’s Attributes

These attributes are all user-facing. Maps displays them when presenting information about an electric vehicle.

- [make](incar/make.md): The electric vehicle’s manufacturer.
- [model](incar/model.md): The manufacturer’s model name for the electric vehicle.
- [color](incar/color.md): The electric vehicle’s color.
- [year](incar/year.md): The electric vehicle’s year of manufacture.

### Getting the Car’s Head Unit

- [headUnit](incar/headunit-swift.property.md): The Bluetooth and iAP2 identifiers of the electric vehicle’s physical head unit.
- [INCar.HeadUnit](incar/headunit-swift.class.md): An object that contains the Bluetooth and iAP2 identifiers of the vehicle’s physical head unit.

### Getting the Car’s Supported Charging Connectors

- [supportedChargingConnectors](incar/supportedchargingconnectors.md): The charging connectors that the electric vehicle supports.
- [INCar.ChargingConnectorType](incar/chargingconnectortype.md): Constants that describe the available charging connector types.

### Providing a Charging Connector’s Maximum Power

- [maximumPower(for:)](incar/maximumpower%28for_%29.md): Gets the maximum power for a specific type of charging connector.
- [setMaximumPower(\_:for:)](incar/setmaximumpower%28__for_%29.md): Sets the maximum power for a specific type of charging connector.

### Initializers

- [init(coder:)](incar/init%28coder_%29.md)

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

### Providing a List of Cars

- [cars](inlistcarsintentresponse/cars.md): An array of the user’s electric vehicles.

# INCar (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A specific electric vehicle that Maps uses during route planning and navigation.

## Declaration

```objectivec
@interface INCar : NSObject
```

<a id="overview"></a>

## Overview

An `INCar` object provides information about a specific electric vehicle that belongs to the user.

When planning a route, Maps may use an [INListCarsIntent](inlistcarsintent.md) intent to ask your app to provide a list of the user’s electric vehicles. In your handler, determine which of the user’s vehicles respond to [INGetCarPowerLevelStatusIntent](ingetcarpowerlevelstatusintent.md), and create an instance of `INCar` for each. You then assign these instances to the [cars](inlistcarsintentresponse/cars.md) property of your response object. When navigation begins using one of these vehicles, Maps regularly requests updates of the power level status using `INGetCarPowerLevelStatusIntent`.

For more information on handling `INListCarsIntent`, see [INListCarsIntentHandling](inlistcarsintenthandling.md).

## Topics

### Creating a Car

- [initWithCarIdentifier:displayName:year:make:model:color:headUnit:supportedChargingConnectors:](incar/init%28caridentifier_displayname_year_make_model_color_headunit_supportedchargingconnectors_%29.md): Creates a car object with the specified attributes, head unit, and supported charging connectors.

### Identifying the Car

- [carIdentifier](incar/caridentifier.md): The electric vehicle’s unique identifier.
- [displayName](incar/displayname.md): The electric vehicle’s user-defined display name.

### Getting the Car’s Attributes

These attributes are all user-facing. Maps displays them when presenting information about an electric vehicle.

- [make](incar/make.md): The electric vehicle’s manufacturer.
- [model](incar/model.md): The manufacturer’s model name for the electric vehicle.
- [color](incar/color.md): The electric vehicle’s color.
- [year](incar/year.md): The electric vehicle’s year of manufacture.

### Getting the Car’s Head Unit

- [headUnit](incar/headunit-swift.property.md): The Bluetooth and iAP2 identifiers of the electric vehicle’s physical head unit.
- [INCarHeadUnit](incar/headunit-swift.class.md): An object that contains the Bluetooth and iAP2 identifiers of the vehicle’s physical head unit.

### Getting the Car’s Supported Charging Connectors

- [supportedChargingConnectors](incar/supportedchargingconnectors.md): The charging connectors that the electric vehicle supports.
- [INCarChargingConnectorType](incar/chargingconnectortype.md): Constants that describe the available charging connector types.

### Providing a Charging Connector’s Maximum Power

- [maximumPowerForChargingConnectorType:](incar/maximumpower%28for_%29.md): Gets the maximum power for a specific type of charging connector.
- [setMaximumPower:forChargingConnectorType:](incar/setmaximumpower%28__for_%29.md): Sets the maximum power for a specific type of charging connector.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Providing a List of Cars

- [cars](inlistcarsintentresponse/cars.md): An array of the user’s electric vehicles.
