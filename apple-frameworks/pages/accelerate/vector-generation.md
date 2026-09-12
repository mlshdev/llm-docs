> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vector-generation](https://developer.apple.com/documentation/accelerate/vector-generation)

# Vector generation (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Populate vectors with ramps, values from lookup tables, interpolated values, and window functions.

## Topics

### Vector generation with ramps using an initial value and increment

- [ramp(withInitialValue:increment:count:)](vdsp/ramp%28withinitialvalue_increment_count_%29-mjsa.md): Returns a single-precision vector that contains monotonically incrementing or decrementing values using an initial value and increment.
- [ramp(withInitialValue:increment:count:)](vdsp/ramp%28withinitialvalue_increment_count_%29-3cast.md): Returns a double-precision vector that contains monotonically incrementing or decrementing values using an initial value and increment.
- [formRamp(withInitialValue:increment:result:)](vdsp/formramp%28withinitialvalue_increment_result_%29-40zxg.md): Populates a single-precision vector with monotonically incrementing or decrementing values using an initial value and increment.
- [formRamp(withInitialValue:increment:result:)](vdsp/formramp%28withinitialvalue_increment_result_%29-4ibjw.md): Populates a double-precision vector with monotonically incrementing or decrementing values using an initial value and increment.

### Vector generation with ramps using a range

- [ramp(in:count:)](vdsp/ramp%28in_count_%29-79aw7.md): Returns a double-precision vector that contains monotonically incrementing or decrementing values within a range.
- [ramp(in:count:)](vdsp/ramp%28in_count_%29-744b4.md): Returns a single-precision vector that contains monotonically incrementing or decrementing values within a range.
- [formRamp(in:result:)](vdsp/formramp%28in_result_%29-8lsid.md): Populates a double-precision vector with monotonically incrementing or decrementing values within a range.
- [formRamp(in:result:)](vdsp/formramp%28in_result_%29-6ef26.md): Populates a single-precision vector with monotonically incrementing or decrementing values within a range.

### Vector generation with ramps and multiplication by a second vector

- [ramp(withInitialValue:multiplyingBy:increment:)](vdsp/ramp%28withinitialvalue_multiplyingby_increment_%29-6b5re.md): Returns a single-precision vector that contains monotonically incrementing or decrementing values, and multiplies that vector by a source vector.
- [ramp(withInitialValue:multiplyingBy:increment:)](vdsp/ramp%28withinitialvalue_multiplyingby_increment_%29-1s3c9.md): Returns a double-precision vector that contains monotonically incrementing or decrementing values, and multiplies that vector by a source vector.
- [formRamp(withInitialValue:multiplyingBy:increment:result:)](vdsp/formramp%28withinitialvalue_multiplyingby_increment_result_%29-4r0kz.md): Populates a single-precision vector that contains monotonically incrementing or decrementing values, and multiplies that vector by a source vector.
- [formRamp(withInitialValue:multiplyingBy:increment:result:)](vdsp/formramp%28withinitialvalue_multiplyingby_increment_result_%29-p7s4.md): Populates a double-precision vector that contains monotonically incrementing or decrementing values, and multiplies that vector by a source vector.

### Vector generation by extrapolation and interpolation

- [linearInterpolate(values:atIndices:)](vdsp/linearinterpolate%28values_atindices_%29-5mbnu.md): Returns the single-precision linearly interpolated values of a vector at the specified indices.
- [linearInterpolate(values:atIndices:)](vdsp/linearinterpolate%28values_atindices_%29-9rxb4.md): Returns the double-precision linearly interpolated values of a vector at the specified indices.
- [linearInterpolate(values:atIndices:result:)](vdsp/linearinterpolate%28values_atindices_result_%29-7nre0.md): Computes the double-precision linearly interpolated values of a vector at the specified indices.
- [linearInterpolate(values:atIndices:result:)](vdsp/linearinterpolate%28values_atindices_result_%29-6i7sl.md): Computes the single-precision linearly interpolated values of a vector at the specified indices.

### Vector generation with lookup tables

- [linearInterpolate(lookupTable:withOffsets:scale:baseOffset:)](vdsp/linearinterpolate%28lookuptable_withoffsets_scale_baseoffset_%29-1ye2o.md): Returns the double-precision linearly interpolated values of a lookup table from the specified offsets.
- [linearInterpolate(lookupTable:withOffsets:scale:baseOffset:)](vdsp/linearinterpolate%28lookuptable_withoffsets_scale_baseoffset_%29-3nw6t.md): Returns the single-precision linearly interpolated values of a lookup table from the specified offsets.
- [linearInterpolate(lookupTable:withOffsets:scale:baseOffset:result:)](vdsp/linearinterpolate%28lookuptable_withoffsets_scale_baseoffset_result_%29-9l3uy.md): Computes the double-precision linearly interpolated values of a lookup table from the specified offsets.
- [linearInterpolate(lookupTable:withOffsets:scale:baseOffset:result:)](vdsp/linearinterpolate%28lookuptable_withoffsets_scale_baseoffset_result_%29-4ownc.md): Computes the single-precision linearly interpolated values of a lookup table from the specified offsets.

### Vector generation with window functions

- [Reducing spectral leakage with windowing](reducing-spectral-leakage-with-windowing.md): Multiply signal data by window sequence values when performing transforms with noninteger period signals.
- [window(ofType:usingSequence:count:isHalfWindow:)](vdsp/window%28oftype_usingsequence_count_ishalfwindow_%29.md): Returns an array that contains the specified window.
- [formWindow(usingSequence:result:isHalfWindow:)](vdsp/formwindow%28usingsequence_result_ishalfwindow_%29-6cmve.md): Populates a double-precision vector with a specified window.
- [formWindow(usingSequence:result:isHalfWindow:)](vdsp/formwindow%28usingsequence_result_ishalfwindow_%29-9dls5.md): Populates a single-precision vector with a specified window.
- [vDSP.WindowSequence](vdsp/windowsequence.md): Constants that specify window sequence functions.
- [vDSP_HALF_WINDOW](vdsp_half_window.md): Specifies that the window should only contain the bottom half of the values (`0` to `(N+1)/2`).
- [vDSP_HANN_DENORM](vdsp_hann_denorm.md): Specifies a denormalized Hann window.
- [vDSP_HANN_NORM](vdsp_hann_norm.md): Specifies a normalized Hann window

### Stereo ramp generation

- [stereoRamp(withInitialValue:multiplyingBy:\_:increment:)](vdsp/stereoramp%28withinitialvalue_multiplyingby___increment_%29-5utuo.md): Returns two double-precision vectors that contain stereo monotonically incrementing or decrementing values multiplied by two source vectors.
- [stereoRamp(withInitialValue:multiplyingBy:\_:increment:)](vdsp/stereoramp%28withinitialvalue_multiplyingby___increment_%29-18f8z.md): Returns two single-precision vectors that contain stereo monotonically incrementing or decrementing values multiplied by two source vectors.
- [formStereoRamp(withInitialValue:multiplyingBy:\_:increment:results:\_:)](vdsp/formstereoramp%28withinitialvalue_multiplyingby___increment_results___%29-99lyb.md): Populates two single-precision vectors that contain stereo monotonically incrementing or decrementing values multiplied by two source vectors.
- [formStereoRamp(withInitialValue:multiplyingBy:\_:increment:results:\_:)](vdsp/formstereoramp%28withinitialvalue_multiplyingby___increment_results___%29-9be28.md): Populates two single-precision vectors that contain stereo monotonically incrementing or decrementing values multiplied by two source vectors.

## See Also

### Vector generation, filling, and clearing

- [Vector clear and fill functions](vector-clear-and-fill-functions.md): Populate vectors with zeros or a scalar value.

# Vector generation (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Populate vectors with ramps, values from lookup tables, interpolated values, and window functions.

## Topics

### Vector generation with ramps using an initial value and increment

- [vDSP_vramp](vdsp_vramp.md): Generates a single-precision vector with monotonically incrementing or decrementing values using an initial value and increment.
- [vDSP_vrampD](vdsp_vrampd.md): Generates a double-precision vector with monotonically incrementing or decrementing values using an initial value and increment.

### Vector generation with ramps using a range

- [vDSP_vgen](vdsp_vgen.md): Generates a single-precision vector that contains monotonically incrementing or decrementing values within a range.
- [vDSP_vgenD](vdsp_vgend.md): Generates a double-precision vector that contains monotonically incrementing or decrementing values within a range.

### Vector generation with ramps and multiplication by a second vector

- [vDSP_vrampmul](vdsp_vrampmul.md): Generates a single-precision vector that contains monotonically incrementing or decrementing values, and multiplies that vector by a source vector.
- [vDSP_vrampmulD](vdsp_vrampmuld.md): Generates a double-precision vector that contains monotonically incrementing or decrementing values, and multiplies that vector by a source vector.
- [vDSP_vrampmul_s1_15](vdsp_vrampmul_s1_15.md): Generates a fixed-point 1.15 format vector that contains monotonically incrementing or decrementing values, and multiplies that vector by a source vector.
- [vDSP_vrampmul_s8_24](vdsp_vrampmul_s8_24.md): Generates a fixed-point 8.24 format vector that contains monotonically incrementing or decrementing values, and multiplies that vector by a source vector.

### Vector addition with ramps and multiplication by a second vector

- [vDSP_vrampmuladd](vdsp_vrampmuladd.md): Adds a single-precision vector that contains monotonically incrementing or decrementing values, and multiplies that vector by a source vector.
- [vDSP_vrampmuladdD](vdsp_vrampmuladdd.md): Adds a double-precision vector that contains monotonically incrementing or decrementing values, and multiplies that vector by a source vector.
- [vDSP_vrampmuladd_s1_15](vdsp_vrampmuladd_s1_15.md): Adds a fixed-point 1.15 format vector that contains monotonically incrementing or decrementing values, and multiplies that vector by a source vector.
- [vDSP_vrampmuladd_s8_24](vdsp_vrampmuladd_s8_24.md): Adds a fixed-point 8.24 format vector that contains monotonically incrementing or decrementing values, and multiplies that vector by a source vector.

### Vector generation by extrapolation and interpolation

- [vDSP_vgenp](vdsp_vgenp.md): Generates the single-precision linearly interpolated values of a vector at the specified indices.
- [vDSP_vgenpD](vdsp_vgenpd.md): Generates the double-precision linearly interpolated values of a vector at the specified indices.

### Vector generation with lookup tables

- [vDSP_vtabi](vdsp_vtabi.md): Generates a single-precision vector by interpolating values from a lookup table.
- [vDSP_vtabiD](vdsp_vtabid.md): Generates a double-precision vector by interpolating values from a lookup table.

### Vector generation with window functions

- [Reducing spectral leakage with windowing](reducing-spectral-leakage-with-windowing.md): Multiply signal data by window sequence values when performing transforms with noninteger period signals.
- [vDSP_blkman_window](vdsp_blkman_window.md): Creates a single-precision Blackman window.
- [vDSP_blkman_windowD](vdsp_blkman_windowd.md): Creates a double-precision Blackman window.
- [vDSP_hamm_window](vdsp_hamm_window.md): Creates a single-precision Hamming window.
- [vDSP_hamm_windowD](vdsp_hamm_windowd.md): Creates a double-precision Hamming window.
- [vDSP_hann_window](vdsp_hann_window.md): Creates a single-precision Hann window.
- [vDSP_hann_windowD](vdsp_hann_windowd.md): Creates a double-precision Hann window.
- [vDSP_HALF_WINDOW](vdsp_half_window.md): Specifies that the window should only contain the bottom half of the values (`0` to `(N+1)/2`).
- [vDSP_HANN_DENORM](vdsp_hann_denorm.md): Specifies a denormalized Hann window.
- [vDSP_HANN_NORM](vdsp_hann_norm.md): Specifies a normalized Hann window

### Stereo ramp generation

- [vDSP_vrampmul2](vdsp_vrampmul2.md): Generates a single-precision, stereo ramped vector and multiplies that vector by an input vector.
- [vDSP_vrampmul2D](vdsp_vrampmul2d.md): Generates a double-precision, stereo ramped vector and multiplies that vector by an input vector.
- [vDSP_vrampmul2_s1_15](vdsp_vrampmul2_s1_15.md): Generates a fixed-point, 1.15 format, stereo ramped vector and multiplies that vector by an input vector.
- [vDSP_vrampmul2_s8_24](vdsp_vrampmul2_s8_24.md): Generates a fixed-point, 8.24 format, stereo ramped vector and multiplies that vector by an input vector.
- [vDSP_vrampmuladd2](vdsp_vrampmuladd2.md): Multiplies a single-precision, stereo input vector by a value that ramps up on successive calls, and cumulatively adds the result to the output vector.
- [vDSP_vrampmuladd2D](vdsp_vrampmuladd2d.md): Multiplies a double-precision, stereo input vector by a value that ramps up on successive calls, and cumulatively adds the result to the output vector.
- [vDSP_vrampmuladd2_s1_15](vdsp_vrampmuladd2_s1_15.md): Multiplies a fixed-point, 1.15 format, stereo input vector by a value that ramps on successive calls, and adds the result to the output vector.
- [vDSP_vrampmuladd2_s8_24](vdsp_vrampmuladd2_s8_24.md): Multiplies a fixed-point, 8.24 format, stereo input vector by a value that ramps on successive calls, and adds the result to the output vector.

## See Also

### Vector generation, filling, and clearing

- [Vector clear and fill functions](vector-clear-and-fill-functions.md): Populate vectors with zeros or a scalar value.
