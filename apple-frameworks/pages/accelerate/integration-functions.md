> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/integration-functions](https://developer.apple.com/documentation/accelerate/integration-functions)

# Integration functions (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Compute the running sum, Simpson, or trapezoidal integration of a vector.

## Topics

### Integration

- [integrate(\_:using:stepSize:)](vdsp/integrate%28__using_stepsize_%29-1bw3x.md): Returns the integration of a double-precision vector using the specified rule.
- [integrate(\_:using:stepSize:)](vdsp/integrate%28__using_stepsize_%29-7wei4.md): Returns the integration of a single-precision vector using the specified rule.
- [integrate(\_:using:stepSize:result:)](vdsp/integrate%28__using_stepsize_result_%29-75jvf.md): Performs the integration of a double-precision using the specified rule.
- [integrate(\_:using:stepSize:result:)](vdsp/integrate%28__using_stepsize_result_%29-44lew.md): Performs the integration of a single-precision using the specified rule.
- [vDSP.IntegrationRule](vdsp/integrationrule.md): Integration rules.

## See Also

### Single-vector arithmetic functions

- [Absolute and negation functions](absolute-and-negation-functions.md): Compute the absolute or negated value of each element in a vector.
- [Clipping, limit, and threshold operations](clipping-limit-and-threshold-operations.md): Apply clipping, limit, or threshold rules to the elements in a vector.
- [Normalization functions](normalization-functions.md): Compute the mean and standard deviation of a vector and calculate new elements to have a zero mean and a unit standard deviation.
- [Phase computation functions](phase-computation-functions.md): Calculate the element-wise phase values, in radians, of a complex vector.
- [Complex conjugation functions](complex-conjugation-functions.md): Calculate the complex conjugate of the elements in a vector.
- [Vector squaring functions](vector-squaring-functions.md): Compute the square, signed square, or squared magnitude of the elements in a vector.
- [Fractional part extraction](fractional-part-extraction.md): Truncate the elements of a vector to a fraction.
- [Zero crossing search](zero-crossing-search.md): Count and find the zero crossings in a vector.

# Integration functions (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Compute the running sum, Simpson, or trapezoidal integration of a vector.

## Topics

### Running Sum Integration

The functions in this group perform integration on the values in a vector.

- [vDSP_vrsum](vdsp_vrsum.md): Performs running sum integration over a single-precision vector.
- [vDSP_vrsumD](vdsp_vrsumd.md): Performs running sum integration over a double-precision vector.

### Simpson Integration

- [vDSP_vsimps](vdsp_vsimps.md): Performs Simpson integration over a single-precision vector.
- [vDSP_vsimpsD](vdsp_vsimpsd.md): Performs Simpson integration over a double-precision vector.

### Trapezoidal Integration

- [vDSP_vtrapz](vdsp_vtrapz.md): Performs trapezoidal integration over a single-precision vector.
- [vDSP_vtrapzD](vdsp_vtrapzd.md): Performs trapezoidal integration over a double-precision vector.

## See Also

### Single-vector arithmetic functions

- [Absolute and negation functions](absolute-and-negation-functions.md): Compute the absolute or negated value of each element in a vector.
- [Clipping, limit, and threshold operations](clipping-limit-and-threshold-operations.md): Apply clipping, limit, or threshold rules to the elements in a vector.
- [Normalization functions](normalization-functions.md): Compute the mean and standard deviation of a vector and calculate new elements to have a zero mean and a unit standard deviation.
- [Phase computation functions](phase-computation-functions.md): Calculate the element-wise phase values, in radians, of a complex vector.
- [Complex conjugation functions](complex-conjugation-functions.md): Calculate the complex conjugate of the elements in a vector.
- [Vector squaring functions](vector-squaring-functions.md): Compute the square, signed square, or squared magnitude of the elements in a vector.
- [Fractional part extraction](fractional-part-extraction.md): Truncate the elements of a vector to a fraction.
- [Zero crossing search](zero-crossing-search.md): Count and find the zero crossings in a vector.
