> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/gradients(of:with:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/gradients(of:with:name:))

# gradients(of:with:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates a partial derivative of primaryTensor with respect to the tensors.

## Declaration

```swift
func gradients(of primaryTensor: MPSGraphTensor, with tensors: [MPSGraphTensor], name: String?) -> [MPSGraphTensor : MPSGraphTensor]
```

## Parameters

- `primaryTensor`: Tensor to be differentiated (numerator).
- `tensors`: Tensors to do the differentiation with (denominator).
- `name`: Name for the gradient operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor dictionary object containing partial derivative d(primaryTensor)/d(secondaryTensor) for each tensor as key.

# gradientForPrimaryTensor:withTensors:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates a partial derivative of primaryTensor with respect to the tensors.

## Declaration

```objectivec
- (NSDictionary<MPSGraphTensor *,MPSGraphTensor *> *) gradientForPrimaryTensor:(MPSGraphTensor *) primaryTensor withTensors:(NSArray<MPSGraphTensor *> *) tensors name:(NSString *) name;
```

## Parameters

- `primaryTensor`: Tensor to be differentiated (numerator).
- `tensors`: Tensors to do the differentiation with (denominator).
- `name`: Name for the gradient operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor dictionary object containing partial derivative d(primaryTensor)/d(secondaryTensor) for each tensor as key.
