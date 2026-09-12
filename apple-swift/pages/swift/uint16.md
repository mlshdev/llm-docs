> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint16](https://developer.apple.com/documentation/swift/uint16)

# UInt16

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A 16-bit unsigned integer value type.

## Declaration

```swift
@frozen struct UInt16
```

## Topics

### Structures

- [UInt16.Words](uint16/words-swift.struct.md): A type that represents the words of this integer.

### Operators

- [!=(\_:\_:)](uint16/!=%28____%29.md)
- [&=(\_:\_:)](uint16/&=%28____%29.md): Stores the result of performing a bitwise AND operation on the two given values in the left-hand-side variable.
- [&\<\<=(\_:\_:)](uint16/&__=%28____%29-4uh81.md): Returns the result of shifting a value’s binary representation the specified number of digits to the left, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.
- [&\>\>=(\_:\_:)](uint16/&__=%28____%29-54gew.md): Calculates the result of shifting a value’s binary representation the specified number of digits to the right, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.
- [\*=(\_:\_:)](uint16/_=%28____%29.md): Multiplies two values and stores the result in the left-hand-side variable.
- [+=(\_:\_:)](uint16/+=%28____%29.md): Adds two values and stores the result in the left-hand-side variable.
- [-=(\_:\_:)](uint16/-=%28____%29.md): Subtracts the second value from the first and stores the difference in the left-hand-side variable.
- [==(\_:\_:)](uint16/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.
- [\<(\_:\_:)](uint16/_%28____%29-9tmro.md): Returns a Boolean value indicating whether the value of the first argument is less than that of the second argument.
- [|=(\_:\_:)](uint16/_=%28____%29-2tboh.md): Stores the result of performing a bitwise OR operation on the two given values in the left-hand-side variable.
- [%=(\_:\_:)](uint16/_=%28____%29-5c5xh.md): Divides the first value by the second and stores the remainder in the left-hand-side variable.
- [/=(\_:\_:)](uint16/_=%28____%29-7gmk4.md): Divides the first value by the second and stores the quotient in the left-hand-side variable.
- [^=(\_:\_:)](uint16/_=%28____%29-7q4om.md): Stores the result of performing a bitwise XOR operation on the two given values in the left-hand-side variable.

### Initializers

- [init(\_:)](uint16/init%28__%29-1x3ws.md)
- [init(\_:)](uint16/init%28__%29-2gsqf.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](uint16/init%28__%29-5vkwt.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](uint16/init%28__%29-67c9u.md): Deprecated.
- [init(\_:)](uint16/init%28__%29-754ls.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](uint16/init%28__%29-8jre.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(bitPattern:)](uint16/init%28bitpattern_%29.md): Creates a new instance with the same memory representation as the given value.
- [init(exactly:)](uint16/init%28exactly_%29-1l0o7.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](uint16/init%28exactly_%29-1n42w.md)
- [init(exactly:)](uint16/init%28exactly_%29-3qv86.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](uint16/init%28exactly_%29-4ljt.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](uint16/init%28exactly_%29-8jto3.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(truncating:)](uint16/init%28truncating_%29.md)

### Instance Properties

- [byteSwapped](uint16/byteswapped.md): A representation of this integer with the byte order swapped.
- [customPlaygroundQuickLook](uint16/customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `UInt16` instance.
- [leadingZeroBitCount](uint16/leadingzerobitcount.md): The number of leading zeros in this value’s binary representation.
- [nonzeroBitCount](uint16/nonzerobitcount.md): The number of bits equal to 1 in this value’s binary representation.
- [trailingZeroBitCount](uint16/trailingzerobitcount.md): The number of trailing zeros in this value’s binary representation.
- [words](uint16/words-swift.property.md): A collection containing the words of this value’s binary representation, in order from the least significant to most significant.

### Instance Methods

- [addingReportingOverflow(\_:)](uint16/addingreportingoverflow%28__%29.md): Returns the sum of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [dividedReportingOverflow(by:)](uint16/dividedreportingoverflow%28by_%29.md): Returns the quotient obtained by dividing this value by the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [dividingFullWidth(\_:)](uint16/dividingfullwidth%28__%29.md): Returns a tuple containing the quotient and remainder of dividing the given value by this value.
- [multipliedFullWidth(by:)](uint16/multipliedfullwidth%28by_%29.md): Returns a tuple containing the high and low parts of the result of multiplying this value by the given value.
- [multipliedReportingOverflow(by:)](uint16/multipliedreportingoverflow%28by_%29.md): Returns the product of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [remainderReportingOverflow(dividingBy:)](uint16/remainderreportingoverflow%28dividingby_%29.md): Returns the remainder after dividing this value by the given value, along with a Boolean value indicating whether overflow occurred during division.
- [signum()](uint16/signum%28%29.md): Returns `-1` if this value is negative and `1` if it’s positive; otherwise, `0`.
- [subtractingReportingOverflow(\_:)](uint16/subtractingreportingoverflow%28__%29.md): Returns the difference obtained by subtracting the given value from this value, along with a Boolean value indicating whether overflow occurred in the operation.

### Type Aliases

- [UInt16.IntegerLiteralType](uint16/integerliteraltype.md): A type that represents an integer literal.
- [UInt16.Magnitude](uint16/magnitude.md): A type that can represent the absolute value of any possible value of this type.
- [UInt16.Stride](uint16/stride.md): A type that represents the distance between two values.

### Type Properties

- [bitWidth](uint16/bitwidth.md): The number of bits used for the underlying binary representation of values of this type.

### Default Implementations

- [AdditiveArithmetic Implementations](uint16/additivearithmetic-implementations.md)
- [AtomicRepresentable Implementations](uint16/atomicrepresentable-implementations.md)
- [BinaryInteger Implementations](uint16/binaryinteger-implementations.md)
- [Comparable Implementations](uint16/comparable-implementations.md)
- [CustomReflectable Implementations](uint16/customreflectable-implementations.md)
- [Decodable Implementations](uint16/decodable-implementations.md)
- [Encodable Implementations](uint16/encodable-implementations.md)
- [Equatable Implementations](uint16/equatable-implementations.md)
- [ExpressibleByIntegerLiteral Implementations](uint16/expressiblebyintegerliteral-implementations.md)
- [FixedWidthInteger Implementations](uint16/fixedwidthinteger-implementations.md)
- [Hashable Implementations](uint16/hashable-implementations.md)
- [SIMDScalar Implementations](uint16/simdscalar-implementations.md)
- [UnsignedInteger Implementations](uint16/unsignedinteger-implementations.md)

## Relationships

### Conforms To

- [AdditiveArithmetic](additivearithmetic.md)
- [AtomicRepresentable](../synchronization/atomicrepresentable.md)
- [BNNSScalar](https://developer.apple.com/documentation/accelerate/bnnsscalar)
- [BinaryInteger](binaryinteger.md)
- [BitwiseCopyable](bitwisecopyable.md)
- [CKRecordValueProtocol](https://developer.apple.com/documentation/cloudkit/ckrecordvalueprotocol)
- [CVAttachmentValueRepresentable](https://developer.apple.com/documentation/corevideo/cvattachmentvaluerepresentable)
- [CVarArg](cvararg.md)
- [Comparable](comparable.md)
- [ConvertibleFromBytes](convertiblefrombytes.md)
- [ConvertibleToBytes](convertibletobytes.md)
- [Copyable](copyable.md)
- [CustomReflectable](customreflectable.md)
- [CustomStringConvertible](customstringconvertible.md)
- [Decodable](decodable.md)
- [Encodable](encodable.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [ExpressibleByIntegerLiteral](expressiblebyintegerliteral.md)
- [FixedWidthInteger](fixedwidthinteger.md)
- [Hashable](hashable.md)
- [LosslessStringConvertible](losslessstringconvertible.md)
- [MLTensorScalar](https://developer.apple.com/documentation/coreml/mltensorscalar)
- [NetworkFixedWidthInteger](https://developer.apple.com/documentation/network/networkfixedwidthinteger)
- [Numeric](numeric.md)
- [Plottable](https://developer.apple.com/documentation/charts/plottable)
- [PrimitivePlottableProtocol](https://developer.apple.com/documentation/charts/primitiveplottableprotocol)
- [SIMDScalar](simdscalar.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [Strideable](strideable.md)
- [UnsignedInteger](unsignedinteger.md)
- [vDSP_IntegerConvertable](https://developer.apple.com/documentation/accelerate/vdsp_integerconvertable)

## See Also

### Unsigned Integers

- [UInt](uint.md): An unsigned integer value type.
- [UInt8](uint8.md): An 8-bit unsigned integer value type.
- [UInt32](uint32.md): A 32-bit unsigned integer value type.
- [UInt64](uint64.md): A 64-bit unsigned integer value type.
- [UInt128](uint128.md): A 128-bit unsigned integer value type.
