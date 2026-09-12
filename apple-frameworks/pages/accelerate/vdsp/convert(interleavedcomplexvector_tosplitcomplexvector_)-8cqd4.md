> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/convert(interleavedcomplexvector:tosplitcomplexvector:)-8cqd4](https://developer.apple.com/documentation/accelerate/vdsp/convert(interleavedcomplexvector:tosplitcomplexvector:)-8cqd4)

# convert(interleavedComplexVector:toSplitComplexVector:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Converts the contents of an interleaved double-precision complex vector to a split complex vector.

## Declaration

```swift
static func convert(interleavedComplexVector: [DSPDoubleComplex], toSplitComplexVector splitComplexVector: inout DSPDoubleSplitComplex)
```

## Parameters

- `interleavedComplexVector`: The interleaved complex source vector.
- `splitComplexVector`: The split complex destination vector.

## See Also

### Converting interleaved-complex vectors to split-complex vectors

- [convert(interleavedComplexVector:toSplitComplexVector:)](convert%28interleavedcomplexvector_tosplitcomplexvector_%29-4lnrf.md): Converts the contents of an interleaved single-precision complex vector to a split complex vector.
