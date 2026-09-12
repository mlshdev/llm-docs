> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/reciprocalsquareroot(_:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/reciprocalsquareroot(_:name:))

# reciprocalSquareRoot(\_:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Applies the reciprocal square root operation to the input tensor elements.

## Declaration

```swift
func reciprocalSquareRoot(_ tensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor.
- `name`: An optional string which serves as an identifier for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.

# reciprocalSquareRootWithTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Applies the reciprocal square root operation to the input tensor elements.

## Declaration

```objectivec
- (MPSGraphTensor *) reciprocalSquareRootWithTensor:(MPSGraphTensor *) tensor name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor.
- `name`: An optional string which serves as an identifier for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.
