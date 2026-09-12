> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/logicalxnor(_:_:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/logicalxnor(_:_:name:))

# logicalXNOR(\_:\_:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the elementwise logical XNOR of the input tensors.

## Declaration

```swift
func logicalXNOR(_ primaryTensor: MPSGraphTensor, _ secondaryTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `primaryTensor`: The LHS tensor of the binary Op.
- `secondaryTensor`: The RHS tensor of the binary Op.
- `name`: An optional string which serves as an identifier for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.

<a id="discussion"></a>

## Discussion

This operation creates a logical XNOR operation and returns the result tensor. It supports broadcasting as well.

```md
resultTensor = XNOR(primaryTensor, secondaryTensor)
```

# logicalXNORWithPrimaryTensor:secondaryTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the elementwise logical XNOR of the input tensors.

## Declaration

```objectivec
- (MPSGraphTensor *) logicalXNORWithPrimaryTensor:(MPSGraphTensor *) primaryTensor secondaryTensor:(MPSGraphTensor *) secondaryTensor name:(NSString *) name;
```

## Parameters

- `primaryTensor`: The LHS tensor of the binary Op.
- `secondaryTensor`: The RHS tensor of the binary Op.
- `name`: An optional string which serves as an identifier for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.

<a id="discussion"></a>

## Discussion

This operation creates a logical XNOR operation and returns the result tensor. It supports broadcasting as well.

```md
resultTensor = XNOR(primaryTensor, secondaryTensor)
```
