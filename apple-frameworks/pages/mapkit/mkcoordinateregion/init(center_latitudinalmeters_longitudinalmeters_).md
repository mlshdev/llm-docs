> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkcoordinateregion/init(center:latitudinalmeters:longitudinalmeters:)](https://developer.apple.com/documentation/mapkit/mkcoordinateregion/init(center:latitudinalmeters:longitudinalmeters:))

# init(center:latitudinalMeters:longitudinalMeters:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS 9.2+ · visionOS · watchOS

Creates a new coordinate region from the specified coordinate and distance values.

## Declaration

```swift
init(center centerCoordinate: CLLocationCoordinate2D, latitudinalMeters: CLLocationDistance, longitudinalMeters: CLLocationDistance)
```

## Parameters

- `centerCoordinate`: The center point of the new coordinate region.
- `latitudinalMeters`: The north-to-south span of the region (measured in meters) specified as the distance from the center point to the bounds along the north-to-south axis.
- `longitudinalMeters`: The east-to-west span of the region (measured in meters) specified as the distance from the center point to the bounds along the east-to-west axis.

<a id="return-value"></a>

## Return Value

A region with the specified values.

## See Also

### Creating a region

- [init()](init%28%29.md): Creates a coordinate region.
- [init(\_:)](init%28__%29.md): Returns the region that corresponds to the specified map rectangle.
- [init(center:span:)](init%28center_span_%29.md): Creates a coordinate region with a span around the specified center coordinate.

# MKCoordinateRegionMakeWithDistance (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS 9.2+ · visionOS · watchOS

Creates a new coordinate region from the specified coordinate and distance values.

## Declaration

```objectivec
extern MKCoordinateRegion MKCoordinateRegionMakeWithDistance(CLLocationCoordinate2D centerCoordinate, CLLocationDistance latitudinalMeters, CLLocationDistance longitudinalMeters);
```

## Parameters

- `centerCoordinate`: The center point of the new coordinate region.
- `latitudinalMeters`: The north-to-south span of the region (measured in meters) specified as the distance from the center point to the bounds along the north-to-south axis.
- `longitudinalMeters`: The east-to-west span of the region (measured in meters) specified as the distance from the center point to the bounds along the east-to-west axis.

<a id="return-value"></a>

## Return Value

A region with the specified values.

## See Also

### Creating a region

- [MKCoordinateRegionForMapRect](init%28__%29.md): Returns the region that corresponds to the specified map rectangle.
