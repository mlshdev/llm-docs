> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/sort(_:axistensor:descending:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/sort(_:axistensor:descending:name:))

# sort(\_:axisTensor:descending:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Sorts the elements of the input tensor along the specified axis.

## Declaration

```swift
func sort(_ tensor: MPSGraphTensor, axisTensor: MPSGraphTensor, descending: Bool, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor
- `axisTensor`: The tensor dimension over which you sort the tensor
- `descending`: If true, reverse the sort direction
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

# sortWithTensor:axisTensor:descending:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Sorts the elements of the input tensor along the specified axis.

## Declaration

```objectivec
- (MPSGraphTensor *) sortWithTensor:(MPSGraphTensor *) tensor axisTensor:(MPSGraphTensor *) axisTensor descending:(BOOL) descending name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor
- `axisTensor`: The tensor dimension over which you sort the tensor
- `descending`: If true, reverse the sort direction
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object
