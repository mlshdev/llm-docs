> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/cumulativeminimum(_:axistensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/cumulativeminimum(_:axistensor:name:))

# cumulativeMinimum(\_:axisTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Computes the cumulative minimum of the input tensor along the specified axis.

## Declaration

```swift
func cumulativeMinimum(_ tensor: MPSGraphTensor, axisTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor
- `axisTensor`: The tensor dimension where you compute the cumulative operation
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

# cumulativeMinimumWithTensor:axisTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Computes the cumulative minimum of the input tensor along the specified axis.

## Declaration

```objectivec
- (MPSGraphTensor *) cumulativeMinimumWithTensor:(MPSGraphTensor *) tensor axisTensor:(MPSGraphTensor *) axisTensor name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor
- `axisTensor`: The tensor dimension where you compute the cumulative operation
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object
