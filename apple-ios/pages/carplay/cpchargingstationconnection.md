> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpchargingstationconnection

# CPChargingStationConnection (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Details about the equipment at an electric vehicle charging station.

## Declaration

```swift
class CPChargingStationConnection
```

<a id="overview"></a>

## Overview

A `CPChargingStationConnection` object stores information an electric vehicle owner needs to know about a nearby charging station. This type specifies the kind of charging connector the station supports and the available voltage and power levels. Navigation apps display this information in a scrolling panel on top of their map content.

Instantiate this type and specify it with the rest of the panel content when initializing your [CPMapPanel](cpmappanel.md) object. This type doesn’t support direct interactions, but you can add buttons to your map panel to perform any required actions. If the charging station supports multiple charging configurations, you can create multiple instances of this type for display in your map panel.

> **Note**

> When displaying charging station connection details, also display configurations the current vehicle supports, if known.

## Topics

### Creating a charging station connection

- [init(connector:voltage:power:)](cpchargingstationconnection/init%28connector_voltage_power_%29.md): Creates a charging station connection object with information about a specific charging configuration.
- [init(coder:)](cpchargingstationconnection/init%28coder_%29.md)

### Getting the connector information

- [connector](cpchargingstationconnection/connector-swift.property.md): The type of connector the station provides for vehicles.
- [voltage](cpchargingstationconnection/voltage.md): The supported voltage level at the charging station.
- [power](cpchargingstationconnection/power.md): The supported power level at the charging station.
- [CPChargingStationConnection.Connector](cpchargingstationconnection/connector-swift.enum.md): Constants for the connector types available at charging stations.

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

## See Also

### Maps

- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPMapButton](cpmapbutton.md): A button that represents an action that a map template displays on the CarPlay screen.
- [CPMapPanel](cpmappanel.md): An overlay for a custom map interface that shows navigation-related instructions or information over a portion of the map.
- [CPMapPanelSection](cpmappanelsection.md): A single section of a map panel that you fill with a title and one or more items.
- [CPMapPanelItem](cpmappanelitem.md): A type that manages the waypoint, route, trip, and other information you display in a map panel.
- [CPMapPanelButtonConfiguration](cpmappanelbuttonconfiguration.md): A type that manages the action buttons and travel estimates in a map panel.

# CPChargingStationConnection (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Details about the equipment at an electric vehicle charging station.

## Declaration

```objectivec
@interface CPChargingStationConnection : NSObject
```

<a id="overview"></a>

## Overview

A `CPChargingStationConnection` object stores information an electric vehicle owner needs to know about a nearby charging station. This type specifies the kind of charging connector the station supports and the available voltage and power levels. Navigation apps display this information in a scrolling panel on top of their map content.

Instantiate this type and specify it with the rest of the panel content when initializing your [CPMapPanel](cpmappanel.md) object. This type doesn’t support direct interactions, but you can add buttons to your map panel to perform any required actions. If the charging station supports multiple charging configurations, you can create multiple instances of this type for display in your map panel.

> **Note**

> When displaying charging station connection details, also display configurations the current vehicle supports, if known.

## Topics

### Creating a charging station connection

- [initWithConnector:voltage:power:](cpchargingstationconnection/init%28connector_voltage_power_%29.md): Creates a charging station connection object with information about a specific charging configuration.

### Getting the connector information

- [connector](cpchargingstationconnection/connector-swift.property.md): The type of connector the station provides for vehicles.
- [voltage](cpchargingstationconnection/voltage.md): The supported voltage level at the charging station.
- [power](cpchargingstationconnection/power.md): The supported power level at the charging station.
- [CPChargingStationConnectionConnector](cpchargingstationconnection/connector-swift.enum.md): Constants for the connector types available at charging stations.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Maps

- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPMapButton](cpmapbutton.md): A button that represents an action that a map template displays on the CarPlay screen.
- [CPMapPanel](cpmappanel.md): An overlay for a custom map interface that shows navigation-related instructions or information over a portion of the map.
- [CPMapPanelSection](cpmappanelsection.md): A single section of a map panel that you fill with a title and one or more items.
- [CPMapPanelItem](cpmappanelitem.md): A type that manages the waypoint, route, trip, and other information you display in a map panel.
- [CPMapPanelButtonConfiguration](cpmappanelbuttonconfiguration.md): A type that manages the action buttons and travel estimates in a map panel.
