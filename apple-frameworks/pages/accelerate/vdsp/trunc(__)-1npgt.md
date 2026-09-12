> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/trunc(_:)-1npgt](https://developer.apple.com/documentation/accelerate/vdsp/trunc(_:)-1npgt)

# trunc(\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns a single-precision array containing each element in the supplied vector truncated to a fraction.

## Declaration

```swift
static func trunc<U>(_ vector: U) -> [Float] where U : AccelerateBuffer, U.Element == Float
```

## See Also

### Single-Vector Fractional Part Extraction

- [trunc(\_:)](trunc%28__%29-80rfo.md): Returns a double-precision array containing each element in the supplied vector truncated to a fraction.
- [trunc(\_:result:)](trunc%28__result_%29-4t63c.md): Calculates each element in the supplied double-precision vector truncated to a fraction.
- [trunc(\_:result:)](trunc%28__result_%29-fabn.md): Calculates each element in the supplied single-precision vector truncated to a fraction.
