> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpointannotation/init(coordinate:)](https://developer.apple.com/documentation/mapkit/mkpointannotation/init(coordinate:))

# init(coordinate:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a point annotation at the specified coordinate on the map.

## Declaration

```swift
convenience init(coordinate: CLLocationCoordinate2D)
```

## Parameters

- `coordinate`: The coordinate containing the latitude and longitude values for the desired point.

## See Also

### Creating a Point Annotation

- [init()](init%28%29.md): Creates a map annotation that shows a title string at a point on a map.
- [init(coordinate:title:subtitle:)](init%28coordinate_title_subtitle_%29.md): Creates a point annotation displaying a title and subtitle string at the specified coordinate on the map.

# initWithCoordinate: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a point annotation at the specified coordinate on the map.

## Declaration

```objectivec
- (instancetype) initWithCoordinate:(CLLocationCoordinate2D) coordinate;
```

## Parameters

- `coordinate`: The coordinate containing the latitude and longitude values for the desired point.

## See Also

### Creating a Point Annotation

- [init](init%28%29.md): Creates a map annotation that shows a title string at a point on a map.
- [initWithCoordinate:title:subtitle:](init%28coordinate_title_subtitle_%29.md): Creates a point annotation displaying a title and subtitle string at the specified coordinate on the map.
