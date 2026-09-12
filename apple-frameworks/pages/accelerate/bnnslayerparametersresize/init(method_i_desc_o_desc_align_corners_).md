> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersresize/init(method:i_desc:o_desc:align_corners:)](https://developer.apple.com/documentation/accelerate/bnnslayerparametersresize/init(method:i_desc:o_desc:align_corners:))

# init(method:i_desc:o_desc:align_corners:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new resize-layer parameters structure from the specified parameters.

> Use BNNSGraph\* APIs

## Declaration

```swift
init(method: BNNSInterpolationMethod, i_desc: BNNSNDArrayDescriptor, o_desc: BNNSNDArrayDescriptor, align_corners: Bool)
```

## Parameters

- `method`: The interpolation method for resizing.
- `i_desc`: The descriptor of the input.
- `o_desc`: The descriptor of the output.
- `align_corners`: A Boolean value that specifies whether to align the corners of the upscaling grid to the center of scaling dimensions instead of to the edges.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The number of input dimensions must be equal to number of output dimensions. The resize must be in same direction for all dimensions.

## See Also

### Initializers

- [init()](init%28%29.md): Deprecated. Returns a new resize-layer parameters structure.
