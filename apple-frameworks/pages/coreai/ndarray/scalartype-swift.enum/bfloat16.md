> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/scalartype-swift.enum/bfloat16](https://developer.apple.com/documentation/coreai/ndarray/scalartype-swift.enum/bfloat16)

# NDArray.ScalarType.bfloat16

**Framework:** Core AI  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A 16-bit brain floating-point type.

## Declaration

```swift
case bfloat16
```

<a id="discussion"></a>

## Discussion

BFloat16 (Brain Floating Point) uses 8 exponent bits and 7 mantissa bits, matching the exponent range of Float32 but with reduced precision. This type is widely supported across most operations including matrix multiplication, activation functions, and quantization.

## See Also

### Defining floating-point types

- [NDArray.ScalarType.float16](float16.md): A 16-bit floating-point type.
- [NDArray.ScalarType.float32](float32.md): A 32-bit floating-point type.
- [NDArray.ScalarType.float64](float64.md): A 64-bit floating-point type.
