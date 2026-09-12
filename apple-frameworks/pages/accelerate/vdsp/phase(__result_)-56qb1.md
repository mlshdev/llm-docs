> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/phase(_:result:)-56qb1](https://developer.apple.com/documentation/accelerate/vdsp/phase(_:result:)-56qb1)

# phase(\_:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the double-precision element-wise phase values, in radians, of the supplied complex vector.

## Declaration

```swift
static func phase<V>(_ splitComplex: DSPDoubleSplitComplex, result: inout V) where V : AccelerateMutableBuffer, V.Element == Double
```

## See Also

### Single-Vector Phase Computation

- [phase(\_:result:)](phase%28__result_%29-1ve4y.md): Calculates the single-precision element-wise phase values, in radians, of the supplied complex vector.
