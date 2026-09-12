> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1579978-vdsp_destroy_fftsetup](https://developer.apple.com/documentation/kernel/1579978-vdsp_destroy_fftsetup)

# vDSP_destroy_fftsetup

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

Deallocates an existing single-precision FFT setup structure.

## Declaration

```objectivec
void vDSP_destroy_fftsetup(FFTSetup __setup);
```

## Parameters

- `__setup`: The setup structure to deallocate, previously created by [vDSP_create_fftsetup](1580009-vdsp_create_fftsetup.md).

<a id="discussion"></a>

## Discussion

`vDSP_destroy_fftsetup` frees existing setup data and releases any allocated memory.
