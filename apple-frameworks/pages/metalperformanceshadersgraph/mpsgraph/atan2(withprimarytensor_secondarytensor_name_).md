> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/atan2(withprimarytensor:secondarytensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/atan2(withprimarytensor:secondarytensor:name:))

# atan2(withPrimaryTensor:secondaryTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the elementwise two-argument arctangent of the input tensors.

## Declaration

```swift
func atan2(withPrimaryTensor primaryTensor: MPSGraphTensor, secondaryTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
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

This operation creates a `atan2` operation and returns the result tensor. It supports broadcasting as well. Graph computes arc tangent of primaryTensor over secondaryTensor.

```md
resultTensor = atan2(primaryTensor, secondaryTensor)
```

# atan2WithPrimaryTensor:secondaryTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the elementwise two-argument arctangent of the input tensors.

## Declaration

```objectivec
- (MPSGraphTensor *) atan2WithPrimaryTensor:(MPSGraphTensor *) primaryTensor secondaryTensor:(MPSGraphTensor *) secondaryTensor name:(NSString *) name;
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

This operation creates a `atan2` operation and returns the result tensor. It supports broadcasting as well. Graph computes arc tangent of primaryTensor over secondaryTensor.

```md
resultTensor = atan2(primaryTensor, secondaryTensor)
```
