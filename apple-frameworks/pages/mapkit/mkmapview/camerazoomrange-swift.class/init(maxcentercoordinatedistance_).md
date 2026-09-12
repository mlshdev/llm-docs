> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/camerazoomrange-swift.class/init(maxcentercoordinatedistance:)](https://developer.apple.com/documentation/mapkit/mkmapview/camerazoomrange-swift.class/init(maxcentercoordinatedistance:))

# init(maxCenterCoordinateDistance:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Create a camera zoom range by specifying the maximum distance from your map view’s center coordinate, measured in meters.

## Declaration

```swift
convenience init?(maxCenterCoordinateDistance maxDistance: CLLocationDistance)
```

## Parameters

- `maxDistance`: The maximum distance the user can zoom out on a map based on its center point, measured in meters.

  To increase how far out the user can zoom, use a larger distance value. To decrease how far out the user can zoom, use a smaller distance value.

<a id="Discussion"></a>

## Discussion

The constant, [MKMapCameraZoomDefault](../../mkmapcamerazoomdefault.md), specifies the default distance for [maxCenterCoordinateDistance](maxcentercoordinatedistance.md).

## See Also

### Creating a camera zoom range

- [init(minCenterCoordinateDistance:maxCenterCoordinateDistance:)](init%28mincentercoordinatedistance_maxcentercoordinatedistance_%29.md): Create a camera zoom range by specifying a minimum and maximum distance from your map view’s center coordinates, measured in meters.
- [init(minCenterCoordinateDistance:)](init%28mincentercoordinatedistance_%29.md): Create a camera zoom range by specifying the minimum distance from your map view’s center coordinate, measured in meters.
- [MKMapCameraZoomDefault](../../mkmapcamerazoomdefault.md): A constant value used to represent the default value for zooming in or out on a map.

# initWithMaxCenterCoordinateDistance: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Create a camera zoom range by specifying the maximum distance from your map view’s center coordinate, measured in meters.

## Declaration

```objectivec
- (instancetype) initWithMaxCenterCoordinateDistance:(CLLocationDistance) maxDistance;
```

## Parameters

- `maxDistance`: The maximum distance the user can zoom out on a map based on its center point, measured in meters.

  To increase how far out the user can zoom, use a larger distance value. To decrease how far out the user can zoom, use a smaller distance value.

<a id="Discussion"></a>

## Discussion

The constant, [MKMapCameraZoomDefault](../../mkmapcamerazoomdefault.md), specifies the default distance for [maxCenterCoordinateDistance](maxcentercoordinatedistance.md).

## See Also

### Creating a camera zoom range

- [initWithMinCenterCoordinateDistance:maxCenterCoordinateDistance:](init%28mincentercoordinatedistance_maxcentercoordinatedistance_%29.md): Create a camera zoom range by specifying a minimum and maximum distance from your map view’s center coordinates, measured in meters.
- [initWithMinCenterCoordinateDistance:](init%28mincentercoordinatedistance_%29.md): Create a camera zoom range by specifying the minimum distance from your map view’s center coordinate, measured in meters.
- [MKMapCameraZoomDefault](../../mkmapcamerazoomdefault.md): A constant value used to represent the default value for zooming in or out on a map.
