> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarrayidentity/reshape(withmtl4commandencoder:sourcearray:dimensioncount:dimensionsizes:destinationarray:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarrayidentity/reshape(withmtl4commandencoder:sourcearray:dimensioncount:dimensionsizes:destinationarray:))

# reshape(withMTL4CommandEncoder:sourceArray:dimensionCount:dimensionSizes:destinationArray:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func reshape(withMTL4CommandEncoder encoder: any MTL4ComputeCommandEncoder, sourceArray: MPSNDArray, dimensionCount numberOfDimensions: Int, dimensionSizes: UnsafeMutablePointer<Int>, destinationArray: MPSNDArray)
```

## Parameters

- `encoder`: The MTL4ComputeCommandEncoder to encode the kernel with.
- `sourceArray`: The source NDArray.
- `numberOfDimensions`: The NDArray’s dimension count.
- `dimensionSizes`: The extents of each dimension of the NDArray.
- `destinationArray`: The destination NDArray. The shape of `destinationArray` must match `numberOfDimensions` and `dimensionSizes`.

<a id="discussion"></a>

## Discussion

Encode a reshape operation. The encoder associates the commands with MTLStageDispatch. Synchronize your workloads against this stage when using this function to prevent race conditions.

# reshapeWithMTL4CommandEncoder:sourceArray:dimensionCount:dimensionSizes:destinationArray: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) reshapeWithMTL4CommandEncoder:(id<MTL4ComputeCommandEncoder>) encoder sourceArray:(MPSNDArray *) sourceArray dimensionCount:(NSUInteger) numberOfDimensions dimensionSizes:(NSUInteger *) dimensionSizes destinationArray:(MPSNDArray *) destinationArray;
```

## Parameters

- `encoder`: The MTL4ComputeCommandEncoder to encode the kernel with.
- `sourceArray`: The source NDArray.
- `numberOfDimensions`: The NDArray’s dimension count.
- `dimensionSizes`: The extents of each dimension of the NDArray.
- `destinationArray`: The destination NDArray. The shape of `destinationArray` must match `numberOfDimensions` and `dimensionSizes`.

<a id="discussion"></a>

## Discussion

Encode a reshape operation. The encoder associates the commands with MTLStageDispatch. Synchronize your workloads against this stage when using this function to prevent race conditions.
