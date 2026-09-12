> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapcamerazoomdefault](https://developer.apple.com/documentation/mapkit/mkmapcamerazoomdefault)

# MKMapCameraZoomDefault (Swift)

**Framework:** MapKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A constant value used to represent the default value for zooming in or out on a map.

## Declaration

```swift
let MKMapCameraZoomDefault: CLLocationDistance
```

<a id="Discussion"></a>

## Discussion

Use [MKMapCameraZoomDefault](mkmapcamerazoomdefault.md) for the minimum or maximum zoom range when you create an instance of [MKMapView.CameraZoomRange](mkmapview/camerazoomrange-swift.class.md) to allow the user to zoom to any level that MapKit supports.

## See Also

### Creating a camera zoom range

- [init(minCenterCoordinateDistance:maxCenterCoordinateDistance:)](mkmapview/camerazoomrange-swift.class/init%28mincentercoordinatedistance_maxcentercoordinatedistance_%29.md): Create a camera zoom range by specifying a minimum and maximum distance from your map view’s center coordinates, measured in meters.
- [init(minCenterCoordinateDistance:)](mkmapview/camerazoomrange-swift.class/init%28mincentercoordinatedistance_%29.md): Create a camera zoom range by specifying the minimum distance from your map view’s center coordinate, measured in meters.
- [init(maxCenterCoordinateDistance:)](mkmapview/camerazoomrange-swift.class/init%28maxcentercoordinatedistance_%29.md): Create a camera zoom range by specifying the maximum distance from your map view’s center coordinate, measured in meters.

# MKMapCameraZoomDefault (Objective-C)

**Framework:** MapKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A constant value used to represent the default value for zooming in or out on a map.

## Declaration

```objectivec
extern const CLLocationDistance MKMapCameraZoomDefault;
```

<a id="Discussion"></a>

## Discussion

Use [MKMapCameraZoomDefault](mkmapcamerazoomdefault.md) for the minimum or maximum zoom range when you create an instance of [MKMapCameraZoomRange](mkmapview/camerazoomrange-swift.class.md) to allow the user to zoom to any level that MapKit supports.

## See Also

### Creating a camera zoom range

- [initWithMinCenterCoordinateDistance:maxCenterCoordinateDistance:](mkmapview/camerazoomrange-swift.class/init%28mincentercoordinatedistance_maxcentercoordinatedistance_%29.md): Create a camera zoom range by specifying a minimum and maximum distance from your map view’s center coordinates, measured in meters.
- [initWithMinCenterCoordinateDistance:](mkmapview/camerazoomrange-swift.class/init%28mincentercoordinatedistance_%29.md): Create a camera zoom range by specifying the minimum distance from your map view’s center coordinate, measured in meters.
- [initWithMaxCenterCoordinateDistance:](mkmapview/camerazoomrange-swift.class/init%28maxcentercoordinatedistance_%29.md): Create a camera zoom range by specifying the maximum distance from your map view’s center coordinate, measured in meters.
