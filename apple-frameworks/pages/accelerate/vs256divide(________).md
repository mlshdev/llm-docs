> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vs256divide(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vs256divide(_:_:_:_:))

# vS256Divide(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+

Computes the signed 256-bit division.

## Declaration

```swift
func vS256Divide(_ numerator: UnsafePointer<vS256>, _ divisor: UnsafePointer<vS256>, _ result: UnsafeMutablePointer<vS256>, _ remainder: UnsafeMutablePointer<vS256>?)
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Performing arithmetic operations on large integers

- [vU256Add(\_:\_:\_:)](vu256add%28______%29.md): Unsigned 256-bit addition (modular arithmetic).
- [vU256AddS(\_:\_:\_:)](vu256adds%28______%29.md): Unsigned 256-bit addition with saturation (clipping).
- [vS256Add(\_:\_:\_:)](vs256add%28______%29.md): Signed 256-bit addition (modular arithmetic).
- [vS256AddS(\_:\_:\_:)](vs256adds%28______%29.md): Signed 256-bit addition with saturation (clipping).
- [vU512Add(\_:\_:\_:)](vu512add%28______%29.md): Unsigned 512-bit addition (modular arithmetic).
- [vU512AddS(\_:\_:\_:)](vu512adds%28______%29.md): Unsigned 512-bit addition with saturation (clipping).
- [vS512Add(\_:\_:\_:)](vs512add%28______%29.md): Signed 512-bit addition (modular arithmetic).
- [vS512AddS(\_:\_:\_:)](vs512adds%28______%29.md): Signed 512-bit addition with saturation (clipping).
- [vU1024Add(\_:\_:\_:)](vu1024add%28______%29.md): Unsigned 1024-bit addition (modular arithmetic).
- [vU1024AddS(\_:\_:\_:)](vu1024adds%28______%29.md): Unsigned 1024-bit addition with saturation (clipping).
- [vS1024Add(\_:\_:\_:)](vs1024add%28______%29.md): Signed 1024-bit addition (modular arithmetic).
- [vS1024AddS(\_:\_:\_:)](vs1024adds%28______%29.md): Signed 1024-bit addition with saturation (clipping).
- [vU256Sub(\_:\_:\_:)](vu256sub%28______%29.md): Unsigned 256-bit subtraction (modular arithmetic).
- [vU256SubS(\_:\_:\_:)](vu256subs%28______%29.md): Unsigned 256-bit subtraction with saturation (clipping).
- [vS256Sub(\_:\_:\_:)](vs256sub%28______%29.md): Signed 256-bit subtraction (modular arithmetic).

# vS256Divide (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+

Computes the signed 256-bit division.

## Declaration

```objectivec
extern void vS256Divide(const vS256 *numerator, const vS256 *divisor, vS256 *result, vS256 *remainder);
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Performing arithmetic operations on large integers

- [vU256Add](vu256add%28______%29.md): Unsigned 256-bit addition (modular arithmetic).
- [vU256AddS](vu256adds%28______%29.md): Unsigned 256-bit addition with saturation (clipping).
- [vS256Add](vs256add%28______%29.md): Signed 256-bit addition (modular arithmetic).
- [vS256AddS](vs256adds%28______%29.md): Signed 256-bit addition with saturation (clipping).
- [vU512Add](vu512add%28______%29.md): Unsigned 512-bit addition (modular arithmetic).
- [vU512AddS](vu512adds%28______%29.md): Unsigned 512-bit addition with saturation (clipping).
- [vS512Add](vs512add%28______%29.md): Signed 512-bit addition (modular arithmetic).
- [vS512AddS](vs512adds%28______%29.md): Signed 512-bit addition with saturation (clipping).
- [vU1024Add](vu1024add%28______%29.md): Unsigned 1024-bit addition (modular arithmetic).
- [vU1024AddS](vu1024adds%28______%29.md): Unsigned 1024-bit addition with saturation (clipping).
- [vS1024Add](vs1024add%28______%29.md): Signed 1024-bit addition (modular arithmetic).
- [vS1024AddS](vs1024adds%28______%29.md): Signed 1024-bit addition with saturation (clipping).
- [vU256Sub](vu256sub%28______%29.md): Unsigned 256-bit subtraction (modular arithmetic).
- [vU256SubS](vu256subs%28______%29.md): Unsigned 256-bit subtraction with saturation (clipping).
- [vS256Sub](vs256sub%28______%29.md): Signed 256-bit subtraction (modular arithmetic).
