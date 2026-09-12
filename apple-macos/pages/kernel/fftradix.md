> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/fftradix](https://developer.apple.com/documentation/kernel/fftradix)

# FFTRadix

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.13+

The size of the FFT decomposition.

## Declaration

```objectivec
typedef int FFTRadix;
```

<a id="discussion"></a>

## Discussion

An `FFTRadix` value is passed as an argument to [vDSP_create_fftsetup](1580009-vdsp_create_fftsetup.md) or [vDSP_create_fftsetupD](https://developer.apple.com/documentation/accelerate/vdsp_create_fftsetupd).

## Topics

### Constants

- [kFFTRadix5](1645051-anonymous/kfftradix5.md): Specifies a radix of 5.
