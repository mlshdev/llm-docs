> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/coordinatespace3d/convert(value:from:)-3zi9f](https://developer.apple.com/documentation/spatial/coordinatespace3d/convert(value:from:)-3zi9f)

# convert(value:from:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Converts a value from a source coordinate space to this one.

## Declaration

```swift
func convert<T>(value: T, from targetCoordinateSpace: Self) throws -> T where T : ProjectiveTransformable3D
```

## Parameters

- `value`: The value the function converts between spaces given in reference to the `sourceCoordinateSpace`.

<a id="return-value"></a>

## Return Value

The value converted from the source space to this one.
