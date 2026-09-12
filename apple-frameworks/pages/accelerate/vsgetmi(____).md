> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vsgetmi(_:_:)](https://developer.apple.com/documentation/accelerate/vsgetmi(_:_:))

# vSgetmi(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Transposes a matrix in place.

> Use appleblas_sgeadd instead

## Declaration

```swift
func vSgetmi(_ size: Int32, _ x: UnsafeMutablePointer<vFloat>)
```

## Parameters

- `size`: Number of rows and columns in matrix `x`; must be a multiple of 4.
- `x`: Square matrix with `size` rows and `size` columns.

<a id="Discussion"></a>

## Discussion

The matrix `x` is transposed in place.

## See Also

### Matrix Operations (from vectorOps.h)

- [vSgeadd(\_:\_:\_:\_:\_:\_:\_:)](vsgeadd%28______________%29.md): Deprecated. Adds two general matrices or their transposes.
- [vSgesub(\_:\_:\_:\_:\_:\_:\_:)](vsgesub%28______________%29.md): Deprecated. Subtracts two general matrices or their transposes.
- [vSgemul(\_:\_:\_:\_:\_:\_:\_:\_:)](vsgemul%28________________%29.md): Deprecated. Multiplies two general matrices or their transposes.
- [vSgemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vsgemm%28______________________%29.md): Deprecated. Multiples two general matrices or their transposes, then scales and adds a third.
- [vSgetmo(\_:\_:\_:\_:)](vsgetmo%28________%29.md): Deprecated. Transposes a matrix out of place.
- [vSgevv(\_:\_:\_:\_:\_:)](vsgevv%28__________%29.md): Deprecated. Produces the outer product of two vectors and places the results into a matrix.

# vSgetmi (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Transposes a matrix in place.

> Use appleblas_sgeadd instead

## Declaration

```objectivec
extern void vSgetmi(int32_t size, vFloat *x);
```

## Parameters

- `size`: Number of rows and columns in matrix `x`; must be a multiple of 4.
- `x`: Square matrix with `size` rows and `size` columns.

<a id="Discussion"></a>

## Discussion

The matrix `x` is transposed in place.

## See Also

### Matrix Operations (from vectorOps.h)

- [vSgeadd](vsgeadd%28______________%29.md): Deprecated. Adds two general matrices or their transposes.
- [vSgesub](vsgesub%28______________%29.md): Deprecated. Subtracts two general matrices or their transposes.
- [vSgemul](vsgemul%28________________%29.md): Deprecated. Multiplies two general matrices or their transposes.
- [vSgemm](vsgemm%28______________________%29.md): Deprecated. Multiples two general matrices or their transposes, then scales and adds a third.
- [vSgetmo](vsgetmo%28________%29.md): Deprecated. Transposes a matrix out of place.
- [vSgevv](vsgevv%28__________%29.md): Deprecated. Produces the outer product of two vectors and places the results into a matrix.
