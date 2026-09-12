> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/leakyrelu(with:alphatensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/leakyrelu(with:alphatensor:name:))

# leakyReLU(with:alphaTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Computes the leaky rectified linear unit (ReLU) activation function on the input tensor.

## Declaration

```swift
func leakyReLU(with tensor: MPSGraphTensor, alphaTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object

<a id="discussion"></a>

## Discussion

The operation is: f(x) = max(x, alpha). This operation supports broadcasting with the alpha tensor.

# leakyReLUWithTensor:alphaTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Computes the leaky rectified linear unit (ReLU) activation function on the input tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) leakyReLUWithTensor:(MPSGraphTensor *) tensor alphaTensor:(MPSGraphTensor *) alphaTensor name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object

<a id="discussion"></a>

## Discussion

The operation is: f(x) = max(x, alpha). This operation supports broadcasting with the alpha tensor.
