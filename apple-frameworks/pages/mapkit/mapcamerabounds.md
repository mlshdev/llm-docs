> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcamerabounds](https://developer.apple.com/documentation/mapkit/mapcamerabounds)

# MapCameraBounds

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Defines an optional boundary of an area within which the map’s center needs to remain.

## Declaration

```swift
struct MapCameraBounds
```

<a id="overview"></a>

## Overview

Using the `MapCameraBounds` initializers you can also define an optional camera zoom range that limits the distances that a person can zoom the map camera to.

## Topics

### Creating a map camera bounds

- [init(centerCoordinateBounds:minimumDistance:maximumDistance:)](mapcamerabounds/init%28centercoordinatebounds_minimumdistance_maximumdistance_%29-97kis.md): Creates a camera bounds with the specified region boundary and zoom ranges.
- [init(centerCoordinateBounds:minimumDistance:maximumDistance:)](mapcamerabounds/init%28centercoordinatebounds_minimumdistance_maximumdistance_%29-27z4p.md): Creates a camera bounds with the specified map rectangle boundary and zoom ranges.
- [init(minimumDistance:maximumDistance:)](mapcamerabounds/init%28minimumdistance_maximumdistance_%29.md): Creates a camera bounds with the zoom ranges you specify.

## See Also

### Map customization

- [MapCamera](mapcamera.md): Defines a virtual viewpoint above the map surface.
- [MapCameraPosition](mapcameraposition.md): A structure that describes how to position the map’s camera within the map.
- [MapCameraUpdateContext](mapcameraupdatecontext.md): A structure that defines additional information about the map camera.
- [MapCameraUpdateFrequency](mapcameraupdatefrequency.md): A structure that describes when the map camera updates.
