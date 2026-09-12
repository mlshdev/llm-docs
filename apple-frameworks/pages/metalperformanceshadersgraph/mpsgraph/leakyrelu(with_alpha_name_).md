> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/leakyrelu(with:alpha:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/leakyrelu(with:alpha:name:))

# leakyReLU(with:alpha:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Computes the leaky rectified linear unit (ReLU) activation function on the input tensor.

## Declaration

```swift
func leakyReLU(with tensor: MPSGraphTensor, alpha: Double, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: An input tensor.
- `alpha`: The scalar value alpha used by all elements in the input tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object

<a id="discussion"></a>

## Discussion

The operation is: f(x) = max(x, alpha).

# leakyReLUWithTensor:alpha:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Computes the leaky rectified linear unit (ReLU) activation function on the input tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) leakyReLUWithTensor:(MPSGraphTensor *) tensor alpha:(double) alpha name:(NSString *) name;
```

## Parameters

- `tensor`: An input tensor.
- `alpha`: The scalar value alpha used by all elements in the input tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object

<a id="discussion"></a>

## Discussion

The operation is: f(x) = max(x, alpha).
