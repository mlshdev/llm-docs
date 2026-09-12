> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint128/binaryinteger-implementations](https://developer.apple.com/documentation/swift/uint128/binaryinteger-implementations)

# BinaryInteger Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Structures

- [UInt128.Words](words-swift.struct.md): A type that represents the words of a binary integer.

### Operators

- [!=(\_:\_:)](!=%28____%29-9eyev.md): Returns a Boolean value indicating whether the two given values are not equal.
- [&(\_:\_:)](&%28____%29.md): Returns the result of performing a bitwise AND operation on the two given values.
- [&=(\_:\_:)](&=%28____%29.md): Stores the result of performing a bitwise AND operation on the two given values in the left-hand-side variable.
- [==(\_:\_:)](==%28____%29-4hd8l.md): Returns a Boolean value indicating whether the two given values are equal.
- [^(\_:\_:)](_%28____%29-1bfdp.md): Returns the result of performing a bitwise XOR operation on the two given values.
- [\<(\_:\_:)](_%28____%29-3fwln.md): Returns a Boolean value indicating whether the value of the first argument is less than that of the second argument.
- [%(\_:\_:)](_%28____%29-3t4ck.md): Returns the remainder of dividing the first value by the second.
- [\>(\_:\_:)](_%28____%29-41n11.md)
- [/(\_:\_:)](_%28____%29-4hvzy.md): Returns the quotient of dividing the first value by the second.
- [\>(\_:\_:)](_%28____%29-8enxk.md): Returns a Boolean value indicating whether the value of the first argument is greater than that of the second argument.
- [|(\_:\_:)](_%28____%29-k8pw.md): Returns the result of performing a bitwise OR operation on the two given values.
- [\>=(\_:\_:)](_=%28____%29-1t601.md): Returns a Boolean value indicating whether the value of the first argument is greater than or equal to that of the second argument.
- [\>=(\_:\_:)](_=%28____%29-36npw.md)
- [\<=(\_:\_:)](_=%28____%29-3wmkz.md): Returns a Boolean value indicating whether the value of the first argument is less than or equal to that of the second argument.
- [^=(\_:\_:)](_=%28____%29-4j7m1.md): Stores the result of performing a bitwise XOR operation on the two given values in the left-hand-side variable.
- [/=(\_:\_:)](_=%28____%29-6xh2i.md): Divides the first value by the second and stores the quotient in the left-hand-side variable.
- [%=(\_:\_:)](_=%28____%29-75khj.md): Divides the first value by the second and stores the remainder in the left-hand-side variable.
- [|=(\_:\_:)](_=%28____%29-8ko9m.md): Stores the result of performing a bitwise OR operation on the two given values in the left-hand-side variable.
- [\<=(\_:\_:)](_=%28____%29-906fm.md)
- [\<\<(\_:\_:)](__%28____%29-3yi94.md): Returns the result of shifting a value’s binary representation the specified number of digits to the left.
- [\<\<(\_:\_:)](__%28____%29-70lq0.md): Returns the result of shifting a value’s binary representation the specified number of digits to the left.
- [\>\>(\_:\_:)](__%28____%29-9qcxu.md): Returns the result of shifting a value’s binary representation the specified number of digits to the right.
- [\>\>(\_:\_:)](__%28____%29-9tjzy.md): Returns the result of shifting a value’s binary representation the specified number of digits to the right.
- [\<\<=(\_:\_:)](__=%28____%29-22e6u.md): Stores the result of shifting a value’s binary representation the specified number of digits to the left in the left-hand-side variable.
- [\>\>=(\_:\_:)](__=%28____%29-6t3cz.md): Stores the result of shifting a value’s binary representation the specified number of digits to the right in the left-hand-side variable.
- [~(\_:)](~%28__%29.md): Returns the inverse of the bits set in the argument.

### Initializers

- [init()](init%28%29.md): Creates a new value equal to zero.
- [init(\_:)](init%28__%29-2b08e.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](init%28__%29-luvl.md): Creates a new instance from the given integer.
- [init(clamping:)](init%28clamping_%29.md): Creates a new instance with the representable value that’s closest to the given integer.
- [init(clamping:)](init%28clamping_%29-7tt6l.md): Creates a new instance with the representable value that’s closest to the given integer.
- [init(exactly:)](init%28exactly_%29-13dy3.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(truncatingIfNeeded:)](init%28truncatingifneeded_%29.md): Creates a new instance from the bit pattern of the given instance by sign-extending or truncating to fit this type.
- [init(truncatingIfNeeded:)](init%28truncatingifneeded_%29-1xc1t.md): Creates a new instance from the bit pattern of the given instance by sign-extending or truncating to fit this type.

### Instance Properties

- [bitWidth](bitwidth-swift.property.md): The number of bits in the current binary representation of this value.
- [description](description.md): A textual representation of this value.
- [trailingZeroBitCount](trailingzerobitcount.md): The number of trailing zeros in this value’s binary representation.
- [words](words-swift.property.md): A collection containing the words of this value’s binary representation, in order from the least significant to most significant.

### Instance Methods

- [advanced(by:)](advanced%28by_%29.md): Returns a value that is offset the specified distance from this value.
- [distance(to:)](distance%28to_%29.md): Returns the distance from this value to the given value, expressed as a stride.
- [isMultiple(of:)](ismultiple%28of_%29.md): Returns `true` if this value is a multiple of the given value, and `false` otherwise.
- [quotientAndRemainder(dividingBy:)](quotientandremainder%28dividingby_%29.md): Returns the quotient and remainder of this value divided by the given value.
- [signum()](signum%28%29.md): Returns `-1` if this value is negative and `1` if it’s positive; otherwise, `0`.
