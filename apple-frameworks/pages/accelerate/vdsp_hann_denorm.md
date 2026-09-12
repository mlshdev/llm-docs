> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_hann_denorm](https://developer.apple.com/documentation/accelerate/vdsp_hann_denorm)

# vDSP_HANN_DENORM (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies a denormalized Hann window.

## Declaration

```swift
var vDSP_HANN_DENORM: Int { get }
```

## See Also

### Vector generation with window functions

- [Reducing spectral leakage with windowing](reducing-spectral-leakage-with-windowing.md): Multiply signal data by window sequence values when performing transforms with noninteger period signals.
- [window(ofType:usingSequence:count:isHalfWindow:)](vdsp/window%28oftype_usingsequence_count_ishalfwindow_%29.md): Returns an array that contains the specified window.
- [formWindow(usingSequence:result:isHalfWindow:)](vdsp/formwindow%28usingsequence_result_ishalfwindow_%29-6cmve.md): Populates a double-precision vector with a specified window.
- [formWindow(usingSequence:result:isHalfWindow:)](vdsp/formwindow%28usingsequence_result_ishalfwindow_%29-9dls5.md): Populates a single-precision vector with a specified window.
- [vDSP.WindowSequence](vdsp/windowsequence.md): Constants that specify window sequence functions.
- [vDSP_HALF_WINDOW](vdsp_half_window.md): Specifies that the window should only contain the bottom half of the values (`0` to `(N+1)/2`).
- [vDSP_HANN_NORM](vdsp_hann_norm.md): Specifies a normalized Hann window

# vDSP_HANN_DENORM (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies a denormalized Hann window.

## Declaration

```objectivec
vDSP_HANN_DENORM
```

## See Also

### Vector generation with window functions

- [Reducing spectral leakage with windowing](reducing-spectral-leakage-with-windowing.md): Multiply signal data by window sequence values when performing transforms with noninteger period signals.
- [vDSP_blkman_window](vdsp_blkman_window.md): Creates a single-precision Blackman window.
- [vDSP_blkman_windowD](vdsp_blkman_windowd.md): Creates a double-precision Blackman window.
- [vDSP_hamm_window](vdsp_hamm_window.md): Creates a single-precision Hamming window.
- [vDSP_hamm_windowD](vdsp_hamm_windowd.md): Creates a double-precision Hamming window.
- [vDSP_hann_window](vdsp_hann_window.md): Creates a single-precision Hann window.
- [vDSP_hann_windowD](vdsp_hann_windowd.md): Creates a double-precision Hann window.
- [vDSP_HALF_WINDOW](vdsp_half_window.md): Specifies that the window should only contain the bottom half of the values (`0` to `(N+1)/2`).
- [vDSP_HANN_NORM](vdsp_hann_norm.md): Specifies a normalized Hann window
