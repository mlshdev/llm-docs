> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/slicegradienttensor(_:fwdinshapetensor:start:sizetensor:squeezemask:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/slicegradienttensor(_:fwdinshapetensor:start:sizetensor:squeezemask:name:))

# sliceGradientTensor(\_:fwdInShapeTensor:start:sizeTensor:squeezeMask:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+

Creates a slice gradient operation and returns the result tensor.

## Declaration

```swift
func sliceGradientTensor(_ inputGradientTensor: MPSGraphTensor, fwdInShapeTensor: MPSGraphTensor, start startTensor: MPSGraphTensor, sizeTensor: MPSGraphTensor, squeezeMask: UInt32, name: String?) -> MPSGraphTensor
```

## Parameters

- `inputGradientTensor`: The input gradient.
- `fwdInShapeTensor`: The shape of the forward pass input, that is the shape of the gradient output.
- `startTensor`: The tensor that specifies the starting points for each dimension.
- `sizeTensor`: The tensor that specifies the size of the forward result for each dimension.
- `squeezeMask`: A bitmask that indicates dimensions the operation will squeeze out from the result.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

# sliceGradientTensor:fwdInShapeTensor:startTensor:sizeTensor:squeezeMask:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+

Creates a slice gradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) sliceGradientTensor:(MPSGraphTensor *) inputGradientTensor fwdInShapeTensor:(MPSGraphTensor *) fwdInShapeTensor startTensor:(MPSGraphTensor *) startTensor sizeTensor:(MPSGraphTensor *) sizeTensor squeezeMask:(uint32_t) squeezeMask name:(NSString *) name;
```

## Parameters

- `inputGradientTensor`: The input gradient.
- `fwdInShapeTensor`: The shape of the forward pass input, that is the shape of the gradient output.
- `startTensor`: The tensor that specifies the starting points for each dimension.
- `sizeTensor`: The tensor that specifies the size of the forward result for each dimension.
- `squeezeMask`: A bitmask that indicates dimensions the operation will squeeze out from the result.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object
