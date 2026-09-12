> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/inverse(input:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/inverse(input:name:))

# inverse(input:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+

Computes the inverse of an input tensor.

## Declaration

```swift
func inverse(input inputTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `inputTensor`: The input tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object containing the inverse of the input tensor.

<a id="discussion"></a>

## Discussion

The framework computes the inverse of a square matrix by calling LU decomposition and LU solver. All dimensions after the first 2 are treated as batch dimensions and the inverse for each batch is computed. Results are undefined for ill conditioned matrices.

# inverseOfTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+

Computes the inverse of an input tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) inverseOfTensor:(MPSGraphTensor *) inputTensor name:(NSString *) name;
```

## Parameters

- `inputTensor`: The input tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object containing the inverse of the input tensor.

<a id="discussion"></a>

## Discussion

The framework computes the inverse of a square matrix by calling LU decomposition and LU solver. All dimensions after the first 2 are treated as batch dimensions and the inverse for each batch is computed. Results are undefined for ill conditioned matrices.
