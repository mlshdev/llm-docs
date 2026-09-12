> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcpoolingdescriptor/poolingtype-4ni07](https://developer.apple.com/documentation/mlcompute/mlcpoolingdescriptor/poolingtype-4ni07)

# poolingType

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

The pooling operation type.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
var poolingType: MLCPoolingType { get }
```

## See Also

### Inspecting Pooling Descriptors

- [kernelSizes](kernelsizes.md): Deprecated. A tuple that contains the kernel sizes for height and width.
- [strides](strides.md): Deprecated. A tuple that contains the kernel strides for y and x.
- [dilationRates](dilationrates.md): Deprecated. A tuple that contains the dilation rates for y and x.
- [paddingPolicy](paddingpolicy-7p8a2.md): Deprecated. The padding policy.
