> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcupsamplelayer/shape-7j6sf](https://developer.apple.com/documentation/mlcompute/mlcupsamplelayer/shape-7j6sf)

# shape

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An array that contains the dimensions of the result tensor.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSNumber *> * shape;
```

## See Also

### Inspecting Upsample Layers

- [sampleMode](samplemode.md): Deprecated. The upsampling algorithm type.
- [alignsCorners](alignscorners.md): Deprecated. A Boolean that indicates whether the layer aligns the corner pixels of the input and output tensors.
