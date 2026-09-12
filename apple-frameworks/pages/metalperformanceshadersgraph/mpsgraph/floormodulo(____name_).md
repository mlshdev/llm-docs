> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/floormodulo(_:_:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/floormodulo(_:_:name:))

# floorModulo(\_:\_:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the remainder of floor divison between the primary and secondary tensor.

## Declaration

```swift
func floorModulo(_ primaryTensor: MPSGraphTensor, _ secondaryTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
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

Creates a floorModulo operation and returns the result tensor, it supports broadcasting as well, returns 0 if divisor is 0.

```md
resultTensor = primaryTensor - (floor(primaryTensor / secondaryTensor) * secondaryTensor)
```

# floorModuloWithPrimaryTensor:secondaryTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the remainder of floor divison between the primary and secondary tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) floorModuloWithPrimaryTensor:(MPSGraphTensor *) primaryTensor secondaryTensor:(MPSGraphTensor *) secondaryTensor name:(NSString *) name;
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

Creates a floorModulo operation and returns the result tensor, it supports broadcasting as well, returns 0 if divisor is 0.

```md
resultTensor = primaryTensor - (floor(primaryTensor / secondaryTensor) * secondaryTensor)
```
