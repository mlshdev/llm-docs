> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/cameraboundary-swift.class/init(maprect:)](https://developer.apple.com/documentation/mapkit/mkmapview/cameraboundary-swift.class/init(maprect:))

# init(mapRect:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a camera boundary using the provided map rectangle.

## Declaration

```swift
init?(mapRect: MKMapRect)
```

## Parameters

- `mapRect`: The [MKMapRect](../../mkmaprect.md) that describes the camera boundary.

## See Also

### Creating a camera boundary

- [init(coder:)](init%28coder_%29.md): Creates a camera boundary using the provided coder.
- [init(coordinateRegion:)](init%28coordinateregion_%29.md): Creates a camera boundary using the provided coordinate region.

# initWithMapRect: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a camera boundary using the provided map rectangle.

## Declaration

```objectivec
- (instancetype) initWithMapRect:(MKMapRect) mapRect;
```

## Parameters

- `mapRect`: The [MKMapRect](../../mkmaprect.md) that describes the camera boundary.

## See Also

### Creating a camera boundary

- [initWithCoder:](init%28coder_%29.md): Creates a camera boundary using the provided coder.
- [initWithCoordinateRegion:](init%28coordinateregion_%29.md): Creates a camera boundary using the provided coordinate region.
