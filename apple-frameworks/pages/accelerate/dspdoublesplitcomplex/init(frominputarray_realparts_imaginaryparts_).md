> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/dspdoublesplitcomplex/init(frominputarray:realparts:imaginaryparts:)](https://developer.apple.com/documentation/accelerate/dspdoublesplitcomplex/init(frominputarray:realparts:imaginaryparts:))

# init(fromInputArray:realParts:imaginaryParts:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

> Use the `withUnsafeMutableBufferPointer` method on the real and imaginary arrays to create `DSPSplitComplex` for a defined scope.

## Declaration

```swift
init(fromInputArray inputArray: [Double], realParts: inout [Double], imaginaryParts: inout [Double])
```
