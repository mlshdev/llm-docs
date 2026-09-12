> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/coordinatespace3d/convert(value:to:)-u2a0](https://developer.apple.com/documentation/spatial/coordinatespace3d/convert(value:to:)-u2a0)

# convert(value:to:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Converts a value from this coordinate space to another.

## Declaration

```swift
func convert<T>(value: T, to targetCoordinateSpace: Self) throws -> T where T : ProjectiveTransformable3D
```

## Parameters

- `value`: The value the function converts between spaces, given in reference to this coordinate space.
- `targetCoordinateSpace`: The coordinate space that the function transforms the value to.

<a id="return-value"></a>

## Return Value

The value converted to the target coordinate space.
