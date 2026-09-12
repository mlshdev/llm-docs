> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/phase(_:result:)-1ve4y](https://developer.apple.com/documentation/accelerate/vdsp/phase(_:result:)-1ve4y)

# phase(\_:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the single-precision element-wise phase values, in radians, of the supplied complex vector.

## Declaration

```swift
static func phase<V>(_ splitComplex: DSPSplitComplex, result: inout V) where V : AccelerateMutableBuffer, V.Element == Float
```

## See Also

### Single-Vector Phase Computation

- [phase(\_:result:)](phase%28__result_%29-56qb1.md): Calculates the double-precision element-wise phase values, in radians, of the supplied complex vector.
