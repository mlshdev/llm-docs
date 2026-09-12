> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd32/init(_:)-5imow](https://developer.apple.com/documentation/swift/simd32/init(_:)-5imow)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new vector from the given vector of floating-point values.

## Declaration

```swift
init<Other>(_ other: SIMD32<Other>) where Other : BinaryFloatingPoint, Other : SIMDScalar
```

## Parameters

- `other`: The vector to convert.
