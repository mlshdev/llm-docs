> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/sigmoid(with:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/sigmoid(with:name:))

# sigmoid(with:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Computes the sigmoid operation on an input tensor.

## Declaration

```swift
func sigmoid(with tensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object.

# sigmoidWithTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Computes the sigmoid operation on an input tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) sigmoidWithTensor:(MPSGraphTensor *) tensor name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object.
