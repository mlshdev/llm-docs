> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vector-vector-real-arithmetic-functions](https://developer.apple.com/documentation/accelerate/vector-vector-real-arithmetic-functions)

# Vector-vector real arithmetic functions (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Perform element-wise operations on vectors of real values.

<a id="overview"></a>

## Overview

The vDSP library provides a suite of general-purpose, high-performance arithmetic functions that are alternatives to `for` loops and `map` when you apply operations on collections of floating-point values.

See [Using vDSP for vector-based arithmetic](using-vdsp-for-vector-based-arithmetic.md) for a summary of available operations.

## Topics

### Binary addition operations

- [add(\_:\_:)](vdsp/add%28____%29-7swvf.md): Returns the single-precision element-wise sum of two vectors.
- [add(\_:\_:)](vdsp/add%28____%29-2ftxc.md): Returns the double-precision element-wise sum of two vectors.
- [add(\_:\_:result:)](vdsp/add%28____result_%29-3vzwi.md): Calculates the single-precision element-wise sum of two vectors.
- [add(\_:\_:result:)](vdsp/add%28____result_%29-338hl.md): Calculates the double-precision element-wise sum of two vectors.

### Binary subtraction operations

- [subtract(\_:\_:)](vdsp/subtract%28____%29-9xmo8.md): Returns the single-precision element-wise subtraction of two vectors.
- [subtract(\_:\_:)](vdsp/subtract%28____%29-8o5ai.md): Returns the double-precision element-wise subtraction of two vectors.
- [subtract(\_:\_:result:)](vdsp/subtract%28____result_%29-2p3fa.md): Calculates the single-precision element-wise subtraction of two vectors.
- [subtract(\_:\_:result:)](vdsp/subtract%28____result_%29-1ianx.md): Calculates the double-precision element-wise subtraction of two vectors.

### Binary multiplication operations

- [multiply(\_:\_:)](vdsp/multiply%28____%29-9zgw.md): Returns the single-precision element-wise product of two vectors.
- [multiply(\_:\_:)](vdsp/multiply%28____%29-1ckqt.md): Returns the double-precision element-wise product of two vectors.
- [multiply(\_:\_:result:)](vdsp/multiply%28____result_%29-155f3.md): Calculates the single-precision element-wise product of two vectors.
- [multiply(\_:\_:result:)](vdsp/multiply%28____result_%29-3ptjl.md): Calculates the double-precision element-wise product of two vectors.

### Binary division operations

- [divide(\_:\_:)](vdsp/divide%28____%29-6nfsi.md): Returns the single-precision element-wise division of two vectors.
- [divide(\_:\_:)](vdsp/divide%28____%29-8swnm.md): Returns the double-precision element-wise division of two vectors.
- [divide(\_:\_:result:)](vdsp/divide%28____result_%29-7ejy9.md): Calculates the single-precision element-wise division of two vectors.
- [divide(\_:\_:result:)](vdsp/divide%28____result_%29-6gtmm.md): Calculates the double-precision element-wise division of two vectors.

### Binary addition and subtraction operations

- [addSubtract(\_:\_:addResult:subtractResult:)](vdsp/addsubtract%28____addresult_subtractresult_%29-6qxwa.md): Calculates the single-precision element-wise sum and subtraction of two vectors.
- [addSubtract(\_:\_:addResult:subtractResult:)](vdsp/addsubtract%28____addresult_subtractresult_%29-avzd.md): Calculates the double-precision element-wise sum and subtraction of two vectors.

### Ternary add-multiply operations

- [multiply(addition:\_:)](vdsp/multiply%28addition___%29-7t59.md): Returns the single-precision element-wise product of a vector and the sum of two vectors.
- [multiply(addition:\_:)](vdsp/multiply%28addition___%29-1wt61.md): Returns the double-precision element-wise product of a vector and the sum of two vectors.
- [multiply(addition:\_:result:)](vdsp/multiply%28addition___result_%29-3jqts.md): Calculates the single-precision element-wise product of a vector and the sum of two vectors.
- [multiply(addition:\_:result:)](vdsp/multiply%28addition___result_%29-5sqwo.md): Calculates the double-precision element-wise product of a vector and the sum of two vectors.

### Ternary multiply-add operations

- [add(multiplication:\_:)](vdsp/add%28multiplication___%29-9bgb2.md): Returns the single-precision element-wise sum of a vector and the product of two vectors.
- [add(multiplication:\_:)](vdsp/add%28multiplication___%29-4667v.md): Returns the double-precision element-wise sum of a vector and the product of two vectors.
- [add(multiplication:\_:result:)](vdsp/add%28multiplication___result_%29-1srn8.md): Calculates the single-precision element-wise sum of a vector and the product of two vectors.
- [add(multiplication:\_:result:)](vdsp/add%28multiplication___result_%29-48vyq.md): Calculates the double-precision element-wise sum of a vector and the product of two vectors.

### Ternary multiply-subtract operations

- [subtract(multiplication:\_:)](vdsp/subtract%28multiplication___%29-6u3sp.md): Returns the single-precision element-wise difference of a vector and the product of two vectors.
- [subtract(multiplication:\_:)](vdsp/subtract%28multiplication___%29-9gphg.md): Returns the double-precision element-wise difference of a vector and the product of two vectors.
- [subtract(multiplication:\_:result:)](vdsp/subtract%28multiplication___result_%29-6b91s.md): Calculates the single-precision element-wise difference of a vector and the product of two vectors.
- [subtract(multiplication:\_:result:)](vdsp/subtract%28multiplication___result_%29-3f2bw.md): Calculates the double-precision element-wise difference of a vector and the product of two vectors.

### Ternary subtract-multiply operations

- [multiply(subtraction:\_:)](vdsp/multiply%28subtraction___%29-6y7g6.md): Returns the single-precision element-wise product of a vector and the differences of two vectors.
- [multiply(subtraction:\_:)](vdsp/multiply%28subtraction___%29-8a8sr.md): Returns the double-precision element-wise product of a vector and the differences of two vectors.
- [multiply(subtraction:\_:result:)](vdsp/multiply%28subtraction___result_%29-36flg.md): Calculates the single-precision element-wise product of a vector and the differences of two vectors.
- [multiply(subtraction:\_:result:)](vdsp/multiply%28subtraction___result_%29-ziw4.md): Calculates the double-precision element-wise product of a vector and the differences of two vectors.

### Quaternary multiply-multiply-subtract operations

- [subtract(multiplication:multiplication:)](vdsp/subtract%28multiplication_multiplication_%29-1ghyu.md): Returns the single-precision element-wise difference of the products of two pairs of vectors.
- [subtract(multiplication:multiplication:)](vdsp/subtract%28multiplication_multiplication_%29-22a4b.md): Returns the double-precision element-wise difference of the products of two pairs of vectors.
- [subtract(multiplication:multiplication:result:)](vdsp/subtract%28multiplication_multiplication_result_%29-8ofjj.md): Calculates the single-precision element-wise difference of the products of two pairs of vectors.
- [subtract(multiplication:multiplication:result:)](vdsp/subtract%28multiplication_multiplication_result_%29-48y6i.md): Calculates the double-precision element-wise difference of the products of two pairs of vectors.

### Quaternary add-add-multiply operations

- [multiply(addition:addition:)](vdsp/multiply%28addition_addition_%29-1voy8.md): Returns the single-precision element-wise product of the sums of two pairs of vectors.
- [multiply(addition:addition:)](vdsp/multiply%28addition_addition_%29-7rs.md): Returns the double-precision element-wise product of the sums of two pairs of vectors.
- [multiply(addition:addition:result:)](vdsp/multiply%28addition_addition_result_%29-7p21q.md): Calculates the single-precision element-wise product of the sums of two pairs of vectors.
- [multiply(addition:addition:result:)](vdsp/multiply%28addition_addition_result_%29-89hgk.md): Calculates the double-precision element-wise product of the sums of two pairs of vectors.

### Quaternary subtract-subtract-multiply operations

- [multiply(subtraction:subtraction:)](vdsp/multiply%28subtraction_subtraction_%29-1rnom.md): Returns the single-precision element-wise product of the differences of two pairs of vectors.
- [multiply(subtraction:subtraction:)](vdsp/multiply%28subtraction_subtraction_%29-5pv8p.md): Returns the double-precision element-wise product of the differences of two pairs of vectors.
- [multiply(subtraction:subtraction:result:)](vdsp/multiply%28subtraction_subtraction_result_%29-rubk.md): Calculates the single-precision element-wise product of the differences of two pairs of vectors.
- [multiply(subtraction:subtraction:result:)](vdsp/multiply%28subtraction_subtraction_result_%29-4jjy5.md): Calculates the double-precision element-wise product of the differences of two pairs of vectors.

### Quaternary add-subtract-multiply operations

- [multiply(addition:subtraction:)](vdsp/multiply%28addition_subtraction_%29-6h89l.md): Returns the single-precision element-wise product of the sum of two vectors and the difference of two vectors.
- [multiply(addition:subtraction:)](vdsp/multiply%28addition_subtraction_%29-7qfik.md): Returns the double-precision element-wise product of the sum of two vectors and the difference of two vectors.
- [multiply(addition:subtraction:result:)](vdsp/multiply%28addition_subtraction_result_%29-j688.md): Calculates the double-precision element-wise product of the sum of two vectors and the difference of two vectors.
- [multiply(addition:subtraction:result:)](vdsp/multiply%28addition_subtraction_result_%29-2rldl.md): Calculates the double-precision element-wise product of the sum of two vectors and the difference of two vectors.

## See Also

### Vector-vector arithmetic

- [Complex basic arithmetic](complex-basic-arithmetic.md): Perform element-wise operations on vectors of complex values.
- [Integer arithmetic](integer-arithmetic.md): Perform element-wise operations on vectors of integer values.
- [Linear averaging functions](linear-averaging-functions.md): Calculate the element-wise linear average of two vectors.
- [Polynomial evaluation](polynomial-evaluation.md): Evaluate polynomials using coefficients and independent variables that you supply.

# Vector-vector real arithmetic functions (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Perform element-wise operations on vectors of real values.

<a id="overview"></a>

## Overview

The vDSP library provides a suite of general-purpose, high-performance arithmetic functions that are alternatives to `for` loops and `map` when you apply operations on collections of floating-point values.

See [Using vDSP for vector-based arithmetic](using-vdsp-for-vector-based-arithmetic.md) for a summary of available operations.

## Topics

### Binary addition operations

- [vDSP_vadd](vdsp_vadd.md): Calculates the single-precision element-wise sum of two vectors, using the specified stride.
- [vDSP_vaddD](vdsp_vaddd.md): Calculates the double-precision element-wise sum of two vectors, using the specified stride.

### Binary subtraction operations

- [vDSP_vsub](vdsp_vsub.md): Calculates the single-precision element-wise subtraction of two vectors, using the specified stride.
- [vDSP_vsubD](vdsp_vsubd.md): Calculates the double-precision element-wise subtraction of two vectors, using the specified stride.

### Binary multiplication operations

- [vDSP_vmul](vdsp_vmul.md): Calculates the single-precision element-wise product of two vectors, using the specified stride.
- [vDSP_vmulD](vdsp_vmuld.md): Calculates the double-precision element-wise product of two vectors, using the specified stride.

### Binary division operations

- [vDSP_vdiv](vdsp_vdiv.md): Calculates the single-precision element-wise division of two vectors, using the specified stride.
- [vDSP_vdivD](vdsp_vdivd.md): Calculates the double-precision element-wise division of two vectors, using the specified stride.

### Binary addition and subtraction operations

- [vDSP_vaddsub](vdsp_vaddsub.md): Calculates the single-precision element-wise sum and subtraction of two vectors, using the specified stride.
- [vDSP_vaddsubD](vdsp_vaddsubd.md): Calculates the double-precision element-wise sum and subtraction of two vectors, using the specified stride.

### Ternary add-multiply operations

- [vDSP_vam](vdsp_vam.md): Calculates the single-precision element-wise product of a vector and the sum of two vectors, using the specified stride.
- [vDSP_vamD](vdsp_vamd.md): Calculates the double-precision element-wise product of a vector and the sum of two vectors, using the specified stride.

### Ternary multiply-add operations

- [vDSP_vma](vdsp_vma.md): Calculates the single-precision element-wise sum of a vector and the product of two vectors, using the specified stride.
- [vDSP_vmaD](vdsp_vmad.md): Calculates the double-precision element-wise sum of a vector and the product of two vectors, using the specified stride.

### Ternary multiply-subtract operations

- [vDSP_vmsb](vdsp_vmsb.md): Calculates the single-precision element-wise difference of a vector and the product of two vectors, using the specified stride.
- [vDSP_vmsbD](vdsp_vmsbd.md): Calculates the double-precision element-wise difference of a vector and the product of two vectors, using the specified stride.

### Ternary subtract-multiply operations

- [vDSP_vsbm](vdsp_vsbm.md): Calculates the single-precision element-wise product of a vector and the differences of two vectors, using the specified stride.
- [vDSP_vsbmD](vdsp_vsbmd.md): Calculates the double-precision element-wise product of a vector and the differences of two vectors, using the specified stride.

### Quaternary multiply-multiply-add operations

- [vDSP_vmma](vdsp_vmma.md): Calculates the single-precision element-wise sum of the products of two pairs of vectors, using the specified stride.
- [vDSP_vmmaD](vdsp_vmmad.md): Calculates the double-precision element-wise sum of the products of two pairs of vectors, using the specified stride.

### Quaternary multiply-multiply-subtract operations

- [vDSP_vmmsb](vdsp_vmmsb.md): Calculates the single-precision element-wise difference of the products of two pairs of vectors, using the specified stride.
- [vDSP_vmmsbD](vdsp_vmmsbd.md): Calculates the double-precision element-wise difference of the products of two pairs of vectors, using the specified stride.

### Quaternary add-add-multiply operations

- [vDSP_vaam](vdsp_vaam.md): Calculates the single-precision element-wise product of the sums of two pairs of vectors, using the specified stride.
- [vDSP_vaamD](vdsp_vaamd.md): Calculates the double-precision element-wise product of the sums of two pairs of vectors, using the specified stride.

### Quaternary subtract-subtract-multiply operations

- [vDSP_vsbsbm](vdsp_vsbsbm.md): Calculates the single-precision element-wise product of the differences of two pairs of vectors, using the specified stride.
- [vDSP_vsbsbmD](vdsp_vsbsbmd.md): Calculates the double-precision element-wise product of the differences of two pairs of vectors, using the specified stride.

### Quaternary add-subtract-multiply operations

- [vDSP_vasbm](vdsp_vasbm.md): Calculates the double-precision element-wise product of the sum of two vectors and the difference of two vectors, using the specified stride.
- [vDSP_vasbmD](vdsp_vasbmd.md): Calculates the double-precision element-wise product of the sum of two vectors and the difference of two vectors, using the specified stride.

## See Also

### Vector-vector arithmetic

- [Complex basic arithmetic](complex-basic-arithmetic.md): Perform element-wise operations on vectors of complex values.
- [Integer arithmetic](integer-arithmetic.md): Perform element-wise operations on vectors of integer values.
- [Linear averaging functions](linear-averaging-functions.md): Calculate the element-wise linear average of two vectors.
- [Polynomial evaluation](polynomial-evaluation.md): Evaluate polynomials using coefficients and independent variables that you supply.
