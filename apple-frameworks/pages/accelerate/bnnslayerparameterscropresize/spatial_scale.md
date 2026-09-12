> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterscropresize/spatial_scale](https://developer.apple.com/documentation/accelerate/bnnslayerparameterscropresize/spatial_scale)

# spatial_scale (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

An additional spatial scale that mutliplies the bounding box coordinates.

> Use BNNSGraph\* APIs

## Declaration

```swift
var spatial_scale: Float
```

## See Also

### Instance Properties

- [normalized_coordinates](normalized_coordinates.md): Deprecated. A Boolean value that specifies whether the operation treats the coordinates as normalized to `0...1`.
- [extrapolation_value](extrapolation_value.md): Deprecated. A value that the operation uses for extrapolation. Default value is `0`.
- [sampling_mode](sampling_mode.md): Deprecated. The sampling mode that the operation uses to select sample points.
- [box_coordinate_mode](box_coordinate_mode.md): Deprecated. A constant that defines the convention that the operation uses to specify the four bounding box coordinates.
- [method](method.md): Deprecated. The interpolation method.

# spatial_scale (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An additional spatial scale that mutliplies the bounding box coordinates.

## Declaration

```objectivec
float spatial_scale;
```

## See Also

### Instance Properties

- [normalized_coordinates](normalized_coordinates.md): Deprecated. A Boolean value that specifies whether the operation treats the coordinates as normalized to `0...1`.
- [extrapolation_value](extrapolation_value.md): Deprecated. A value that the operation uses for extrapolation. Default value is `0`.
- [sampling_mode](sampling_mode.md): Deprecated. The sampling mode that the operation uses to select sample points.
- [box_coordinate_mode](box_coordinate_mode.md): Deprecated. A constant that defines the convention that the operation uses to specify the four bounding box coordinates.
- [method](method.md): Deprecated. The interpolation method.
