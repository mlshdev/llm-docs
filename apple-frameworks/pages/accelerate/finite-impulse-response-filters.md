> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/finite-impulse-response-filters](https://developer.apple.com/documentation/accelerate/finite-impulse-response-filters)

# Finite impulse response filters (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Perform finite impulse response filtering with decimation and antialiasing on vectors of real or complex values.

## Topics

### Real Vectors

- [Resampling a signal with decimation](resampling-a-signal-with-decimation.md): Reduce the sample rate of a signal by specifying a decimation factor and applying a custom antialiasing filter.
- [downsample(\_:decimationFactor:filter:)](vdsp/downsample%28__decimationfactor_filter_%29-1o8it.md): Returns the downsampled double-precision vector.
- [downsample(\_:decimationFactor:filter:)](vdsp/downsample%28__decimationfactor_filter_%29-40d8o.md): Returns the downsampled single-precision vector.
- [downsample(\_:decimationFactor:filter:result:)](vdsp/downsample%28__decimationfactor_filter_result_%29-2y1iv.md): Calculates the downsampled double-precision vector.
- [downsample(\_:decimationFactor:filter:result:)](vdsp/downsample%28__decimationfactor_filter_result_%29-1g4a.md): Calculates the downsampled single-precision vector.

## See Also

### Vector filtering

- [Biquadratic IIR filters](biquadratic-iir-filters.md): Apply biquadratic filters to single-channel and multichannel data.
- [Single-channel biquadratic filters](single-channel-biquadratic-filters.md): Filter a single-channel signal with a cascade of biquadratic sections.
- [Multichannel biquadratic filters](multichannel-biquadratic-filters.md): Filter a multichannel signal with a cascade of biquadratic sections.
- [Recursive filters](recursive-filters.md): Perform two-pole two-zero recursive filtering on a vector.

# Finite impulse response filters (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Perform finite impulse response filtering with decimation and antialiasing on vectors of real or complex values.

## Topics

### FIR Filter Creation

- [vDSP_wiener](vdsp_wiener.md): Solves a system of linear equations for a single-precision symmetric Toeplitz coefficient matrix.
- [vDSP_wienerD](vdsp_wienerd.md): Solves a system of linear equations for a double-precision symmetric Toeplitz coefficient matrix.

### Real Vectors

- [Resampling a signal with decimation](resampling-a-signal-with-decimation.md): Reduce the sample rate of a signal by specifying a decimation factor and applying a custom antialiasing filter.
- [vDSP_desamp](vdsp_desamp.md): Performs single-precision FIR filtering with decimation and antialiasing.
- [vDSP_desampD](vdsp_desampd.md): Performs double-precision FIR filtering with decimation and antialiasing.

### Complex Vectors

- [vDSP_zrdesamp](vdsp_zrdesamp.md): Performs complex-real single-precision FIR filtering with decimation and antialiasing.
- [vDSP_zrdesampD](vdsp_zrdesampd.md): Performs complex-real double-precision FIR filtering with decimation and antialiasing.

## See Also

### Vector filtering

- [Biquadratic IIR filters](biquadratic-iir-filters.md): Apply biquadratic filters to single-channel and multichannel data.
- [Single-channel biquadratic filters](single-channel-biquadratic-filters.md): Filter a single-channel signal with a cascade of biquadratic sections.
- [Multichannel biquadratic filters](multichannel-biquadratic-filters.md): Filter a multichannel signal with a cascade of biquadratic sections.
- [Recursive filters](recursive-filters.md): Perform two-pole two-zero recursive filtering on a vector.
