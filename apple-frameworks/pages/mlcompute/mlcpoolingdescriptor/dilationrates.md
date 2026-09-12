> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcpoolingdescriptor/dilationrates](https://developer.apple.com/documentation/mlcompute/mlcpoolingdescriptor/dilationrates)

# dilationRates

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

A tuple that contains the dilation rates for y and x.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
var dilationRates: (y: Int, x: Int) { get }
```

## See Also

### Inspecting Pooling Descriptors

- [poolingType](poolingtype-4ni07.md): Deprecated. The pooling operation type.
- [kernelSizes](kernelsizes.md): Deprecated. A tuple that contains the kernel sizes for height and width.
- [strides](strides.md): Deprecated. A tuple that contains the kernel strides for y and x.
- [paddingPolicy](paddingpolicy-7p8a2.md): Deprecated. The padding policy.
