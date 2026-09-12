> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/slicegradienttensor(_:fwdinshapetensor:starts:ends:strides:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/slicegradienttensor(_:fwdinshapetensor:starts:ends:strides:name:))

# sliceGradientTensor(\_:fwdInShapeTensor:starts:ends:strides:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a strided-slice gradient operation and returns the result tensor.

## Declaration

```swift
func sliceGradientTensor(_ inputGradientTensor: MPSGraphTensor, fwdInShapeTensor: MPSGraphTensor, starts: [NSNumber], ends: [NSNumber], strides: [NSNumber], name: String?) -> MPSGraphTensor
```

## Parameters

- `inputGradientTensor`: The input gradient.
- `fwdInShapeTensor`: The shape of the forward pass input, that is the shape of the gradient output.
- `starts`: An array of numbers that specify the starting points for each dimension.
- `ends`: An array of numbers that specify the ending points for each dimension.
- `strides`: An array of numbers that specify the strides for each dimension.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

# sliceGradientTensor:fwdInShapeTensor:starts:ends:strides:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a strided-slice gradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) sliceGradientTensor:(MPSGraphTensor *) inputGradientTensor fwdInShapeTensor:(MPSGraphTensor *) fwdInShapeTensor starts:(NSArray<NSNumber *> *) starts ends:(NSArray<NSNumber *> *) ends strides:(NSArray<NSNumber *> *) strides name:(NSString *) name;
```

## Parameters

- `inputGradientTensor`: The input gradient.
- `fwdInShapeTensor`: The shape of the forward pass input, that is the shape of the gradient output.
- `starts`: An array of numbers that specify the starting points for each dimension.
- `ends`: An array of numbers that specify the ending points for each dimension.
- `strides`: An array of numbers that specify the strides for each dimension.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object
