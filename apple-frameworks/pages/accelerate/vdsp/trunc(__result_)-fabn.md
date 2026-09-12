> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/trunc(_:result:)-fabn](https://developer.apple.com/documentation/accelerate/vdsp/trunc(_:result:)-fabn)

# trunc(\_:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates each element in the supplied single-precision vector truncated to a fraction.

## Declaration

```swift
static func trunc<U, V>(_ vector: U, result: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Float, V.Element == Float
```

## See Also

### Single-Vector Fractional Part Extraction

- [trunc(\_:)](trunc%28__%29-80rfo.md): Returns a double-precision array containing each element in the supplied vector truncated to a fraction.
- [trunc(\_:)](trunc%28__%29-1npgt.md): Returns a single-precision array containing each element in the supplied vector truncated to a fraction.
- [trunc(\_:result:)](trunc%28__result_%29-4t63c.md): Calculates each element in the supplied double-precision vector truncated to a fraction.
