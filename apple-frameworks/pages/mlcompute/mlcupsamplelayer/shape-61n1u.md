> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcupsamplelayer/shape-61n1u](https://developer.apple.com/documentation/mlcompute/mlcupsamplelayer/shape-61n1u)

# shape

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

An array that contains the dimensions of the result tensor.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
var shape: [Int] { get }
```

## See Also

### Inspecting Upsample Layers

- [sampleMode](samplemode.md): Deprecated. The upsampling algorithm type.
- [alignsCorners](alignscorners.md): Deprecated. A Boolean that indicates whether the layer aligns the corner pixels of the input and output tensors.
