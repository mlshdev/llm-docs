> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/cumulativesum(_:axistensor:exclusive:reverse:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/cumulativesum(_:axistensor:exclusive:reverse:name:))

# cumulativeSum(\_:axisTensor:exclusive:reverse:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Computes the cumulative sum of the input tensor along the specified axis.

## Declaration

```swift
func cumulativeSum(_ tensor: MPSGraphTensor, axisTensor: MPSGraphTensor, exclusive: Bool, reverse: Bool, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor
- `axisTensor`: The tensor dimension where you compute the cumulative operation
- `exclusive`: If true, perform the exclusive cumulative operation, and the first element will be equal to zero
- `reverse`: If true, reverse the direction of the cumulative operation along the specified axis
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

# cumulativeSumWithTensor:axisTensor:exclusive:reverse:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Computes the cumulative sum of the input tensor along the specified axis.

## Declaration

```objectivec
- (MPSGraphTensor *) cumulativeSumWithTensor:(MPSGraphTensor *) tensor axisTensor:(MPSGraphTensor *) axisTensor exclusive:(BOOL) exclusive reverse:(BOOL) reverse name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor
- `axisTensor`: The tensor dimension where you compute the cumulative operation
- `exclusive`: If true, perform the exclusive cumulative operation, and the first element will be equal to zero
- `reverse`: If true, reverse the direction of the cumulative operation along the specified axis
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object
