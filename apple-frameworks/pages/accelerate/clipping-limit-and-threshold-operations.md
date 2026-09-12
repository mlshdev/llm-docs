> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/clipping-limit-and-threshold-operations](https://developer.apple.com/documentation/accelerate/clipping-limit-and-threshold-operations)

# Clipping, limit, and threshold operations (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Apply clipping, limit, or threshold rules to the elements in a vector.

## Topics

### Clipping Operations

The functions in this group restrict the values in a vector so that they fall within a given range or invert values outside a given range.

- [clip(\_:to:)](vdsp/clip%28__to_%29-8jsic.md): Returns the elements of a double-precision vector clipped to the specified range.
- [clip(\_:to:)](vdsp/clip%28__to_%29-20gz4.md): Returns the elements of a single-precision vector clipped to the specified range.
- [clip(\_:to:result:)](vdsp/clip%28__to_result_%29-3lbii.md): Calculates the elements of a double-precision vector clipped to the specified range.
- [clip(\_:to:result:)](vdsp/clip%28__to_result_%29-84zw9.md): Calculates the elements of a single-precision vector clipped to the specified range.
- [invertedClip(\_:to:)](vdsp/invertedclip%28__to_%29-8yqtl.md): Returns a double-precision vector that’s inverted-clipped to the specified range.
- [invertedClip(\_:to:)](vdsp/invertedclip%28__to_%29-4pkxw.md): Returns a single-precision vector that’s inverted-clipped to the specified range.
- [invertedClip(\_:to:result:)](vdsp/invertedclip%28__to_result_%29-5ioal.md): Calculates a double-precision vector that’s inverted-clipped to the specified range.
- [invertedClip(\_:to:result:)](vdsp/invertedclip%28__to_result_%29-3q12m.md): Calculates a single-precision vector that’s inverted-clipped to the specified range.

### Limit Operations

- [limit(\_:limit:withOutputConstant:)](vdsp/limit%28__limit_withoutputconstant_%29-2d9u6.md): Returns the double-precision vector test limit.
- [limit(\_:limit:withOutputConstant:)](vdsp/limit%28__limit_withoutputconstant_%29-8bj65.md): Returns the single-precision vector test limit.
- [limit(\_:limit:withOutputConstant:result:)](vdsp/limit%28__limit_withoutputconstant_result_%29-6apdv.md): Calculates the double-precision vector test limit.
- [limit(\_:limit:withOutputConstant:result:)](vdsp/limit%28__limit_withoutputconstant_result_%29-9v33v.md): Calculates the single-precision vector test limit.

### Threshold Operations

- [threshold(\_:to:with:)](vdsp/threshold%28__to_with_%29-77g7l.md): Returns the elements of the supplied double-precision vector after applying a specified thresholding rule.
- [threshold(\_:to:with:)](vdsp/threshold%28__to_with_%29-534ob.md): Returns the elements of the supplied single-precision vector after applying a specified thresholding rule.
- [threshold(\_:to:with:result:)](vdsp/threshold%28__to_with_result_%29-45b58.md): Calculates the elements of the supplied double-precision vector after applying a specified thresholding rule.
- [threshold(\_:to:with:result:)](vdsp/threshold%28__to_with_result_%29-8137c.md): Calculates the elements of the supplied single-precision vector after applying a specified thresholding rule.
- [vDSP.ThresholdRule](vdsp/thresholdrule.md): Constants that specify vector threshold rules.

## See Also

### Single-vector arithmetic functions

- [Absolute and negation functions](absolute-and-negation-functions.md): Compute the absolute or negated value of each element in a vector.
- [Integration functions](integration-functions.md): Compute the running sum, Simpson, or trapezoidal integration of a vector.
- [Normalization functions](normalization-functions.md): Compute the mean and standard deviation of a vector and calculate new elements to have a zero mean and a unit standard deviation.
- [Phase computation functions](phase-computation-functions.md): Calculate the element-wise phase values, in radians, of a complex vector.
- [Complex conjugation functions](complex-conjugation-functions.md): Calculate the complex conjugate of the elements in a vector.
- [Vector squaring functions](vector-squaring-functions.md): Compute the square, signed square, or squared magnitude of the elements in a vector.
- [Fractional part extraction](fractional-part-extraction.md): Truncate the elements of a vector to a fraction.
- [Zero crossing search](zero-crossing-search.md): Count and find the zero crossings in a vector.

# Clipping, limit, and threshold operations (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Apply clipping, limit, or threshold rules to the elements in a vector.

## Topics

### Clipping Operations

The functions in this group restrict the values in a vector so that they fall within a given range or invert values outside a given range.

- [vDSP_vclip](vdsp_vclip.md): Calculates the elements of a single-precision vector clipped to the specified range.
- [vDSP_vclipD](vdsp_vclipd.md): Calculates the elements of a double-precision vector clipped to the specified range.
- [vDSP_vclipc](vdsp_vclipc.md): Calculates and counts the elements of a single-precision vector clipped to the specified range.
- [vDSP_vclipcD](vdsp_vclipcd.md): Calculates and counts the elements of a double-precision vector clipped to the specified range.
- [vDSP_viclip](vdsp_viclip.md): Calculates the elements of a single-precision vector inverted-clipped to the specified range using the specified stride.
- [vDSP_viclipD](vdsp_viclipd.md): Calculates the elements of a double-precision vector inverted-clipped to the specified range using the specified stride.
- [vDSP_vthr](vdsp_vthr.md): Calculates single-precision vector threshold to the specified range.
- [vDSP_vthrD](vdsp_vthrd.md): Calculates double-precision vector threshold to the specified range.

### Limit Operations

- [vDSP_vlim](vdsp_vlim.md): Calculates the single-precision vector test limit using the specified stride.
- [vDSP_vlimD](vdsp_vlimd.md): Calculates the double-precision vector test limit using the specified stride.

### Threshold Operations

- [vDSP_vthres](vdsp_vthres.md): Calculates single-precision vector threshold with zero fill to the specified range.
- [vDSP_vthresD](vdsp_vthresd.md): Calculates double-precision vector threshold with zero fill to the specified range.
- [vDSP_vthrsc](vdsp_vthrsc.md): Calculates single-precision vector threshold with signed constant to the specified range.
- [vDSP_vthrscD](vdsp_vthrscd.md): Calculates double-precision vector threshold with signed constant to the specified range.

## See Also

### Single-vector arithmetic functions

- [Absolute and negation functions](absolute-and-negation-functions.md): Compute the absolute or negated value of each element in a vector.
- [Integration functions](integration-functions.md): Compute the running sum, Simpson, or trapezoidal integration of a vector.
- [Normalization functions](normalization-functions.md): Compute the mean and standard deviation of a vector and calculate new elements to have a zero mean and a unit standard deviation.
- [Phase computation functions](phase-computation-functions.md): Calculate the element-wise phase values, in radians, of a complex vector.
- [Complex conjugation functions](complex-conjugation-functions.md): Calculate the complex conjugate of the elements in a vector.
- [Vector squaring functions](vector-squaring-functions.md): Compute the square, signed square, or squared magnitude of the elements in a vector.
- [Fractional part extraction](fractional-part-extraction.md): Truncate the elements of a vector to a fraction.
- [Zero crossing search](zero-crossing-search.md): Count and find the zero crossings in a vector.
