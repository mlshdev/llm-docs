> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_zvmov](https://developer.apple.com/documentation/accelerate/vdsp_zvmov)

# vDSP_zvmov

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Moves a complex single-precision vector.

## Declaration

```objectivec
extern void vDSP_zvmov(const DSPSplitComplex *__A, vDSP_Stride __IA, const DSPSplitComplex *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: The input vector.
- `__IA`: The distance between the elements in the input vector.\`\`
- `__C`: The output vector.
- `__IC`: The distance between the elements in the output vector.
- `__N`: The number of complex elements in the source and destination vectors.

<a id="Discussion"></a>

## Discussion

The following code copies the complex elements in the source to the destination:

```swift
    let realSrc = UnsafeMutableBufferPointer<Float>.allocate(capacity: 4)
    _ = realSrc.initialize(from: [0, 2, 4, 6])
    
    let imagSrc = UnsafeMutableBufferPointer<Float>.allocate(capacity: 4)
    _ = imagSrc.initialize(from: [1, 3, 5, 7])
    
    var source = DSPSplitComplex(realp: realSrc.baseAddress!,
                                 imagp: imagSrc.baseAddress!)
    
    let realDst = UnsafeMutableBufferPointer<Float>.allocate(capacity: 4)
    let imagDst = UnsafeMutableBufferPointer<Float>.allocate(capacity: 4)

    var destination = DSPSplitComplex(realp: realDst.baseAddress!,
                                 imagp: imagDst.baseAddress!)
    
    let stride = 1
    let n: vDSP_Length = 4
    
    vDSP_zvmov(&source, stride, 
               &destination, stride,
               n)
    
    print(Array(realDst)) // Prints "[0.0, 2.0, 4.0, 6.0]".
    print(Array(imagDst)) // Prints "[1.0, 3.0, 5.0, 7.0]".
```

## See Also

### Vector copying functions

- [vDSP_zvmovD](vdsp_zvmovd.md): Moves a complex double-precision vector.
