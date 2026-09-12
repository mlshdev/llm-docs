> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/relu(with:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/relu(with:name:))

# reLU(with:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Computes the ReLU (rectified linear activation unit) function with the input tensor.

## Declaration

```swift
func reLU(with tensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object.

<a id="discussion"></a>

## Discussion

The operation is:  f(x) = max(x, 0).

# reLUWithTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Computes the ReLU (rectified linear activation unit) function with the input tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) reLUWithTensor:(MPSGraphTensor *) tensor name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object.

<a id="discussion"></a>

## Discussion

The operation is:  f(x) = max(x, 0).
