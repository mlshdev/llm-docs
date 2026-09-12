> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterscropresize/init(normalized_coordinates:spatial_scale:extrapolation_value:sampling_mode:box_coordinate_mode:method:)](https://developer.apple.com/documentation/accelerate/bnnslayerparameterscropresize/init(normalized_coordinates:spatial_scale:extrapolation_value:sampling_mode:box_coordinate_mode:method:))

# init(normalized_coordinates:spatial_scale:extrapolation_value:sampling_mode:box_coordinate_mode:method:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Creates a new layer parameters structure.

> Use BNNSGraph\* APIs

## Declaration

```swift
init(normalized_coordinates: Bool, spatial_scale: Float, extrapolation_value: Float, sampling_mode: BNNSLinearSamplingMode, box_coordinate_mode: BNNSBoxCoordinateMode, method: BNNSInterpolationMethod)
```

## Parameters

- `normalized_coordinates`: A Boolean value that specifies whether the operation treats the coordinates as normalized to `0...1`.
- `spatial_scale`: An additional spatial scale that mutliplies the bounding box coordinates.
- `extrapolation_value`: A value that the operation uses for extrapolation. Default value is `0`.
- `sampling_mode`: The sampling mode that the operation uses to select sample points.
- `box_coordinate_mode`: A constant that defines the convention for the operation uses to specify the four bounding box coordinates.
- `method`: The interpolation method.

## See Also

### Initializers

- [init()](init%28%29.md): Deprecated. Creates a new empty layer parameters structure.
