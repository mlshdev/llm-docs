> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalpointsofinterestrequest/init(center:radius:)](https://developer.apple.com/documentation/mapkit/mklocalpointsofinterestrequest/init(center:radius:))

# init(center:radius:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a points of interest search request centered on the provided coordinate with the provided radius.

## Declaration

```swift
init(center coordinate: CLLocationCoordinate2D, radius: CLLocationDistance)
```

## Parameters

- `coordinate`: The center point of a circular region to search.
- `radius`: The radius of the region to search in meters.

## See Also

### Creating a point of interest request

- [init(coordinateRegion:)](init%28coordinateregion_%29.md): Creates a points of interest search request based on existing region.

# initWithCenterCoordinate:radius: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a points of interest search request centered on the provided coordinate with the provided radius.

## Declaration

```objectivec
- (instancetype) initWithCenterCoordinate:(CLLocationCoordinate2D) coordinate radius:(CLLocationDistance) radius;
```

## Parameters

- `coordinate`: The center point of a circular region to search.
- `radius`: The radius of the region to search in meters.

## See Also

### Creating a point of interest request

- [initWithCoordinateRegion:](init%28coordinateregion_%29.md): Creates a points of interest search request based on existing region.
