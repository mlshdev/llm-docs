> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcupsamplelayer/init(shape:samplemode:alignscorners:)](https://developer.apple.com/documentation/mlcompute/mlcupsamplelayer/init(shape:samplemode:alignscorners:))

# init(shape:sampleMode:alignsCorners:)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

Creates an upsample layer with the shape, upsampling algorithm, and corner alignment option you specify.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
convenience init?(shape: [Int], sampleMode: MLCSampleMode, alignsCorners: Bool)
```

## Parameters

- `shape`: An array representing the dimensions of the result tensor.
- `sampleMode`: The upsampling algorithm type; the default value is nearest.
- `alignsCorners`: A Boolean that indicates whether the layer aligns the corner pixels of the input and output tensors.

## See Also

### Creating Upsample Layers

- [init(shape:)](init%28shape_%29.md): Deprecated. Creates an upsample layer with the shape you specify.
- [MLCSampleMode](../mlcsamplemode.md): Deprecated. A sampling mode for an upsample layer.
