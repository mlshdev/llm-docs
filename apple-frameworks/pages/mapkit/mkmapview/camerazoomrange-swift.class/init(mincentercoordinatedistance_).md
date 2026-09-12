> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/camerazoomrange-swift.class/init(mincentercoordinatedistance:)](https://developer.apple.com/documentation/mapkit/mkmapview/camerazoomrange-swift.class/init(mincentercoordinatedistance:))

# init(minCenterCoordinateDistance:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Create a camera zoom range by specifying the minimum distance from your map view’s center coordinate, measured in meters.

## Declaration

```swift
convenience init?(minCenterCoordinateDistance minDistance: CLLocationDistance)
```

## Parameters

- `minDistance`: The minimum distance the user can zoom in on a map based on its center point, measured in meters.

  To increase how far in the user can zoom, use a shorter distance value. To decrease how far in the user can zoom, use a larger distance value.

<a id="Discussion"></a>

## Discussion

To specify MapKit’s default minimum distance from the center coordinate, use the [MKMapCameraZoomDefault](../../mkmapcamerazoomdefault.md) constant, that allows the user to zoom to any level that MapKit supports.

The following example prevents the user from zooming closer than 1000 meters from the map’s center coordinate:

```swift
MKMapView.CameraZoomRange(
    minCenterCoordinateDistance: 1000
)
```

## See Also

### Creating a camera zoom range

- [init(minCenterCoordinateDistance:maxCenterCoordinateDistance:)](init%28mincentercoordinatedistance_maxcentercoordinatedistance_%29.md): Create a camera zoom range by specifying a minimum and maximum distance from your map view’s center coordinates, measured in meters.
- [init(maxCenterCoordinateDistance:)](init%28maxcentercoordinatedistance_%29.md): Create a camera zoom range by specifying the maximum distance from your map view’s center coordinate, measured in meters.
- [MKMapCameraZoomDefault](../../mkmapcamerazoomdefault.md): A constant value used to represent the default value for zooming in or out on a map.

# initWithMinCenterCoordinateDistance: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Create a camera zoom range by specifying the minimum distance from your map view’s center coordinate, measured in meters.

## Declaration

```objectivec
- (instancetype) initWithMinCenterCoordinateDistance:(CLLocationDistance) minDistance;
```

## Parameters

- `minDistance`: The minimum distance the user can zoom in on a map based on its center point, measured in meters.

  To increase how far in the user can zoom, use a shorter distance value. To decrease how far in the user can zoom, use a larger distance value.

<a id="Discussion"></a>

## Discussion

To specify MapKit’s default minimum distance from the center coordinate, use the [MKMapCameraZoomDefault](../../mkmapcamerazoomdefault.md) constant, that allows the user to zoom to any level that MapKit supports.

The following example prevents the user from zooming closer than 1000 meters from the map’s center coordinate:

```swift
MKMapView.CameraZoomRange(
    minCenterCoordinateDistance: 1000
)
```

## See Also

### Creating a camera zoom range

- [initWithMinCenterCoordinateDistance:maxCenterCoordinateDistance:](init%28mincentercoordinatedistance_maxcentercoordinatedistance_%29.md): Create a camera zoom range by specifying a minimum and maximum distance from your map view’s center coordinates, measured in meters.
- [initWithMaxCenterCoordinateDistance:](init%28maxcentercoordinatedistance_%29.md): Create a camera zoom range by specifying the maximum distance from your map view’s center coordinate, measured in meters.
- [MKMapCameraZoomDefault](../../mkmapcamerazoomdefault.md): A constant value used to represent the default value for zooming in or out on a map.
