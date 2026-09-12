> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/blas-library](https://developer.apple.com/documentation/accelerate/blas-library)

# BLAS (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Perform common linear algebra operations with Apple’s implementation of the Basic Linear Algebra Subprograms (BLAS).

<a id="overview"></a>

## Overview

The vecLib framework contains nine C header files (not counting `vecLib.h`, which merely includes the others).

This document describes the functions declared in the header files `cblas.h` and `vblas.h`, which contain the interfaces for Apple’s implementation of the BLAS API.

Note that documentation describing the leading dimension as the first dimension of a matrix refers to column-major ordering. In row-major ordering, the leading dimension is the second dimension of a matrix.

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## Topics

### Fortran interoperability

- [Using the Fortran 90 wrappers for Accelerate BLAS and LAPACK](usingthefortran90wrappers.md): Call BLAS and LAPACK routines from Fortran 90 source code.

### Specifying the threading model

- [BLAS](blas.md): An enumeration that acts as a namespace for Swift overlays to BLAS.
- [BLASSetThreading(\_:)](blassetthreading%28__%29.md): Sets the BLAS and LAPACK threading model.
- [BLASGetThreading()](blasgetthreading%28%29.md): Returns the current BLAS and LAPACK threading model.
- [BLAS_THREADING](blas_threading.md): Constants that describe the BLAS and LAPACK threading model.

### General functions

- [cblas_icamax(\_:\_:\_:)](cblas_icamax%28______%29.md): Returns the index of the element with the largest absolute value in a vector (single-precision complex).
- [cblas_idamax(\_:\_:\_:)](cblas_idamax%28______%29.md): Returns the index of the element with the largest absolute value in a vector (double-precision).
- [cblas_isamax(\_:\_:\_:)](cblas_isamax%28______%29.md): Returns the index of the element with the largest absolute value in a vector (single-precision).
- [cblas_izamax(\_:\_:\_:)](cblas_izamax%28______%29.md): Returns the index of the element with the largest absolute value in a vector (double-precision complex).

### Sparse computation

- [Matrix and Vector Operations](matrix-and-vector-operations.md): Perform computations with matrices and vectors.
- [Pointwise Matrix Operations](pointwise-matrix-operations.md): Create, insert values into, and extract values from a pointwise sparse matrix.
- [Blockwise Matrix Operations](blockwise-matrix-operations.md): Create, insert values into, and extract values from a blockwise sparse matrix.
- [General Sparse Matrix Management Operations](general-sparse-matrix-management-operations.md): Manage and work with the properties of a sparse matrix.
- [Sparse Vector Utility Operations](sparse-vector-utility-operations.md): Create and work with sparse vector structures.

### Data types

- [BLASParamErrorProc](blasparamerrorproc.md): A BLAS error handler callback type.

### Constants

- [CBLAS_ORDER](cblas_order.md): Indicates whether a matrix is in row-major or column-major order.
- [CBLAS_TRANSPOSE](cblas_transpose.md): Indicates transpose operation to perform on a matrix.
- [CBLAS_UPLO](cblas_uplo.md)
- [CBLAS_DIAG](cblas_diag.md): Indicates whether a triangular matrix is unit-diagonal (diagonal elements are all equal to 1).
- [CBLAS_SIDE](cblas_side.md): Indicates the order of a matrix multiplication.

### Variables

- [CblasColMajor](cblascolmajor.md)
- [CblasConjTrans](cblasconjtrans.md)
- [CblasLeft](cblasleft.md)
- [CblasLower](cblaslower.md)
- [CblasNoTrans](cblasnotrans.md)
- [CblasNonUnit](cblasnonunit.md)
- [CblasRight](cblasright.md)
- [CblasRowMajor](cblasrowmajor.md)
- [CblasTrans](cblastrans.md)
- [CblasUnit](cblasunit.md)
- [CblasUpper](cblasupper.md)
- [AtlasConj](atlasconj.md)

### CATLAS and CBLAS vector functions

- [catlas_caxpby(\_:\_:\_:\_:\_:\_:\_:)](catlas_caxpby%28______________%29.md): Computes the product of two vectors, scaling each one separately (single-precision complex).
- [catlas_cset(\_:\_:\_:\_:)](catlas_cset%28________%29.md): Modifies a vector (single-precision complex) in place, setting each element to a given value.
- [catlas_daxpby(\_:\_:\_:\_:\_:\_:\_:)](catlas_daxpby%28______________%29.md): Computes the sum of two vectors, scaling each one separately (double-precision).
- [catlas_dset(\_:\_:\_:\_:)](catlas_dset%28________%29.md): Modifies a vector (double-precision) in place, setting each element to a given value.
- [catlas_saxpby(\_:\_:\_:\_:\_:\_:\_:)](catlas_saxpby%28______________%29.md): Computes the sum of two vectors, scaling each one separately (single-precision).
- [catlas_sset(\_:\_:\_:\_:)](catlas_sset%28________%29.md): Modifies a vector (single-precision) in place, setting each element to a given value.
- [catlas_zaxpby(\_:\_:\_:\_:\_:\_:\_:)](catlas_zaxpby%28______________%29.md): Computes the sum of two vectors, scaling each one separately (double-precision complex).
- [catlas_zset(\_:\_:\_:\_:)](catlas_zset%28________%29.md): Modifies a vector (double-precision complex) in place, setting each element to a given value.
- [cblas_sdot(\_:\_:\_:\_:\_:)](cblas_sdot%28__________%29.md): Computes the dot product of two vectors (single-precision).
- [cblas_sdsdot(\_:\_:\_:\_:\_:\_:)](cblas_sdsdot%28____________%29.md): Computes the dot product of two single-precision vectors plus an initial single-precision value.
- [cblas_cdotc_sub(\_:\_:\_:\_:\_:\_:)](cblas_cdotc_sub%28____________%29.md): Calculates the dot product of the complex conjugate of a single-precision complex vector with a second single-precision complex vector.
- [cblas_cdotu_sub(\_:\_:\_:\_:\_:\_:)](cblas_cdotu_sub%28____________%29.md): Computes the dot product of two single-precision complex vectors.
- [cblas_ddot(\_:\_:\_:\_:\_:)](cblas_ddot%28__________%29.md): Computes the dot product of two vectors (double-precision).
- [cblas_dsdot(\_:\_:\_:\_:\_:)](cblas_dsdot%28__________%29.md): Computes the double-precision dot product of a pair of single-precision vectors.
- [cblas_zdotc_sub(\_:\_:\_:\_:\_:\_:)](cblas_zdotc_sub%28____________%29.md): Calculates the dot product of the complex conjugate of a double-precision complex vector with a second double-precision complex vector.
- [cblas_zdotu_sub(\_:\_:\_:\_:\_:\_:)](cblas_zdotu_sub%28____________%29.md): Computes the dot product of two double-precision complex vectors.

### Single-precision float matrix functions

- [cblas_sasum(\_:\_:\_:)](cblas_sasum%28______%29.md): Computes the sum of the absolute values of elements in a vector (single-precision).
- [cblas_saxpy(\_:\_:\_:\_:\_:\_:)](cblas_saxpy%28____________%29.md): Computes a constant times a vector plus a vector (single-precision).
- [cblas_scopy(\_:\_:\_:\_:\_:)](cblas_scopy%28__________%29.md): Copies a vector to another vector (single-precision).
- [cblas_sgbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_sgbmv%28____________________________%29.md): Scales a general band matrix, then multiplies by a vector, then adds a vector (single precision).
- [cblas_sgemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_sgemm%28____________________________%29.md): Multiplies two matrices (single-precision).
- [cblas_sgemv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_sgemv%28________________________%29.md): Multiplies a single-precision matrix by a vector.
- [cblas_sger(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_sger%28____________________%29.md): Multiplies vector X by the transpose of vector Y, then adds matrix A (single precison).
- [cblas_snrm2(\_:\_:\_:)](cblas_snrm2%28______%29.md): Computes the L2 norm (Euclidian length) of a vector (single precision).
- [cblas_srot(\_:\_:\_:\_:\_:\_:\_:)](cblas_srot%28______________%29.md): Applies a Givens rotation matrix to a pair of vectors.
- [cblas_srotg(\_:\_:\_:\_:)](cblas_srotg%28________%29.md): Constructs a Givens rotation matrix.
- [cblas_srotm(\_:\_:\_:\_:\_:\_:)](cblas_srotm%28____________%29.md): Applies a modified Givens transformation (single precision).
- [cblas_srotmg(\_:\_:\_:\_:\_:)](cblas_srotmg%28__________%29.md): Generates a modified Givens rotation matrix.
- [cblas_ssbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ssbmv%28________________________%29.md): Scales a symmetric band matrix, then multiplies by a vector, then adds a vector (single-precision).
- [cblas_sscal(\_:\_:\_:\_:)](cblas_sscal%28________%29.md): Multiplies each element of a vector by a constant (single-precision).
- [cblas_sspmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_sspmv%28____________________%29.md): Scales a packed symmetric matrix, then multiplies by a vector, then scales and adds another vector (single precision).
- [cblas_sspr(\_:\_:\_:\_:\_:\_:\_:)](cblas_sspr%28______________%29.md): Rank one update: adds a packed symmetric matrix to the product of a scaling factor, a vector, and its transpose (single precision).
- [cblas_sspr2(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_sspr2%28__________________%29.md): Rank two update of a packed symmetric matrix using two vectors (single precision).
- [cblas_sswap(\_:\_:\_:\_:\_:)](cblas_sswap%28__________%29.md): Exchanges the elements of two vectors (single precision).
- [cblas_ssymm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ssymm%28__________________________%29.md): Multiplies a matrix by a symmetric matrix (single-precision).
- [cblas_ssymv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ssymv%28______________________%29.md): Scales a symmetric matrix, multiplies by a vector, then scales and adds another vector (single precision).
- [cblas_ssyr(\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ssyr%28________________%29.md): Rank one update: adds a symmetric matrix to the product of a scaling factor, a vector, and its transpose (single precision).
- [cblas_ssyr2(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ssyr2%28____________________%29.md): Rank two update of a symmetric matrix using two vectors (single precision).
- [cblas_ssyr2k(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ssyr2k%28__________________________%29.md): Performs a rank-2k update of a symmetric matrix (single precision).
- [cblas_ssyrk(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ssyrk%28______________________%29.md): Rank-k update—multiplies a symmetric matrix by its transpose and adds a second matrix (single precision).
- [cblas_stbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_stbmv%28____________________%29.md): Scales a triangular band matrix, then multiplies by a vector (single precision).
- [cblas_stbsv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_stbsv%28____________________%29.md): Solves a triangular banded system of equations.
- [cblas_stpmv(\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_stpmv%28________________%29.md): Multiplies a triangular matrix by a vector, then adds a vector (single precision).
- [cblas_stpsv(\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_stpsv%28________________%29.md): Solves a packed triangular system of equations.
- [cblas_strmm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_strmm%28________________________%29.md): Scales a triangular matrix and multiplies it by a matrix.
- [cblas_strmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_strmv%28__________________%29.md): Multiplies a triangular matrix by a vector.
- [cblas_strsm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_strsm%28________________________%29.md): Solves a triangular system of equations with multiple values for the right side.
- [cblas_strsv(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_strsv%28__________________%29.md): Solves a triangular system of equations with a single value for the right side.
- [appleblas_sgeadd(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](appleblas_sgeadd%28__________________________%29.md)

### Single-precision complex matrix functions

- [cblas_caxpy(\_:\_:\_:\_:\_:\_:)](cblas_caxpy%28____________%29.md): Computes a constant times a vector plus a vector (single-precision complex).
- [cblas_ccopy(\_:\_:\_:\_:\_:)](cblas_ccopy%28__________%29.md): Copies a vector to another vector (single-precision complex).
- [cblas_cgbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cgbmv%28____________________________%29.md): Scales a general band matrix, then multiplies by a vector, then adds a vector (single-precision complex).
- [cblas_cgemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cgemm%28____________________________%29.md): Multiplies two matrices (single-precision complex).
- [cblas_cgemv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cgemv%28________________________%29.md): Multiplies a matrix by a vector (single-precision complex).
- [cblas_cgerc(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cgerc%28____________________%29.md): Multiplies vector X by the conjugate transpose of vector Y, then adds matrix A (single-precision complex).
- [cblas_cgeru(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cgeru%28____________________%29.md): Multiplies vector X by the transpose of vector Y, then adds matrix A (single-precision complex).
- [cblas_chbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_chbmv%28________________________%29.md): Scales a Hermitian band matrix, then multiplies by a vector, then adds a vector (single-precision complex).
- [cblas_chemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_chemm%28__________________________%29.md): Multiplies two Hermitian matrices (single-precision complex), then adds a third (with scaling).
- [cblas_chemv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_chemv%28______________________%29.md): Scales and multiplies a Hermitian matrix by a vector, then adds a second (scaled) vector.
- [cblas_cher(\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cher%28________________%29.md): Hermitian rank 1 update: adds the product of a scaling factor, vector `X`, and the conjugate transpose of `X` to matrix `A`.
- [cblas_cher2(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cher2%28____________________%29.md): Hermitian rank 2 update: adds the product of a scaling factor, vector `X`, and the conjugate transpose of vector `Y` to the product of the conjugate of the scaling factor, vector `Y`, and the conjugate transpose of vector `X`, and adds the result to matrix `A`.
- [cblas_cher2k(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cher2k%28__________________________%29.md): Performs a rank-2k update of a complex Hermitian matrix (single-precision complex).
- [cblas_cherk(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cherk%28______________________%29.md): Rank-k update—multiplies a Hermitian matrix by its transpose and adds a second matrix (single precision).
- [cblas_chpmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_chpmv%28____________________%29.md): Scales a packed hermitian matrix, multiplies it by a vector, and adds a scaled vector.
- [cblas_chpr(\_:\_:\_:\_:\_:\_:\_:)](cblas_chpr%28______________%29.md): Scales and multiplies a vector times its conjugate transpose, then adds a matrix.
- [cblas_chpr2(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_chpr2%28__________________%29.md): Multiplies a vector times the conjugate transpose of a second vector and vice-versa, sums the results, and adds a matrix.
- [cblas_crotg(\_:\_:\_:\_:)](cblas_crotg%28________%29.md): Constructs a complex Givens rotation.
- [cblas_cscal(\_:\_:\_:\_:)](cblas_cscal%28________%29.md): Multiplies each element of a vector by a constant (single-precision complex).
- [cblas_csrot(\_:\_:\_:\_:\_:\_:\_:)](cblas_csrot%28______________%29.md): Applies a Givens rotation matrix to a pair of complex vectors.
- [cblas_csscal(\_:\_:\_:\_:)](cblas_csscal%28________%29.md): Multiplies each element of a vector by a constant (single-precision complex).
- [cblas_cswap(\_:\_:\_:\_:\_:)](cblas_cswap%28__________%29.md): Exchanges the elements of two vectors (single-precision complex).
- [cblas_csymm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_csymm%28__________________________%29.md): Multiplies a matrix by a symmetric matrix (single-precision complex).
- [cblas_csyr2k(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_csyr2k%28__________________________%29.md): Performs a rank-2k update of a symmetric matrix (single-precision complex).
- [cblas_csyrk(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_csyrk%28______________________%29.md): Rank-k update—multiplies a symmetric matrix by its transpose and adds a second matrix (single-precision complex).
- [cblas_ctbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ctbmv%28____________________%29.md): Scales a triangular band matrix, then multiplies by a vector (single-precision compex).
- [cblas_ctbsv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ctbsv%28____________________%29.md): Solves a triangular banded system of equations.
- [cblas_ctpmv(\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ctpmv%28________________%29.md): Multiplies a triangular matrix by a vector, then adds a vector (single-precision complex).
- [cblas_ctpsv(\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ctpsv%28________________%29.md): Solves a packed triangular system of equations.
- [cblas_ctrmm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ctrmm%28________________________%29.md): Scales a triangular matrix and multiplies it by a matrix.
- [cblas_ctrmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ctrmv%28__________________%29.md): Multiplies a triangular matrix by a vector.
- [cblas_ctrsm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ctrsm%28________________________%29.md): Solves a triangular system of equations with multiple values for the right side.
- [cblas_ctrsv(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ctrsv%28__________________%29.md): Solves a triangular system of equations with a single value for the right side.
- [cblas_scasum(\_:\_:\_:)](cblas_scasum%28______%29.md): Computes the sum of the absolute values of real and imaginary parts of elements in a vector (single-precision complex).
- [cblas_scnrm2(\_:\_:\_:)](cblas_scnrm2%28______%29.md): Computes the unitary norm of a vector (single-precision complex).

### Double-precision float matrix functions

- [cblas_dasum(\_:\_:\_:)](cblas_dasum%28______%29.md): Computes the sum of the absolute values of elements in a vector (double-precision).
- [cblas_daxpy(\_:\_:\_:\_:\_:\_:)](cblas_daxpy%28____________%29.md): Computes a constant times a vector plus a vector (double-precision).
- [cblas_dcopy(\_:\_:\_:\_:\_:)](cblas_dcopy%28__________%29.md): Copies a vector to another vector (double-precision).
- [cblas_dgbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dgbmv%28____________________________%29.md): Scales a general band matrix, then multiplies by a vector, then adds a vector (double precision).
- [cblas_dgemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dgemm%28____________________________%29.md): Multiplies two matrices (double-precision).
- [cblas_dgemv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dgemv%28________________________%29.md): Multiplies a matrix by a vector (double precision).
- [cblas_dger(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dger%28____________________%29.md): Multiplies vector X by the transpose of vector Y, then adds matrix A (double precison).
- [cblas_dnrm2(\_:\_:\_:)](cblas_dnrm2%28______%29.md): Computes the L2 norm (Euclidian length) of a vector (double precision).
- [cblas_drot(\_:\_:\_:\_:\_:\_:\_:)](cblas_drot%28______________%29.md): Applies a Givens rotation matrix to a pair of vectors.
- [cblas_drotg(\_:\_:\_:\_:)](cblas_drotg%28________%29.md): Constructs a Givens rotation matrix.
- [cblas_drotm(\_:\_:\_:\_:\_:\_:)](cblas_drotm%28____________%29.md): Applies a modified Givens transformation (single precision).
- [cblas_drotmg(\_:\_:\_:\_:\_:)](cblas_drotmg%28__________%29.md): Generates a modified Givens rotation matrix.
- [cblas_dsbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dsbmv%28________________________%29.md): Scales a symmetric band matrix, then multiplies by a vector, then adds a vector (double precision).
- [cblas_dscal(\_:\_:\_:\_:)](cblas_dscal%28________%29.md): Multiplies each element of a vector by a constant (double-precision).
- [cblas_dspmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dspmv%28____________________%29.md): Scales a packed symmetric matrix, then multiplies by a vector, then scales and adds another vector (double precision).
- [cblas_dspr(\_:\_:\_:\_:\_:\_:\_:)](cblas_dspr%28______________%29.md): Rank one update: adds a packed symmetric matrix to the product of a scaling factor, a vector, and its transpose (double precision).
- [cblas_dspr2(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dspr2%28__________________%29.md): Rank two update of a packed symmetric matrix using two vectors (single precision).
- [cblas_dswap(\_:\_:\_:\_:\_:)](cblas_dswap%28__________%29.md): Exchanges the elements of two vectors (double precision).
- [cblas_dsymm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dsymm%28__________________________%29.md): Multiplies a matrix by a symmetric matrix (double-precision).
- [cblas_dsymv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dsymv%28______________________%29.md): Scales a symmetric matrix, multiplies by a vector, then scales and adds another vector (single precision).
- [cblas_dsyr(\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dsyr%28________________%29.md): Rank one update: adds a symmetric matrix to the product of a scaling factor, a vector, and its transpose (double precision).
- [cblas_dsyr2(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dsyr2%28____________________%29.md): Rank two update of a symmetric matrix using two vectors (single precision).
- [cblas_dsyr2k(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dsyr2k%28__________________________%29.md): Performs a rank-2k update of a symmetric matrix (double precision).
- [cblas_dsyrk(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dsyrk%28______________________%29.md): Rank-k update—multiplies a symmetric matrix by its transpose and adds a second matrix (double precision).
- [cblas_dtbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dtbmv%28____________________%29.md): Scales a triangular band matrix, then multiplies by a vector (double precision).
- [cblas_dtbsv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dtbsv%28____________________%29.md): Solves a triangular banded system of equations.
- [cblas_dtpmv(\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dtpmv%28________________%29.md): Multiplies a triangular matrix by a vector, then adds a vector (double precision).
- [cblas_dtpsv(\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dtpsv%28________________%29.md): Solves a packed triangular system of equations.
- [cblas_dtrmm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dtrmm%28________________________%29.md): Scales a triangular matrix and multiplies it by a matrix.
- [cblas_dtrmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dtrmv%28__________________%29.md): Multiplies a triangular matrix by a vector.
- [cblas_dtrsm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dtrsm%28________________________%29.md): Solves a triangular system of equations with multiple values for the right side.
- [cblas_dtrsv(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dtrsv%28__________________%29.md): Solves a triangular system of equations with a single value for the right side.
- [appleblas_dgeadd(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](appleblas_dgeadd%28__________________________%29.md)

### Double-precision complex matrix functions

- [cblas_dzasum(\_:\_:\_:)](cblas_dzasum%28______%29.md): Computes the sum of the absolute values of real and imaginary parts of elements in a vector (single-precision complex).
- [cblas_dznrm2(\_:\_:\_:)](cblas_dznrm2%28______%29.md): Computes the unitary norm of a vector (double-precision complex).
- [cblas_zaxpy(\_:\_:\_:\_:\_:\_:)](cblas_zaxpy%28____________%29.md): Computes a constant times a vector plus a vector (double-precision complex).
- [cblas_zcopy(\_:\_:\_:\_:\_:)](cblas_zcopy%28__________%29.md): Copies a vector to another vector (double-precision complex).
- [cblas_zdrot(\_:\_:\_:\_:\_:\_:\_:)](cblas_zdrot%28______________%29.md): Applies a Givens rotation matrix to a pair of complex vectors.
- [cblas_zdscal(\_:\_:\_:\_:)](cblas_zdscal%28________%29.md): Multiplies each element of a vector by a constant (double-precision complex).
- [cblas_zgbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zgbmv%28____________________________%29.md): Scales a general band matrix, then multiplies by a vector, then adds a vector (double-precision complex).
- [cblas_zgemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zgemm%28____________________________%29.md): Multiplies two matrices (double-precision complex).
- [cblas_zgemv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zgemv%28________________________%29.md): Multiplies a matrix by a vector (double-precision complex).
- [cblas_zgerc(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zgerc%28____________________%29.md): Multiplies vector X by the conjugate transpose of vector Y, then adds matrix A (double-precision complex).
- [cblas_zgeru(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zgeru%28____________________%29.md): Multiplies vector X by the transpose of vector Y, then adds matrix A (double-precision complex).
- [cblas_zhbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zhbmv%28________________________%29.md): Scales a Hermitian band matrix, then multiplies by a vector, then adds a vector (double-precision complex).
- [cblas_zhemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zhemm%28__________________________%29.md): Multiplies two Hermitian matrices (double-precision complex).
- [cblas_zhemv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zhemv%28______________________%29.md): Scales and multiplies a Hermitian matrix by a vector, then adds a second (scaled) vector.
- [cblas_zher(\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zher%28________________%29.md): Adds the product of a scaling factor, vector `X`, and the conjugate transpose of `X` to matrix `A`.
- [cblas_zher2(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zher2%28____________________%29.md): Hermitian rank 2 update: adds the product of a scaling factor, vector `X`, and the conjugate transpose of vector `Y` to the product of the conjugate of the scaling factor, vector `Y`, and the conjugate transpose of vector `X`, and adds the result to matrix `A`.
- [cblas_zher2k(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zher2k%28__________________________%29.md): Performs a rank-2k update of a complex Hermitian matrix (double-precision complex).
- [cblas_zherk(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zherk%28______________________%29.md): Rank-k update—multiplies a Hermitian matrix by its transpose and adds a second matrix (single precision).
- [cblas_zhpmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zhpmv%28____________________%29.md): Scales a packed hermitian matrix, multiplies it by a vector, and adds a scaled vector.
- [cblas_zhpr(\_:\_:\_:\_:\_:\_:\_:)](cblas_zhpr%28______________%29.md): Scales and multiplies a vector times its conjugate transpose, then adds a matrix.
- [cblas_zhpr2(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zhpr2%28__________________%29.md): Multiplies a vector times the conjugate transpose of a second vector and vice-versa, sums the results, and adds a matrix.
- [cblas_zrotg(\_:\_:\_:\_:)](cblas_zrotg%28________%29.md): Constructs a complex Givens rotation.
- [cblas_zscal(\_:\_:\_:\_:)](cblas_zscal%28________%29.md): Multiplies each element of a vector by a constant (double-precision complex).
- [cblas_zswap(\_:\_:\_:\_:\_:)](cblas_zswap%28__________%29.md): Exchanges the elements of two vectors (double-precision complex).
- [cblas_zsymm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zsymm%28__________________________%29.md): Multiplies a matrix by a symmetric matrix (double-precision complex).
- [cblas_zsyr2k(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zsyr2k%28__________________________%29.md): Performs a rank-2k update of a symmetric matrix (double-precision complex).
- [cblas_zsyrk(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zsyrk%28______________________%29.md): Rank-k update—multiplies a symmetric matrix by its transpose and adds a second matrix (double-precision complex).
- [cblas_ztbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ztbmv%28____________________%29.md): Scales a triangular band matrix, then multiplies by a vector (double-precision complex).
- [cblas_ztbsv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ztbsv%28____________________%29.md): Solves a triangular banded system of equations.
- [cblas_ztpmv(\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ztpmv%28________________%29.md): Multiplies a triangular matrix by a vector, then adds a vector (double-precision compex).
- [cblas_ztpsv(\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ztpsv%28________________%29.md): Solves a packed triangular system of equations.
- [cblas_ztrmm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ztrmm%28________________________%29.md): Scales a triangular matrix and multiplies it by a matrix.
- [cblas_ztrmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ztrmv%28__________________%29.md): Multiplies a triangular matrix by a vector.
- [cblas_ztrsm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ztrsm%28________________________%29.md): Solves a triangular system of equations with multiple values for the right side.
- [cblas_ztrsv(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ztrsv%28__________________%29.md): Solves a triangular system of equations with a single value for the right side.

### LAPACK functions

- [LAPACK/BLAS Functions](lapack-functions.md): An updated BLAS interface supporting ILP64 is available.
- [cgedmd\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgedmd_%28______________________________________________________________%29.md)
- [cgedmdq\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgedmdq_%28______________________________________________________________________%29.md)
- [cgeqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgeqp3rk_%28____________________________________%29.md)
- [claqp2rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](claqp2rk_%28________________________________________%29.md)
- [claqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](claqp3rk_%28________________________________________________%29.md)
- [crscl\_(\_:\_:\_:\_:)](crscl_%28________%29.md)
- [dgedmd\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dgedmd_%28____________________________________________________________%29.md)
- [dgedmdq\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dgedmdq_%28____________________________________________________________________%29.md)
- [dgeqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dgeqp3rk_%28__________________________________%29.md)
- [dlaqp2rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dlaqp2rk_%28________________________________________%29.md)
- [dlaqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dlaqp3rk_%28________________________________________________%29.md)
- [sgedmd\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sgedmd_%28____________________________________________________________%29.md)
- [sgedmdq\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sgedmdq_%28____________________________________________________________________%29.md)
- [sgeqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sgeqp3rk_%28__________________________________%29.md)
- [slaqp2rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](slaqp2rk_%28________________________________________%29.md)
- [sgeqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sgeqp3rk_%28__________________________________%29.md)
- [slaqp2rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](slaqp2rk_%28________________________________________%29.md)
- [slaqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](slaqp3rk_%28________________________________________________%29.md)
- [zgedmd\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](zgedmd_%28______________________________________________________________%29.md)
- [zgedmdq\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](zgedmdq_%28______________________________________________________________________%29.md)
- [zgeqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](zgeqp3rk_%28____________________________________%29.md)
- [zlaqp2rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](zlaqp2rk_%28________________________________________%29.md)
- [zlaqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](zlaqp3rk_%28________________________________________________%29.md)
- [zrscl\_(\_:\_:\_:\_:)](zrscl_%28________%29.md)
- [sparse_matrix_double_complex](sparse_matrix_double_complex.md)
- [sparse_matrix_float_complex](sparse_matrix_float_complex.md)
- [vFloatPacked](vfloatpacked.md)

## See Also

### Linear Algebra

- [Solving systems of linear equations with LAPACK](solving-systems-of-linear-equations-with-lapack.md): Select the optimal LAPACK routine to solve a system of linear equations.
- [Finding an interpolating polynomial using the Vandermonde method](finding-an-interpolating-polynomial-using-the-vandermonde-method.md): Use LAPACK to solve a linear system and find an interpolating polynomial to construct new points between a series of known data points.
- [Compressing an image using linear algebra](compressing-an-image-using-linear-algebra.md): Reduce the storage size of an image using singular value decomposition (SVD).

# BLAS (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Perform common linear algebra operations with Apple’s implementation of the Basic Linear Algebra Subprograms (BLAS).

<a id="overview"></a>

## Overview

The vecLib framework contains nine C header files (not counting `vecLib.h`, which merely includes the others).

This document describes the functions declared in the header files `cblas.h` and `vblas.h`, which contain the interfaces for Apple’s implementation of the BLAS API.

Note that documentation describing the leading dimension as the first dimension of a matrix refers to column-major ordering. In row-major ordering, the leading dimension is the second dimension of a matrix.

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## Topics

### Fortran interoperability

- [Using the Fortran 90 wrappers for Accelerate BLAS and LAPACK](usingthefortran90wrappers.md): Call BLAS and LAPACK routines from Fortran 90 source code.

### Specifying the threading model

- [BLASSetThreading](blassetthreading%28__%29.md): Sets the BLAS and LAPACK threading model.
- [BLASGetThreading](blasgetthreading%28%29.md): Returns the current BLAS and LAPACK threading model.
- [BLAS_THREADING](blas_threading.md): Constants that describe the BLAS and LAPACK threading model.

### General functions

- [SetBLASParamErrorProc](setblasparamerrorproc.md): Sets an error handler function.
- [cblas_errprn](cblas_errprn.md): Prints an error message.
- [cblas_xerbla](cblas_xerbla.md): The default error handler for BLAS routines.
- [cblas_icamax](cblas_icamax%28______%29.md): Returns the index of the element with the largest absolute value in a vector (single-precision complex).
- [cblas_idamax](cblas_idamax%28______%29.md): Returns the index of the element with the largest absolute value in a vector (double-precision).
- [cblas_isamax](cblas_isamax%28______%29.md): Returns the index of the element with the largest absolute value in a vector (single-precision).
- [cblas_izamax](cblas_izamax%28______%29.md): Returns the index of the element with the largest absolute value in a vector (double-precision complex).

### Sparse computation

- [Matrix and Vector Operations](matrix-and-vector-operations.md): Perform computations with matrices and vectors.
- [Pointwise Matrix Operations](pointwise-matrix-operations.md): Create, insert values into, and extract values from a pointwise sparse matrix.
- [Blockwise Matrix Operations](blockwise-matrix-operations.md): Create, insert values into, and extract values from a blockwise sparse matrix.
- [General Sparse Matrix Management Operations](general-sparse-matrix-management-operations.md): Manage and work with the properties of a sparse matrix.
- [Sparse Vector Utility Operations](sparse-vector-utility-operations.md): Create and work with sparse vector structures.

### Data types

- [BLASParamErrorProc](blasparamerrorproc.md): A BLAS error handler callback type.

### Constants

- [CBLAS_ORDER](cblas_order.md): Indicates whether a matrix is in row-major or column-major order.
- [CBLAS_TRANSPOSE](cblas_transpose.md): Indicates transpose operation to perform on a matrix.
- [CBLAS_UPLO](cblas_uplo.md)
- [CBLAS_DIAG](cblas_diag.md): Indicates whether a triangular matrix is unit-diagonal (diagonal elements are all equal to 1).
- [CBLAS_SIDE](cblas_side.md): Indicates the order of a matrix multiplication.

### Variables

- [CblasColMajor](cblascolmajor.md)
- [CblasConjTrans](cblasconjtrans.md)
- [CblasLeft](cblasleft.md)
- [CblasLower](cblaslower.md)
- [CblasNoTrans](cblasnotrans.md)
- [CblasNonUnit](cblasnonunit.md)
- [CblasRight](cblasright.md)
- [CblasRowMajor](cblasrowmajor.md)
- [CblasTrans](cblastrans.md)
- [CblasUnit](cblasunit.md)
- [CblasUpper](cblasupper.md)
- [AtlasConj](atlasconj.md)

### CATLAS and CBLAS vector functions

- [catlas_caxpby](catlas_caxpby%28______________%29.md): Computes the product of two vectors, scaling each one separately (single-precision complex).
- [catlas_cset](catlas_cset%28________%29.md): Modifies a vector (single-precision complex) in place, setting each element to a given value.
- [catlas_daxpby](catlas_daxpby%28______________%29.md): Computes the sum of two vectors, scaling each one separately (double-precision).
- [catlas_dset](catlas_dset%28________%29.md): Modifies a vector (double-precision) in place, setting each element to a given value.
- [catlas_saxpby](catlas_saxpby%28______________%29.md): Computes the sum of two vectors, scaling each one separately (single-precision).
- [catlas_sset](catlas_sset%28________%29.md): Modifies a vector (single-precision) in place, setting each element to a given value.
- [catlas_zaxpby](catlas_zaxpby%28______________%29.md): Computes the sum of two vectors, scaling each one separately (double-precision complex).
- [catlas_zset](catlas_zset%28________%29.md): Modifies a vector (double-precision complex) in place, setting each element to a given value.
- [cblas_sdot](cblas_sdot%28__________%29.md): Computes the dot product of two vectors (single-precision).
- [cblas_sdsdot](cblas_sdsdot%28____________%29.md): Computes the dot product of two single-precision vectors plus an initial single-precision value.
- [cblas_cdotc_sub](cblas_cdotc_sub%28____________%29.md): Calculates the dot product of the complex conjugate of a single-precision complex vector with a second single-precision complex vector.
- [cblas_cdotu_sub](cblas_cdotu_sub%28____________%29.md): Computes the dot product of two single-precision complex vectors.
- [cblas_ddot](cblas_ddot%28__________%29.md): Computes the dot product of two vectors (double-precision).
- [cblas_dsdot](cblas_dsdot%28__________%29.md): Computes the double-precision dot product of a pair of single-precision vectors.
- [cblas_zdotc_sub](cblas_zdotc_sub%28____________%29.md): Calculates the dot product of the complex conjugate of a double-precision complex vector with a second double-precision complex vector.
- [cblas_zdotu_sub](cblas_zdotu_sub%28____________%29.md): Computes the dot product of two double-precision complex vectors.

### Single-precision float matrix functions

- [cblas_sasum](cblas_sasum%28______%29.md): Computes the sum of the absolute values of elements in a vector (single-precision).
- [cblas_saxpy](cblas_saxpy%28____________%29.md): Computes a constant times a vector plus a vector (single-precision).
- [cblas_scopy](cblas_scopy%28__________%29.md): Copies a vector to another vector (single-precision).
- [cblas_sgbmv](cblas_sgbmv%28____________________________%29.md): Scales a general band matrix, then multiplies by a vector, then adds a vector (single precision).
- [cblas_sgemm](cblas_sgemm%28____________________________%29.md): Multiplies two matrices (single-precision).
- [cblas_sgemv](cblas_sgemv%28________________________%29.md): Multiplies a single-precision matrix by a vector.
- [cblas_sger](cblas_sger%28____________________%29.md): Multiplies vector X by the transpose of vector Y, then adds matrix A (single precison).
- [cblas_snrm2](cblas_snrm2%28______%29.md): Computes the L2 norm (Euclidian length) of a vector (single precision).
- [cblas_srot](cblas_srot%28______________%29.md): Applies a Givens rotation matrix to a pair of vectors.
- [cblas_srotg](cblas_srotg%28________%29.md): Constructs a Givens rotation matrix.
- [cblas_srotm](cblas_srotm%28____________%29.md): Applies a modified Givens transformation (single precision).
- [cblas_srotmg](cblas_srotmg%28__________%29.md): Generates a modified Givens rotation matrix.
- [cblas_ssbmv](cblas_ssbmv%28________________________%29.md): Scales a symmetric band matrix, then multiplies by a vector, then adds a vector (single-precision).
- [cblas_sscal](cblas_sscal%28________%29.md): Multiplies each element of a vector by a constant (single-precision).
- [cblas_sspmv](cblas_sspmv%28____________________%29.md): Scales a packed symmetric matrix, then multiplies by a vector, then scales and adds another vector (single precision).
- [cblas_sspr](cblas_sspr%28______________%29.md): Rank one update: adds a packed symmetric matrix to the product of a scaling factor, a vector, and its transpose (single precision).
- [cblas_sspr2](cblas_sspr2%28__________________%29.md): Rank two update of a packed symmetric matrix using two vectors (single precision).
- [cblas_sswap](cblas_sswap%28__________%29.md): Exchanges the elements of two vectors (single precision).
- [cblas_ssymm](cblas_ssymm%28__________________________%29.md): Multiplies a matrix by a symmetric matrix (single-precision).
- [cblas_ssymv](cblas_ssymv%28______________________%29.md): Scales a symmetric matrix, multiplies by a vector, then scales and adds another vector (single precision).
- [cblas_ssyr](cblas_ssyr%28________________%29.md): Rank one update: adds a symmetric matrix to the product of a scaling factor, a vector, and its transpose (single precision).
- [cblas_ssyr2](cblas_ssyr2%28____________________%29.md): Rank two update of a symmetric matrix using two vectors (single precision).
- [cblas_ssyr2k](cblas_ssyr2k%28__________________________%29.md): Performs a rank-2k update of a symmetric matrix (single precision).
- [cblas_ssyrk](cblas_ssyrk%28______________________%29.md): Rank-k update—multiplies a symmetric matrix by its transpose and adds a second matrix (single precision).
- [cblas_stbmv](cblas_stbmv%28____________________%29.md): Scales a triangular band matrix, then multiplies by a vector (single precision).
- [cblas_stbsv](cblas_stbsv%28____________________%29.md): Solves a triangular banded system of equations.
- [cblas_stpmv](cblas_stpmv%28________________%29.md): Multiplies a triangular matrix by a vector, then adds a vector (single precision).
- [cblas_stpsv](cblas_stpsv%28________________%29.md): Solves a packed triangular system of equations.
- [cblas_strmm](cblas_strmm%28________________________%29.md): Scales a triangular matrix and multiplies it by a matrix.
- [cblas_strmv](cblas_strmv%28__________________%29.md): Multiplies a triangular matrix by a vector.
- [cblas_strsm](cblas_strsm%28________________________%29.md): Solves a triangular system of equations with multiple values for the right side.
- [cblas_strsv](cblas_strsv%28__________________%29.md): Solves a triangular system of equations with a single value for the right side.
- [appleblas_sgeadd](appleblas_sgeadd%28__________________________%29.md)

### Single-precision complex matrix functions

- [cblas_caxpy](cblas_caxpy%28____________%29.md): Computes a constant times a vector plus a vector (single-precision complex).
- [cblas_ccopy](cblas_ccopy%28__________%29.md): Copies a vector to another vector (single-precision complex).
- [cblas_cgbmv](cblas_cgbmv%28____________________________%29.md): Scales a general band matrix, then multiplies by a vector, then adds a vector (single-precision complex).
- [cblas_cgemm](cblas_cgemm%28____________________________%29.md): Multiplies two matrices (single-precision complex).
- [cblas_cgemv](cblas_cgemv%28________________________%29.md): Multiplies a matrix by a vector (single-precision complex).
- [cblas_cgerc](cblas_cgerc%28____________________%29.md): Multiplies vector X by the conjugate transpose of vector Y, then adds matrix A (single-precision complex).
- [cblas_cgeru](cblas_cgeru%28____________________%29.md): Multiplies vector X by the transpose of vector Y, then adds matrix A (single-precision complex).
- [cblas_chbmv](cblas_chbmv%28________________________%29.md): Scales a Hermitian band matrix, then multiplies by a vector, then adds a vector (single-precision complex).
- [cblas_chemm](cblas_chemm%28__________________________%29.md): Multiplies two Hermitian matrices (single-precision complex), then adds a third (with scaling).
- [cblas_chemv](cblas_chemv%28______________________%29.md): Scales and multiplies a Hermitian matrix by a vector, then adds a second (scaled) vector.
- [cblas_cher](cblas_cher%28________________%29.md): Hermitian rank 1 update: adds the product of a scaling factor, vector `X`, and the conjugate transpose of `X` to matrix `A`.
- [cblas_cher2](cblas_cher2%28____________________%29.md): Hermitian rank 2 update: adds the product of a scaling factor, vector `X`, and the conjugate transpose of vector `Y` to the product of the conjugate of the scaling factor, vector `Y`, and the conjugate transpose of vector `X`, and adds the result to matrix `A`.
- [cblas_cher2k](cblas_cher2k%28__________________________%29.md): Performs a rank-2k update of a complex Hermitian matrix (single-precision complex).
- [cblas_cherk](cblas_cherk%28______________________%29.md): Rank-k update—multiplies a Hermitian matrix by its transpose and adds a second matrix (single precision).
- [cblas_chpmv](cblas_chpmv%28____________________%29.md): Scales a packed hermitian matrix, multiplies it by a vector, and adds a scaled vector.
- [cblas_chpr](cblas_chpr%28______________%29.md): Scales and multiplies a vector times its conjugate transpose, then adds a matrix.
- [cblas_chpr2](cblas_chpr2%28__________________%29.md): Multiplies a vector times the conjugate transpose of a second vector and vice-versa, sums the results, and adds a matrix.
- [cblas_crotg](cblas_crotg%28________%29.md): Constructs a complex Givens rotation.
- [cblas_cscal](cblas_cscal%28________%29.md): Multiplies each element of a vector by a constant (single-precision complex).
- [cblas_csrot](cblas_csrot%28______________%29.md): Applies a Givens rotation matrix to a pair of complex vectors.
- [cblas_csscal](cblas_csscal%28________%29.md): Multiplies each element of a vector by a constant (single-precision complex).
- [cblas_cswap](cblas_cswap%28__________%29.md): Exchanges the elements of two vectors (single-precision complex).
- [cblas_csymm](cblas_csymm%28__________________________%29.md): Multiplies a matrix by a symmetric matrix (single-precision complex).
- [cblas_csyr2k](cblas_csyr2k%28__________________________%29.md): Performs a rank-2k update of a symmetric matrix (single-precision complex).
- [cblas_csyrk](cblas_csyrk%28______________________%29.md): Rank-k update—multiplies a symmetric matrix by its transpose and adds a second matrix (single-precision complex).
- [cblas_ctbmv](cblas_ctbmv%28____________________%29.md): Scales a triangular band matrix, then multiplies by a vector (single-precision compex).
- [cblas_ctbsv](cblas_ctbsv%28____________________%29.md): Solves a triangular banded system of equations.
- [cblas_ctpmv](cblas_ctpmv%28________________%29.md): Multiplies a triangular matrix by a vector, then adds a vector (single-precision complex).
- [cblas_ctpsv](cblas_ctpsv%28________________%29.md): Solves a packed triangular system of equations.
- [cblas_ctrmm](cblas_ctrmm%28________________________%29.md): Scales a triangular matrix and multiplies it by a matrix.
- [cblas_ctrmv](cblas_ctrmv%28__________________%29.md): Multiplies a triangular matrix by a vector.
- [cblas_ctrsm](cblas_ctrsm%28________________________%29.md): Solves a triangular system of equations with multiple values for the right side.
- [cblas_ctrsv](cblas_ctrsv%28__________________%29.md): Solves a triangular system of equations with a single value for the right side.
- [cblas_scasum](cblas_scasum%28______%29.md): Computes the sum of the absolute values of real and imaginary parts of elements in a vector (single-precision complex).
- [cblas_scnrm2](cblas_scnrm2%28______%29.md): Computes the unitary norm of a vector (single-precision complex).

### Double-precision float matrix functions

- [cblas_dasum](cblas_dasum%28______%29.md): Computes the sum of the absolute values of elements in a vector (double-precision).
- [cblas_daxpy](cblas_daxpy%28____________%29.md): Computes a constant times a vector plus a vector (double-precision).
- [cblas_dcopy](cblas_dcopy%28__________%29.md): Copies a vector to another vector (double-precision).
- [cblas_dgbmv](cblas_dgbmv%28____________________________%29.md): Scales a general band matrix, then multiplies by a vector, then adds a vector (double precision).
- [cblas_dgemm](cblas_dgemm%28____________________________%29.md): Multiplies two matrices (double-precision).
- [cblas_dgemv](cblas_dgemv%28________________________%29.md): Multiplies a matrix by a vector (double precision).
- [cblas_dger](cblas_dger%28____________________%29.md): Multiplies vector X by the transpose of vector Y, then adds matrix A (double precison).
- [cblas_dnrm2](cblas_dnrm2%28______%29.md): Computes the L2 norm (Euclidian length) of a vector (double precision).
- [cblas_drot](cblas_drot%28______________%29.md): Applies a Givens rotation matrix to a pair of vectors.
- [cblas_drotg](cblas_drotg%28________%29.md): Constructs a Givens rotation matrix.
- [cblas_drotm](cblas_drotm%28____________%29.md): Applies a modified Givens transformation (single precision).
- [cblas_drotmg](cblas_drotmg%28__________%29.md): Generates a modified Givens rotation matrix.
- [cblas_dsbmv](cblas_dsbmv%28________________________%29.md): Scales a symmetric band matrix, then multiplies by a vector, then adds a vector (double precision).
- [cblas_dscal](cblas_dscal%28________%29.md): Multiplies each element of a vector by a constant (double-precision).
- [cblas_dspmv](cblas_dspmv%28____________________%29.md): Scales a packed symmetric matrix, then multiplies by a vector, then scales and adds another vector (double precision).
- [cblas_dspr](cblas_dspr%28______________%29.md): Rank one update: adds a packed symmetric matrix to the product of a scaling factor, a vector, and its transpose (double precision).
- [cblas_dspr2](cblas_dspr2%28__________________%29.md): Rank two update of a packed symmetric matrix using two vectors (single precision).
- [cblas_dswap](cblas_dswap%28__________%29.md): Exchanges the elements of two vectors (double precision).
- [cblas_dsymm](cblas_dsymm%28__________________________%29.md): Multiplies a matrix by a symmetric matrix (double-precision).
- [cblas_dsymv](cblas_dsymv%28______________________%29.md): Scales a symmetric matrix, multiplies by a vector, then scales and adds another vector (single precision).
- [cblas_dsyr](cblas_dsyr%28________________%29.md): Rank one update: adds a symmetric matrix to the product of a scaling factor, a vector, and its transpose (double precision).
- [cblas_dsyr2](cblas_dsyr2%28____________________%29.md): Rank two update of a symmetric matrix using two vectors (single precision).
- [cblas_dsyr2k](cblas_dsyr2k%28__________________________%29.md): Performs a rank-2k update of a symmetric matrix (double precision).
- [cblas_dsyrk](cblas_dsyrk%28______________________%29.md): Rank-k update—multiplies a symmetric matrix by its transpose and adds a second matrix (double precision).
- [cblas_dtbmv](cblas_dtbmv%28____________________%29.md): Scales a triangular band matrix, then multiplies by a vector (double precision).
- [cblas_dtbsv](cblas_dtbsv%28____________________%29.md): Solves a triangular banded system of equations.
- [cblas_dtpmv](cblas_dtpmv%28________________%29.md): Multiplies a triangular matrix by a vector, then adds a vector (double precision).
- [cblas_dtpsv](cblas_dtpsv%28________________%29.md): Solves a packed triangular system of equations.
- [cblas_dtrmm](cblas_dtrmm%28________________________%29.md): Scales a triangular matrix and multiplies it by a matrix.
- [cblas_dtrmv](cblas_dtrmv%28__________________%29.md): Multiplies a triangular matrix by a vector.
- [cblas_dtrsm](cblas_dtrsm%28________________________%29.md): Solves a triangular system of equations with multiple values for the right side.
- [cblas_dtrsv](cblas_dtrsv%28__________________%29.md): Solves a triangular system of equations with a single value for the right side.
- [appleblas_dgeadd](appleblas_dgeadd%28__________________________%29.md)

### Double-precision complex matrix functions

- [cblas_dzasum](cblas_dzasum%28______%29.md): Computes the sum of the absolute values of real and imaginary parts of elements in a vector (single-precision complex).
- [cblas_dznrm2](cblas_dznrm2%28______%29.md): Computes the unitary norm of a vector (double-precision complex).
- [cblas_zaxpy](cblas_zaxpy%28____________%29.md): Computes a constant times a vector plus a vector (double-precision complex).
- [cblas_zcopy](cblas_zcopy%28__________%29.md): Copies a vector to another vector (double-precision complex).
- [cblas_zdrot](cblas_zdrot%28______________%29.md): Applies a Givens rotation matrix to a pair of complex vectors.
- [cblas_zdscal](cblas_zdscal%28________%29.md): Multiplies each element of a vector by a constant (double-precision complex).
- [cblas_zgbmv](cblas_zgbmv%28____________________________%29.md): Scales a general band matrix, then multiplies by a vector, then adds a vector (double-precision complex).
- [cblas_zgemm](cblas_zgemm%28____________________________%29.md): Multiplies two matrices (double-precision complex).
- [cblas_zgemv](cblas_zgemv%28________________________%29.md): Multiplies a matrix by a vector (double-precision complex).
- [cblas_zgerc](cblas_zgerc%28____________________%29.md): Multiplies vector X by the conjugate transpose of vector Y, then adds matrix A (double-precision complex).
- [cblas_zgeru](cblas_zgeru%28____________________%29.md): Multiplies vector X by the transpose of vector Y, then adds matrix A (double-precision complex).
- [cblas_zhbmv](cblas_zhbmv%28________________________%29.md): Scales a Hermitian band matrix, then multiplies by a vector, then adds a vector (double-precision complex).
- [cblas_zhemm](cblas_zhemm%28__________________________%29.md): Multiplies two Hermitian matrices (double-precision complex).
- [cblas_zhemv](cblas_zhemv%28______________________%29.md): Scales and multiplies a Hermitian matrix by a vector, then adds a second (scaled) vector.
- [cblas_zher](cblas_zher%28________________%29.md): Adds the product of a scaling factor, vector `X`, and the conjugate transpose of `X` to matrix `A`.
- [cblas_zher2](cblas_zher2%28____________________%29.md): Hermitian rank 2 update: adds the product of a scaling factor, vector `X`, and the conjugate transpose of vector `Y` to the product of the conjugate of the scaling factor, vector `Y`, and the conjugate transpose of vector `X`, and adds the result to matrix `A`.
- [cblas_zher2k](cblas_zher2k%28__________________________%29.md): Performs a rank-2k update of a complex Hermitian matrix (double-precision complex).
- [cblas_zherk](cblas_zherk%28______________________%29.md): Rank-k update—multiplies a Hermitian matrix by its transpose and adds a second matrix (single precision).
- [cblas_zhpmv](cblas_zhpmv%28____________________%29.md): Scales a packed hermitian matrix, multiplies it by a vector, and adds a scaled vector.
- [cblas_zhpr](cblas_zhpr%28______________%29.md): Scales and multiplies a vector times its conjugate transpose, then adds a matrix.
- [cblas_zhpr2](cblas_zhpr2%28__________________%29.md): Multiplies a vector times the conjugate transpose of a second vector and vice-versa, sums the results, and adds a matrix.
- [cblas_zrotg](cblas_zrotg%28________%29.md): Constructs a complex Givens rotation.
- [cblas_zscal](cblas_zscal%28________%29.md): Multiplies each element of a vector by a constant (double-precision complex).
- [cblas_zswap](cblas_zswap%28__________%29.md): Exchanges the elements of two vectors (double-precision complex).
- [cblas_zsymm](cblas_zsymm%28__________________________%29.md): Multiplies a matrix by a symmetric matrix (double-precision complex).
- [cblas_zsyr2k](cblas_zsyr2k%28__________________________%29.md): Performs a rank-2k update of a symmetric matrix (double-precision complex).
- [cblas_zsyrk](cblas_zsyrk%28______________________%29.md): Rank-k update—multiplies a symmetric matrix by its transpose and adds a second matrix (double-precision complex).
- [cblas_ztbmv](cblas_ztbmv%28____________________%29.md): Scales a triangular band matrix, then multiplies by a vector (double-precision complex).
- [cblas_ztbsv](cblas_ztbsv%28____________________%29.md): Solves a triangular banded system of equations.
- [cblas_ztpmv](cblas_ztpmv%28________________%29.md): Multiplies a triangular matrix by a vector, then adds a vector (double-precision compex).
- [cblas_ztpsv](cblas_ztpsv%28________________%29.md): Solves a packed triangular system of equations.
- [cblas_ztrmm](cblas_ztrmm%28________________________%29.md): Scales a triangular matrix and multiplies it by a matrix.
- [cblas_ztrmv](cblas_ztrmv%28__________________%29.md): Multiplies a triangular matrix by a vector.
- [cblas_ztrsm](cblas_ztrsm%28________________________%29.md): Solves a triangular system of equations with multiple values for the right side.
- [cblas_ztrsv](cblas_ztrsv%28__________________%29.md): Solves a triangular system of equations with a single value for the right side.

### LAPACK functions

- [LAPACK/BLAS Functions](lapack-functions.md): An updated BLAS interface supporting ILP64 is available.
- [cgedmd\_](cgedmd_%28______________________________________________________________%29.md)
- [cgedmdq\_](cgedmdq_%28______________________________________________________________________%29.md)
- [cgeqp3rk\_](cgeqp3rk_%28____________________________________%29.md)
- [claqp2rk\_](claqp2rk_%28________________________________________%29.md)
- [claqp3rk\_](claqp3rk_%28________________________________________________%29.md)
- [crscl\_](crscl_%28________%29.md)
- [dgedmd\_](dgedmd_%28____________________________________________________________%29.md)
- [dgedmdq\_](dgedmdq_%28____________________________________________________________________%29.md)
- [dgeqp3rk\_](dgeqp3rk_%28__________________________________%29.md)
- [dlaqp2rk\_](dlaqp2rk_%28________________________________________%29.md)
- [dlaqp3rk\_](dlaqp3rk_%28________________________________________________%29.md)
- [sgedmd\_](sgedmd_%28____________________________________________________________%29.md)
- [sgedmdq\_](sgedmdq_%28____________________________________________________________________%29.md)
- [sgeqp3rk\_](sgeqp3rk_%28__________________________________%29.md)
- [slaqp2rk\_](slaqp2rk_%28________________________________________%29.md)
- [sgeqp3rk\_](sgeqp3rk_%28__________________________________%29.md)
- [slaqp2rk\_](slaqp2rk_%28________________________________________%29.md)
- [slaqp3rk\_](slaqp3rk_%28________________________________________________%29.md)
- [zgedmd\_](zgedmd_%28______________________________________________________________%29.md)
- [zgedmdq\_](zgedmdq_%28______________________________________________________________________%29.md)
- [zgeqp3rk\_](zgeqp3rk_%28____________________________________%29.md)
- [zlaqp2rk\_](zlaqp2rk_%28________________________________________%29.md)
- [zlaqp3rk\_](zlaqp3rk_%28________________________________________________%29.md)
- [zrscl\_](zrscl_%28________%29.md)
- [sparse_matrix_double_complex](sparse_matrix_double_complex.md)
- [sparse_matrix_float_complex](sparse_matrix_float_complex.md)
- [vFloatPacked](vfloatpacked.md)

## See Also

### Linear Algebra

- [Solving systems of linear equations with LAPACK](solving-systems-of-linear-equations-with-lapack.md): Select the optimal LAPACK routine to solve a system of linear equations.
- [Finding an interpolating polynomial using the Vandermonde method](finding-an-interpolating-polynomial-using-the-vandermonde-method.md): Use LAPACK to solve a linear system and find an interpolating polynomial to construct new points between a series of known data points.
