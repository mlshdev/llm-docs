> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/dequantize(_:scaletensor:datatype:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/dequantize(_:scaletensor:datatype:name:))

# dequantize(\_:scaleTensor:dataType:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a dequantize operation and returns the result tensor.

## Declaration

```swift
func dequantize(_ tensor: MPSGraphTensor, scaleTensor: MPSGraphTensor, dataType: MPSDataType, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: Input tensor to be dequantized.
- `scaleTensor`: Scale Tensor parameter with groups support.
- `dataType`: Float data type of the result tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) array of datatype `dataType`.

<a id="discussion"></a>

## Discussion

Converts the quantized `tensor` to a float tensor by applying a scale transform (symmetric — zero point is implicitly 0):

```md
result = scaleTensor * tensor
```

The quantization mode is determined by the element type of `scaleTensor`:

**Regular blockwise** (`scaleTensor` type is an MPSGraph float type):

- Supported input types: `MPSDataTypeInt4`, `MPSDataTypeUInt4`, `MPSDataTypeInt8`, `MPSDataTypeUInt8`, `MPSDataTypeFloat8E4M3`, `MPSDataTypeFloat8E5M2`.
- `scaleTensor` shape: leading dims of `tensor` with the last dim replaced by `tensor.shape[last] / blockSize`.

**MX mode** (`scaleTensor` type is `MPSDataTypeFloat8E8M0`):

- Supported input types: `MPSDataTypeFloat4E2M1`, `MPSDataTypeFloat8E4M3`, `MPSDataTypeFloat8E5M2`.
- Block size 32.

**F4 with F8E4M3 scale** (`scaleTensor` type is `MPSDataTypeFloat8E4M3`, input type is `MPSDataTypeFloat4E2M1`):

- Block size 16.

# dequantizeTensor:scaleTensor:dataType:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a dequantize operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) dequantizeTensor:(MPSGraphTensor *) tensor scaleTensor:(MPSGraphTensor *) scaleTensor dataType:(MPSDataType) dataType name:(NSString *) name;
```

## Parameters

- `tensor`: Input tensor to be dequantized.
- `scaleTensor`: Scale Tensor parameter with groups support.
- `dataType`: Float data type of the result tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) array of datatype `dataType`.

<a id="discussion"></a>

## Discussion

Converts the quantized `tensor` to a float tensor by applying a scale transform (symmetric — zero point is implicitly 0):

```md
result = scaleTensor * tensor
```

The quantization mode is determined by the element type of `scaleTensor`:

**Regular blockwise** (`scaleTensor` type is an MPSGraph float type):

- Supported input types: `MPSDataTypeInt4`, `MPSDataTypeUInt4`, `MPSDataTypeInt8`, `MPSDataTypeUInt8`, `MPSDataTypeFloat8E4M3`, `MPSDataTypeFloat8E5M2`.
- `scaleTensor` shape: leading dims of `tensor` with the last dim replaced by `tensor.shape[last] / blockSize`.

**MX mode** (`scaleTensor` type is `MPSDataTypeFloat8E8M0`):

- Supported input types: `MPSDataTypeFloat4E2M1`, `MPSDataTypeFloat8E4M3`, `MPSDataTypeFloat8E5M2`.
- Block size 32.

**F4 with F8E4M3 scale** (`scaleTensor` type is `MPSDataTypeFloat8E4M3`, input type is `MPSDataTypeFloat4E2M1`):

- Block size 16.
