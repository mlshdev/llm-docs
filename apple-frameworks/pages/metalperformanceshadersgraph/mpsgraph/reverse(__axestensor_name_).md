> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/reverse(_:axestensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/reverse(_:axestensor:name:))

# reverse(\_:axesTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a reverse operation and returns the result tensor.

## Declaration

```swift
func reverse(_ tensor: MPSGraphTensor, axesTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The tensor to be reversed.
- `axesTensor`: A tensor that specifies axes to be reversed (Axes must be unique and within normal axis range).
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Reverses a tensor on given axes. Semantics based on [TensorFlow reverse op](https://www.tensorflow.org/api_docs/python/tf/reverse).

# reverseTensor:axesTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a reverse operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) reverseTensor:(MPSGraphTensor *) tensor axesTensor:(MPSGraphTensor *) axesTensor name:(NSString *) name;
```

## Parameters

- `tensor`: The tensor to be reversed.
- `axesTensor`: A tensor that specifies axes to be reversed (Axes must be unique and within normal axis range).
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Reverses a tensor on given axes. Semantics based on [TensorFlow reverse op](https://www.tensorflow.org/api_docs/python/tf/reverse).
