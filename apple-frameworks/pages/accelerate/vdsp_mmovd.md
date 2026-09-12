> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_mmovd](https://developer.apple.com/documentation/accelerate/vdsp_mmovd)

# vDSP_mmovD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Copies the contents of a double-precision submatrix to another double-precision matrix.

## Declaration

```objectivec
extern void vDSP_mmovD(const double *__A, double *__C, vDSP_Length __M, vDSP_Length __N, vDSP_Length __TA, vDSP_Length __TC);
```

## Parameters

- `__A`: The input matrix.
- `__C`: The output matrix.
- `__M`: The number of columns that the function copies.
- `__N`: The number of rows that the function copies.` `
- `__TA`: The number of columns in the matrix of which `A` is a submatrix.
- `__TC`: The number of columns in the matrix of which `C` is a submatrix.

<a id="Discussion"></a>

## Discussion

This function treats the input and output matrices as row-major order.

The following code copies the 3 x 3 submatrix that starts at the element with the value `22` from the input matrix to the output matrix:

```swift
    let m: vDSP_Length = 3
    let n: vDSP_Length = 3
    
    let source: [Double] = [ 10, 11, 12, 13, 14,
                             20, 21, 22, 23, 24,
                             30, 31, 32, 33, 34,
                             40, 41, 42, 43, 44,
                             50, 51, 52, 53, 54 ]
    let sourceColumnCount = 5
    
    let destination = [Double](unsafeUninitializedCapacity: Int(m * n)) {
        buffer,initializedCount in
        
        source.withUnsafeBufferPointer { sourcePtr in
            
            let rowOffset = 1 * sourceColumnCount
            let colOffset = 2
            let start = sourcePtr.baseAddress!.advanced(by: rowOffset + colOffset)
            
            vDSP_mmovD(start,
                       buffer.baseAddress!,
                       m, n,
                       vDSP_Length(sourceColumnCount),
                       m)
        }
        
        initializedCount = Int(m * n)
    }
    
    // Prints:
    //    "[ 22.0, 23.0, 24.0,
    //       32.0, 33.0, 34.0,
    //       42.0, 43.0, 44.0 ]".
    print(destination)
```

## See Also

### Copying matrices and submatrices

- [vDSP_mmov](vdsp_mmov.md): Copies the contents of a single-precision submatrix to another single-precision matrix.
