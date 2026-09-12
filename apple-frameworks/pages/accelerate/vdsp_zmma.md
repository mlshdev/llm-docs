> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_zmma](https://developer.apple.com/documentation/accelerate/vdsp_zmma)

# vDSP_zmma

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Adds a single-precision complex matrix to the product of two single-precision complex matrices.

## Declaration

```objectivec
extern void vDSP_zmma(const DSPSplitComplex *__A, vDSP_Stride __IA, const DSPSplitComplex *__B, vDSP_Stride __IB, const DSPSplitComplex *__C, vDSP_Stride __IC, const DSPSplitComplex *__D, vDSP_Stride __ID, vDSP_Length __M, vDSP_Length __N, vDSP_Length __P);
```

## Parameters

- `__A`: The single-precision complex `M` x `P` input matrix `a` in `d = (a * b) + c`.
- `__IA`: The distance between the elements in the matrix `A`.
- `__B`: The single-precision complex `P` x `N` input matrix `b` in `d = (a * b) + c`.
- `__IB`: The distance between the elements in the matrix `B`.
- `__C`: The single-precision complex `M` x `N` input matrix `c` in `d = (a * b) + c`.
- `__IC`: The distance between the elements in the matrix `C`.
- `__D`: The single-precision complex `M` x `N` output matrix `d` in `d = (a * b) + c`.
- `__ID`: The distance between the elements in the matrix `D`.
- `__M`: The number of rows in matrices `A`, `C`, and `D`.
- `__N`: The number of columns in matrix `B`, `C`, and `D`.
- `__P`: The number of columns in matrix `A` and the number of rows in matrix `B`.

<a id="Discussion"></a>

## Discussion

The following code adds the matrix `c` to the product of matrices `a` and `b`, and writes the result to matrix `d`:

````swift
    /// Compute the following:
    /// ```
    ///                        [ 4+5i,
    /// [ 1+2i, 2+3i, 3+4i ] *   5+6i,  + [ 4+5i ] = [ -20+90i ]
    ///                          6+7i ]
    /// ```
    
    let m: vDSP_Length = 1
    let n: vDSP_Length = 1
    let p: vDSP_Length = 3
    
    // `m` rows x `p` columns.
    let aReal = UnsafeMutableBufferPointer<Float>.allocate(capacity: Int(m * p))
    _ = aReal.initialize(from: [1, 2, 3])
    
    let aImag = UnsafeMutableBufferPointer<Float>.allocate(capacity: Int(m * p))
    _ = aImag.initialize(from: [2, 3, 4])
    
    var a = DSPSplitComplex(realp: aReal.baseAddress!,
                            imagp: aImag.baseAddress!)
    
    // `p` rows x `n` columns.
    let bReal = UnsafeMutableBufferPointer<Float>.allocate(capacity: Int(p * n))
    _ = bReal.initialize(from: [4, 5, 6])
    
    let bImag = UnsafeMutableBufferPointer<Float>.allocate(capacity: Int(p * n))
    _ = bImag.initialize(from: [5, 6, 7])
    
    var b = DSPSplitComplex(realp: bReal.baseAddress!,
                            imagp: bImag.baseAddress!)
    
    // `m` rows x `n` columns.
    let cReal = UnsafeMutableBufferPointer<Float>.allocate(capacity: Int(m * n))
    _ = cReal.initialize(from: [4])
    
    let cImag = UnsafeMutableBufferPointer<Float>.allocate(capacity: Int(m * n))
    _ = cImag.initialize(from: [5])
    
    var c = DSPSplitComplex(realp: cReal.baseAddress!,
                            imagp: cImag.baseAddress!)
    
    // `m` rows x `n` columns.
    let dReal = UnsafeMutableBufferPointer<Float>.allocate(capacity: Int(m * n))
    let dImag = UnsafeMutableBufferPointer<Float>.allocate(capacity: Int(m * n))
    
    var d = DSPSplitComplex(realp: dReal.baseAddress!,
                            imagp: dImag.baseAddress!)
    
    vDSP_zmma(&a, 1,
              &b, 1,
              &c, 1,
              &d, 1,
              m, n, p)
    
    print(Array(dReal)) // Prints "[-20.0]".
    print(Array(dImag)) // Prints "[90.0]".
````

## See Also

### Multiplying and adding complex matrices

- [vDSP_zmmaD](vdsp_zmmad.md): Adds a double-precision complex matrix to the product of two double-precision complex matrices.
