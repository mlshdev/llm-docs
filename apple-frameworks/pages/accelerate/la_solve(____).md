> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/la_solve(_:_:)](https://developer.apple.com/documentation/accelerate/la_solve(_:_:))

# la_solve(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```swift
func la_solve(_ matrix_system: la_object_t, _ obj_rhs: la_object_t) -> la_object_t
```

## Parameters

- `matrix_system`: A matrix describing the left-hand side of the system.
- `obj_rhs`: A vector or matrix describing one or more right-hand sides for which the equations are to be solved.

<a id="return-value"></a>

## Return Value

A matrix of the solution(s) of the system of equations.

<a id="discussion"></a>

## Discussion

Solves a system of linear equations

If matrix_system represents a matrix A, and obj_rhs represents a vector B, la_solve returns a vector X representing a solution to the equation AX = B, if such a solution exists.  If obj_rhs represents a matrix, then la_solve returns a matrix representing the solution of the same equation.

There are several different cases, and different algorithms are chosen depending on the specifics:

If the matrix has a special structure that allows us to solve the system without factoring (e.g. if the matrix is diagonal or triangular), we may use that structure to compute the solution.

If the matrix is symmetric and all diagonal entries are positive, or if we know, either via a hint parameter or by how earlier computations were structured, that the matrix is positive definite, we attempt a Cholesky factorization.  If this succeeds, it is used to compute the solution via forward- and back-substitution.

If the matrix is square, we try to perform Gaussian elimination to construct a triangular factorization with pivoting.  If this factorization succeeds, we use it to solve the system.  If it fails, the returned object has the error status LA_SINGULAR_ERROR.

If the matrix is not square, we return a least-squares solution computed by performing a QR factorization of the matrix.

If the number of rows of the matrix does not match the number of rows of the right hand side object, the returned object has status LA_DIMENSION_MISMATCH_ERROR.

If the object describing the matrix is not a matrix, or if the right hand side is not a matrix or vector, the returned object has status LA_INVALID_PARAMETER_ERROR.

If you want to solve the system XA = B, which is less common (but still occurs fairly frequently), you may accomplish this by transposing A and B, solving, and then transposing the result of the solve.

## See Also

### Functions

- [caxpy\_(\_:\_:\_:\_:\_:\_:)](caxpy_%28____________%29.md)
- [ccopy\_(\_:\_:\_:\_:\_:)](ccopy_%28__________%29.md)
- [cdotc\_(\_:\_:\_:\_:\_:\_:)](cdotc_%28____________%29.md)
- [cdotu\_(\_:\_:\_:\_:\_:\_:)](cdotu_%28____________%29.md)
- [cgbmv\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgbmv_%28__________________________%29.md)
- [cgemm\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgemm_%28__________________________%29.md)
- [cgemv\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgemv_%28______________________%29.md)
- [cgerc\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgerc_%28__________________%29.md)
- [cgeru\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgeru_%28__________________%29.md)
- [chbmv\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](chbmv_%28______________________%29.md)
- [chemm\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](chemm_%28________________________%29.md)
- [chemv\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](chemv_%28____________________%29.md)
- [cher2\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cher2_%28__________________%29.md)
- [cher2k\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cher2k_%28________________________%29.md)
- [cher\_(\_:\_:\_:\_:\_:\_:\_:)](cher_%28______________%29.md)

# la_solve (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```objectivec
extern la_object_tla_solve(la_object_t matrix_system, la_object_t obj_rhs);
```

## Parameters

- `matrix_system`: A matrix describing the left-hand side of the system.
- `obj_rhs`: A vector or matrix describing one or more right-hand sides for which the equations are to be solved.

<a id="return-value"></a>

## Return Value

A matrix of the solution(s) of the system of equations.

<a id="discussion"></a>

## Discussion

Solves a system of linear equations

If matrix_system represents a matrix A, and obj_rhs represents a vector B, la_solve returns a vector X representing a solution to the equation AX = B, if such a solution exists.  If obj_rhs represents a matrix, then la_solve returns a matrix representing the solution of the same equation.

There are several different cases, and different algorithms are chosen depending on the specifics:

If the matrix has a special structure that allows us to solve the system without factoring (e.g. if the matrix is diagonal or triangular), we may use that structure to compute the solution.

If the matrix is symmetric and all diagonal entries are positive, or if we know, either via a hint parameter or by how earlier computations were structured, that the matrix is positive definite, we attempt a Cholesky factorization.  If this succeeds, it is used to compute the solution via forward- and back-substitution.

If the matrix is square, we try to perform Gaussian elimination to construct a triangular factorization with pivoting.  If this factorization succeeds, we use it to solve the system.  If it fails, the returned object has the error status LA_SINGULAR_ERROR.

If the matrix is not square, we return a least-squares solution computed by performing a QR factorization of the matrix.

If the number of rows of the matrix does not match the number of rows of the right hand side object, the returned object has status LA_DIMENSION_MISMATCH_ERROR.

If the object describing the matrix is not a matrix, or if the right hand side is not a matrix or vector, the returned object has status LA_INVALID_PARAMETER_ERROR.

If you want to solve the system XA = B, which is less common (but still occurs fairly frequently), you may accomplish this by transposing A and B, solving, and then transposing the result of the solve.

## See Also

### Functions

- [caxpy\_](caxpy_%28____________%29.md)
- [ccopy\_](ccopy_%28__________%29.md)
- [cdotc\_](cdotc_%28____________%29.md)
- [cdotu\_](cdotu_%28____________%29.md)
- [cgbmv\_](cgbmv_%28__________________________%29.md)
- [cgemm\_](cgemm_%28__________________________%29.md)
- [cgemv\_](cgemv_%28______________________%29.md)
- [cgerc\_](cgerc_%28__________________%29.md)
- [cgeru\_](cgeru_%28__________________%29.md)
- [chbmv\_](chbmv_%28______________________%29.md)
- [chemm\_](chemm_%28________________________%29.md)
- [chemv\_](chemv_%28____________________%29.md)
- [cher2\_](cher2_%28__________________%29.md)
- [cher2k\_](cher2k_%28________________________%29.md)
- [cher\_](cher_%28______________%29.md)
