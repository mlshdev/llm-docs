> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationwaypoint](https://developer.apple.com/documentation/carplay/cpnavigationwaypoint)

# CPNavigationWaypoint (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

CPNavigationWaypoint represents a point of interest along a route that provides location-based information and guidance.

## Declaration

```swift
class CPNavigationWaypoint
```

## Topics

### Initializers

- [init(centerPoint:locationThreshold:name:address:entryPoints:timeZone:)](cpnavigationwaypoint/init%28centerpoint_locationthreshold_name_address_entrypoints_timezone_%29.md)
- [init(centerPoint:locationThreshold:nameVariants:addressVariants:entryPoints:timeZone:)](cpnavigationwaypoint/init%28centerpoint_locationthreshold_namevariants_addressvariants_entrypoints_timezone_%29.md)
- [init(coder:)](cpnavigationwaypoint/init%28coder_%29.md)
- [init(mapItem:locationThreshold:entryPoints:)](cpnavigationwaypoint/init%28mapitem_locationthreshold_entrypoints_%29.md)

### Instance Properties

- [address](cpnavigationwaypoint/address.md): Deprecated. address is an optional address string for the waypoint, formatted with newline characters separating each address component. Example: “Apple Inc.\\n1 Apple Park Way\\nCupertino, CA 95014\\nUnited States”
- [addressVariants](cpnavigationwaypoint/addressvariants.md): addressVariants is an array of @c NSString representing variants of the waypoint’s address, arranged from most to least preferred. The variant strings should be provided as localized, displayable content.
- [centerPoint](cpnavigationwaypoint/centerpoint.md): centerPoint is a CPLocationCoordinate3D representing the primary coordinate location of the waypoint.
- [entryPoints](cpnavigationwaypoint/entrypoints-obhb.md)
- [locationThreshold](cpnavigationwaypoint/locationthreshold.md): locationThreshold is the maximum distance in meters from the centerPoint used to determine if a destination is valid.
- [name](cpnavigationwaypoint/name.md): Deprecated. name is an optional display name for the waypoint.
- [nameVariants](cpnavigationwaypoint/namevariants.md): nameVariants is an array of @c NSString representing variants of the waypoint’s display name, arranged from most to least preferred. The variant strings should be provided as localized, displayable content.
- [timeZone](cpnavigationwaypoint/timezone.md): The timezone for the waypoint.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CPNavigationWaypoint (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

CPNavigationWaypoint represents a point of interest along a route that provides location-based information and guidance.

## Declaration

```objectivec
@interface CPNavigationWaypoint : NSObject
```

## Topics

### Instance Properties

- [address](cpnavigationwaypoint/address.md): Deprecated. address is an optional address string for the waypoint, formatted with newline characters separating each address component. Example: “Apple Inc.\\n1 Apple Park Way\\nCupertino, CA 95014\\nUnited States”
- [addressVariants](cpnavigationwaypoint/addressvariants.md): addressVariants is an array of @c NSString representing variants of the waypoint’s address, arranged from most to least preferred. The variant strings should be provided as localized, displayable content.
- [centerPoint](cpnavigationwaypoint/centerpoint.md): centerPoint is a CPLocationCoordinate3D representing the primary coordinate location of the waypoint.
- [entryPoints](cpnavigationwaypoint/entrypoints-6kbqa.md): entryPoints is an optional array of CPLocationCoordinate3D entry points. These represent alternative access points to reach the waypoint.
- [entryPointsCount](cpnavigationwaypoint/entrypointscount.md): entryPointsCount is the number of entry points available in the entryPoints array.
- [locationThreshold](cpnavigationwaypoint/locationthreshold.md): locationThreshold is the maximum distance in meters from the centerPoint used to determine if a destination is valid.
- [name](cpnavigationwaypoint/name.md): Deprecated. name is an optional display name for the waypoint.
- [nameVariants](cpnavigationwaypoint/namevariants.md): nameVariants is an array of @c NSString representing variants of the waypoint’s display name, arranged from most to least preferred. The variant strings should be provided as localized, displayable content.
- [timeZone](cpnavigationwaypoint/timezone.md): The timezone for the waypoint.

### Instance Methods

- [initWithCenterPoint:locationThreshold:name:address:entryPoints:entryPointsCount:timeZone:](cpnavigationwaypoint/initwithcenterpoint_locationthreshold_name_address_entrypoints_entrypointscount_timezone_.md): Deprecated. Initialize a CPNavigationWaypoint object with a center point, location threshold, optional name and address, optional entry points, and a timezone.
- [initWithCenterPoint:locationThreshold:nameVariants:addressVariants:entryPoints:entryPointsCount:timeZone:](cpnavigationwaypoint/initwithcenterpoint_locationthreshold_namevariants_addressvariants_entrypoints_entrypointscount_timezone_.md): Initialize a CPNavigationWaypoint object with a center point, location threshold, optional name and name variants, optional long address and short address, optional entry points, and a timezone.
- [initWithMapItem:locationThreshold:entryPoints:entryPointsCount:](cpnavigationwaypoint/initwithmapitem_locationthreshold_entrypoints_entrypointscount_.md): Initialize a CPNavigationWaypoint object from an MKMapItem with a location threshold and optional entry points.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
