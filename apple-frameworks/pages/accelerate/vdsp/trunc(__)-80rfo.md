> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vdsp/trunc(_:)-80rfo

# trunc(\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns a double-precision array containing each element in the supplied vector truncated to a fraction.

## Declaration

```swift
static func trunc<U>(_ vector: U) -> [Double] where U : AccelerateBuffer, U.Element == Double
```

## See Also

### Single-Vector Fractional Part Extraction

- [trunc(\_:)](trunc%28__%29-1npgt.md): Returns a single-precision array containing each element in the supplied vector truncated to a fraction.
- [trunc(\_:result:)](trunc%28__result_%29-4t63c.md): Calculates each element in the supplied double-precision vector truncated to a fraction.
- [trunc(\_:result:)](trunc%28__result_%29-fabn.md): Calculates each element in the supplied single-precision vector truncated to a fraction.
