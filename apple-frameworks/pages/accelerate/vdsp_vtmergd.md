> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vtmergd](https://developer.apple.com/documentation/accelerate/vdsp_vtmergd)

# vDSP_vtmergD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Performs a tapered merge between two double-precision vectors.

## Declaration

```objectivec
extern void vDSP_vtmergD(const double *__A, vDSP_Stride __IA, const double *__B, vDSP_Stride __IB, double *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: The first input vector.
- `__IA`: The distance between the elements in the first input vector.\`\`
- `__B`: The second input vector.
- `__IB`: The distance between the elements in the second input vector.
- `__C`: The output vector.
- `__IC`: The distance between the elements in the output vector.
- `__N`: The number of complex elements in the output vector.

<a id="Discussion"></a>

## Discussion

The following code performs a tapered merge between two vectors that represent sine waves at different frequencies:

```swift
    let count = 1024
    
    let vectorA: [Double] = (0 ..< count).map {
        return sin(Double($0) * 0.4)
    }
    
    let vectorB: [Double] = (0 ..< count).map {
        return sin(Double($0) * 0.025)
    }
    
    let stride = 1
    let n = vDSP_Length(count)
    
    let tapered = [Double](unsafeUninitializedCapacity: count) {
        buffer, initializedCount in
        
        vDSP_vtmergD(vectorA, stride,
                     vectorB, stride,
                     buffer.baseAddress!, stride,
                     n)
        
        initializedCount = count
    }
```

The following image shows the result of the tapered merge in `tapered`.

![Graphic showing the tapered merge from a high-frequency sine wave to a low-frequency sine wave.](https://developer.apple.com/images/com.apple.accelerate/media-4329457@2x.png)

## See Also

### Vector-to-vector merging functions

- [vDSP_vtmerg](vdsp_vtmerg.md): Performs a tapered merge between two single-precision vectors.
