> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/cumulativeminimum(_:axistensor:exclusive:reverse:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/cumulativeminimum(_:axistensor:exclusive:reverse:name:))

# cumulativeMinimum(\_:axisTensor:exclusive:reverse:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Computes the cumulative minimum of the input tensor along the specified axis.

## Declaration

```swift
func cumulativeMinimum(_ tensor: MPSGraphTensor, axisTensor: MPSGraphTensor, exclusive: Bool, reverse: Bool, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor
- `axisTensor`: The tensor dimension where you compute the cumulative operation
- `exclusive`: If true, perform the exclusive cumulative operation, and the first element will be equal to the largest value of the tensor data type
- `reverse`: If true, reverse the direction of the cumulative operation along the specified axis
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

# cumulativeMinimumWithTensor:axisTensor:exclusive:reverse:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Computes the cumulative minimum of the input tensor along the specified axis.

## Declaration

```objectivec
- (MPSGraphTensor *) cumulativeMinimumWithTensor:(MPSGraphTensor *) tensor axisTensor:(MPSGraphTensor *) axisTensor exclusive:(BOOL) exclusive reverse:(BOOL) reverse name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor
- `axisTensor`: The tensor dimension where you compute the cumulative operation
- `exclusive`: If true, perform the exclusive cumulative operation, and the first element will be equal to the largest value of the tensor data type
- `reverse`: If true, reverse the direction of the cumulative operation along the specified axis
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object
