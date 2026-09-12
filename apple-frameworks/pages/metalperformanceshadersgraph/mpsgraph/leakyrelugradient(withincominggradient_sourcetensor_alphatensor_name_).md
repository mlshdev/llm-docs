> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/leakyrelugradient(withincominggradient:sourcetensor:alphatensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/leakyrelugradient(withincominggradient:sourcetensor:alphatensor:name:))

# leakyReLUGradient(withIncomingGradient:sourceTensor:alphaTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Computes the gradient of the leaky rectified linear unit (ReLU) activation.

## Declaration

```swift
func leakyReLUGradient(withIncomingGradient gradient: MPSGraphTensor, sourceTensor source: MPSGraphTensor, alphaTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `gradient`: The incoming gradient tensor.
- `source`: The input tensor in forward pass.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object

<a id="discussion"></a>

## Discussion

This operation supports broadcasting with the alpha tensor.

# leakyReLUGradientWithIncomingGradient:sourceTensor:alphaTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Computes the gradient of the leaky rectified linear unit (ReLU) activation.

## Declaration

```objectivec
- (MPSGraphTensor *) leakyReLUGradientWithIncomingGradient:(MPSGraphTensor *) gradient sourceTensor:(MPSGraphTensor *) source alphaTensor:(MPSGraphTensor *) alphaTensor name:(NSString *) name;
```

## Parameters

- `gradient`: The incoming gradient tensor.
- `source`: The input tensor in forward pass.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object

<a id="discussion"></a>

## Discussion

This operation supports broadcasting with the alpha tensor.
