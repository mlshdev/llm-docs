> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/dequantize(_:luttensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/dequantize(_:luttensor:name:))

# dequantize(\_:LUTTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a lookup-table based dequantize operation and returns the result tensor.

## Declaration

```swift
func dequantize(_ tensor: MPSGraphTensor, LUTTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: Input constant integer-index tensor to be dequantized.
- `LUTTensor`: The lookup table to use.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object.

<a id="discussion"></a>

## Discussion

Converts a `tensor` of integer indices to a float tensor by applying a lookup operation:

```md
result[i1,...,in] = LUTTensor[i1',...,in',tensor[i1,...,in]].
```

Supported `tensor` index types and required last-dimension size of `LUTTensor`:

- `MPSDataTypeUInt4`: 16 entries
- `MPSDataTypeUInt8`: 256 entries

`LUTTensor` (and result) element types: `MPSDataTypeFloat16`, `MPSDataTypeFloat32`, `MPSDataTypeBFloat16`, `MPSDataTypeFloat8E4M3`, `MPSDataTypeFloat8E5M2`, `MPSDataTypeInt8`. The input `tensor` must be a graph constant. The operation supports LUT groups up to the last 3 dimensions for `tensor`.

# dequantizeTensor:LUTTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a lookup-table based dequantize operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) dequantizeTensor:(MPSGraphTensor *) tensor LUTTensor:(MPSGraphTensor *) LUTTensor name:(NSString *) name;
```

## Parameters

- `tensor`: Input constant integer-index tensor to be dequantized.
- `LUTTensor`: The lookup table to use.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object.

<a id="discussion"></a>

## Discussion

Converts a `tensor` of integer indices to a float tensor by applying a lookup operation:

```md
result[i1,...,in] = LUTTensor[i1',...,in',tensor[i1,...,in]].
```

Supported `tensor` index types and required last-dimension size of `LUTTensor`:

- `MPSDataTypeUInt4`: 16 entries
- `MPSDataTypeUInt8`: 256 entries

`LUTTensor` (and result) element types: `MPSDataTypeFloat16`, `MPSDataTypeFloat32`, `MPSDataTypeBFloat16`, `MPSDataTypeFloat8E4M3`, `MPSDataTypeFloat8E5M2`, `MPSDataTypeInt8`. The input `tensor` must be a graph constant. The operation supports LUT groups up to the last 3 dimensions for `tensor`.
