> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/binaryfloatingpoint-implementations](https://developer.apple.com/documentation/swift/float80/binaryfloatingpoint-implementations)

# BinaryFloatingPoint Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Initializers

- [init(\_:)](init%28__%29-4rh2n.md): Creates a new instance that approximates the given value.
- [init(\_:)](init%28__%29-5jn4i.md): Creates a new instance that approximates the given value.
- [init(\_:)](init%28__%29-5yold.md): Creates a new instance from the given value, rounded to the closest possible representation.
- [init(\_:)](init%28__%29-6dyii.md): Creates a new instance initialized to the given value.
- [init(\_:)](init%28__%29-8p2oa.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Creates a new value, rounded to the closest possible representation.
- [init(exactly:)](init%28exactly_%29-5ggvi.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Creates a new value, if the given integer can be represented exactly.
- [init(exactly:)](init%28exactly_%29-9oml5.md): Creates a new instance from the given value, if it can be represented exactly.
- [init(sign:exponentBitPattern:significandBitPattern:)](init%28sign_exponentbitpattern_significandbitpattern_%29.md): Creates a new instance from the specified sign and bit patterns.

### Instance Properties

- [binade](binade.md): The floating-point value with the same sign and exponent as this value, but with a significand of 1.0.
- [exponentBitPattern](exponentbitpattern.md): The raw encoding of the value’s exponent field.
- [significandBitPattern](significandbitpattern.md): The raw encoding of the value’s significand field.
- [significandWidth](significandwidth.md): The number of bits required to represent the value’s significand.

### Type Aliases

- [Float80.RawExponent](rawexponent.md): A type that represents the encoded exponent of a value.
- [Float80.RawSignificand](rawsignificand.md): A type that represents the encoded significand of a value.

### Type Properties

- [exponentBitCount](exponentbitcount.md): The number of bits used to represent the type’s exponent.
- [significandBitCount](significandbitcount.md): The available number of fractional significand bits.

### Type Methods

- [random(in:)](random%28in_%29-3nivi.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range.
- [random(in:)](random%28in_%29-5zpax.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range.
- [random(in:using:)](random%28in_using_%29-2llvb.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range, using the given generator as a source for randomness.
- [random(in:using:)](random%28in_using_%29-lxqd.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range, using the given generator as a source for randomness.
