> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd8/init(_:)-8ko8m](https://developer.apple.com/documentation/swift/simd8/init(_:)-8ko8m)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new vector from the given vector of integers.

## Declaration

```swift
init<Other>(_ other: SIMD8<Other>) where Other : FixedWidthInteger, Other : SIMDScalar
```

## Parameters

- `other`: The vector to convert.
