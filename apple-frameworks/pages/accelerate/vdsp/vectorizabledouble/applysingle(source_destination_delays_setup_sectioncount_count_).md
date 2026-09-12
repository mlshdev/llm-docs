> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/vectorizabledouble/applysingle(source:destination:delays:setup:sectioncount:count:)](https://developer.apple.com/documentation/accelerate/vdsp/vectorizabledouble/applysingle(source:destination:delays:setup:sectioncount:count:))

# applySingle(source:destination:delays:setup:sectionCount:count:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

## Declaration

```swift
static func applySingle<U, V>(source: U, destination: inout V, delays: UnsafeMutablePointer<vDSP.VectorizableDouble.Scalar>, setup: vDSP_biquad_Setup, sectionCount: vDSP_Length, count: vDSP_Length) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Double, V.Element == Double
```
