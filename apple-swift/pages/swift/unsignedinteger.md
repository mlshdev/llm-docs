> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsignedinteger](https://developer.apple.com/documentation/swift/unsignedinteger)

# UnsignedInteger

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An integer type that can represent only nonnegative values.

## Declaration

```swift
protocol UnsignedInteger : BinaryInteger
```

## Topics

### Instance Methods

- [dividingFullWidth(\_:)](unsignedinteger/dividingfullwidth%28__%29.md): Conforms when `Self` conforms to `FixedWidthInteger`.

### Type Properties

- [max](unsignedinteger/max.md): Conforms when `Self` conforms to `FixedWidthInteger`. The maximum representable integer in this type.
- [min](unsignedinteger/min.md): Conforms when `Self` conforms to `FixedWidthInteger`. The minimum representable integer in this type.

## Relationships

### Inherits From

- [AdditiveArithmetic](additivearithmetic.md)
- [BinaryInteger](binaryinteger.md)
- [Comparable](comparable.md)
- [CustomStringConvertible](customstringconvertible.md)
- [Equatable](equatable.md)
- [ExpressibleByIntegerLiteral](expressiblebyintegerliteral.md)
- [Hashable](hashable.md)
- [Numeric](numeric.md)
- [Strideable](strideable.md)

### Conforming Types

- [UInt](uint.md)
- [UInt128](uint128.md)
- [UInt16](uint16.md)
- [UInt32](uint32.md)
- [UInt64](uint64.md)
- [UInt8](uint8.md)

## See Also

### Integer

- [BinaryInteger](binaryinteger.md): An integer type with a binary representation.
- [FixedWidthInteger](fixedwidthinteger.md): An integer type that uses a fixed size for every instance.
- [SignedInteger](signedinteger.md): An integer type that can represent both positive and negative values.
