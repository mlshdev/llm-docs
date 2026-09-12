> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder/copy(from:sourceorigin:sourcedimensions:to:destinationorigin:destinationdimensions:)](https://developer.apple.com/documentation/metal/mtlblitcommandencoder/copy(from:sourceorigin:sourcedimensions:to:destinationorigin:destinationdimensions:))

# copy(from:sourceOrigin:sourceDimensions:to:destinationOrigin:destinationDimensions:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command to copy data from a slice of the data plane of a tensor into a slice of the data plane of another tensor.

## Declaration

```swift
func copy(from sourceTensor: any MTLTensor, sourceOrigin: MTLTensorExtents, sourceDimensions: MTLTensorExtents, to destinationTensor: any MTLTensor, destinationOrigin: MTLTensorExtents, destinationDimensions: MTLTensorExtents)
```

## Parameters

- `sourceTensor`: A tensor instance the method copies data from.
- `sourceOrigin`: An array of per-dimension offsets that together locate the first element to copy in `sourceTensor`. Each element in this array corresponds to the dimension at the same index in `sourceDimensions`. Each offset value represents the number of elements from the start of that dimension.
- `sourceDimensions`: An array of per-dimension sizes that together define the extent of the slice to copy from `sourceTensor`. Each element in this array corresponds to the dimension at the same index in `sourceOrigin`. Each size value represents the number of elements to include along that dimension, starting from the corresponding offset in `sourceOrigin`.
- `destinationTensor`: A tensor instance the method copies data to.
- `destinationOrigin`: An array of per-dimension offsets that together locate the first element to write in `destinationTensor`. Each element in this array corresponds to the dimension at the same index in `destinationDimensions`. Each offset value represents the number of elements from the start of that dimension.
- `destinationDimensions`: An array of per-dimension sizes that together define the extent of the slice to write in `destinationTensor`. Each element in this array corresponds to the dimension at the same index in `destinationOrigin`. Each size value represents the number of elements to include along that dimension, starting from the corresponding offset in `destinationOrigin`.

<a id="discussion"></a>

## Discussion

If `sourceTensor` and `destinationTensor` are not aliasable, this command applies a reshape operation.

Ensure the first dimension of `sourceOrigin`, `sourceDimensions`, `destinationOrigin`, and `destinationDimensions` is byte aligned.

## See Also

### Copying texture data to another texture

- [copy(from:to:)](copy%28from_to_%29.md): Encodes a command that copies data from one texture to another.
- [copy(from:sourceSlice:sourceLevel:to:destinationSlice:destinationLevel:sliceCount:levelCount:)](copy%28from_sourceslice_sourcelevel_to_destinationslice_destinationlevel_slicecount_levelcount_%29.md): Encodes a command that copies slices of a texture to another texture’s slices.
- [copy(from:sourceSlice:sourceLevel:sourceOrigin:sourceSize:to:destinationSlice:destinationLevel:destinationOrigin:)](copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationslice_destinationlevel_destinationorigin_%29.md): Encodes a command that copies image data from a texture’s slice into another slice.

# copyFromTensor:sourceOrigin:sourceDimensions:toTensor:destinationOrigin:destinationDimensions: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command to copy data from a slice of the data plane of a tensor into a slice of the data plane of another tensor.

## Declaration

```objectivec
- (void) copyFromTensor:(id<MTLTensor>) sourceTensor sourceOrigin:(MTLTensorExtents *) sourceOrigin sourceDimensions:(MTLTensorExtents *) sourceDimensions toTensor:(id<MTLTensor>) destinationTensor destinationOrigin:(MTLTensorExtents *) destinationOrigin destinationDimensions:(MTLTensorExtents *) destinationDimensions;
```

## Parameters

- `sourceTensor`: A tensor instance the method copies data from.
- `sourceOrigin`: An array of per-dimension offsets that together locate the first element to copy in `sourceTensor`. Each element in this array corresponds to the dimension at the same index in `sourceDimensions`. Each offset value represents the number of elements from the start of that dimension.
- `sourceDimensions`: An array of per-dimension sizes that together define the extent of the slice to copy from `sourceTensor`. Each element in this array corresponds to the dimension at the same index in `sourceOrigin`. Each size value represents the number of elements to include along that dimension, starting from the corresponding offset in `sourceOrigin`.
- `destinationTensor`: A tensor instance the method copies data to.
- `destinationOrigin`: An array of per-dimension offsets that together locate the first element to write in `destinationTensor`. Each element in this array corresponds to the dimension at the same index in `destinationDimensions`. Each offset value represents the number of elements from the start of that dimension.
- `destinationDimensions`: An array of per-dimension sizes that together define the extent of the slice to write in `destinationTensor`. Each element in this array corresponds to the dimension at the same index in `destinationOrigin`. Each size value represents the number of elements to include along that dimension, starting from the corresponding offset in `destinationOrigin`.

<a id="discussion"></a>

## Discussion

If `sourceTensor` and `destinationTensor` are not aliasable, this command applies a reshape operation.

Ensure the first dimension of `sourceOrigin`, `sourceDimensions`, `destinationOrigin`, and `destinationDimensions` is byte aligned.

## See Also

### Copying texture data to another texture

- [copyFromTexture:toTexture:](copy%28from_to_%29.md): Encodes a command that copies data from one texture to another.
- [copyFromTexture:sourceSlice:sourceLevel:toTexture:destinationSlice:destinationLevel:sliceCount:levelCount:](copy%28from_sourceslice_sourcelevel_to_destinationslice_destinationlevel_slicecount_levelcount_%29.md): Encodes a command that copies slices of a texture to another texture’s slices.
- [copyFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:](copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationslice_destinationlevel_destinationorigin_%29.md): Encodes a command that copies image data from a texture’s slice into another slice.
