> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/reductionor(with:axis:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/reductionor(with:axis:name:))

# reductionOr(with:axis:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.3+ · iPadOS 15.3+ · Mac Catalyst 15.3+ · macOS 12.2+ · tvOS 15.3+ · visionOS 1.0+

Creates a reduction or operation and returns the result tensor.

## Declaration

```swift
func reductionOr(with tensor: MPSGraphTensor, axis: Int, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: Input tensor
- `axis`: Axis of reduction
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# reductionOrWithTensor:axis:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.3+ · iPadOS 15.3+ · Mac Catalyst 15.3+ · macOS 12.2+ · tvOS 15.3+ · visionOS 1.0+

Creates a reduction or operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) reductionOrWithTensor:(MPSGraphTensor *) tensor axis:(NSInteger) axis name:(NSString *) name;
```

## Parameters

- `tensor`: Input tensor
- `axis`: Axis of reduction
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
