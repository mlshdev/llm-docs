> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vector-scalar-real-arithmetic-functions](https://developer.apple.com/documentation/accelerate/vector-scalar-real-arithmetic-functions)

# Vector-scalar real arithmetic functions (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Perform element-wise operations on combinations of vectors of real values and scalar values.

<a id="overview"></a>

## Overview

The vDSP library provides a suite of general-purpose, high-performance arithmetic functions that are alternatives to `for` loops and `map` when you apply operations on collections of floating-point values.

See [Using vDSP for vector-based arithmetic](using-vdsp-for-vector-based-arithmetic.md) for a summary of available operations.

## Topics

### Vector-scalar addition operations

- [add(\_:\_:)](vdsp/add%28____%29-53nh9.md): Returns the single-precision element-wise sum of a vector and a scalar value.
- [add(\_:\_:)](vdsp/add%28____%29-9mv1a.md): Returns the double-precision element-wise sum of a vector and a scalar value.
- [add(\_:\_:result:)](vdsp/add%28____result_%29-2w0o9.md): Calculates the single-precision element-wise sum of a vector and a scalar value.
- [add(\_:\_:result:)](vdsp/add%28____result_%29-2531u.md): Calculates the single-precision element-wise sum of a vector and a scalar value.

### Vector-scalar multiplication operations

- [multiply(\_:\_:)](vdsp/multiply%28____%29-993yp.md): Returns the single-precision element-wise product of a vector and a scalar value.
- [multiply(\_:\_:)](vdsp/multiply%28____%29-9dxnc.md): Returns the double-precision element-wise product of a vector and a scalar value.
- [multiply(\_:\_:result:)](vdsp/multiply%28____result_%29-358cn.md): Calculates the single-precision element-wise product of a vector and a scalar value.
- [multiply(\_:\_:result:)](vdsp/multiply%28____result_%29-4xorc.md): Calculates the double-precision element-wise product of a vector and a scalar value.

### Vector-scalar division operations

- [divide(\_:\_:)](vdsp/divide%28____%29-1uqmz.md): Calculates the single-precision element-wise division of a vector and a scalar value.
- [divide(\_:\_:)](vdsp/divide%28____%29-9nb4j.md): Calculates the double-precision element-wise division of a vector and a scalar value.
- [divide(\_:\_:result:)](vdsp/divide%28____result_%29-5hwb2.md): Calculates the single-precision element-wise division of a vector and a scalar value.
- [divide(\_:\_:result:)](vdsp/divide%28____result_%29-44mff.md): Calculates the double-precision element-wise division of a vector and a scalar value.

### Scalar-vector division operations

- [divide(\_:\_:)](vdsp/divide%28____%29-70npt.md): Returns the single-precision element-wise division of a scalar value and a vector.
- [divide(\_:\_:)](vdsp/divide%28____%29-73m8v.md): Returns the double-precision element-wise division of a scalar value and a vector.
- [divide(\_:\_:result:)](vdsp/divide%28____result_%29-3emlk.md): Calculates the single-precision element-wise division of a scalar value and a vector.
- [divide(\_:\_:result:)](vdsp/divide%28____result_%29-18qa3.md): Calculates the double-precision element-wise division of a scalar value and a vector.

### Vector-vector-scalar add-multiply operations

- [multiply(addition:\_:)](vdsp/multiply%28addition___%29-4fnbx.md): Returns the single-precision element-wise product of the sum of two vectors and a scalar value.
- [multiply(addition:\_:)](vdsp/multiply%28addition___%29-4c9in.md): Returns the double-precision element-wise product of the sum of two vectors and a scalar value.
- [multiply(addition:\_:result:)](vdsp/multiply%28addition___result_%29-6x7xq.md): Calculates the single-precision element-wise product of the sum of two vectors and a scalar value.
- [multiply(addition:\_:result:)](vdsp/multiply%28addition___result_%29-7dujy.md): Calculates the double-precision element-wise product of the sum of two vectors and a scalar value.

### Vector-vector-scalar subtract-multiply operations

- [multiply(subtraction:\_:)](vdsp/multiply%28subtraction___%29-106pt.md): Returns the single-precision element-wise product of the difference of two vectors and a scalar value.
- [multiply(subtraction:\_:)](vdsp/multiply%28subtraction___%29-3gxn3.md): Returns the double-precision element-wise product of the difference of two vectors and a scalar value.
- [multiply(subtraction:\_:result:)](vdsp/multiply%28subtraction___result_%29-5l106.md): Calculates the single-precision element-wise product of the difference of two vectors and a scalar value.
- [multiply(subtraction:\_:result:)](vdsp/multiply%28subtraction___result_%29-lhn7.md): Calculates the double-precision element-wise product of the difference of two vectors and a scalar value.

### Vector-scalar-vector multiply-subtract operations

- [subtract(multiplication:\_:)](vdsp/subtract%28multiplication___%29-3zm6l.md): Calculates the single-precision element-wise difference of the product of a vector and a scalar value, and a vector.
- [subtract(multiplication:\_:)](vdsp/subtract%28multiplication___%29-2hhme.md): Calculates the double-precision element-wise difference of the product of a vector and a scalar value, and a vector.
- [subtract(multiplication:\_:result:)](vdsp/subtract%28multiplication___result_%29-86gx3.md): Calculates the single-precision element-wise difference of the product of a vector and a scalar value, and a vector.
- [subtract(multiplication:\_:result:)](vdsp/subtract%28multiplication___result_%29-9p12h.md): Calculates the double-precision element-wise difference of the product of a vector and a scalar value, and a vector.

### Vector-vector-scalar multiply-add operations

- [add(multiplication:\_:)](vdsp/add%28multiplication___%29-36vhq.md): Returns the single-precision element-wise sum of the product of two vectors, and a scalar value.
- [add(multiplication:\_:)](vdsp/add%28multiplication___%29-9dxlr.md): Returns the double-precision element-wise sum of the product of two vectors, and a scalar value.
- [add(multiplication:\_:result:)](vdsp/add%28multiplication___result_%29-8dau.md): Calculates the single-precision element-wise sum of the product of two vectors, and a scalar value.
- [add(multiplication:\_:result:)](vdsp/add%28multiplication___result_%29-2wpvw.md): Calculates the double-precision element-wise sum of the product of two vectors, and a scalar value.

### Vector-scalar-vector multiply-add operations

- [add(multiplication:\_:)](vdsp/add%28multiplication___%29-7aut1.md): Returns the single-precision element-wise addition of the product of a vector and a scalar value, and a vector.
- [add(multiplication:\_:)](vdsp/add%28multiplication___%29-1bsuq.md): Returns the double-precision element-wise addition of the product of a vector and a scalar value, and a vector.
- [add(multiplication:\_:result:)](vdsp/add%28multiplication___result_%29-6n4jf.md): Calculates the single-precision element-wise addition of the product of a vector and a scalar value, and a vector.
- [add(multiplication:\_:result:)](vdsp/add%28multiplication___result_%29-2i5om.md): Calculates the double-precision element-wise addition of the product of a vector and a scalar value, and a vector.

### Vector-scalar-scalar multiply-add operations

- [add(multiplication:\_:)](vdsp/add%28multiplication___%29-3tw93.md): Returns the single-precision element-wise addition of the product of a vector and a scalar value, and a vector.
- [add(multiplication:\_:)](vdsp/add%28multiplication___%29-4e3tj.md): Returns the double-precision element-wise addition of the product of a vector and a scalar value, and a vector.
- [add(multiplication:\_:result:)](vdsp/add%28multiplication___result_%29-1rob9.md): Calculates the single-precision element-wise addition of the product of a vector and a scalar value, and a scalar.
- [add(multiplication:\_:result:)](vdsp/add%28multiplication___result_%29-8ixx9.md): Calculates the double-precision element-wise addition of the product of a vector and a scalar value, and a scalar.

### Vector-scalar-vector-scalar multiply-multiply-add operations

- [add(multiplication:multiplication:)](vdsp/add%28multiplication_multiplication_%29-8rjh8.md): Returns the single-precision element-wise addition of two vector-scalar products.
- [add(multiplication:multiplication:)](vdsp/add%28multiplication_multiplication_%29-563ub.md): Returns the double-precision element-wise addition of two vector-scalar products.
- [add(multiplication:multiplication:result:)](vdsp/add%28multiplication_multiplication_result_%29-663mk.md): Calculates the single-precision element-wise addition of two vector-scalar products.
- [add(multiplication:multiplication:result:)](vdsp/add%28multiplication_multiplication_result_%29-9xe8k.md): Calculates the double-precision element-wise addition of two vector-scalar products.

# Vector-scalar real arithmetic functions (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Perform element-wise operations on combinations of vectors of real values and scalar values.

<a id="overview"></a>

## Overview

The vDSP library provides a suite of general-purpose, high-performance arithmetic functions that are alternatives to `for` loops and `map` when you apply operations on collections of floating-point values.

See [Using vDSP for vector-based arithmetic](using-vdsp-for-vector-based-arithmetic.md) for a summary of available operations.

## Topics

### Vector-scalar addition operations

- [vDSP_vsaddi](vdsp_vsaddi.md): Calculates the integer element-wise sum of a vector and a scalar value, using the specified stride.
- [vDSP_vsadd](vdsp_vsadd.md): Calculates the single-precision element-wise sum of a vector and a scalar value, using the specified stride.
- [vDSP_vsaddD](vdsp_vsaddd.md): Calculates the double-precision element-wise sum of a vector and a scalar value, using the specified stride.

### Vector-scalar multiplication operations

- [vDSP_vsmul](vdsp_vsmul.md): Calculates the single-precision element-wise product of a vector and a scalar value, using the specified stride.
- [vDSP_vsmulD](vdsp_vsmuld.md): Calculates the double-precision element-wise product of a vector and a scalar value, using the specified stride.

### Vector-scalar division operations

- [vDSP_vsdivi](vdsp_vsdivi.md): Calculates the integer element-wise division of a vector and a scalar value, using the specified stride.
- [vDSP_vsdiv](vdsp_vsdiv.md): Calculates the single-precision element-wise division of a vector and a scalar value, using the specified stride.
- [vDSP_vsdivD](vdsp_vsdivd.md): Calculates the double-precision element-wise division of a vector and a scalar value, using the specified stride.

### Scalar-vector division operations

- [vDSP_svdiv](vdsp_svdiv.md): Calculates the single-precision element-wise division of a scalar value and a vector, using the specified stride.
- [vDSP_svdivD](vdsp_svdivd.md): Calculates the double-precision element-wise division of a scalar value and a vector, using the specified stride.

### Vector-vector-scalar add-multiply operations

- [vDSP_vasm](vdsp_vasm.md): Calculates the single-precision element-wise product of the sum of two vectors and a scalar value, using the specified stride.
- [vDSP_vasmD](vdsp_vasmd.md): Calculates the double-precision element-wise product of the sum of two vectors and a scalar value, using the specified stride.

### Vector-vector-scalar subtract-multiply operations

- [vDSP_vsbsm](vdsp_vsbsm.md): Calculates the single-precision element-wise product of the difference of two vectors and a scalar value, using the specified stride.
- [vDSP_vsbsmD](vdsp_vsbsmd.md): Calculates the double-precision element-wise product of the difference of two vectors and a scalar value, using the specified stride.

### Vector-scalar-vector multiply-subtract operations

- [vDSP_vsmsb](vdsp_vsmsb.md): Calculates the single-precision element-wise difference of the product of a vector and a scalar value, and a vector, using the specified stride.
- [vDSP_vsmsbD](vdsp_vsmsbd.md): Calculates the double-precision element-wise difference of the product of a vector and a scalar value, and a vector, using the specified stride.

### Vector-vector-scalar multiply-add operations

- [vDSP_vmsa](vdsp_vmsa.md): Calculates the single-precision element-wise sum of the product of two vectors, and a scalar value, using the specified stride.
- [vDSP_vmsaD](vdsp_vmsad.md): Calculates the double-precision element-wise sum of the product of two vectors, and a scalar value, using the specified stride.

### Vector-scalar-vector multiply-add operations

- [vDSP_vsma](vdsp_vsma.md): Calculates the single-precision element-wise addition of the product of a vector and a scalar value, and a vector, using the specified stride.
- [vDSP_vsmaD](vdsp_vsmad.md): Calculates the double-precision element-wise addition of the product of a vector and a scalar value, and a vector, using the specified stride.

### Vector-scalar-scalar multiply-add operations

- [vDSP_vsmsa](vdsp_vsmsa.md): Calculates the single-precision element-wise addition of the product of a vector and a scalar value, and a scalar value, using the specified stride.
- [vDSP_vsmsaD](vdsp_vsmsad.md): Calculates the double-precision element-wise addition of the product of a vector and a scalar value, and a scalar value, using the specified stride.

### Vector-scalar-vector-scalar multiply-multiply-add operations

- [vDSP_vsmsma](vdsp_vsmsma.md): Calculates the single-precision element-wise addition of two vector-scalar products, using the specified stride.
- [vDSP_vsmsmaD](vdsp_vsmsmad.md): Calculates the double-precision element-wise addition of two vector-scalar products, using the specified stride.
