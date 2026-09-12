> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/squeeze(_:axis:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/squeeze(_:axis:name:))

# squeeze(\_:axis:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a squeeze operation and returns the result tensor.

## Declaration

```swift
func squeeze(_ tensor: MPSGraphTensor, axis: Int, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor.
- `axis`: The axis to squeeze.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Squeezes the tensor, removing a dimension with size 1 at the specified axis. The size of the input tensor must be 1 at the specified axis.

# squeezeTensor:axis:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a squeeze operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) squeezeTensor:(MPSGraphTensor *) tensor axis:(NSInteger) axis name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor.
- `axis`: The axis to squeeze.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Squeezes the tensor, removing a dimension with size 1 at the specified axis. The size of the input tensor must be 1 at the specified axis.
