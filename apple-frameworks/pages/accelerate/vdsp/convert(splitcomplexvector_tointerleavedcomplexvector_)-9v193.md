> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/convert(splitcomplexvector:tointerleavedcomplexvector:)-9v193](https://developer.apple.com/documentation/accelerate/vdsp/convert(splitcomplexvector:tointerleavedcomplexvector:)-9v193)

# convert(splitComplexVector:toInterleavedComplexVector:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Converts the contents of a split double-precision complex vector to an interleaved vector.

## Declaration

```swift
static func convert(splitComplexVector: DSPDoubleSplitComplex, toInterleavedComplexVector interleavedComplexVector: inout [DSPDoubleComplex])
```

## Parameters

- `splitComplexVector`: The split-complex source vector.
- `interleavedComplexVector`: The interleaved-complex destination vector.

## See Also

### Converting split-complex vectors to interleaved-complex vectors

- [convert(splitComplexVector:toInterleavedComplexVector:)](convert%28splitcomplexvector_tointerleavedcomplexvector_%29-65gyx.md): Converts the contents of a split single-precision complex vector to an interleaved vector.
