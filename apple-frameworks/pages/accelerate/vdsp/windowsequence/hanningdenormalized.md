> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/windowsequence/hanningdenormalized](https://developer.apple.com/documentation/accelerate/vdsp/windowsequence/hanningdenormalized)

# vDSP.WindowSequence.hanningDenormalized

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

The denormalized-Hann window, used to reduce spectral leakage prior to discrete Fourier transform.

## Declaration

```swift
case hanningDenormalized
```

## See Also

### Related Documentation

- [Reducing spectral leakage with windowing](../../reducing-spectral-leakage-with-windowing.md): Multiply signal data by window sequence values when performing transforms with noninteger period signals.
- [vDSP_hann_window](../../vdsp_hann_window.md): Creates a single-precision Hann window.
- [vDSP_hann_windowD](../../vdsp_hann_windowd.md): Creates a double-precision Hann window.

### Enumeration Cases

- [vDSP.WindowSequence.blackman](blackman.md): The Blackman window, used to reduce spectral leakage prior to discrete Fourier transform.
- [vDSP.WindowSequence.hamming](hamming.md): The Hamming window, used to reduce spectral leakage prior to discrete Fourier transform.
- [vDSP.WindowSequence.hanningNormalized](hanningnormalized.md): The normalized-Hann window, used to reduce spectral leakage prior to discrete Fourier transform.
