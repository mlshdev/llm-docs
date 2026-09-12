> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/reductionor(with:axes:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/reductionor(with:axes:name:))

# reductionOr(with:axes:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.3+ · iPadOS 15.3+ · Mac Catalyst 15.3+ · macOS 12.2+ · tvOS 15.3+ · visionOS 1.0+

Creates a reduction or operation and returns the result tensor.

## Declaration

```swift
func reductionOr(with tensor: MPSGraphTensor, axes: [NSNumber]?, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: Input tensor
- `axes`: Axes of reduction
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# reductionOrWithTensor:axes:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.3+ · iPadOS 15.3+ · Mac Catalyst 15.3+ · macOS 12.2+ · tvOS 15.3+ · visionOS 1.0+

Creates a reduction or operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) reductionOrWithTensor:(MPSGraphTensor *) tensor axes:(NSArray<NSNumber *> *) axes name:(NSString *) name;
```

## Parameters

- `tensor`: Input tensor
- `axes`: Axes of reduction
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
