> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/coordinatespace3dfloat/convert(value:from:)](https://developer.apple.com/documentation/spatial/coordinatespace3dfloat/convert(value:from:))

# convert(value:from:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Converts a value from a source coordinate space to this one.

## Declaration

```swift
func convert<T, Space>(value: T, from sourceCoordinateSpace: Space) throws -> T where T : ProjectiveTransformable3DFloat, Space : CoordinateSpace3DFloat
```

## Parameters

- `value`: The value the function converts between spaces given in reference to the `sourceCoordinateSpace`.
- `sourceCoordinateSpace`: The coordinate space the value is provided in reference to.

<a id="return-value"></a>

## Return Value

The value converted from the source space to this one.
