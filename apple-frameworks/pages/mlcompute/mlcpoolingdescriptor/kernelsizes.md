> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcpoolingdescriptor/kernelsizes](https://developer.apple.com/documentation/mlcompute/mlcpoolingdescriptor/kernelsizes)

# kernelSizes

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

A tuple that contains the kernel sizes for height and width.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
var kernelSizes: (height: Int, width: Int) { get }
```

## See Also

### Inspecting Pooling Descriptors

- [poolingType](poolingtype-4ni07.md): Deprecated. The pooling operation type.
- [strides](strides.md): Deprecated. A tuple that contains the kernel strides for y and x.
- [dilationRates](dilationrates.md): Deprecated. A tuple that contains the dilation rates for y and x.
- [paddingPolicy](paddingpolicy-7p8a2.md): Deprecated. The padding policy.
