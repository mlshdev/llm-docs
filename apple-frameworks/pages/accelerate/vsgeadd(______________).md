> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vsgeadd(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vsgeadd(_:_:_:_:_:_:_:))

# vSgeadd(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Adds two general matrices or their transposes.

> Use appleblas_sgeadd instead

## Declaration

```swift
func vSgeadd(_ height: Int32, _ width: Int32, _ a: UnsafePointer<vFloat>, _ forma: CChar, _ b: UnsafePointer<vFloat>, _ formb: CChar, _ c: UnsafeMutablePointer<vFloat>)
```

## Parameters

- `height`: Number of rows in the matrices to be added; must be a multiple of 4.
- `width`: Number of columns in the matrices to be added; must be a multiple of 4.
- `a`: A matrix with elements of type `float`.  If `forma` = ‘N’, the matrix itself is used in the calculation and it has `height` rows and `width` columns.  If `forma` = ‘T’, the transpose is used and `a` has `width` rows and `height` columns.
- `forma`: Selector with a value of’N’ or ‘T’.
- `b`: A matrix with elements of type `float`.  If `formb` = ‘N’, the matrix itself is used in the calculation and it has `height` rows and `width` columns.  If `formb` = ‘T’, the transpose is used and `b` has `width` rows and `height` columns.
- `formb`: Selector with a value of ‘N’ or ‘T’.
- `c`: Destination matrix with `height` rows and `width` columns.

<a id="Discussion"></a>

## Discussion

Matrix `a` (or its transpose) is added to matrix `b` (or its transpose); the result is stored in mactrix `c`.

## See Also

### Matrix Operations (from vectorOps.h)

- [vSgesub(\_:\_:\_:\_:\_:\_:\_:)](vsgesub%28______________%29.md): Deprecated. Subtracts two general matrices or their transposes.
- [vSgemul(\_:\_:\_:\_:\_:\_:\_:\_:)](vsgemul%28________________%29.md): Deprecated. Multiplies two general matrices or their transposes.
- [vSgemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vsgemm%28______________________%29.md): Deprecated. Multiples two general matrices or their transposes, then scales and adds a third.
- [vSgetmi(\_:\_:)](vsgetmi%28____%29.md): Deprecated. Transposes a matrix in place.
- [vSgetmo(\_:\_:\_:\_:)](vsgetmo%28________%29.md): Deprecated. Transposes a matrix out of place.
- [vSgevv(\_:\_:\_:\_:\_:)](vsgevv%28__________%29.md): Deprecated. Produces the outer product of two vectors and places the results into a matrix.

# vSgeadd (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Adds two general matrices or their transposes.

> Use appleblas_sgeadd instead

## Declaration

```objectivec
extern void vSgeadd(int32_t height, int32_t width, const vFloat *a, char forma, const vFloat *b, char formb, vFloat *c);
```

## Parameters

- `height`: Number of rows in the matrices to be added; must be a multiple of 4.
- `width`: Number of columns in the matrices to be added; must be a multiple of 4.
- `a`: A matrix with elements of type `float`.  If `forma` = ‘N’, the matrix itself is used in the calculation and it has `height` rows and `width` columns.  If `forma` = ‘T’, the transpose is used and `a` has `width` rows and `height` columns.
- `forma`: Selector with a value of’N’ or ‘T’.
- `b`: A matrix with elements of type `float`.  If `formb` = ‘N’, the matrix itself is used in the calculation and it has `height` rows and `width` columns.  If `formb` = ‘T’, the transpose is used and `b` has `width` rows and `height` columns.
- `formb`: Selector with a value of ‘N’ or ‘T’.
- `c`: Destination matrix with `height` rows and `width` columns.

<a id="Discussion"></a>

## Discussion

Matrix `a` (or its transpose) is added to matrix `b` (or its transpose); the result is stored in mactrix `c`.

## See Also

### Matrix Operations (from vectorOps.h)

- [vSgesub](vsgesub%28______________%29.md): Deprecated. Subtracts two general matrices or their transposes.
- [vSgemul](vsgemul%28________________%29.md): Deprecated. Multiplies two general matrices or their transposes.
- [vSgemm](vsgemm%28______________________%29.md): Deprecated. Multiples two general matrices or their transposes, then scales and adds a third.
- [vSgetmi](vsgetmi%28____%29.md): Deprecated. Transposes a matrix in place.
- [vSgetmo](vsgetmo%28________%29.md): Deprecated. Transposes a matrix out of place.
- [vSgevv](vsgevv%28__________%29.md): Deprecated. Produces the outer product of two vectors and places the results into a matrix.
