> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/dropout(_:rate:name:)-6hvf3](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/dropout(_:rate:name:)-6hvf3)

# dropout(\_:rate:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a dropout operation and returns the result

## Declaration

```swift
func dropout(_ tensor: MPSGraphTensor, rate: Double, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: Input tensor
- `rate`: The rate of values to be set to 0
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Removes values in the `tensor` with a percentage chance equal to `rate`. Removed values are set to 0

# dropoutTensor:rate:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a dropout operation and returns the result

## Declaration

```objectivec
- (MPSGraphTensor *) dropoutTensor:(MPSGraphTensor *) tensor rate:(double) rate name:(NSString *) name;
```

## Parameters

- `tensor`: Input tensor
- `rate`: The rate of values to be set to 0
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Removes values in the `tensor` with a percentage chance equal to `rate`. Removed values are set to 0
