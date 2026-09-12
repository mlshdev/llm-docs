> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd8/random(in:using:)-6d8vw](https://developer.apple.com/documentation/swift/simd8/random(in:using:)-6d8vw)

# random(in:using:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a vector with random values from within the specified range in all lanes, using the given generator as a source for randomness.

## Declaration

```swift
static func random<T>(in range: ClosedRange<Self.Scalar>, using generator: inout T) -> Self where T : RandomNumberGenerator
```
