> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/softmaxgradient(withincominggradient:sourcetensor:axis:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/softmaxgradient(withincominggradient:sourcetensor:axis:name:))

# softMaxGradient(withIncomingGradient:sourceTensor:axis:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Computes the gradient of the softmax function along the specified axis using the incoming gradient tensor.

## Declaration

```swift
func softMaxGradient(withIncomingGradient gradient: MPSGraphTensor, sourceTensor source: MPSGraphTensor, axis: Int, name: String?) -> MPSGraphTensor
```

## Parameters

- `gradient`: The incoming gradient tensor.
- `source`: The input tensor.
- `axis`: The axis along which softmax is computed.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object

# softMaxGradientWithIncomingGradient:sourceTensor:axis:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Computes the gradient of the softmax function along the specified axis using the incoming gradient tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) softMaxGradientWithIncomingGradient:(MPSGraphTensor *) gradient sourceTensor:(MPSGraphTensor *) source axis:(NSInteger) axis name:(NSString *) name;
```

## Parameters

- `gradient`: The incoming gradient tensor.
- `source`: The input tensor.
- `axis`: The axis along which softmax is computed.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object
