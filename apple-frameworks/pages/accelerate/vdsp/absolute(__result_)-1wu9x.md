> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/absolute(_:result:)-1wu9x](https://developer.apple.com/documentation/accelerate/vdsp/absolute(_:result:)-1wu9x)

# absolute(\_:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the absolute value of each element in the supplied double-precision complex vector.

## Declaration

```swift
static func absolute<V>(_ vector: DSPDoubleSplitComplex, result: inout V) where V : AccelerateMutableBuffer, V.Element == Double
```

## Parameters

- `vector`: The source vector.
- `result`: On output, the absolute values of the elements in the source vector.

<a id="Discussion"></a>

## Discussion

This function returns the square roots of the sum of the squares of the real and imaginary parts of each complex element.

For example, the following code calculates the absolute values of four complex numbers:

```swift
    let n = 4
    
    let reals = UnsafeMutableBufferPointer<Double>.allocate(capacity: n)
    _ = reals.initialize(from: [ -3, -6, 5, 9 ])
    
    let imaginaries = UnsafeMutableBufferPointer<Double>.allocate(capacity: n)
    _ = imaginaries.initialize(from: [ 4, -8, -12, 12 ])
    
    let values = DSPDoubleSplitComplex(realp: reals.baseAddress!,
                                       imagp: imaginaries.baseAddress!)
    
    
    let absoluteValues = [Double](unsafeUninitializedCapacity: n) {
        buffer, initializedCount in
        
        vDSP.absolute(values, result: &buffer)
        
        initializedCount = n
    }
    
    // Prints "[5.0, 10.0, 13.0, 15.0]".
    print(absoluteValues)
```

## See Also

### Complex vector absolute functions

- [absolute(\_:result:)](absolute%28__result_%29-9x5jn.md): Calculates the absolute value of each element in the supplied single-precision complex vector.
