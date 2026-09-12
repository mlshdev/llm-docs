> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/lessthanorequalto(_:_:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/lessthanorequalto(_:_:name:))

# lessThanOrEqualTo(\_:\_:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Checks in an elementwise manner if the first input tensor is less than or equal to the second.

## Declaration

```swift
func lessThanOrEqualTo(_ primaryTensor: MPSGraphTensor, _ secondaryTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
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

This operation creates a `lessThanOrEqualTo` operation and returns the result tensor. It supports broadcasting as well.

```md
resultTensor = primaryTensor <= secondaryTensor
```

# lessThanOrEqualToWithPrimaryTensor:secondaryTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Checks in an elementwise manner if the first input tensor is less than or equal to the second.

## Declaration

```objectivec
- (MPSGraphTensor *) lessThanOrEqualToWithPrimaryTensor:(MPSGraphTensor *) primaryTensor secondaryTensor:(MPSGraphTensor *) secondaryTensor name:(NSString *) name;
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

This operation creates a `lessThanOrEqualTo` operation and returns the result tensor. It supports broadcasting as well.

```md
resultTensor = primaryTensor <= secondaryTensor
```
