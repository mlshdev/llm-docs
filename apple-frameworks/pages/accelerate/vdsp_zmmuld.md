> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_zmmuld](https://developer.apple.com/documentation/accelerate/vdsp_zmmuld)

# vDSP_zmmulD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Performs an out-of-place multiplication of two double-precision complex matrices.

## Declaration

```objectivec
extern void vDSP_zmmulD(const DSPDoubleSplitComplex *__A, vDSP_Stride __IA, const DSPDoubleSplitComplex *__B, vDSP_Stride __IB, const DSPDoubleSplitComplex *__C, vDSP_Stride __IC, vDSP_Length __M, vDSP_Length __N, vDSP_Length __P);
```

## Parameters

- `__A`: The `M` x `P` left-hand side input matrix.
- `__IA`: The distance between the elements in the left-hand side input matrix.
- `__B`: The `P` x `N` right-hand side input matrix.
- `__IB`: The distance between the elements in the right-hand side input matrix.
- `__C`: The `M` x `N` output matrix.
- `__IC`: The distance between the elements in the output matrix.
- `__M`: The number of rows in matrices `A` and `C`.
- `__N`: The number of columns in matrices `B` and `C`.
- `__P`: The number of columns in matrix `A` and the number of rows in matrix `B`.

<a id="Discussion"></a>

## Discussion

The following code multiplies the matrices `a` and `b`, and writes the result to matrix `c`:

```swift
    //                        [ 4+5i,
    // [ 1+2i, 2+3i, 3+4i ] *   5+6i,  = [ -24+85i ]
    //                          6+7i ]
    
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
    let cImag = UnsafeMutableBufferPointer<Double>.allocate(capacity: Int(m * n))
    
    var c = DSPDoubleSplitComplex(realp: cReal.baseAddress!,
                                  imagp: cImag.baseAddress!)
    
    vDSP_zmmulD(&a, 1,
                &b, 1,
                &c, 1,
                m, n, p)
    
    print(Array(cReal)) // Prints "[-24.0]".
    print(Array(cImag)) // Prints "[85.0]".
```

## See Also

### Multiplying complex matrices

- [vDSP_zmmul](vdsp_zmmul.md): Performs an out-of-place multiplication of two single-precision complex matrices.
