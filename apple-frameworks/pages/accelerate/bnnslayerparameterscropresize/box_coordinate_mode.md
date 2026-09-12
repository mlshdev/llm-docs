> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterscropresize/box_coordinate_mode](https://developer.apple.com/documentation/accelerate/bnnslayerparameterscropresize/box_coordinate_mode)

# box_coordinate_mode (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

A constant that defines the convention that the operation uses to specify the four bounding box coordinates.

> Use BNNSGraph\* APIs

## Declaration

```swift
var box_coordinate_mode: BNNSBoxCoordinateMode
```

## See Also

### Instance Properties

- [normalized_coordinates](normalized_coordinates.md): Deprecated. A Boolean value that specifies whether the operation treats the coordinates as normalized to `0...1`.
- [spatial_scale](spatial_scale.md): Deprecated. An additional spatial scale that mutliplies the bounding box coordinates.
- [extrapolation_value](extrapolation_value.md): Deprecated. A value that the operation uses for extrapolation. Default value is `0`.
- [sampling_mode](sampling_mode.md): Deprecated. The sampling mode that the operation uses to select sample points.
- [method](method.md): Deprecated. The interpolation method.

# box_coordinate_mode (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A constant that defines the convention that the operation uses to specify the four bounding box coordinates.

## Declaration

```objectivec
BNNSBoxCoordinateMode box_coordinate_mode;
```

## See Also

### Instance Properties

- [normalized_coordinates](normalized_coordinates.md): Deprecated. A Boolean value that specifies whether the operation treats the coordinates as normalized to `0...1`.
- [spatial_scale](spatial_scale.md): Deprecated. An additional spatial scale that mutliplies the bounding box coordinates.
- [extrapolation_value](extrapolation_value.md): Deprecated. A value that the operation uses for extrapolation. Default value is `0`.
- [sampling_mode](sampling_mode.md): Deprecated. The sampling mode that the operation uses to select sample points.
- [method](method.md): Deprecated. The interpolation method.
