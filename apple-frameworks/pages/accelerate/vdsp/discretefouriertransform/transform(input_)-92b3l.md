> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/discretefouriertransform/transform(input:)-92b3l](https://developer.apple.com/documentation/accelerate/vdsp/discretefouriertransform/transform(input:)-92b3l)

# transform(input:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Returns the result of a single-precision discrete Fourier transform.

## Declaration

```swift
func transform<U>(input: U) -> [DSPComplex] where U : AccelerateBuffer, U.Element == DSPComplex
```

## Parameters

- `input`: An array of [DSPComplex](../../dspcomplex.md) structures that contains the input.

<a id="return-value"></a>

## Return Value

An array of [DSPComplex](../../dspcomplex.md) structures.

## See Also

### Performing Interleaved Discrete Fourier Transforms

- [transform(input:)](transform%28input_%29-5si4h.md): Conforms when `T` is `DSPDoubleComplex`. Returns the result of a double-precision discrete Fourier transform.
- [transform(input:output:)](transform%28input_output_%29-1k3hd.md): Conforms when `T` is `DSPComplex`. Computes a single-precision discrete Fourier transform.
- [transform(input:output:)](transform%28input_output_%29-1tsod.md): Conforms when `T` is `DSPDoubleComplex`. Computes a double-precision discrete Fourier transform.
