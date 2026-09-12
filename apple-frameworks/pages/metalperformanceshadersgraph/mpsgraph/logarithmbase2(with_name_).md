> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/logarithmbase2(with:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/logarithmbase2(with:name:))

# logarithmBase2(with:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Computes the logarithm with base 2 to the input tensor elements.

## Declaration

```swift
func logarithmBase2(with tensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor.
- `name`: An optional string which serves as an identifier for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.

# logarithmBase2WithTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Computes the logarithm with base 2 to the input tensor elements.

## Declaration

```objectivec
- (MPSGraphTensor *) logarithmBase2WithTensor:(MPSGraphTensor *) tensor name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor.
- `name`: An optional string which serves as an identifier for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.
