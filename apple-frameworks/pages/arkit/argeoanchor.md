> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeoanchor](https://developer.apple.com/documentation/arkit/argeoanchor)

# ARGeoAnchor (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+

An anchor that identifies a geographic location using latitude, longitude, and altitude data.

## Declaration

```swift
class ARGeoAnchor
```

<a id="overview"></a>

## Overview

A *geographic anchor* (also known as *location anchor*) identifies a specific area in the world that the app can refer to in an AR experience. As a user moves around the scene, the session updates a location anchor’s [transform](aranchor/transform.md) based on the anchor’s [coordinate](argeoanchor/coordinate.md) and the device’s compass heading.

ARKit aligns location anchors to an East-North-Up orientation, with its x- and z-axes matching the longitude and latitude directions. For more information, see [ARConfiguration.WorldAlignment.gravityAndHeading](arconfiguration/worldalignment-swift.enum/gravityandheading.md).

ARKit sets the anchor’s vertical position to the altitude you pass in to [initWithCoordinate:altitude:](argeoanchor/initwithcoordinate_altitude_.md). If you initialize a location anchor using [initWithCoordinate:](argeoanchor/initwithcoordinate_.md) instead, ARKit sets the anchor’s altitude to ground level.

> **Important**

>  Location anchors are available only in geotracking sessions, and geotracking is available in specific areas; for more information, see [ARGeoTrackingConfiguration](argeotrackingconfiguration.md).

<a id="Communicate-Data-Usage"></a>

### Communicate Data Usage

Location anchors consume data from Apple Maps called *localization imagery* (for more information, see [ARGeoTrackingConfiguration](argeotrackingconfiguration.md)). As the user moves, the framework downloads localization imagery to refine the user’s precise geographic position. The amount of data the session requires depends on the user’s movement and distance they travel. To make the user aware of potential fees, you can notify the user of their data usage.

<a id="Manage-Location-Anchor-Availability"></a>

### Manage Location Anchor Availability

When an app creates a location anchor, it’s invisible to the user until the framework *populates* the anchor in the scene. When an anchor populates successfully, the session passes the anchor into the delegate’s [session(\_:didAdd:)](arsessiondelegate/session%28__didadd_%29.md) callback.

If ARKit fails to populate a location anchor, the session calls [session(\_:didRemove:)](arsessiondelegate/session%28__didremove_%29.md) to notify your delegate. A location anchor may fail to populate when:

- The network is unavailable. If you create a location anchor without providing an altitude, ARKit defaults the altitude to ground level, and may query the server to check the topography at the anchor’s geographic coordinate. If the network is unavailable, ask the user to restore a connection by disabling Airplane Mode, enabling WiFi, or moving to a location that provides service. If the network is available but slow, an altitude query response may be delayed. Consider pausing a navigation or presenting visual feedback for the anchor’s tentative placement, such as by displaying a status indicator.
- The location anchor is too far from the user. If users can create location anchors in your app, let them know to position the coordinates of each anchor within 0.05 degrees (~5 kilometers) of themselves and their device.
- The server prevents the location anchor’s position, such as in a large body of water.

## Topics

### Creating a Geo Anchor

- [init(coordinate:altitude:)](argeoanchor/init%28coordinate_altitude_%29.md): Initializes a location anchor with the given coordinate and altitude.
- [init(name:coordinate:altitude:)](argeoanchor/init%28name_coordinate_altitude_%29-8sbh4.md): Initializes a named location anchor with the given coordinates and altitude.
- [init(name:coordinate:altitude:)](argeoanchor/init%28name_coordinate_altitude_%29-csze.md): Initializes a named location anchor with the given coordinates and altitude.

### Accessing Latitude and Longitude

- [coordinate](argeoanchor/coordinate.md): The lattitude and longitude of the anchor’s geographic location.

### Defining Altitude

- [altitude](argeoanchor/altitude-89k4x.md): Vertical distance, in meters, between this anchor and sea level.
- [altitudeSource](argeoanchor/altitudesource-swift.property.md): A record of the source from which an altitude came.
- [ARGeoAnchor.AltitudeSource](argeoanchor/altitudesource-swift.enum.md): Options for setting a location anchor’s altitude.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

### Conforms To

- [ARAnchorCopying](aranchorcopying.md)
- [ARTrackable](artrackable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Geotracking

- [Tracking geographic locations in AR](tracking-geographic-locations-in-ar.md): Track specific geographic areas of interest and render them in an AR experience.

# ARGeoAnchor (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+

An anchor that identifies a geographic location using latitude, longitude, and altitude data.

## Declaration

```objectivec
@interface ARGeoAnchor : ARAnchor
```

<a id="overview"></a>

## Overview

A *geographic anchor* (also known as *location anchor*) identifies a specific area in the world that the app can refer to in an AR experience. As a user moves around the scene, the session updates a location anchor’s [transform](aranchor/transform.md) based on the anchor’s [coordinate](argeoanchor/coordinate.md) and the device’s compass heading.

ARKit aligns location anchors to an East-North-Up orientation, with its x- and z-axes matching the longitude and latitude directions. For more information, see [ARWorldAlignmentGravityAndHeading](arconfiguration/worldalignment-swift.enum/gravityandheading.md).

ARKit sets the anchor’s vertical position to the altitude you pass in to [initWithCoordinate:altitude:](argeoanchor/initwithcoordinate_altitude_.md). If you initialize a location anchor using [initWithCoordinate:](argeoanchor/initwithcoordinate_.md) instead, ARKit sets the anchor’s altitude to ground level.

> **Important**

>  Location anchors are available only in geotracking sessions, and geotracking is available in specific areas; for more information, see [ARGeoTrackingConfiguration](argeotrackingconfiguration.md).

<a id="Communicate-Data-Usage"></a>

### Communicate Data Usage

Location anchors consume data from Apple Maps called *localization imagery* (for more information, see [ARGeoTrackingConfiguration](argeotrackingconfiguration.md)). As the user moves, the framework downloads localization imagery to refine the user’s precise geographic position. The amount of data the session requires depends on the user’s movement and distance they travel. To make the user aware of potential fees, you can notify the user of their data usage.

<a id="Manage-Location-Anchor-Availability"></a>

### Manage Location Anchor Availability

When an app creates a location anchor, it’s invisible to the user until the framework *populates* the anchor in the scene. When an anchor populates successfully, the session passes the anchor into the delegate’s [session:didAddAnchors:](arsessiondelegate/session%28__didadd_%29.md) callback.

If ARKit fails to populate a location anchor, the session calls [session:didRemoveAnchors:](arsessiondelegate/session%28__didremove_%29.md) to notify your delegate. A location anchor may fail to populate when:

- The network is unavailable. If you create a location anchor without providing an altitude, ARKit defaults the altitude to ground level, and may query the server to check the topography at the anchor’s geographic coordinate. If the network is unavailable, ask the user to restore a connection by disabling Airplane Mode, enabling WiFi, or moving to a location that provides service. If the network is available but slow, an altitude query response may be delayed. Consider pausing a navigation or presenting visual feedback for the anchor’s tentative placement, such as by displaying a status indicator.
- The location anchor is too far from the user. If users can create location anchors in your app, let them know to position the coordinates of each anchor within 0.05 degrees (~5 kilometers) of themselves and their device.
- The server prevents the location anchor’s position, such as in a large body of water.

## Topics

### Creating a Geo Anchor

- [initWithCoordinate:](argeoanchor/initwithcoordinate_.md): Initializes a new location anchor with the given coordinates.
- [initWithCoordinate:altitude:](argeoanchor/initwithcoordinate_altitude_.md): Initializes a location anchor with the given coordinate and altitude.
- [initWithName:coordinate:](argeoanchor/initwithname_coordinate_.md): Initializes a named location anchor with the given coordinates.
- [initWithName:coordinate:altitude:](argeoanchor/init%28name_coordinate_altitude_%29-8sbh4.md): Initializes a named location anchor with the given coordinates and altitude.

### Accessing Latitude and Longitude

- [coordinate](argeoanchor/coordinate.md): The lattitude and longitude of the anchor’s geographic location.

### Defining Altitude

- [altitude](argeoanchor/altitude-9kges.md): Vertical distance, in meters, between this anchor and sea level.
- [altitudeSource](argeoanchor/altitudesource-swift.property.md): A record of the source from which an altitude came.
- [ARAltitudeSource](argeoanchor/altitudesource-swift.enum.md): Options for setting a location anchor’s altitude.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

### Conforms To

- [ARTrackable](artrackable.md)

## See Also

### Geotracking

- [Tracking geographic locations in AR](tracking-geographic-locations-in-ar.md): Track specific geographic areas of interest and render them in an AR experience.
