> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd8/init(_:rounding:)](https://developer.apple.com/documentation/swift/simd8/init(_:rounding:))

# init(\_:rounding:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new vector from the given vector, rounding the given vector’s of elements using the specified rounding rule.

## Declaration

```swift
init<Other>(_ other: SIMD8<Other>, rounding rule: FloatingPointRoundingRule = .towardZero) where Other : BinaryFloatingPoint, Other : SIMDScalar
```

## Parameters

- `other`: The vector to convert.
- `rule`: The round rule to use when converting elements of `other.` The default is `.towardZero`.
