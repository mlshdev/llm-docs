> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/variance(of:axes:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/variance(of:axes:name:))

# variance(of:axes:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the variance of the first input along the specified axes.

## Declaration

```swift
func variance(of tensor: MPSGraphTensor, axes: [NSNumber], name: String?) -> MPSGraphTensor
```

## Parameters

- `axes`: A list of axes over which to perform the reduction. Tthe order of dimensions goes from the slowest moving at axis=0 to the fastest moving dimension.
- `name`: An optional name for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object.

# varianceOfTensor:axes:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the variance of the first input along the specified axes.

## Declaration

```objectivec
- (MPSGraphTensor *) varianceOfTensor:(MPSGraphTensor *) tensor axes:(NSArray<NSNumber *> *) axes name:(NSString *) name;
```

## Parameters

- `axes`: A list of axes over which to perform the reduction. Tthe order of dimensions goes from the slowest moving at axis=0 to the fastest moving dimension.
- `name`: An optional name for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object.
