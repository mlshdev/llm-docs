> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/dftsingleprecisioninterleavedfunctions/makediscretefouriertransform(previous:count:direction:transformtype:)](https://developer.apple.com/documentation/accelerate/vdsp/dftsingleprecisioninterleavedfunctions/makediscretefouriertransform(previous:count:direction:transformtype:))

# makeDiscreteFourierTransform(previous:count:direction:transformType:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

## Declaration

```swift
static func makeDiscreteFourierTransform(previous: OpaquePointer? = nil, count: Int, direction: vDSP.FourierTransformDirection, transformType: vDSP.DFTTransformType) throws -> OpaquePointer
```
