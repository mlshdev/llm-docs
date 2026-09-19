> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/ndarray/scalartype-swift.enum/float8e4m3fn

# NDArray.ScalarType.float8e4m3fn

**Framework:** Core AI  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An 8-bit floating-point type with 4 exponent bits and 3 mantissa bits, without a sign bit.

## Declaration

```swift
case float8e4m3fn
```

<a id="discussion"></a>

## Discussion

FP8 E4M3FN (Finite Number) format emphasizes precision over range with additional mantissa bits. This type is used for quantization and in some activation functions.

## See Also

### Defining 8-bit floating-point types

- [NDArray.ScalarType.float8e5m2](float8e5m2.md): An 8-bit floating-point type with 5 exponent bits and 2 mantissa bits.
