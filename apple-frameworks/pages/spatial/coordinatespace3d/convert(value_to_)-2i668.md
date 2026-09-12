> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/coordinatespace3d/convert(value:to:)-2i668](https://developer.apple.com/documentation/spatial/coordinatespace3d/convert(value:to:)-2i668)

# convert(value:to:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Converts a value from this coordinate space to another.

## Declaration

```swift
func convert<T, Space>(value: T, to targetCoordinateSpace: Space) throws -> T where T : ProjectiveTransformable3D, Space : CoordinateSpace3D
```

## Parameters

- `value`: The value the function converts between spaces, given in reference to this coordinate space.
- `targetCoordinateSpace`: The coordinate space that the function transforms the value to.

<a id="return-value"></a>

## Return Value

The value converted to the target coordinate space.
