> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/relugradient(withincominggradient:sourcetensor:name:)

# reLUGradient(withIncomingGradient:sourceTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Computes the gradient of the ReLU  (rectified linear activation unit) function using the incoming gradient.

## Declaration

```swift
func reLUGradient(withIncomingGradient gradient: MPSGraphTensor, sourceTensor source: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `gradient`: The incoming gradient tensor.
- `source`: The input tensor from forward pass.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object.

# reLUGradientWithIncomingGradient:sourceTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Computes the gradient of the ReLU  (rectified linear activation unit) function using the incoming gradient.

## Declaration

```objectivec
- (MPSGraphTensor *) reLUGradientWithIncomingGradient:(MPSGraphTensor *) gradient sourceTensor:(MPSGraphTensor *) source name:(NSString *) name;
```

## Parameters

- `gradient`: The incoming gradient tensor.
- `source`: The input tensor from forward pass.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object.
