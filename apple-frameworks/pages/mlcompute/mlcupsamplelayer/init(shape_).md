> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcupsamplelayer/init(shape:)](https://developer.apple.com/documentation/mlcompute/mlcupsamplelayer/init(shape:))

# init(shape:)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

Creates an upsample layer with the shape you specify.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
convenience init?(shape: [Int])
```

## Parameters

- `shape`: An array that contains the dimensions of the result tensor.

## See Also

### Creating Upsample Layers

- [init(shape:sampleMode:alignsCorners:)](init%28shape_samplemode_alignscorners_%29.md): Deprecated. Creates an upsample layer with the shape, upsampling algorithm, and corner alignment option you specify.
- [MLCSampleMode](../mlcsamplemode.md): Deprecated. A sampling mode for an upsample layer.
