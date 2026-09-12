> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/bitwiseleftshift(_:_:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/bitwiseleftshift(_:_:name:))

# bitwiseLeftShift(\_:\_:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+

Returns the elementwise left-shifted binary representations of the primary integer by the secondary tensor amount.

## Declaration

```swift
func bitwiseLeftShift(_ primaryTensor: MPSGraphTensor, _ secondaryTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `primaryTensor`: The primary input tensor, must be of integer type.
- `secondaryTensor`: The secondary input tensor, must be of integer type.
- `name`: An optional string which serves as an identifier for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.

# bitwiseLeftShiftWithPrimaryTensor:secondaryTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+

Returns the elementwise left-shifted binary representations of the primary integer by the secondary tensor amount.

## Declaration

```objectivec
- (MPSGraphTensor *) bitwiseLeftShiftWithPrimaryTensor:(MPSGraphTensor *) primaryTensor secondaryTensor:(MPSGraphTensor *) secondaryTensor name:(NSString *) name;
```

## Parameters

- `primaryTensor`: The primary input tensor, must be of integer type.
- `secondaryTensor`: The secondary input tensor, must be of integer type.
- `name`: An optional string which serves as an identifier for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.
