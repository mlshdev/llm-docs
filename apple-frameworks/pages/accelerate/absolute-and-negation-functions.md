> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/absolute-and-negation-functions](https://developer.apple.com/documentation/accelerate/absolute-and-negation-functions)

# Absolute and negation functions (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Compute the absolute or negated value of each element in a vector.

## Topics

### Vector absolute functions

- [absolute(\_:)](vdsp/absolute%28__%29-5ehc1.md): Returns the absolute value of each element in the supplied single-precision vector.
- [absolute(\_:)](vdsp/absolute%28__%29-9c3ge.md): Returns the absolute value of each element in the supplied double-precision vector.
- [absolute(\_:result:)](vdsp/absolute%28__result_%29-4pigo.md): Calculates the absolute value of each element in the supplied single-precision vector.
- [absolute(\_:result:)](vdsp/absolute%28__result_%29-657bd.md): Calculates the absolute value of each element in the supplied double-precision vector.

### Complex vector absolute functions

- [absolute(\_:result:)](vdsp/absolute%28__result_%29-9x5jn.md): Calculates the absolute value of each element in the supplied single-precision complex vector.
- [absolute(\_:result:)](vdsp/absolute%28__result_%29-1wu9x.md): Calculates the absolute value of each element in the supplied double-precision complex vector.

### Vector negative absolute functions

- [negativeAbsolute(\_:)](vdsp/negativeabsolute%28__%29-66a7a.md): Returns the negative absolute value of each element in the supplied single-precision vector.
- [negativeAbsolute(\_:)](vdsp/negativeabsolute%28__%29-1b5m6.md): Returns the negative absolute value of each element in the supplied double-precision vector.
- [negativeAbsolute(\_:result:)](vdsp/negativeabsolute%28__result_%29-85gj0.md): Calculates the negative absolute value of each element in the supplied single-precision vector.
- [negativeAbsolute(\_:result:)](vdsp/negativeabsolute%28__result_%29-1gpcy.md): Calculates the negative absolute value of each element in the supplied double-precision vector.

### Vector negation functions

- [negative(\_:)](vdsp/negative%28__%29-8mo1p.md): Returns the negative value of each element in the supplied single-precision vector.
- [negative(\_:)](vdsp/negative%28__%29-24oe4.md): Returns the negative value of each element in the supplied double-precision vector.
- [negative(\_:result:)](vdsp/negative%28__result_%29-92caw.md): Calculates the negative value of each element in the supplied single-precision vector.
- [negative(\_:result:)](vdsp/negative%28__result_%29-5bwqv.md): Calculates the negative value of each element in the supplied double-precision vector.

## See Also

### Single-vector arithmetic functions

- [Integration functions](integration-functions.md): Compute the running sum, Simpson, or trapezoidal integration of a vector.
- [Clipping, limit, and threshold operations](clipping-limit-and-threshold-operations.md): Apply clipping, limit, or threshold rules to the elements in a vector.
- [Normalization functions](normalization-functions.md): Compute the mean and standard deviation of a vector and calculate new elements to have a zero mean and a unit standard deviation.
- [Phase computation functions](phase-computation-functions.md): Calculate the element-wise phase values, in radians, of a complex vector.
- [Complex conjugation functions](complex-conjugation-functions.md): Calculate the complex conjugate of the elements in a vector.
- [Vector squaring functions](vector-squaring-functions.md): Compute the square, signed square, or squared magnitude of the elements in a vector.
- [Fractional part extraction](fractional-part-extraction.md): Truncate the elements of a vector to a fraction.
- [Zero crossing search](zero-crossing-search.md): Count and find the zero crossings in a vector.

# Absolute and negation functions (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Compute the absolute or negated value of each element in a vector.

## Topics

### Vector absolute functions

- [vDSP_vabsi](vdsp_vabsi.md): Calculates the absolute value of each element in the supplied integer vector using the specified stride.
- [vDSP_vabs](vdsp_vabs.md): Calculates the absolute value of each element in the supplied single-precision vector using the specified stride.
- [vDSP_vabsD](vdsp_vabsd.md): Calculates the absolute value of each element in the supplied double-precision vector using the specified stride.

### Complex vector absolute functions

- [vDSP_zvabs](vdsp_zvabs.md): Calculates the absolute value of each element in the supplied single-precision complex vector using the specified stride.
- [vDSP_zvabsD](vdsp_zvabsd.md): Calculates the absolute value of each element in the supplied double-precision complex vector using the specified stride.

### Vector negative absolute functions

- [vDSP_vnabs](vdsp_vnabs.md): Calculates the negative absolute value of each element in the supplied single-precision vector using the specified stride.
- [vDSP_vnabsD](vdsp_vnabsd.md): Calculates the negative absolute value of each element in the supplied double-precision vector using the specified stride.

### Vector negation functions

- [vDSP_vneg](vdsp_vneg.md): Calculates the negative value of each element in the supplied single-precision vector using the specified stride.
- [vDSP_vnegD](vdsp_vnegd.md): Calculates the negative value of each element in the supplied double-precision vector using specified stride.

### Complex vector negation functions

- [vDSP_zvneg](vdsp_zvneg.md): Calculates the negative value of each element in the supplied complex single-precision vector.
- [vDSP_zvnegD](vdsp_zvnegd.md): Calculates the negative value of each element in the supplied complex double-precision vector.

## See Also

### Single-vector arithmetic functions

- [Integration functions](integration-functions.md): Compute the running sum, Simpson, or trapezoidal integration of a vector.
- [Clipping, limit, and threshold operations](clipping-limit-and-threshold-operations.md): Apply clipping, limit, or threshold rules to the elements in a vector.
- [Normalization functions](normalization-functions.md): Compute the mean and standard deviation of a vector and calculate new elements to have a zero mean and a unit standard deviation.
- [Phase computation functions](phase-computation-functions.md): Calculate the element-wise phase values, in radians, of a complex vector.
- [Complex conjugation functions](complex-conjugation-functions.md): Calculate the complex conjugate of the elements in a vector.
- [Vector squaring functions](vector-squaring-functions.md): Compute the square, signed square, or squared magnitude of the elements in a vector.
- [Fractional part extraction](fractional-part-extraction.md): Truncate the elements of a vector to a fraction.
- [Zero crossing search](zero-crossing-search.md): Count and find the zero crossings in a vector.
