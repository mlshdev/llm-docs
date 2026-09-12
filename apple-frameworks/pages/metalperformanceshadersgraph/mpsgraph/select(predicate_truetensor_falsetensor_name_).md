> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/select(predicate:truetensor:falsetensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/select(predicate:truetensor:falsetensor:name:))

# select(predicate:trueTensor:falseTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Selects values from either the true or false predicate tensor, depending on the values in the first input.

## Declaration

```swift
func select(predicate predicateTensor: MPSGraphTensor, trueTensor truePredicateTensor: MPSGraphTensor, falseTensor falseSelectTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `predicateTensor`: The predicate tensor.
- `truePredicateTensor`: The tensor to select values from if predicate is true.
- `falseSelectTensor`: The tensor to select values from if predicate is false.
- `name`: An optional string which serves as an identifier for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.

<a id="discussion"></a>

## Discussion

This operation creates a select operation and returns the result tensor. It supports broadcasting as well.

```md
resultTensor = select(predicateTensor, truePredicateTensor, falseSelectTensor)
```

# selectWithPredicateTensor:truePredicateTensor:falsePredicateTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Selects values from either the true or false predicate tensor, depending on the values in the first input.

## Declaration

```objectivec
- (MPSGraphTensor *) selectWithPredicateTensor:(MPSGraphTensor *) predicateTensor truePredicateTensor:(MPSGraphTensor *) truePredicateTensor falsePredicateTensor:(MPSGraphTensor *) falseSelectTensor name:(NSString *) name;
```

## Parameters

- `predicateTensor`: The predicate tensor.
- `truePredicateTensor`: The tensor to select values from if predicate is true.
- `falseSelectTensor`: The tensor to select values from if predicate is false.
- `name`: An optional string which serves as an identifier for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.

<a id="discussion"></a>

## Discussion

This operation creates a select operation and returns the result tensor. It supports broadcasting as well.

```md
resultTensor = select(predicateTensor, truePredicateTensor, falseSelectTensor)
```
