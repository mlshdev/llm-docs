> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint32](https://developer.apple.com/documentation/swift/uint32)

# UInt32

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A 32-bit unsigned integer value type.

## Declaration

```swift
@frozen struct UInt32
```

## Topics

### Structures

- [UInt32.Words](uint32/words-swift.struct.md): A type that represents the words of this integer.

### Operators

- [!=(\_:\_:)](uint32/!=%28____%29.md)
- [&=(\_:\_:)](uint32/&=%28____%29.md): Stores the result of performing a bitwise AND operation on the two given values in the left-hand-side variable.
- [&\<\<=(\_:\_:)](uint32/&__=%28____%29-1qp80.md): Returns the result of shifting a value’s binary representation the specified number of digits to the left, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.
- [&\>\>=(\_:\_:)](uint32/&__=%28____%29-92fyx.md): Calculates the result of shifting a value’s binary representation the specified number of digits to the right, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.
- [\*=(\_:\_:)](uint32/_=%28____%29.md): Multiplies two values and stores the result in the left-hand-side variable.
- [+=(\_:\_:)](uint32/+=%28____%29.md): Adds two values and stores the result in the left-hand-side variable.
- [-=(\_:\_:)](uint32/-=%28____%29.md): Subtracts the second value from the first and stores the difference in the left-hand-side variable.
- [==(\_:\_:)](uint32/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.
- [\<(\_:\_:)](uint32/_%28____%29-3r38p.md): Returns a Boolean value indicating whether the value of the first argument is less than that of the second argument.
- [|=(\_:\_:)](uint32/_=%28____%29-4hx1l.md): Stores the result of performing a bitwise OR operation on the two given values in the left-hand-side variable.
- [%=(\_:\_:)](uint32/_=%28____%29-6w0fj.md): Divides the first value by the second and stores the remainder in the left-hand-side variable.
- [/=(\_:\_:)](uint32/_=%28____%29-8galu.md): Divides the first value by the second and stores the quotient in the left-hand-side variable.
- [^=(\_:\_:)](uint32/_=%28____%29-8vgdn.md): Stores the result of performing a bitwise XOR operation on the two given values in the left-hand-side variable.

### Initializers

- [init(\_:)](uint32/init%28__%29-1on5r.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](uint32/init%28__%29-2w61y.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](uint32/init%28__%29-42ptx.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](uint32/init%28__%29-6tczc.md): Construct with value `v.value`.
- [init(\_:)](uint32/init%28__%29-8t1sw.md)
- [init(\_:)](uint32/init%28__%29-8xnzx.md): Deprecated.
- [init(\_:)](uint32/init%28__%29-9i7ab.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(bitPattern:)](uint32/init%28bitpattern_%29.md): Creates a new instance with the same memory representation as the given value.
- [init(exactly:)](uint32/init%28exactly_%29-33lic.md)
- [init(exactly:)](uint32/init%28exactly_%29-6lp3v.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](uint32/init%28exactly_%29-7jkyf.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](uint32/init%28exactly_%29-8qhoe.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](uint32/init%28exactly_%29-9c2y8.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(truncating:)](uint32/init%28truncating_%29.md)

### Instance Properties

- [byteSwapped](uint32/byteswapped.md): A representation of this integer with the byte order swapped.
- [customPlaygroundQuickLook](uint32/customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `UInt32` instance.
- [leadingZeroBitCount](uint32/leadingzerobitcount.md): The number of leading zeros in this value’s binary representation.
- [nonzeroBitCount](uint32/nonzerobitcount.md): The number of bits equal to 1 in this value’s binary representation.
- [trailingZeroBitCount](uint32/trailingzerobitcount.md): The number of trailing zeros in this value’s binary representation.
- [words](uint32/words-swift.property.md): A collection containing the words of this value’s binary representation, in order from the least significant to most significant.

### Instance Methods

- [addingReportingOverflow(\_:)](uint32/addingreportingoverflow%28__%29.md): Returns the sum of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [dividedReportingOverflow(by:)](uint32/dividedreportingoverflow%28by_%29.md): Returns the quotient obtained by dividing this value by the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [dividingFullWidth(\_:)](uint32/dividingfullwidth%28__%29.md): Returns a tuple containing the quotient and remainder of dividing the given value by this value.
- [multipliedFullWidth(by:)](uint32/multipliedfullwidth%28by_%29.md): Returns a tuple containing the high and low parts of the result of multiplying this value by the given value.
- [multipliedReportingOverflow(by:)](uint32/multipliedreportingoverflow%28by_%29.md): Returns the product of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [remainderReportingOverflow(dividingBy:)](uint32/remainderreportingoverflow%28dividingby_%29.md): Returns the remainder after dividing this value by the given value, along with a Boolean value indicating whether overflow occurred during division.
- [signum()](uint32/signum%28%29.md): Returns `-1` if this value is negative and `1` if it’s positive; otherwise, `0`.
- [subtractingReportingOverflow(\_:)](uint32/subtractingreportingoverflow%28__%29.md): Returns the difference obtained by subtracting the given value from this value, along with a Boolean value indicating whether overflow occurred in the operation.

### Type Aliases

- [UInt32.IntegerLiteralType](uint32/integerliteraltype.md): A type that represents an integer literal.
- [UInt32.Magnitude](uint32/magnitude.md): A type that can represent the absolute value of any possible value of this type.
- [UInt32.Stride](uint32/stride.md): A type that represents the distance between two values.

### Type Properties

- [bitWidth](uint32/bitwidth.md): The number of bits used for the underlying binary representation of values of this type.

### Default Implementations

- [AdditiveArithmetic Implementations](uint32/additivearithmetic-implementations.md)
- [AtomicRepresentable Implementations](uint32/atomicrepresentable-implementations.md)
- [BinaryInteger Implementations](uint32/binaryinteger-implementations.md)
- [Comparable Implementations](uint32/comparable-implementations.md)
- [CustomReflectable Implementations](uint32/customreflectable-implementations.md)
- [Decodable Implementations](uint32/decodable-implementations.md)
- [Encodable Implementations](uint32/encodable-implementations.md)
- [Equatable Implementations](uint32/equatable-implementations.md)
- [ExpressibleByIntegerLiteral Implementations](uint32/expressiblebyintegerliteral-implementations.md)
- [FixedWidthInteger Implementations](uint32/fixedwidthinteger-implementations.md)
- [Hashable Implementations](uint32/hashable-implementations.md)
- [SIMDScalar Implementations](uint32/simdscalar-implementations.md)
- [UnsignedInteger Implementations](uint32/unsignedinteger-implementations.md)

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
- [UInt8](uint8.md): An 8-bit unsigned integer value type.
- [UInt16](uint16.md): A 16-bit unsigned integer value type.
- [UInt64](uint64.md): A 64-bit unsigned integer value type.
- [UInt128](uint128.md): A 128-bit unsigned integer value type.
