> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/reductionargmaximum(with:axis:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/reductionargmaximum(with:axis:name:))

# reductionArgMaximum(with:axis:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a reduction argMax operation and returns the result tensor.

## Declaration

```swift
func reductionArgMaximum(with tensor: MPSGraphTensor, axis: Int, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: Input tensor
- `axis`: Axis of reduction
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# reductionArgMaximumWithTensor:axis:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a reduction argMax operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) reductionArgMaximumWithTensor:(MPSGraphTensor *) tensor axis:(NSInteger) axis name:(NSString *) name;
```

## Parameters

- `tensor`: Input tensor
- `axis`: Axis of reduction
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
