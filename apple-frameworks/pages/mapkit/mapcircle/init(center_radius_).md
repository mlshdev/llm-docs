> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mapcircle/init(center:radius:)

# init(center:radius:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a circle with the center coordinate and radius you specify.

## Declaration

```swift
init(center coordinate: CLLocationCoordinate2D, radius: CLLocationDistance)
```

## Parameters

- `coordinate`: The location of the center of the circle.
- `radius`: The radius of the circle, in meters.

## See Also

### Creating a map circle

- [init(\_:)](init%28__%29.md): Creates a circle overlay from an existing map circle object.
- [init(mapRect:)](init%28maprect_%29.md): Creates the largest possible circle centered within the given map rectangle.
