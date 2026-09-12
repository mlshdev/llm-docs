> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/expanddims(_:axis:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/expanddims(_:axis:name:))

# expandDims(\_:axis:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates an expand-dimensions operation and returns the result tensor.

## Declaration

```swift
func expandDims(_ tensor: MPSGraphTensor, axis: Int, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor.
- `axis`: The axis to expand.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Expands the tensor, inserting a dimension with size 1 at the specified axis.

# expandDimsOfTensor:axis:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates an expand-dimensions operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) expandDimsOfTensor:(MPSGraphTensor *) tensor axis:(NSInteger) axis name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor.
- `axis`: The axis to expand.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Expands the tensor, inserting a dimension with size 1 at the specified axis.
