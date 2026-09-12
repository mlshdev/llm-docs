> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalpointsofinterestrequest/init(coordinateregion:)](https://developer.apple.com/documentation/mapkit/mklocalpointsofinterestrequest/init(coordinateregion:))

# init(coordinateRegion:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a points of interest search request based on existing region.

## Declaration

```swift
init(coordinateRegion region: MKCoordinateRegion)
```

## Parameters

- `region`: The region to search.

## See Also

### Creating a point of interest request

- [init(center:radius:)](init%28center_radius_%29.md): Creates a points of interest search request centered on the provided coordinate with the provided radius.

# initWithCoordinateRegion: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a points of interest search request based on existing region.

## Declaration

```objectivec
- (instancetype) initWithCoordinateRegion:(MKCoordinateRegion) region;
```

## Parameters

- `region`: The region to search.

## See Also

### Creating a point of interest request

- [initWithCenterCoordinate:radius:](init%28center_radius_%29.md): Creates a points of interest search request centered on the provided coordinate with the provided radius.
