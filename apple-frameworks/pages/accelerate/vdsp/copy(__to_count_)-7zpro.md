> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/copy(_:to:count:)-7zpro](https://developer.apple.com/documentation/accelerate/vdsp/copy(_:to:count:)-7zpro)

# copy(\_:to:count:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Copies a complex double-precision vector.

## Declaration

```swift
static func copy(_ source: DSPDoubleSplitComplex, to destination: inout DSPDoubleSplitComplex, count: Int)
```

## Parameters

- `source`: The source complex vector.
- `destination`: The destination complex vector.
- `count`: The number of complex elements in the source and destination vectors.

<a id="Discussion"></a>

## Discussion

The following code copies the complex elements in the source to the destination:

```swift
    let realSrc = UnsafeMutableBufferPointer<Double>.allocate(capacity: 4)
    _ = realSrc.initialize(from: [0, 2, 4, 6])
    
    let imagSrc = UnsafeMutableBufferPointer<Double>.allocate(capacity: 4)
    _ = imagSrc.initialize(from: [1, 3, 5, 7])
    
    let source = DSPDoubleSplitComplex(realp: realSrc.baseAddress!,
                                       imagp: imagSrc.baseAddress!)
    
    let realDst = UnsafeMutableBufferPointer<Double>.allocate(capacity: 4)
    let imagDst = UnsafeMutableBufferPointer<Double>.allocate(capacity: 4)
    
    var destination = DSPDoubleSplitComplex(realp: realDst.baseAddress!,
                                            imagp: imagDst.baseAddress!)
    
    vDSP.copy(source, to: &destination, count: 4)
    
    print(Array(realDst)) // Prints "[0.0, 2.0, 4.0, 6.0]".
    print(Array(imagDst)) // Prints "[1.0, 3.0, 5.0, 7.0]".
```

## See Also

### Vector copying functions

- [copy(\_:to:count:)](copy%28__to_count_%29-96jr5.md): Copies a complex single-precision vector.
