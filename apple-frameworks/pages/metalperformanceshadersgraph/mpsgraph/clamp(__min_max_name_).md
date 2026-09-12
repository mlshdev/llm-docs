> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/clamp(_:min:max:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/clamp(_:min:max:name:))

# clamp(\_:min:max:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Clamps the values in the first tensor between the corresponding values in the minimum and maximum value tensor.

## Declaration

```swift
func clamp(_ tensor: MPSGraphTensor, min minValueTensor: MPSGraphTensor, max maxValueTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The tensor to be clamped.
- `minValueTensor`: The tensor with min values to clamp to.
- `name`: An optional string which serves as an identifier for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.

<a id="discussion"></a>

## Discussion

This operation creates a clamp operation and returns the result tensor. It supports broadcasting as well.

```md
resultTensor = clamp(tensor, minValueTensor, maxValueTensor)
```

# clampWithTensor:minValueTensor:maxValueTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Clamps the values in the first tensor between the corresponding values in the minimum and maximum value tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) clampWithTensor:(MPSGraphTensor *) tensor minValueTensor:(MPSGraphTensor *) minValueTensor maxValueTensor:(MPSGraphTensor *) maxValueTensor name:(NSString *) name;
```

## Parameters

- `tensor`: The tensor to be clamped.
- `minValueTensor`: The tensor with min values to clamp to.
- `name`: An optional string which serves as an identifier for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.

<a id="discussion"></a>

## Discussion

This operation creates a clamp operation and returns the result tensor. It supports broadcasting as well.

```md
resultTensor = clamp(tensor, minValueTensor, maxValueTensor)
```
