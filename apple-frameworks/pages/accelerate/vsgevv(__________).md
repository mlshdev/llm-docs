> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vsgevv(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vsgevv(_:_:_:_:_:))

# vSgevv(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Produces the outer product of two vectors and places the results into a matrix.

> Use cblas_sger on a zero matrix instead

## Declaration

```swift
func vSgevv(_ l: Int32, _ n: Int32, _ A: UnsafePointer<vFloat>, _ B: UnsafePointer<vFloat>, _ M: UnsafeMutablePointer<vFloat>)
```

## Parameters

- `l`: Number of elements in vector `A` and the number of rows in matrix `M`; must be a multiple of 4.
- `n`: Number of elements in vector `B` and the number of columns in matrix `M`; must be a multiple of 4.
- `A`: Vector with `l` elements.
- `B`: Vector with `n` elements.
- `M`: Matrix with `l` rows and `n` columns.

<a id="Discussion"></a>

## Discussion

The vectors `A` and `B` are multiplied and the result is stored in matrix `M`, that is, for `0 <= i < l` and `0 <= j < n`, `C[i*n + j] = A[i] * B[j]`..

## See Also

### Matrix Operations (from vectorOps.h)

- [vSgeadd(\_:\_:\_:\_:\_:\_:\_:)](vsgeadd%28______________%29.md): Deprecated. Adds two general matrices or their transposes.
- [vSgesub(\_:\_:\_:\_:\_:\_:\_:)](vsgesub%28______________%29.md): Deprecated. Subtracts two general matrices or their transposes.
- [vSgemul(\_:\_:\_:\_:\_:\_:\_:\_:)](vsgemul%28________________%29.md): Deprecated. Multiplies two general matrices or their transposes.
- [vSgemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vsgemm%28______________________%29.md): Deprecated. Multiples two general matrices or their transposes, then scales and adds a third.
- [vSgetmi(\_:\_:)](vsgetmi%28____%29.md): Deprecated. Transposes a matrix in place.
- [vSgetmo(\_:\_:\_:\_:)](vsgetmo%28________%29.md): Deprecated. Transposes a matrix out of place.

# vSgevv (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Produces the outer product of two vectors and places the results into a matrix.

> Use cblas_sger on a zero matrix instead

## Declaration

```objectivec
extern void vSgevv(int32_t l, int32_t n, const vFloat *A, const vFloat *B, vFloat *M);
```

## Parameters

- `l`: Number of elements in vector `A` and the number of rows in matrix `M`; must be a multiple of 4.
- `n`: Number of elements in vector `B` and the number of columns in matrix `M`; must be a multiple of 4.
- `A`: Vector with `l` elements.
- `B`: Vector with `n` elements.
- `M`: Matrix with `l` rows and `n` columns.

<a id="Discussion"></a>

## Discussion

The vectors `A` and `B` are multiplied and the result is stored in matrix `M`, that is, for `0 <= i < l` and `0 <= j < n`, `C[i*n + j] = A[i] * B[j]`..

## See Also

### Matrix Operations (from vectorOps.h)

- [vSgeadd](vsgeadd%28______________%29.md): Deprecated. Adds two general matrices or their transposes.
- [vSgesub](vsgesub%28______________%29.md): Deprecated. Subtracts two general matrices or their transposes.
- [vSgemul](vsgemul%28________________%29.md): Deprecated. Multiplies two general matrices or their transposes.
- [vSgemm](vsgemm%28______________________%29.md): Deprecated. Multiples two general matrices or their transposes, then scales and adds a third.
- [vSgetmi](vsgetmi%28____%29.md): Deprecated. Transposes a matrix in place.
- [vSgetmo](vsgetmo%28________%29.md): Deprecated. Transposes a matrix out of place.
