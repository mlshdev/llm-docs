> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_mmuld](https://developer.apple.com/documentation/accelerate/vdsp_mmuld)

# vDSP_mmulD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Performs an out-of-place multiplication of two double-precision real matrices.

## Declaration

```objectivec
extern void vDSP_mmulD(const double *__A, vDSP_Stride __IA, const double *__B, vDSP_Stride __IB, double *__C, vDSP_Stride __IC, vDSP_Length __M, vDSP_Length __N, vDSP_Length __P);
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
    let m: vDSP_Length = 2
    let n: vDSP_Length = 5
    let p: vDSP_Length = 3
    
    // `m` rows x `p` columns.
    let a: [Double] = [ 1, 2, 3,
                        4, 5, 6 ]
    
    // `p` rows x `n` columns.
    let b: [Double] = [ 10, 11, 12, 13, 14,
                       15, 16, 17, 18, 19,
                       20, 21, 22, 23, 24 ]
    

    
    // `m` rows x `n` columns.
    var c = [Double](repeating: 0,
                    count: Int(m * n))
    
    let stride = 1
    
    vDSP_mmulD(a, stride,
              b, stride,
              &c, stride,
              m,
              n,
              p)
    
    // Prints:
    // "[ 100.0, 106.0, 112.0, 118.0, 124.0,
    //    235.0, 250.0, 265.0, 280.0, 295.0 ]".
    print(c)
```

## See Also

### Multiplying real matrices

- [vDSP_mmul](vdsp_mmul.md): Performs an out-of-place multiplication of two single-precision real matrices.
