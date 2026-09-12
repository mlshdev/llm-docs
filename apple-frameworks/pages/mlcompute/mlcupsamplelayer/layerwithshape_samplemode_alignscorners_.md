> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcupsamplelayer/layerwithshape:samplemode:alignscorners:](https://developer.apple.com/documentation/mlcompute/mlcupsamplelayer/layerwithshape:samplemode:alignscorners:)

# layerWithShape:sampleMode:alignsCorners:

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an upsample layer with the shape, upsampling algorithm, and corner alignement option you specify.

## Declaration

```objectivec
+ (instancetype) layerWithShape:(NSArray<NSNumber *> *) shape sampleMode:(MLCSampleMode) sampleMode alignsCorners:(BOOL) alignsCorners;
```

## Parameters

- `shape`: An array representing the dimensions of the result tensor.
- `sampleMode`: The upsampling algorithm type; the default value is nearest.
- `alignsCorners`: A Boolean that indicates whether the layer aligns the corner pixels of the input and output tensors.

<a id="return-value"></a>

## Return Value

An upsample layer.

## See Also

### Creating Upsample Layers

- [layerWithShape:](layerwithshape_.md): Deprecated. Creates an upsample layer with the shape you specify.
- [MLCSampleMode](../mlcsamplemode.md): Deprecated. A sampling mode for an upsample layer.
