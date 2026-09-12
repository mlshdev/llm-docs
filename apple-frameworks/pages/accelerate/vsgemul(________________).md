> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vsgemul(_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vsgemul(_:_:_:_:_:_:_:_:))

# vSgemul(\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Multiplies two general matrices or their transposes.

> Use cblas_sgemm instead

## Declaration

```swift
func vSgemul(_ l: Int32, _ m: Int32, _ n: Int32, _ a: UnsafePointer<vFloat>, _ forma: CChar, _ b: UnsafePointer<vFloat>, _ formb: CChar, _ matrix: UnsafeMutablePointer<vFloat>)
```

## Parameters

- `l`: Number of rows in matrix `matrix`; must be a multiple of 4.
- `m`: If `forma` = ‘N’, `m` is the number of columns in matrix `a` ; if forma = ‘T’, `m` is the number of rows in matrix `a`. Also, if `formb` = ‘N’, `m` is the number of rows in matrix `b`; if formb = ‘T’, `m` is the number of columns in matrix `b`. `m` must be a multiple of 4.
- `n`: Number of columns in the matrix `matrix`; must be a multiple of 4.
- `a`: A matrix with elements of type `float`.  If `forma` = ‘N’, the matrix itself is used in the calculation and it has `l` rows and `m` columns.  If `forma` = ‘T’, the transpose is used and `a` has `m` rows and `l` columns. Thus the matrix used in the calculation is `l` by `m`.
- `forma`: Selector with a value of ‘N’ or ‘T’.
- `b`: A matrix with elements of type `float`.  If `formb` = ‘N’, the matrix itself is used in the calculation and it has `m` rows and `n` columns.  If `formb` = ‘T’, the transpose is used and `b` has `n` rows and `m` columns. Thus the matrix used in the calculation is `m` by `n`.
- `formb`: Selector with a value of ‘N’ or ‘T’.
- `matrix`: Destination matrix with `l` rows and `n` columns.

<a id="Discussion"></a>

## Discussion

Matrix `a` (or its transpose) is multiplied by matrix `b` (or its transpose); the result is stored in matrix `matrix`.

## See Also

### Matrix Operations (from vectorOps.h)

- [vSgeadd(\_:\_:\_:\_:\_:\_:\_:)](vsgeadd%28______________%29.md): Deprecated. Adds two general matrices or their transposes.
- [vSgesub(\_:\_:\_:\_:\_:\_:\_:)](vsgesub%28______________%29.md): Deprecated. Subtracts two general matrices or their transposes.
- [vSgemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vsgemm%28______________________%29.md): Deprecated. Multiples two general matrices or their transposes, then scales and adds a third.
- [vSgetmi(\_:\_:)](vsgetmi%28____%29.md): Deprecated. Transposes a matrix in place.
- [vSgetmo(\_:\_:\_:\_:)](vsgetmo%28________%29.md): Deprecated. Transposes a matrix out of place.
- [vSgevv(\_:\_:\_:\_:\_:)](vsgevv%28__________%29.md): Deprecated. Produces the outer product of two vectors and places the results into a matrix.

# vSgemul (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Multiplies two general matrices or their transposes.

> Use cblas_sgemm instead

## Declaration

```objectivec
extern void vSgemul(int32_t l, int32_t m, int32_t n, const vFloat *a, char forma, const vFloat *b, char formb, vFloat *matrix);
```

## Parameters

- `l`: Number of rows in matrix `matrix`; must be a multiple of 4.
- `m`: If `forma` = ‘N’, `m` is the number of columns in matrix `a` ; if forma = ‘T’, `m` is the number of rows in matrix `a`. Also, if `formb` = ‘N’, `m` is the number of rows in matrix `b`; if formb = ‘T’, `m` is the number of columns in matrix `b`. `m` must be a multiple of 4.
- `n`: Number of columns in the matrix `matrix`; must be a multiple of 4.
- `a`: A matrix with elements of type `float`.  If `forma` = ‘N’, the matrix itself is used in the calculation and it has `l` rows and `m` columns.  If `forma` = ‘T’, the transpose is used and `a` has `m` rows and `l` columns. Thus the matrix used in the calculation is `l` by `m`.
- `forma`: Selector with a value of ‘N’ or ‘T’.
- `b`: A matrix with elements of type `float`.  If `formb` = ‘N’, the matrix itself is used in the calculation and it has `m` rows and `n` columns.  If `formb` = ‘T’, the transpose is used and `b` has `n` rows and `m` columns. Thus the matrix used in the calculation is `m` by `n`.
- `formb`: Selector with a value of ‘N’ or ‘T’.
- `matrix`: Destination matrix with `l` rows and `n` columns.

<a id="Discussion"></a>

## Discussion

Matrix `a` (or its transpose) is multiplied by matrix `b` (or its transpose); the result is stored in matrix `matrix`.

## See Also

### Matrix Operations (from vectorOps.h)

- [vSgeadd](vsgeadd%28______________%29.md): Deprecated. Adds two general matrices or their transposes.
- [vSgesub](vsgesub%28______________%29.md): Deprecated. Subtracts two general matrices or their transposes.
- [vSgemm](vsgemm%28______________________%29.md): Deprecated. Multiples two general matrices or their transposes, then scales and adds a third.
- [vSgetmi](vsgetmi%28____%29.md): Deprecated. Transposes a matrix in place.
- [vSgetmo](vsgetmo%28________%29.md): Deprecated. Transposes a matrix out of place.
- [vSgevv](vsgevv%28__________%29.md): Deprecated. Produces the outer product of two vectors and places the results into a matrix.
