> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_zmms](https://developer.apple.com/documentation/accelerate/vdsp_zmms)

# vDSP_zmms

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Subtracts a single-precision complex matrix from the product of two single-precision complex matrices.

## Declaration

```objectivec
extern void vDSP_zmms(const DSPSplitComplex *__A, vDSP_Stride __IA, const DSPSplitComplex *__B, vDSP_Stride __IB, const DSPSplitComplex *__C, vDSP_Stride __IC, const DSPSplitComplex *__D, vDSP_Stride __ID, vDSP_Length __M, vDSP_Length __N, vDSP_Length __P);
```

## Parameters

- `__A`: The single-precision complex `M` x `P` input matrix `a` in `d = (a * b) - c`.
- `__IA`: The distance between the elements in the matrix `A`.
- `__B`: The single-precision complex `P` x `N` input matrix `b` in `d = (a * b) - c`.
- `__IB`: The distance between the elements in the matrix `B`.
- `__C`: The single-precision complex `M` x `N` input matrix `c` in `d = (a * b) - c`.
- `__IC`: The distance between the elements in the matrix `C`.
- `__D`: The single-precision complex `M` x `N` output matrix `d` in `d = (a * b) - c`.
- `__ID`: The distance between the elements in the matrix `D`.
- `__M`: The number of rows in matrices `A`, `C`, and `D`.
- `__N`: The number of columns in matrix `B`, `C`, and `D`.
- `__P`: The number of columns in matrix `A` and the number of rows in matrix `B`.

<a id="Discussion"></a>

## Discussion

The following code subtracts the matrix `c` from the product of matrices `a` and `b`, and writes the result to matrix `d`:

````swift
    /// Compute the following:
    /// ```
    ///                        [ 4+5i,
    /// [ 1+2i, 2+3i, 3+4i ] *   5+6i,  - [ 4+5i ] = [ -28+80i ]
    ///                          6+7i ]
    /// ```

    let m: vDSP_Length = 1
    let n: vDSP_Length = 1
    let p: vDSP_Length = 3
    
    // `m` rows x `p` columns.
    let aReal = UnsafeMutableBufferPointer<Double>.allocate(capacity: Int(m * p))
    _ = aReal.initialize(from: [1, 2, 3])
    
    let aImag = UnsafeMutableBufferPointer<Double>.allocate(capacity: Int(m * p))
    _ = aImag.initialize(from: [2, 3, 4])
    
    var a = DSPDoubleSplitComplex(realp: aReal.baseAddress!,
                            imagp: aImag.baseAddress!)
    
    // `p` rows x `n` columns.
    let bReal = UnsafeMutableBufferPointer<Double>.allocate(capacity: Int(p * n))
    _ = bReal.initialize(from: [4, 5, 6])
    
    let bImag = UnsafeMutableBufferPointer<Double>.allocate(capacity: Int(p * n))
    _ = bImag.initialize(from: [5, 6, 7])
    
    var b = DSPDoubleSplitComplex(realp: bReal.baseAddress!,
                            imagp: bImag.baseAddress!)
    
    // `m` rows x `n` columns.
    let cReal = UnsafeMutableBufferPointer<Double>.allocate(capacity: Int(m * n))
    _ = cReal.initialize(from: [4])
    
    let cImag = UnsafeMutableBufferPointer<Double>.allocate(capacity: Int(m * n))
    _ = cImag.initialize(from: [5])
    
    var c = DSPDoubleSplitComplex(realp: cReal.baseAddress!,
                            imagp: cImag.baseAddress!)
    
    // `m` rows x `n` columns.
    let dReal = UnsafeMutableBufferPointer<Double>.allocate(capacity: Int(m * n))
    let dImag = UnsafeMutableBufferPointer<Double>.allocate(capacity: Int(m * n))
    
    var d = DSPDoubleSplitComplex(realp: dReal.baseAddress!,
                            imagp: dImag.baseAddress!)
    
    vDSP_zmmsD(&a, 1,
               &b, 1,
               &c, 1,
               &d, 1,
               m, n, p)
    
    print(Array(dReal)) // Prints "[-28.0]".
    print(Array(dImag)) // Prints "[80.0]".
````

## See Also

### Multiplying and subtracting complex matrices

- [vDSP_zmmsD](vdsp_zmmsd.md): Subtracts a double-precision complex matrix from the product of two double-precision complex matrices.
- [vDSP_zmsm](vdsp_zmsm.md): Subtracts the product of two single-precision complex matrices from a single-precision complex matrix.
- [vDSP_zmsmD](vdsp_zmsmd.md): Subtracts the product of two double-precision complex matrices from a double-precision complex matrix.
