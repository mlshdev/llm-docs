> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/windowsequence/hamming](https://developer.apple.com/documentation/accelerate/vdsp/windowsequence/hamming)

# vDSP.WindowSequence.hamming

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

The Hamming window, used to reduce spectral leakage prior to discrete Fourier transform.

## Declaration

```swift
case hamming
```

## Mentioned In

- [Reducing spectral leakage with windowing](../../reducing-spectral-leakage-with-windowing.md)

## See Also

### Related Documentation

- [Reducing spectral leakage with windowing](../../reducing-spectral-leakage-with-windowing.md): Multiply signal data by window sequence values when performing transforms with noninteger period signals.
- [vDSP_hamm_window](../../vdsp_hamm_window.md): Creates a single-precision Hamming window.
- [vDSP_hamm_windowD](../../vdsp_hamm_windowd.md): Creates a double-precision Hamming window.

### Enumeration Cases

- [vDSP.WindowSequence.blackman](blackman.md): The Blackman window, used to reduce spectral leakage prior to discrete Fourier transform.
- [vDSP.WindowSequence.hanningDenormalized](hanningdenormalized.md): The denormalized-Hann window, used to reduce spectral leakage prior to discrete Fourier transform.
- [vDSP.WindowSequence.hanningNormalized](hanningnormalized.md): The normalized-Hann window, used to reduce spectral leakage prior to discrete Fourier transform.
