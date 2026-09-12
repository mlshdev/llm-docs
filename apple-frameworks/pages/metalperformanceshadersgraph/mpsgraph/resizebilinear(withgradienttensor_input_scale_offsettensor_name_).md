> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/resizebilinear(withgradienttensor:input:scale:offsettensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/resizebilinear(withgradienttensor:input:scale:offsettensor:name:))

# resizeBilinear(withGradientTensor:input:scale:offsetTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a Resize gradient operation and returns the result tensor.

## Declaration

```swift
func resizeBilinear(withGradientTensor gradient: MPSGraphTensor, input: MPSGraphTensor, scale: MPSGraphTensor, offsetTensor offset: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `gradient`: Incoming gradient tensor
- `input`: Forward pass input tensor
- `scale`: 1D float tensor of size equal to rank of input.
- `offset`: 1D float tensor of size equal to rank of input.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Computes the gradient for the forward pass Resize op with bilinear sampling and identical parameters.

# resizeBilinearWithGradientTensor:input:scaleTensor:offsetTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a Resize gradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) resizeBilinearWithGradientTensor:(MPSGraphTensor *) gradient input:(MPSGraphTensor *) input scaleTensor:(MPSGraphTensor *) scale offsetTensor:(MPSGraphTensor *) offset name:(NSString *) name;
```

## Parameters

- `gradient`: Incoming gradient tensor
- `input`: Forward pass input tensor
- `scale`: 1D float tensor of size equal to rank of input.
- `offset`: 1D float tensor of size equal to rank of input.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Computes the gradient for the forward pass Resize op with bilinear sampling and identical parameters.
