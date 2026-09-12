> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vectorops](https://developer.apple.com/documentation/accelerate/vectorops)

# vectorOps (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Perform vector and matrix BLAS functions on arrays of 128-bit vectors.

<a id="overview"></a>

## Overview

vectorOps.h declares a set of vector and matrix BLAS functions on arrays of 128-bit vectors containing single-precision floating-point values. The arrays can be of any desired length, but the number of `float` elements must be a multiple of 4.

## Topics

### Vector-Scalar Linear Algebra Functions (from vectorOps.h)

- [vIsamax(\_:\_:)](visamax%28____%29.md): Deprecated. Finds the position of the first vector element having the largest absolute value.
- [vIsamin(\_:\_:)](visamin%28____%29.md): Deprecated. Finds the position of the first vector element having the smallest absolute value.
- [vIsmax(\_:\_:)](vismax%28____%29.md): Deprecated. Finds the position of the first vector element having the maximum value.
- [vIsmin(\_:\_:)](vismin%28____%29.md): Deprecated. Finds the position of the first vector element having the minimum value.
- [vSasum(\_:\_:)](vsasum%28____%29.md): Deprecated. Finds the sum of the absolute values of the elements in a vector.
- [vSsum(\_:\_:)](vssum%28____%29.md): Deprecated. Finds the sum of the values of the elements in a vector.
- [vSaxpy(\_:\_:\_:\_:)](vsaxpy%28________%29.md): Deprecated. Multiplies a vector by a scalar , adds it to a second vector , and stores the result in the second vector.
- [vSnaxpy(\_:\_:\_:\_:\_:)](vsnaxpy%28__________%29.md): Deprecated. Performs the computation of `vSaxpy` `n` times, using a different multiplier each time.
- [vScopy(\_:\_:\_:)](vscopy%28______%29.md): Deprecated. Copies one vector to another.
- [vSdot(\_:\_:\_:)](vsdot%28______%29.md): Deprecated. Computes the dot product of two vectors.
- [vSndot(\_:\_:\_:\_:\_:\_:)](vsndot%28____________%29.md): Deprecated. Computes the dot products of n pairs of vectors, accumulating or storing the results in an array of `n` `float` values.
- [vSnrm2(\_:\_:)](vsnrm2%28____%29.md): Deprecated. Finds the Euclidean length of a vector.
- [vSnorm2(\_:\_:)](vsnorm2%28____%29.md): Deprecated. Finds the Euclidean length of a vector.
- [vSrot(\_:\_:\_:\_:\_:)](vsrot%28__________%29.md): Deprecated. Applies planar rotation to a set of n points whose x and y coordinates are contained in two arrays of vectors.
- [vSscal(\_:\_:\_:)](vsscal%28______%29.md): Deprecated. Scales a vector in place.
- [vSswap(\_:\_:\_:)](vsswap%28______%29.md): Deprecated. Interchanges the elements of two vectors.
- [vSyax(\_:\_:\_:\_:)](vsyax%28________%29.md): Deprecated. Multiplies each element of a vector and stores the results in a second vector.
- [vSzaxpy(\_:\_:\_:\_:\_:)](vszaxpy%28__________%29.md): Deprecated. Multiplies a vector by a scalar, adds it to a second vector, and stores the result in a third vector.

### Matrix-Vector Linear Algebra Functions (from vectorOps.h)

- [vSgemv(\_:\_:\_:\_:\_:\_:\_:\_:)](vsgemv%28________________%29.md): Deprecated. Multiplies a vector by a scalar. Multiplies a matrix by another scalar, then by a second vector, and adds the resulting vector to the first vector. This function can also perform the calculation with the transpose of the original matrix instead of the matrix itself. A selector parameter determines whether the transpose is used.
- [vSgemx(\_:\_:\_:\_:\_:\_:)](vsgemx%28____________%29.md): Deprecated. Multiplies a matrix by a scalar and then by a vector, and adds the resulting vector to a second vector.
- [vSgemtx(\_:\_:\_:\_:\_:\_:)](vsgemtx%28____________%29.md): Deprecated. Forms the transpose of a matrix, multiplies it by a scalar and then by a vector, and adds the resulting vector to a second vector.

### Matrix Operations (from vectorOps.h)

- [vSgeadd(\_:\_:\_:\_:\_:\_:\_:)](vsgeadd%28______________%29.md): Deprecated. Adds two general matrices or their transposes.
- [vSgesub(\_:\_:\_:\_:\_:\_:\_:)](vsgesub%28______________%29.md): Deprecated. Subtracts two general matrices or their transposes.
- [vSgemul(\_:\_:\_:\_:\_:\_:\_:\_:)](vsgemul%28________________%29.md): Deprecated. Multiplies two general matrices or their transposes.
- [vSgemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vsgemm%28______________________%29.md): Deprecated. Multiples two general matrices or their transposes, then scales and adds a third.
- [vSgetmi(\_:\_:)](vsgetmi%28____%29.md): Deprecated. Transposes a matrix in place.
- [vSgetmo(\_:\_:\_:\_:)](vsgetmo%28________%29.md): Deprecated. Transposes a matrix out of place.
- [vSgevv(\_:\_:\_:\_:\_:)](vsgevv%28__________%29.md): Deprecated. Produces the outer product of two vectors and places the results into a matrix.

# vectorOps (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Perform vector and matrix BLAS functions on arrays of 128-bit vectors.

<a id="overview"></a>

## Overview

vectorOps.h declares a set of vector and matrix BLAS functions on arrays of 128-bit vectors containing single-precision floating-point values. The arrays can be of any desired length, but the number of `float` elements must be a multiple of 4.

## Topics

### Vector-Scalar Linear Algebra Functions (from vectorOps.h)

- [vIsamax](visamax%28____%29.md): Deprecated. Finds the position of the first vector element having the largest absolute value.
- [vIsamin](visamin%28____%29.md): Deprecated. Finds the position of the first vector element having the smallest absolute value.
- [vIsmax](vismax%28____%29.md): Deprecated. Finds the position of the first vector element having the maximum value.
- [vIsmin](vismin%28____%29.md): Deprecated. Finds the position of the first vector element having the minimum value.
- [vSasum](vsasum%28____%29.md): Deprecated. Finds the sum of the absolute values of the elements in a vector.
- [vSsum](vssum%28____%29.md): Deprecated. Finds the sum of the values of the elements in a vector.
- [vSaxpy](vsaxpy%28________%29.md): Deprecated. Multiplies a vector by a scalar , adds it to a second vector , and stores the result in the second vector.
- [vSnaxpy](vsnaxpy%28__________%29.md): Deprecated. Performs the computation of `vSaxpy` `n` times, using a different multiplier each time.
- [vScopy](vscopy%28______%29.md): Deprecated. Copies one vector to another.
- [vSdot](vsdot%28______%29.md): Deprecated. Computes the dot product of two vectors.
- [vSndot](vsndot%28____________%29.md): Deprecated. Computes the dot products of n pairs of vectors, accumulating or storing the results in an array of `n` `float` values.
- [vSnrm2](vsnrm2%28____%29.md): Deprecated. Finds the Euclidean length of a vector.
- [vSnorm2](vsnorm2%28____%29.md): Deprecated. Finds the Euclidean length of a vector.
- [vSrot](vsrot%28__________%29.md): Deprecated. Applies planar rotation to a set of n points whose x and y coordinates are contained in two arrays of vectors.
- [vSscal](vsscal%28______%29.md): Deprecated. Scales a vector in place.
- [vSswap](vsswap%28______%29.md): Deprecated. Interchanges the elements of two vectors.
- [vSyax](vsyax%28________%29.md): Deprecated. Multiplies each element of a vector and stores the results in a second vector.
- [vSzaxpy](vszaxpy%28__________%29.md): Deprecated. Multiplies a vector by a scalar, adds it to a second vector, and stores the result in a third vector.

### Matrix-Vector Linear Algebra Functions (from vectorOps.h)

- [vSgemv](vsgemv%28________________%29.md): Deprecated. Multiplies a vector by a scalar. Multiplies a matrix by another scalar, then by a second vector, and adds the resulting vector to the first vector. This function can also perform the calculation with the transpose of the original matrix instead of the matrix itself. A selector parameter determines whether the transpose is used.
- [vSgemx](vsgemx%28____________%29.md): Deprecated. Multiplies a matrix by a scalar and then by a vector, and adds the resulting vector to a second vector.
- [vSgemtx](vsgemtx%28____________%29.md): Deprecated. Forms the transpose of a matrix, multiplies it by a scalar and then by a vector, and adds the resulting vector to a second vector.

### Matrix Operations (from vectorOps.h)

- [vSgeadd](vsgeadd%28______________%29.md): Deprecated. Adds two general matrices or their transposes.
- [vSgesub](vsgesub%28______________%29.md): Deprecated. Subtracts two general matrices or their transposes.
- [vSgemul](vsgemul%28________________%29.md): Deprecated. Multiplies two general matrices or their transposes.
- [vSgemm](vsgemm%28______________________%29.md): Deprecated. Multiples two general matrices or their transposes, then scales and adds a third.
- [vSgetmi](vsgetmi%28____%29.md): Deprecated. Transposes a matrix in place.
- [vSgetmo](vsgetmo%28________%29.md): Deprecated. Transposes a matrix out of place.
- [vSgevv](vsgevv%28__________%29.md): Deprecated. Produces the outer product of two vectors and places the results into a matrix.
