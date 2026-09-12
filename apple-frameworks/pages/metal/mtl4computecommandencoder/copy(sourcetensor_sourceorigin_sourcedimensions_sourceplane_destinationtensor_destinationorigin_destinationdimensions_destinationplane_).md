> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/copy(sourcetensor:sourceorigin:sourcedimensions:sourceplane:destinationtensor:destinationorigin:destinationdimensions:destinationplane:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/copy(sourcetensor:sourceorigin:sourcedimensions:sourceplane:destinationtensor:destinationorigin:destinationdimensions:destinationplane:))

# copy(sourceTensor:sourceOrigin:sourceDimensions:sourcePlane:destinationTensor:destinationOrigin:destinationDimensions:destinationPlane:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Encodes a command to copy data from a slice of a plane of a tensor into a slice of a plane of another tensor.

## Declaration

```swift
func copy(sourceTensor: any MTLTensor, sourceOrigin: MTLTensorExtents, sourceDimensions: MTLTensorExtents, sourcePlane: MTLTensorPlaneType, destinationTensor: any MTLTensor, destinationOrigin: MTLTensorExtents, destinationDimensions: MTLTensorExtents, destinationPlane: MTLTensorPlaneType)
```

## Parameters

- `sourceTensor`: A tensor instance the method copies data from.
- `sourceOrigin`: An array of per-dimension offsets that together locate the first element to copy in `sourceTensor`. Each element in this array corresponds to the dimension at the same index in `sourceDimensions`. Each offset value represents the number of elements from the start of that dimension.
- `sourceDimensions`: An array of per-dimension sizes that together define the extent of the slice to copy from `sourceTensor`. Each element in this array corresponds to the dimension at the same index in `sourceOrigin`. Each size value represents the number of elements to include along that dimension, starting from the corresponding offset in `sourceOrigin`.
- `sourcePlane`: The plane the method copies data from.
- `destinationTensor`: A tensor instance the method copies data to.
- `destinationOrigin`: An array of per-dimension offsets that together locate the first element to write in `destinationTensor`. Each element in this array corresponds to the dimension at the same index in `destinationDimensions`. Each offset value represents the number of elements from the start of that dimension.
- `destinationDimensions`: An array of per-dimension sizes that together define the extent of the slice to write in `destinationTensor`. Each element in this array corresponds to the dimension at the same index in `destinationOrigin`. Each size value represents the number of elements to include along that dimension, starting from the corresponding offset in `destinationOrigin`.
- `destinationPlane`: The plane the method copies data to.

<a id="discussion"></a>

## Discussion

If `sourceTensor` and `destinationTensor` are not aliasable, this command applies a reshape operation. For auxiliary planes, specify origin and dimensions in plane coordinates by applying the corresponding auxiliary plane’s block factors.

Ensure the first dimension of `sourceOrigin`, `sourceDimensions`, `destinationOrigin`, and `destinationDimensions` is byte aligned.

# copyFromTensor:sourceOrigin:sourceDimensions:sourcePlane:toTensor:destinationOrigin:destinationDimensions:destinationPlane: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Encodes a command to copy data from a slice of a plane of a tensor into a slice of a plane of another tensor.

## Declaration

```objectivec
- (void) copyFromTensor:(id<MTLTensor>) sourceTensor sourceOrigin:(MTLTensorExtents *) sourceOrigin sourceDimensions:(MTLTensorExtents *) sourceDimensions sourcePlane:(MTLTensorPlaneType) sourcePlane toTensor:(id<MTLTensor>) destinationTensor destinationOrigin:(MTLTensorExtents *) destinationOrigin destinationDimensions:(MTLTensorExtents *) destinationDimensions destinationPlane:(MTLTensorPlaneType) destinationPlane;
```

## Parameters

- `sourceTensor`: A tensor instance the method copies data from.
- `sourceOrigin`: An array of per-dimension offsets that together locate the first element to copy in `sourceTensor`. Each element in this array corresponds to the dimension at the same index in `sourceDimensions`. Each offset value represents the number of elements from the start of that dimension.
- `sourceDimensions`: An array of per-dimension sizes that together define the extent of the slice to copy from `sourceTensor`. Each element in this array corresponds to the dimension at the same index in `sourceOrigin`. Each size value represents the number of elements to include along that dimension, starting from the corresponding offset in `sourceOrigin`.
- `sourcePlane`: The plane the method copies data from.
- `destinationTensor`: A tensor instance the method copies data to.
- `destinationOrigin`: An array of per-dimension offsets that together locate the first element to write in `destinationTensor`. Each element in this array corresponds to the dimension at the same index in `destinationDimensions`. Each offset value represents the number of elements from the start of that dimension.
- `destinationDimensions`: An array of per-dimension sizes that together define the extent of the slice to write in `destinationTensor`. Each element in this array corresponds to the dimension at the same index in `destinationOrigin`. Each size value represents the number of elements to include along that dimension, starting from the corresponding offset in `destinationOrigin`.
- `destinationPlane`: The plane the method copies data to.

<a id="discussion"></a>

## Discussion

If `sourceTensor` and `destinationTensor` are not aliasable, this command applies a reshape operation. For auxiliary planes, specify origin and dimensions in plane coordinates by applying the corresponding auxiliary plane’s block factors.

Ensure the first dimension of `sourceOrigin`, `sourceDimensions`, `destinationOrigin`, and `destinationDimensions` is byte aligned.
