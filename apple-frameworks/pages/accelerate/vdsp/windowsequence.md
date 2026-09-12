> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/windowsequence](https://developer.apple.com/documentation/accelerate/vdsp/windowsequence)

# vDSP.WindowSequence

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Constants that specify window sequence functions.

## Declaration

```swift
enum WindowSequence
```

## Topics

### Enumeration Cases

- [vDSP.WindowSequence.blackman](windowsequence/blackman.md): The Blackman window, used to reduce spectral leakage prior to discrete Fourier transform.
- [vDSP.WindowSequence.hamming](windowsequence/hamming.md): The Hamming window, used to reduce spectral leakage prior to discrete Fourier transform.
- [vDSP.WindowSequence.hanningDenormalized](windowsequence/hanningdenormalized.md): The denormalized-Hann window, used to reduce spectral leakage prior to discrete Fourier transform.
- [vDSP.WindowSequence.hanningNormalized](windowsequence/hanningnormalized.md): The normalized-Hann window, used to reduce spectral leakage prior to discrete Fourier transform.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Enumerations

- [vDSP.DCTTransformType](dcttransformtype.md): An enumeration that describes the discrete cosine transform types.
- [vDSP.DFTTransformType](dfttransformtype.md): Discrete Fourier transform types.
- [vDSP.FourierTransformDirection](fouriertransformdirection.md): Fast Fourier transform directions.
- [vDSP.IntegrationRule](integrationrule.md): Integration rules.
- [vDSP.Radix](radix.md): Fast Fourier transform radices.
- [vDSP.RoundingMode](roundingmode.md): Floating point to integer conversion rounding modes.
- [vDSP.SortOrder](sortorder.md): Constants that specify the sorting order.
- [vDSP.ThresholdRule](thresholdrule.md): Constants that specify vector threshold rules.
- [vDSP.DFTError](dfterror.md)
