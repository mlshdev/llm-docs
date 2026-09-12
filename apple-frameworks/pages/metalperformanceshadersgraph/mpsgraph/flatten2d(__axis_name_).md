> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/flatten2d(_:axis:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/flatten2d(_:axis:name:))

# flatten2D(\_:axis:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a flatten2D operation and returns the result tensor.

## Declaration

```swift
func flatten2D(_ tensor: MPSGraphTensor, axis: Int, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The tensor to be flattened.
- `axis`: The axis around which to flatten.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Flattens dimensions before `axis` to `result[0]` and dimensions starting from `axis` to `result[1]` and returns a rank-2 tensor as result.

# flatten2DTensor:axis:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a flatten2D operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) flatten2DTensor:(MPSGraphTensor *) tensor axis:(NSInteger) axis name:(NSString *) name;
```

## Parameters

- `tensor`: The tensor to be flattened.
- `axis`: The axis around which to flatten.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Flattens dimensions before `axis` to `result[0]` and dimensions starting from `axis` to `result[1]` and returns a rank-2 tensor as result.
