> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/cameraboundary-swift.class/init(coordinateregion:)](https://developer.apple.com/documentation/mapkit/mkmapview/cameraboundary-swift.class/init(coordinateregion:))

# init(coordinateRegion:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a camera boundary using the provided coordinate region.

## Declaration

```swift
init?(coordinateRegion region: MKCoordinateRegion)
```

## Parameters

- `region`: The [MKCoordinateRegion](../../mkcoordinateregion.md) region that describes the camera boundary.

## See Also

### Creating a camera boundary

- [init(coder:)](init%28coder_%29.md): Creates a camera boundary using the provided coder.
- [init(mapRect:)](init%28maprect_%29.md): Creates a camera boundary using the provided map rectangle.

# initWithCoordinateRegion: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a camera boundary using the provided coordinate region.

## Declaration

```objectivec
- (instancetype) initWithCoordinateRegion:(MKCoordinateRegion) region;
```

## Parameters

- `region`: The [MKCoordinateRegion](../../mkcoordinateregion.md) region that describes the camera boundary.

## See Also

### Creating a camera boundary

- [initWithCoder:](init%28coder_%29.md): Creates a camera boundary using the provided coder.
- [initWithMapRect:](init%28maprect_%29.md): Creates a camera boundary using the provided map rectangle.
