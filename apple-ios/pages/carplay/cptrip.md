> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptrip

# CPTrip (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that represents a journey between an origin and a destination.

## Declaration

```swift
class CPTrip
```

<a id="overview"></a>

## Overview

A trip represents a journey consisting of an origin, a destination, and up to three route choices. Use [CPRouteChoice](cproutechoice.md) to define each possible route choice.

You create trips after the user has selected a destination, and present up to twelve trip previews by calling [showTripPreviews(\_:textConfiguration:)](cpmaptemplate/showtrippreviews%28__textconfiguration_%29.md) on the map template.

You provide estimates for each trip using the map template’s [updateEstimates(\_:for:)](cpmaptemplate/updateestimates%28__for_%29.md) method, and must update these estimates if the remaining time or distance changes.

## Topics

### Creating a trip

- [init(originWaypoint:destinationWaypoint:routeChoices:)](cptrip/init%28originwaypoint_destinationwaypoint_routechoices_%29.md): Initialize a @c CPTrip with an origin waypoint, destination waypoint, and route choices.

### Getting the route information

- [originWaypoint](cptrip/originwaypoint.md)
- [destinationWaypoint](cptrip/destinationwaypoint.md)
- [routeChoices](cptrip/routechoices.md): The list of route choices for the trip.

### Managing app-specific data

- [userInfo](cptrip/userinfo.md): A custom object associated with the trip.

### Deprecated

- [init(origin:destination:routeChoices:)](cptrip/init%28origin_destination_routechoices_%29.md): Deprecated. Creates a trip with an origin, destination, and route choices.
- [origin](cptrip/origin.md): Deprecated. The trip’s origin.
- [destination](cptrip/destination.md): Deprecated. The trip’s destination.
- [destinationNameVariants](cptrip/destinationnamevariants.md): Deprecated. An array of strings that represents the names of the destination for this trip, arranged from most to least preferred.

### Initializers

- [init(coder:)](cptrip/init%28coder_%29.md)

### Instance Properties

- [hasShareableDestination](cptrip/hasshareabledestination.md): Set to @YES to enable sharing of the destination of this trip.
- [routeSegmentsAvailableForRegion](cptrip/routesegmentsavailableforregion.md): Set to @NO to disable route sharing for this trip when route sharing is not supported in the current region.

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
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Trip and waypoints

- [CPMapTemplateWaypoint](cpmaptemplatewaypoint.md): CPMapTemplateWaypoint represents a waypoint with associated travel estimates
- [CPNavigationWaypoint](cpnavigationwaypoint.md): CPNavigationWaypoint represents a point of interest along a route that provides location-based information and guidance.
- [CPMultiStopCardConfiguration](cpmultistopcardconfiguration.md)

# CPTrip (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that represents a journey between an origin and a destination.

## Declaration

```objectivec
@interface CPTrip : NSObject
```

<a id="overview"></a>

## Overview

A trip represents a journey consisting of an origin, a destination, and up to three route choices. Use [CPRouteChoice](cproutechoice.md) to define each possible route choice.

You create trips after the user has selected a destination, and present up to twelve trip previews by calling [showTripPreviews:textConfiguration:](cpmaptemplate/showtrippreviews%28__textconfiguration_%29.md) on the map template.

You provide estimates for each trip using the map template’s [updateTravelEstimates:forTrip:](cpmaptemplate/updateestimates%28__for_%29.md) method, and must update these estimates if the remaining time or distance changes.

## Topics

### Creating a trip

- [initWithOriginWaypoint:destinationWaypoint:routeChoices:](cptrip/init%28originwaypoint_destinationwaypoint_routechoices_%29.md): Initialize a @c CPTrip with an origin waypoint, destination waypoint, and route choices.

### Getting the route information

- [originWaypoint](cptrip/originwaypoint.md)
- [destinationWaypoint](cptrip/destinationwaypoint.md)
- [routeChoices](cptrip/routechoices.md): The list of route choices for the trip.

### Managing app-specific data

- [userInfo](cptrip/userinfo.md): A custom object associated with the trip.

### Deprecated

- [initWithOrigin:destination:routeChoices:](cptrip/init%28origin_destination_routechoices_%29.md): Deprecated. Creates a trip with an origin, destination, and route choices.
- [origin](cptrip/origin.md): Deprecated. The trip’s origin.
- [destination](cptrip/destination.md): Deprecated. The trip’s destination.
- [destinationNameVariants](cptrip/destinationnamevariants.md): Deprecated. An array of strings that represents the names of the destination for this trip, arranged from most to least preferred.

### Instance Properties

- [hasShareableDestination](cptrip/hasshareabledestination.md): Set to @YES to enable sharing of the destination of this trip.
- [routeSegmentsAvailableForRegion](cptrip/routesegmentsavailableforregion.md): Set to @NO to disable route sharing for this trip when route sharing is not supported in the current region.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Trip and waypoints

- [CPMapTemplateWaypoint](cpmaptemplatewaypoint.md): CPMapTemplateWaypoint represents a waypoint with associated travel estimates
- [CPNavigationWaypoint](cpnavigationwaypoint.md): CPNavigationWaypoint represents a point of interest along a route that provides location-based information and guidance.
- [CPMultiStopCardConfiguration](cpmultistopcardconfiguration.md)
