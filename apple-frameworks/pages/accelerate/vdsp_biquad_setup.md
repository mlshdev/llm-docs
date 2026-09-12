> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_biquad_setup](https://developer.apple.com/documentation/accelerate/vdsp_biquad_setup)

# vDSP_biquad_Setup (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A data structure that contains precalculated data for use by the single-precision cascaded biquadratic IIR filter function.

## Declaration

```swift
typealias vDSP_biquad_Setup = OpaquePointer
```

## See Also

### Creating a single-channel biquadratic filter setup

- [vDSP_biquad_SetupD](vdsp_biquad_setupd.md): A data structure that contains precalculated data for use by the double-precision cascaded biquadratic IIR filter function.

# vDSP_biquad_Setup (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A data structure that contains precalculated data for use by the single-precision cascaded biquadratic IIR filter function.

## Declaration

```objectivec
typedef struct vDSP_biquad_SetupStruct * vDSP_biquad_Setup;
```

## See Also

### Creating a single-channel biquadratic filter setup

- [vDSP_biquad_CreateSetup](vdsp_biquad_createsetup.md): Builds a data structure that contains precalculated data for use by a single-precision cascaded biquadratic filter function.
- [vDSP_biquad_CreateSetupD](vdsp_biquad_createsetupd.md): Builds a data structure that contains precalculated data for use by a double-precision cascaded biquadratic filter function.
- [vDSP_biquad_SetupD](vdsp_biquad_setupd.md): A data structure that contains precalculated data for use by the double-precision cascaded biquadratic IIR filter function.
