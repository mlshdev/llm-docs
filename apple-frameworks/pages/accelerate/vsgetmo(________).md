> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vsgetmo(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vsgetmo(_:_:_:_:))

# vSgetmo(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Transposes a matrix out of place.

> Use appleblas_sgeadd instead

## Declaration

```swift
func vSgetmo(_ height: Int32, _ width: Int32, _ x: UnsafePointer<vFloat>, _ y: UnsafeMutablePointer<vFloat>)
```

## Parameters

- `height`: Number of rows in matrix `x` and number of columns in matrix y; must be a multiple of 4.
- `width`: Number of columns in matrix `x` and number of rows in matrix y; must be a multiple of 4.
- `x`: Matrix with `height` rows and `width` columns.
- `y`: Matrix with `width` rows and `height` columns.

<a id="Discussion"></a>

## Discussion

The matrix `x` is transposed into matrix `y`.

## See Also

### Matrix Operations (from vectorOps.h)

- [vSgeadd(\_:\_:\_:\_:\_:\_:\_:)](vsgeadd%28______________%29.md): Deprecated. Adds two general matrices or their transposes.
- [vSgesub(\_:\_:\_:\_:\_:\_:\_:)](vsgesub%28______________%29.md): Deprecated. Subtracts two general matrices or their transposes.
- [vSgemul(\_:\_:\_:\_:\_:\_:\_:\_:)](vsgemul%28________________%29.md): Deprecated. Multiplies two general matrices or their transposes.
- [vSgemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vsgemm%28______________________%29.md): Deprecated. Multiples two general matrices or their transposes, then scales and adds a third.
- [vSgetmi(\_:\_:)](vsgetmi%28____%29.md): Deprecated. Transposes a matrix in place.
- [vSgevv(\_:\_:\_:\_:\_:)](vsgevv%28__________%29.md): Deprecated. Produces the outer product of two vectors and places the results into a matrix.

# vSgetmo (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Transposes a matrix out of place.

> Use appleblas_sgeadd instead

## Declaration

```objectivec
extern void vSgetmo(int32_t height, int32_t width, const vFloat *x, vFloat *y);
```

## Parameters

- `height`: Number of rows in matrix `x` and number of columns in matrix y; must be a multiple of 4.
- `width`: Number of columns in matrix `x` and number of rows in matrix y; must be a multiple of 4.
- `x`: Matrix with `height` rows and `width` columns.
- `y`: Matrix with `width` rows and `height` columns.

<a id="Discussion"></a>

## Discussion

The matrix `x` is transposed into matrix `y`.

## See Also

### Matrix Operations (from vectorOps.h)

- [vSgeadd](vsgeadd%28______________%29.md): Deprecated. Adds two general matrices or their transposes.
- [vSgesub](vsgesub%28______________%29.md): Deprecated. Subtracts two general matrices or their transposes.
- [vSgemul](vsgemul%28________________%29.md): Deprecated. Multiplies two general matrices or their transposes.
- [vSgemm](vsgemm%28______________________%29.md): Deprecated. Multiples two general matrices or their transposes, then scales and adds a third.
- [vSgetmi](vsgetmi%28____%29.md): Deprecated. Transposes a matrix in place.
- [vSgevv](vsgevv%28__________%29.md): Deprecated. Produces the outer product of two vectors and places the results into a matrix.
