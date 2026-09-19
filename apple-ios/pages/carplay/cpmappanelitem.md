> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanelitem

# CPMapPanelItem (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A type that manages the waypoint, route, trip, and other information you display in a map panel.

## Declaration

```swift
class CPMapPanelItem
```

<a id="overview"></a>

## Overview

A `CPMapPanelItem` object stores navigation-related information and manages interactions with that information. When creating a [CPMapPanel](cpmappanel.md) to display over your custom map, configure it with one or more items with the information you want to display. Use items to display information about:

Trip details for a particular journey Travel estimates for a trip Route choices between a start and end point Route-related details such as costs and consumption metrics Charging station connection details Navigation waypoints

Create one or more `CPMapPanelItem` objects and add them to a [CPMapPanelSection](cpmappanelsection.md). You can add multiple items to a section and each item can contain different information. For example, you might include one item with the trip details and additional items to present route-specific options. Provide a handler with your item if you want to respond when someone taps or selects the item.

Each type of item displays different information from the map panel interface. For example, an item you initialize with a [CPTrip](cptrip.md) object displays the trip’s destination and origin plus the number of route choices. When configuring a section, you might include multiple items of different types to present a complete view of the trip.

## Topics

### Initializers

- [init(chargingStationConnection:handler:)](cpmappanelitem/init%28chargingstationconnection_handler_%29.md): Creates a map panel item with charging connection details.
- [init(mapTemplateWaypoint:image:handler:)](cpmappanelitem/init%28maptemplatewaypoint_image_handler_%29.md): Creates a map panel item with waypoint information.
- [init(routeChoice:handler:)](cpmappanelitem/init%28routechoice_handler_%29.md): Creates a map panel item with one of the route choices available for a trip.
- [init(routeDetails:handler:)](cpmappanelitem/init%28routedetails_handler_%29.md): Creates a map panel item with route details.
- [init(travelEstimates:handler:)](cpmappanelitem/init%28travelestimates_handler_%29.md): Creates a map panel item with travel estimate information.
- [init(trip:handler:)](cpmappanelitem/init%28trip_handler_%29.md): Creates a map panel item with trip-related details.

## Relationships

### Inherits From

- [CPPanelItem](cppanelitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

# CPMapPanelItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A type that manages the waypoint, route, trip, and other information you display in a map panel.

## Declaration

```objectivec
@interface CPMapPanelItem : CPPanelItem
```

<a id="overview"></a>

## Overview

A `CPMapPanelItem` object stores navigation-related information and manages interactions with that information. When creating a [CPMapPanel](cpmappanel.md) to display over your custom map, configure it with one or more items with the information you want to display. Use items to display information about:

Trip details for a particular journey Travel estimates for a trip Route choices between a start and end point Route-related details such as costs and consumption metrics Charging station connection details Navigation waypoints

Create one or more `CPMapPanelItem` objects and add them to a [CPMapPanelSection](cpmappanelsection.md). You can add multiple items to a section and each item can contain different information. For example, you might include one item with the trip details and additional items to present route-specific options. Provide a handler with your item if you want to respond when someone taps or selects the item.

Each type of item displays different information from the map panel interface. For example, an item you initialize with a [CPTrip](cptrip.md) object displays the trip’s destination and origin plus the number of route choices. When configuring a section, you might include multiple items of different types to present a complete view of the trip.

## Topics

### Instance Methods

- [initWithChargingStationConnection:handler:](cpmappanelitem/init%28chargingstationconnection_handler_%29.md): Creates a map panel item with charging connection details.
- [initWithMapTemplateWaypoint:image:handler:](cpmappanelitem/init%28maptemplatewaypoint_image_handler_%29.md): Creates a map panel item with waypoint information.
- [initWithRouteChoice:handler:](cpmappanelitem/init%28routechoice_handler_%29.md): Creates a map panel item with one of the route choices available for a trip.
- [initWithRouteDetails:handler:](cpmappanelitem/init%28routedetails_handler_%29.md): Creates a map panel item with route details.
- [initWithTravelEstimates:handler:](cpmappanelitem/init%28travelestimates_handler_%29.md): Creates a map panel item with travel estimate information.
- [initWithTrip:handler:](cpmappanelitem/init%28trip_handler_%29.md): Creates a map panel item with trip-related details.

## Relationships

### Inherits From

- [CPPanelItem](cppanelitem.md)
