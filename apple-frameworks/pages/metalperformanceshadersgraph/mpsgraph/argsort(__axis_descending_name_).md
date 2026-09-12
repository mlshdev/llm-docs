> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/argsort(_:axis:descending:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/argsort(_:axis:descending:name:))

# argSort(\_:axis:descending:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+

Computes the indices that sort the elements of the input tensor along the specified axis.

## Declaration

```swift
func argSort(_ tensor: MPSGraphTensor, axis: Int, descending: Bool, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor
- `axis`: The tensor dimension over which you sort the tensor
- `descending`: If true, reverse the sort direction
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object with 32-bit integer data type

# argSortWithTensor:axis:descending:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+

Computes the indices that sort the elements of the input tensor along the specified axis.

## Declaration

```objectivec
- (MPSGraphTensor *) argSortWithTensor:(MPSGraphTensor *) tensor axis:(NSInteger) axis descending:(BOOL) descending name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor
- `axis`: The tensor dimension over which you sort the tensor
- `descending`: If true, reverse the sort direction
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object with 32-bit integer data type
