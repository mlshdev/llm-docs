> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/signbit(with:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/signbit(with:name:))

# signbit(with:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the sign bit of the input tensor elements.

## Declaration

```swift
func signbit(with tensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor.
- `name`: An optional string which serves as an identifier for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.

<a id="discussion"></a>

## Discussion

This operation returns `true` if the sign bit is set for the correspnding floating-point input element, otherwise it returns `false`.

# signbitWithTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the sign bit of the input tensor elements.

## Declaration

```objectivec
- (MPSGraphTensor *) signbitWithTensor:(MPSGraphTensor *) tensor name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor.
- `name`: An optional string which serves as an identifier for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.

<a id="discussion"></a>

## Discussion

This operation returns `true` if the sign bit is set for the correspnding floating-point input element, otherwise it returns `false`.
