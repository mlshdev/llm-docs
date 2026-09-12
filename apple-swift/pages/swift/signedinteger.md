> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/signedinteger](https://developer.apple.com/documentation/swift/signedinteger)

# SignedInteger

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An integer type that can represent both positive and negative values.

## Declaration

```swift
protocol SignedInteger : BinaryInteger, SignedNumeric
```

## Topics

### Instance Methods

- [dividingFullWidth(\_:)](signedinteger/dividingfullwidth%28__%29.md): Conforms when `Self` conforms to `FixedWidthInteger`.

### Type Properties

- [max](signedinteger/max.md): Conforms when `Self` conforms to `FixedWidthInteger`. The maximum representable integer in this type.
- [min](signedinteger/min.md): Conforms when `Self` conforms to `FixedWidthInteger`. The minimum representable integer in this type.

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
- [SignedNumeric](signednumeric.md)
- [Strideable](strideable.md)

### Conforming Types

- [Int](int.md)
- [Int128](int128.md)
- [Int16](int16.md)
- [Int32](int32.md)
- [Int64](int64.md)
- [Int8](int8.md)

## See Also

### Integer

- [BinaryInteger](binaryinteger.md): An integer type with a binary representation.
- [FixedWidthInteger](fixedwidthinteger.md): An integer type that uses a fixed size for every instance.
- [UnsignedInteger](unsignedinteger.md): An integer type that can represent only nonnegative values.
