> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/taperedmerge(_:_:result:)-9361o](https://developer.apple.com/documentation/accelerate/vdsp/taperedmerge(_:_:result:)-9361o)

# taperedMerge(\_:\_:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Computes the result of a tapered merge between two double-precision vectors.

## Declaration

```swift
static func taperedMerge<T, U, V>(_ vectorA: T, _ vectorB: U, result: inout V) where T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, T.Element == Double, U.Element == Double, V.Element == Double
```

## Parameters

- `vectorA`: The first vector to merge.
- `vectorB`: The second vector to merge.
- `result`: The destination vector that receives the result.

<a id="Discussion"></a>

## Discussion

The following code performs a tapered merge between two vectors that represent sine waves at different frequencies:

```swift
let count = 1024

let vectorA: [Double] = (0 ..< count).map {
    return sin(Float($0) * 0.4)
}

let vectorB: [Double] = (0 ..< count).map {
    return sin(Float($0) * 0.025)
}

let tapered = [Double](unsafeUninitializedCapacity: count) {
    buffer, initializedCount in
    
    vDSP.taperedMerge(vectorA, vectorB,
                      result: &buffer)
    
    initializedCount = count
}
```

The following image shows the result of the tapered merge in `tapered`.

![Graphic showing the tapered merge from a high-frequency sine wave to a low-frequency sine wave.](https://developer.apple.com/images/com.apple.accelerate/media-3681545@2x.png)

## See Also

### Vector-to-vector merging functions

- [taperedMerge(\_:\_:)](taperedmerge%28____%29-5dhoj.md): Returns the result of a tapered merge between two single-precision vectors.
- [taperedMerge(\_:\_:)](taperedmerge%28____%29-9s9j5.md): Returns the result of a tapered merge between two double-precision vectors.
- [taperedMerge(\_:\_:result:)](taperedmerge%28____result_%29-74fuy.md): Computes the result of a tapered merge between two single-precision vectors.
