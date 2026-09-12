> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/discretefouriertransform/transform(input:output:)-1tsod](https://developer.apple.com/documentation/accelerate/vdsp/discretefouriertransform/transform(input:output:)-1tsod)

# transform(input:output:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Computes a double-precision discrete Fourier transform.

## Declaration

```swift
func transform<U, V>(input: U, output: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == DSPDoubleComplex, V.Element == DSPDoubleComplex
```

## Parameters

- `input`: An array of [DSPDoubleComplex](../../dspdoublecomplex.md) structures that contains the input.
- `output`: An array of [DSPDoubleComplex](../../dspdoublecomplex.md) structures that contains the output.

## See Also

### Performing Interleaved Discrete Fourier Transforms

- [transform(input:)](transform%28input_%29-92b3l.md): Conforms when `T` is `DSPComplex`. Returns the result of a single-precision discrete Fourier transform.
- [transform(input:)](transform%28input_%29-5si4h.md): Conforms when `T` is `DSPDoubleComplex`. Returns the result of a double-precision discrete Fourier transform.
- [transform(input:output:)](transform%28input_output_%29-1k3hd.md): Conforms when `T` is `DSPComplex`. Computes a single-precision discrete Fourier transform.
