> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cproutesource

# CPRouteSource (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

## Declaration

```swift
enum CPRouteSource
```

<a id="overview"></a>

## Overview

Specifies the destination and modification status of route information displayed to the user

## Topics

### Enumeration Cases

- [CPRouteSource.sourceInactive](cproutesource/sourceinactive.md): No current route source.
- [CPRouteSource.sourceVehicle](cproutesource/sourcevehicle.md): Route and destination(s) being used by the vehicle is from the vehicle’s system.
- [CPRouteSource.sourceiOSDestinationsOnly](cproutesource/sourceiosdestinationsonly.md): Only the destination(s) from the device are being used, routes are not.
- [CPRouteSource.sourceiOSRouteDestinationsModified](cproutesource/sourceiosroutedestinationsmodified.md): Route and destination(s) from the device are being used but both have been modified.
- [CPRouteSource.sourceiOSRouteModified](cproutesource/sourceiosroutemodified.md): Route is from the device and being used by the vehicle but has been modified. The destination(s)/waypoints have not been changed.
- [CPRouteSource.sourceiOSUnchanged](cproutesource/sourceiosunchanged.md): Route is from the device and being used by the vehicle unmodified.

### Initializers

- [init(rawValue:)](cproutesource/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Route details

- [CPRouteChoice](cproutechoice.md): A possible route for a trip.
- [CPRouteInformation](cprouteinformation.md): A class that describes the characteristic elements of a route.
- [CPRouteDetail](cproutedetail.md)
- [CPRouteSegment](cproutesegment.md): CPRouteSegment describes information pertaining to a segment of a route.
- [CPRerouteReason](cpreroutereason.md): Values that represent reasons for navigation rerouting.
- [NSStringFromCPRerouteReason(\_:)](nsstringfromcpreroutereason%28__%29.md)

# CPRouteSource (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

## Declaration

```objectivec
enum CPRouteSource : NSUInteger;
```

<a id="overview"></a>

## Overview

Specifies the destination and modification status of route information displayed to the user

## Topics

### Enumeration Cases

- [CPRouteSourceInactive](cproutesource/sourceinactive.md): No current route source.
- [CPRouteSourceVehicle](cproutesource/sourcevehicle.md): Route and destination(s) being used by the vehicle is from the vehicle’s system.
- [CPRouteSourceiOSDestinationsOnly](cproutesource/sourceiosdestinationsonly.md): Only the destination(s) from the device are being used, routes are not.
- [CPRouteSourceiOSRouteDestinationsModified](cproutesource/sourceiosroutedestinationsmodified.md): Route and destination(s) from the device are being used but both have been modified.
- [CPRouteSourceiOSRouteModified](cproutesource/sourceiosroutemodified.md): Route is from the device and being used by the vehicle but has been modified. The destination(s)/waypoints have not been changed.
- [CPRouteSourceiOSUnchanged](cproutesource/sourceiosunchanged.md): Route is from the device and being used by the vehicle unmodified.

## See Also

### Route details

- [CPRouteChoice](cproutechoice.md): A possible route for a trip.
- [CPRouteInformation](cprouteinformation.md): A class that describes the characteristic elements of a route.
- [CPRouteDetail](cproutedetail.md)
- [CPRouteSegment](cproutesegment.md): CPRouteSegment describes information pertaining to a segment of a route.
- [CPRerouteReason](cpreroutereason.md): Values that represent reasons for navigation rerouting.
- [NSStringFromCPRerouteReason](nsstringfromcpreroutereason%28__%29.md)
