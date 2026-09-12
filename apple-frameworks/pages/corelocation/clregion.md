> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clregion](https://developer.apple.com/documentation/corelocation/clregion)

# CLRegion (Swift)

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · watchOS 2.0+

A base class representing an area that can be monitored.

## Declaration

```swift
class CLRegion
```

<a id="overview"></a>

## Overview

This is an abstract base class. Instantiate one of the provided subclasses that define specific types of regions. After you create a region, register it with a [CLLocationManager](cllocationmanager.md) object with the [startMonitoring(for:)](cllocationmanager/startmonitoring%28for_%29.md) method. The location manager generates appropriate events whenever the user crosses the boundaries of the region.

## Topics

### Getting the region identifier

- [identifier](clregion/identifier.md): The identifier for the region object.

### Specifying the notification conditions

- [notifyOnEntry](clregion/notifyonentry.md): A Boolean indicating that notifications are generated upon entry into the region.
- [notifyOnExit](clregion/notifyonexit.md): A Boolean indicating that notifications are generated upon exit from the region.

### Deprecated

- [init(circularRegionWithCenter:radius:identifier:)](clregion/init%28circularregionwithcenter_radius_identifier_%29.md): Deprecated. Initializes and returns a region object defining a circular area.
- [contains(\_:)](clregion/contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the region contains the specified coordinate.
- [center](clregion/center.md): Deprecated. The center point of the region.
- [radius](clregion/radius.md): Deprecated. The radius (measured in meters) that defines the region’s outer boundary.

### Initializers

- [init(coder:)](clregion/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CLBeaconRegion](clbeaconregion.md)
- [CLCircularRegion](clcircularregion.md)

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

### Region monitoring

- [Monitoring the user’s proximity to geographic regions](monitoring-the-user-s-proximity-to-geographic-regions.md): Use condition monitoring to determine when the user enters or leaves a geographic region.

# CLRegion (Objective-C)

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · watchOS 2.0+

A base class representing an area that can be monitored.

## Declaration

```objectivec
@interface CLRegion : NSObject
```

<a id="overview"></a>

## Overview

This is an abstract base class. Instantiate one of the provided subclasses that define specific types of regions. After you create a region, register it with a [CLLocationManager](cllocationmanager.md) object with the [startMonitoringForRegion:](cllocationmanager/startmonitoring%28for_%29.md) method. The location manager generates appropriate events whenever the user crosses the boundaries of the region.

## Topics

### Getting the region identifier

- [identifier](clregion/identifier.md): The identifier for the region object.

### Specifying the notification conditions

- [notifyOnEntry](clregion/notifyonentry.md): A Boolean indicating that notifications are generated upon entry into the region.
- [notifyOnExit](clregion/notifyonexit.md): A Boolean indicating that notifications are generated upon exit from the region.

### Deprecated

- [initCircularRegionWithCenter:radius:identifier:](clregion/init%28circularregionwithcenter_radius_identifier_%29.md): Deprecated. Initializes and returns a region object defining a circular area.
- [containsCoordinate:](clregion/contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the region contains the specified coordinate.
- [center](clregion/center.md): Deprecated. The center point of the region.
- [radius](clregion/radius.md): Deprecated. The radius (measured in meters) that defines the region’s outer boundary.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CLBeaconRegion](clbeaconregion.md)
- [CLCircularRegion](clcircularregion.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Region monitoring

- [Monitoring the user’s proximity to geographic regions](monitoring-the-user-s-proximity-to-geographic-regions.md): Use condition monitoring to determine when the user enters or leaves a geographic region.
