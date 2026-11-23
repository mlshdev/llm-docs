> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatewaypoint

# CPMapTemplateWaypoint (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

CPMapTemplateWaypoint represents a waypoint with associated travel estimates

## Declaration

```swift
class CPMapTemplateWaypoint
```

## Topics

### Creating a trip

- [init(waypoint:travelEstimates:)](cpmaptemplatewaypoint/init%28waypoint_travelestimates_%29.md): Initializes a new CPMapTemplateWaypoint with the specified waypoint and travel estimates.
- [init(coder:)](cpmaptemplatewaypoint/init%28coder_%29.md)

### Getting the route information

- [waypoint](cpmaptemplatewaypoint/waypoint.md): The navigation waypoint containing location-based information and guidance for a point of interest along a route.
- [travelEstimates](cpmaptemplatewaypoint/travelestimates.md): Travel estimates for reaching this waypoint, including time and distance calculations.

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

- [CPTrip](cptrip.md): An object that represents a journey between an origin and a destination.
- [CPNavigationWaypoint](cpnavigationwaypoint.md): CPNavigationWaypoint represents a point of interest along a route that provides location-based information and guidance.
- [CPMultiStopCardConfiguration](cpmultistopcardconfiguration.md)

# CPMapTemplateWaypoint (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

CPMapTemplateWaypoint represents a waypoint with associated travel estimates

## Declaration

```objectivec
@interface CPMapTemplateWaypoint : NSObject
```

## Topics

### Creating a trip

- [initWithWaypoint:travelEstimates:](cpmaptemplatewaypoint/init%28waypoint_travelestimates_%29.md): Initializes a new CPMapTemplateWaypoint with the specified waypoint and travel estimates.

### Getting the route information

- [waypoint](cpmaptemplatewaypoint/waypoint.md): The navigation waypoint containing location-based information and guidance for a point of interest along a route.
- [travelEstimates](cpmaptemplatewaypoint/travelestimates.md): Travel estimates for reaching this waypoint, including time and distance calculations.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Trip and waypoints

- [CPTrip](cptrip.md): An object that represents a journey between an origin and a destination.
- [CPNavigationWaypoint](cpnavigationwaypoint.md): CPNavigationWaypoint represents a point of interest along a route that provides location-based information and guidance.
- [CPMultiStopCardConfiguration](cpmultistopcardconfiguration.md)
