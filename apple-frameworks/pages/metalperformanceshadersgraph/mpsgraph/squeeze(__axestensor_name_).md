> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/squeeze(_:axestensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/squeeze(_:axestensor:name:))

# squeeze(\_:axesTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a squeeze operation and returns the result tensor.

## Declaration

```swift
func squeeze(_ tensor: MPSGraphTensor, axesTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor.
- `axesTensor`: The tensor containing the axes to squeeze.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Squeezes the tensor, removing dimensions with size 1 at specified axes. The size of the input tensor must be 1 at all specified axes.

# squeezeTensor:axesTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a squeeze operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) squeezeTensor:(MPSGraphTensor *) tensor axesTensor:(MPSGraphTensor *) axesTensor name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor.
- `axesTensor`: The tensor containing the axes to squeeze.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Squeezes the tensor, removing dimensions with size 1 at specified axes. The size of the input tensor must be 1 at all specified axes.
