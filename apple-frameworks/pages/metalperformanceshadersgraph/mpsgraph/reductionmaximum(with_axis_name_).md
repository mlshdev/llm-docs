> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/reductionmaximum(with:axis:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/reductionmaximum(with:axis:name:))

# reductionMaximum(with:axis:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a reduction max operation and returns the result tensor.

## Declaration

```swift
func reductionMaximum(with tensor: MPSGraphTensor, axis: Int, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: Input tensor
- `axis`: Axis of reduction
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# reductionMaximumWithTensor:axis:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a reduction max operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) reductionMaximumWithTensor:(MPSGraphTensor *) tensor axis:(NSInteger) axis name:(NSString *) name;
```

## Parameters

- `tensor`: Input tensor
- `axis`: Axis of reduction
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
