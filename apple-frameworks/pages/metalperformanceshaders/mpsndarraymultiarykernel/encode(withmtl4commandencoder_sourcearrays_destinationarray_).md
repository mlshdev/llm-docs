> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarraymultiarykernel/encode(withmtl4commandencoder:sourcearrays:destinationarray:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarraymultiarykernel/encode(withmtl4commandencoder:sourcearrays:destinationarray:))

# encode(withMTL4CommandEncoder:sourceArrays:destinationArray:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func encode(withMTL4CommandEncoder encoder: any MTL4ComputeCommandEncoder, sourceArrays: [MPSNDArray], destinationArray destination: MPSNDArray)
```

## Parameters

- `encoder`: The MTL4ComputeCommandEncoder to encode the kernel with.
- `sourceArrays`: The source NDArray instances in a NSArray. Make sure the instances are arranged in the order required by the MPSNDArrayMultiaryKernel subclass.
- `destination`: The destination NDArray.

<a id="discussion"></a>

## Discussion

Encode a simple inference NDArray kernel. The encoder associates the commands with MTLStageDispatch. Synchronize your workloads against this stage when using this function to prevent race conditions.

# encodeWithMTL4CommandEncoder:sourceArrays:destinationArray: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) encodeWithMTL4CommandEncoder:(id<MTL4ComputeCommandEncoder>) encoder sourceArrays:(NSArray<MPSNDArray *> *) sourceArrays destinationArray:(MPSNDArray *) destination;
```

## Parameters

- `encoder`: The MTL4ComputeCommandEncoder to encode the kernel with.
- `sourceArrays`: The source NDArray instances in a NSArray. Make sure the instances are arranged in the order required by the MPSNDArrayMultiaryKernel subclass.
- `destination`: The destination NDArray.

<a id="discussion"></a>

## Discussion

Encode a simple inference NDArray kernel. The encoder associates the commands with MTLStageDispatch. Synchronize your workloads against this stage when using this function to prevent race conditions.
