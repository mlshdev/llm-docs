> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clcircularregion](https://developer.apple.com/documentation/corelocation/clcircularregion)

# CLCircularRegion (Swift)

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A circular geographic region that a center point and radius deine.

> Use [CLCircularGeographicCondition](clcirculargeographiccondition.md) instead.

## Declaration

```swift
class CLCircularRegion
```

<a id="overview"></a>

## Overview

The [CLCircularRegion](clcircularregion.md) class defines the location and boundaries for a circular geographic region. You can use instances of this class to define geofences for a specific location. The crossing of a geofence’s boundary causes the location manager to notify its delegate.

## Topics

### Creating a circular region

- [init(center:radius:identifier:)](clcircularregion/init%28center_radius_identifier_%29.md): Deprecated. Creates and returns a region object defining a circular geographic area.

### Getting the circle’s center and radius

- [center](clcircularregion/center.md): Deprecated. The center point of the geographic area.
- [radius](clcircularregion/radius.md): Deprecated. The radius (measured in meters) that defines the geographic area’s outer boundary.

### Performing hit testing in the region

- [contains(\_:)](clcircularregion/contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the geographic area contains the specified coordinate.

## Relationships

### Inherits From

- [CLRegion](clregion.md)

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

### Classes

- [CLBeaconRegion](clbeaconregion.md): Deprecated. A region for detecting the presence of iBeacon devices.
- [CLBeaconIdentityConstraint](clbeaconidentityconstraint.md): Deprecated. Identity characteristics that can match one or more beacons.

# CLCircularRegion (Objective-C)

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A circular geographic region that a center point and radius deine.

> Use [CLCircularGeographicCondition](clcirculargeographiccondition.md) instead.

## Declaration

```objectivec
@interface CLCircularRegion : CLRegion
```

<a id="overview"></a>

## Overview

The [CLCircularRegion](clcircularregion.md) class defines the location and boundaries for a circular geographic region. You can use instances of this class to define geofences for a specific location. The crossing of a geofence’s boundary causes the location manager to notify its delegate.

## Topics

### Creating a circular region

- [initWithCenter:radius:identifier:](clcircularregion/init%28center_radius_identifier_%29.md): Deprecated. Creates and returns a region object defining a circular geographic area.

### Getting the circle’s center and radius

- [center](clcircularregion/center.md): Deprecated. The center point of the geographic area.
- [radius](clcircularregion/radius.md): Deprecated. The radius (measured in meters) that defines the geographic area’s outer boundary.

### Performing hit testing in the region

- [containsCoordinate:](clcircularregion/contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the geographic area contains the specified coordinate.

## Relationships

### Inherits From

- [CLRegion](clregion.md)

## See Also

### Classes

- [CLBeaconRegion](clbeaconregion.md): Deprecated. A region for detecting the presence of iBeacon devices.
- [CLBeaconIdentityConstraint](clbeaconidentityconstraint.md): Deprecated. Identity characteristics that can match one or more beacons.
