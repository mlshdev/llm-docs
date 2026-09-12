> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint8](https://developer.apple.com/documentation/swift/uint8)

# UInt8

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An 8-bit unsigned integer value type.

## Declaration

```swift
@frozen struct UInt8
```

## Topics

### Structures

- [UInt8.Words](uint8/words-swift.struct.md): A type that represents the words of this integer.

### Operators

- [!=(\_:\_:)](uint8/!=%28____%29.md)
- [&=(\_:\_:)](uint8/&=%28____%29.md): Stores the result of performing a bitwise AND operation on the two given values in the left-hand-side variable.
- [&\>\>=(\_:\_:)](uint8/&__=%28____%29-172l7.md): Calculates the result of shifting a value’s binary representation the specified number of digits to the right, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.
- [&\<\<=(\_:\_:)](uint8/&__=%28____%29-5wuaw.md): Returns the result of shifting a value’s binary representation the specified number of digits to the left, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.
- [\*=(\_:\_:)](uint8/_=%28____%29.md): Multiplies two values and stores the result in the left-hand-side variable.
- [+=(\_:\_:)](uint8/+=%28____%29.md): Adds two values and stores the result in the left-hand-side variable.
- [-=(\_:\_:)](uint8/-=%28____%29.md): Subtracts the second value from the first and stores the difference in the left-hand-side variable.
- [==(\_:\_:)](uint8/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.
- [\<(\_:\_:)](uint8/_%28____%29-140g8.md): Returns a Boolean value indicating whether the value of the first argument is less than that of the second argument.
- [%=(\_:\_:)](uint8/_=%28____%29-12hmo.md): Divides the first value by the second and stores the remainder in the left-hand-side variable.
- [^=(\_:\_:)](uint8/_=%28____%29-23lmz.md): Stores the result of performing a bitwise XOR operation on the two given values in the left-hand-side variable.
- [|=(\_:\_:)](uint8/_=%28____%29-56yu9.md): Stores the result of performing a bitwise OR operation on the two given values in the left-hand-side variable.
- [/=(\_:\_:)](uint8/_=%28____%29-7a5f0.md): Divides the first value by the second and stores the quotient in the left-hand-side variable.

### Initializers

- [init(\_:)](uint8/init%28__%29-4e13y.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](uint8/init%28__%29-535b5.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](uint8/init%28__%29-8f7wu.md)
- [init(\_:)](uint8/init%28__%29-8hqkq.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](uint8/init%28__%29-ey6q.md): Deprecated.
- [init(\_:)](uint8/init%28__%29-qdzq.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(ascii:)](uint8/init%28ascii_%29.md): Construct with value `v.value`.
- [init(bitPattern:)](uint8/init%28bitpattern_%29.md): Creates a new instance with the same memory representation as the given value.
- [init(exactly:)](uint8/init%28exactly_%29-1ljfr.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](uint8/init%28exactly_%29-3la4a.md)
- [init(exactly:)](uint8/init%28exactly_%29-4mc0a.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](uint8/init%28exactly_%29-7wsjq.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](uint8/init%28exactly_%29-8rr3e.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(truncating:)](uint8/init%28truncating_%29.md)

### Instance Properties

- [byteSwapped](uint8/byteswapped.md): A representation of this integer with the byte order swapped.
- [customPlaygroundQuickLook](uint8/customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `UInt8` instance.
- [leadingZeroBitCount](uint8/leadingzerobitcount.md): The number of leading zeros in this value’s binary representation.
- [nonzeroBitCount](uint8/nonzerobitcount.md): The number of bits equal to 1 in this value’s binary representation.
- [trailingZeroBitCount](uint8/trailingzerobitcount.md): The number of trailing zeros in this value’s binary representation.
- [words](uint8/words-swift.property.md): A collection containing the words of this value’s binary representation, in order from the least significant to most significant.

### Instance Methods

- [addingReportingOverflow(\_:)](uint8/addingreportingoverflow%28__%29.md): Returns the sum of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [dividedReportingOverflow(by:)](uint8/dividedreportingoverflow%28by_%29.md): Returns the quotient obtained by dividing this value by the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [dividingFullWidth(\_:)](uint8/dividingfullwidth%28__%29.md): Returns a tuple containing the quotient and remainder of dividing the given value by this value.
- [multipliedFullWidth(by:)](uint8/multipliedfullwidth%28by_%29.md): Returns a tuple containing the high and low parts of the result of multiplying this value by the given value.
- [multipliedReportingOverflow(by:)](uint8/multipliedreportingoverflow%28by_%29.md): Returns the product of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [remainderReportingOverflow(dividingBy:)](uint8/remainderreportingoverflow%28dividingby_%29.md): Returns the remainder after dividing this value by the given value, along with a Boolean value indicating whether overflow occurred during division.
- [signum()](uint8/signum%28%29.md): Returns `-1` if this value is negative and `1` if it’s positive; otherwise, `0`.
- [subtractingReportingOverflow(\_:)](uint8/subtractingreportingoverflow%28__%29.md): Returns the difference obtained by subtracting the given value from this value, along with a Boolean value indicating whether overflow occurred in the operation.

### Type Aliases

- [UInt8.IntegerLiteralType](uint8/integerliteraltype.md): A type that represents an integer literal.
- [UInt8.Magnitude](uint8/magnitude.md): A type that can represent the absolute value of any possible value of this type.
- [UInt8.Stride](uint8/stride.md): A type that represents the distance between two values.

### Type Properties

- [bitWidth](uint8/bitwidth.md): The number of bits used for the underlying binary representation of values of this type.

### Default Implementations

- [AdditiveArithmetic Implementations](uint8/additivearithmetic-implementations.md)
- [AtomicRepresentable Implementations](uint8/atomicrepresentable-implementations.md)
- [BinaryInteger Implementations](uint8/binaryinteger-implementations.md)
- [Comparable Implementations](uint8/comparable-implementations.md)
- [CustomReflectable Implementations](uint8/customreflectable-implementations.md)
- [Decodable Implementations](uint8/decodable-implementations.md)
- [Encodable Implementations](uint8/encodable-implementations.md)
- [Equatable Implementations](uint8/equatable-implementations.md)
- [ExpressibleByIntegerLiteral Implementations](uint8/expressiblebyintegerliteral-implementations.md)
- [FixedWidthInteger Implementations](uint8/fixedwidthinteger-implementations.md)
- [Hashable Implementations](uint8/hashable-implementations.md)
- [SIMDScalar Implementations](uint8/simdscalar-implementations.md)
- [UnsignedInteger Implementations](uint8/unsignedinteger-implementations.md)

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
- [USDPrim.Attribute.Value](https://developer.apple.com/documentation/usdkit/usdprim/attribute/value)
- [USDStage.Object.MetadataValue](https://developer.apple.com/documentation/usdkit/usdstage/object/metadatavalue)
- [USDValueProtocol](https://developer.apple.com/documentation/usdkit/usdvalueprotocol)
- [UnsignedInteger](unsignedinteger.md)
- [vDSP_IntegerConvertable](https://developer.apple.com/documentation/accelerate/vdsp_integerconvertable)

## See Also

### Unsigned Integers

- [UInt](uint.md): An unsigned integer value type.
- [UInt16](uint16.md): A 16-bit unsigned integer value type.
- [UInt32](uint32.md): A 32-bit unsigned integer value type.
- [UInt64](uint64.md): A 64-bit unsigned integer value type.
- [UInt128](uint128.md): A 128-bit unsigned integer value type.
