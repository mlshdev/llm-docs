> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/binaryfloatingpoint](https://developer.apple.com/documentation/swift/binaryfloatingpoint)

# BinaryFloatingPoint

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A radix-2 (binary) floating-point type.

## Declaration

```swift
protocol BinaryFloatingPoint : ExpressibleByFloatLiteral, FloatingPoint
```

<a id="overview"></a>

## Overview

The `BinaryFloatingPoint` protocol extends the `FloatingPoint` protocol with operations specific to floating-point binary types, as defined by the [IEEE 754 specification](http://ieeexplore.ieee.org/servlet/opac?punumber=4610933). `BinaryFloatingPoint` is implemented in the standard library by `Float`, `Double`, and `Float80` where available.

## Topics

### Converting Floating-Point Values

- [init(\_:)](binaryfloatingpoint/init%28__%29-57jx7.md): Creates a new instance from the given value, rounded to the closest possible representation.
- [init(\_:)](binaryfloatingpoint/init%28__%29-7ft14.md): Creates a new instance from the given value, rounded to the closest possible representation.
- [init(\_:)](binaryfloatingpoint/init%28__%29-1nijh.md): Creates a new instance from the given value, rounded to the closest possible representation.
- [init(\_:)](binaryfloatingpoint/init%28__%29-shau.md): Creates a new instance from the given value, rounded to the closest possible representation.

### Converting with No Loss of Precision

- [init(exactly:)](binaryfloatingpoint/init%28exactly_%29.md): Creates a new instance from the given value, if it can be represented exactly.

### Creating a Random Value

- [random(in:)](binaryfloatingpoint/random%28in_%29-2j16p.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range.
- [random(in:)](binaryfloatingpoint/random%28in_%29-8jkjb.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range.
- [random(in:using:)](binaryfloatingpoint/random%28in_using_%29-6pf7f.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range, using the given generator as a source for randomness.
- [random(in:using:)](binaryfloatingpoint/random%28in_using_%29-2awm8.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range, using the given generator as a source for randomness.

### Working with Binary Representation

- [binade](binaryfloatingpoint/binade.md): The floating-point value with the same sign and exponent as this value, but with a significand of 1.0.
- [exponentBitPattern](binaryfloatingpoint/exponentbitpattern.md): The raw encoding of the value’s exponent field.
- [significandBitPattern](binaryfloatingpoint/significandbitpattern.md): The raw encoding of the value’s significand field.
- [significandWidth](binaryfloatingpoint/significandwidth.md): The number of bits required to represent the value’s significand.
- [exponentBitCount](binaryfloatingpoint/exponentbitcount.md): The number of bits used to represent the type’s exponent.
- [significandBitCount](binaryfloatingpoint/significandbitcount.md): The available number of fractional significand bits.
- [init(sign:exponentBitPattern:significandBitPattern:)](binaryfloatingpoint/init%28sign_exponentbitpattern_significandbitpattern_%29.md): Creates a new instance from the specified sign and bit patterns.
- [RawExponent](binaryfloatingpoint/rawexponent.md): A type that represents the encoded exponent of a value.
- [RawSignificand](binaryfloatingpoint/rawsignificand.md): A type that represents the encoded significand of a value.

### Initializers

- [init(\_:format:lenient:)](binaryfloatingpoint/init%28__format_lenient_%29-166j0.md)
- [init(\_:format:lenient:)](binaryfloatingpoint/init%28__format_lenient_%29-2b9qt.md)
- [init(\_:format:lenient:)](binaryfloatingpoint/init%28__format_lenient_%29-2p118.md): Initialize an instance by parsing `value` with a `ParseStrategy` created with the given `format` and the `lenient` argument.
- [init(\_:strategy:)](binaryfloatingpoint/init%28__strategy_%29-4vta0.md): Initialize an instance by parsing `value` with the given `strategy`.

### Instance Methods

- [formatted()](binaryfloatingpoint/formatted%28%29.md): Format `self` with `FloatingPointFormatStyle()`.
- [formatted(\_:)](binaryfloatingpoint/formatted%28__%29-4ksqj.md): Format `self` with the given format.
- [formatted(\_:)](binaryfloatingpoint/formatted%28__%29-83x4n.md): Format `self` with the given format. `self` is first converted to `S.FormatInput` type, then format with the given format.

### Default Implementations

- [BinaryFloatingPoint Implementations](binaryfloatingpoint/binaryfloatingpoint-implementations.md)

## Relationships

### Inherits From

- [AdditiveArithmetic](additivearithmetic.md)
- [Comparable](comparable.md)
- [Equatable](equatable.md)
- [ExpressibleByFloatLiteral](expressiblebyfloatliteral.md)
- [ExpressibleByIntegerLiteral](expressiblebyintegerliteral.md)
- [FloatingPoint](floatingpoint.md)
- [Hashable](hashable.md)
- [Numeric](numeric.md)
- [SignedNumeric](signednumeric.md)
- [Strideable](strideable.md)

### Conforming Types

- [Double](double.md)
- [Float](float.md)
- [Float16](float16.md)
- [Float80](float80.md)

## See Also

### Floating Point

- [FloatingPoint](floatingpoint.md): A floating-point numeric type.
