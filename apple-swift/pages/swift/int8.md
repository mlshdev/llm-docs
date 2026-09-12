> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int8](https://developer.apple.com/documentation/swift/int8)

# Int8

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An 8-bit signed integer value type.

## Declaration

```swift
@frozen struct Int8
```

## Topics

### Structures

- [Int8.Words](int8/words-swift.struct.md): A type that represents the words of this integer.

### Operators

- [!=(\_:\_:)](int8/!=%28____%29.md)
- [&=(\_:\_:)](int8/&=%28____%29.md): Stores the result of performing a bitwise AND operation on the two given values in the left-hand-side variable.
- [&\>\>=(\_:\_:)](int8/&__=%28____%29-17e9w.md): Calculates the result of shifting a value’s binary representation the specified number of digits to the right, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.
- [&\<\<=(\_:\_:)](int8/&__=%28____%29-7gdrc.md): Returns the result of shifting a value’s binary representation the specified number of digits to the left, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.
- [\*=(\_:\_:)](int8/_=%28____%29.md): Multiplies two values and stores the result in the left-hand-side variable.
- [+=(\_:\_:)](int8/+=%28____%29.md): Adds two values and stores the result in the left-hand-side variable.
- [-=(\_:\_:)](int8/-=%28____%29.md): Subtracts the second value from the first and stores the difference in the left-hand-side variable.
- [==(\_:\_:)](int8/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.
- [\<(\_:\_:)](int8/_%28____%29-1kdfe.md): Returns a Boolean value indicating whether the value of the first argument is less than that of the second argument.
- [|=(\_:\_:)](int8/_=%28____%29-19gzu.md): Stores the result of performing a bitwise OR operation on the two given values in the left-hand-side variable.
- [/=(\_:\_:)](int8/_=%28____%29-2auqb.md): Divides the first value by the second and stores the quotient in the left-hand-side variable.
- [^=(\_:\_:)](int8/_=%28____%29-2mpgr.md): Stores the result of performing a bitwise XOR operation on the two given values in the left-hand-side variable.
- [%=(\_:\_:)](int8/_=%28____%29-3o9cs.md): Divides the first value by the second and stores the remainder in the left-hand-side variable.

### Initializers

- [init(\_:)](int8/init%28__%29-2vdru.md)
- [init(\_:)](int8/init%28__%29-44cer.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](int8/init%28__%29-47zy8.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](int8/init%28__%29-4erk2.md): Deprecated.
- [init(\_:)](int8/init%28__%29-6g8q9.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](int8/init%28__%29-7renq.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(bitPattern:)](int8/init%28bitpattern_%29.md): Creates a new instance with the same memory representation as the given value.
- [init(exactly:)](int8/init%28exactly_%29-1vh5j.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](int8/init%28exactly_%29-6zkv6.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](int8/init%28exactly_%29-72z4.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](int8/init%28exactly_%29-78es1.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](int8/init%28exactly_%29-9cjj7.md)
- [init(truncating:)](int8/init%28truncating_%29.md)

### Instance Properties

- [byteSwapped](int8/byteswapped.md): A representation of this integer with the byte order swapped.
- [customPlaygroundQuickLook](int8/customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `Int8` instance.
- [leadingZeroBitCount](int8/leadingzerobitcount.md): The number of leading zeros in this value’s binary representation.
- [magnitude](int8/magnitude-swift.property.md): The magnitude of this value.
- [nonzeroBitCount](int8/nonzerobitcount.md): The number of bits equal to 1 in this value’s binary representation.
- [trailingZeroBitCount](int8/trailingzerobitcount.md): The number of trailing zeros in this value’s binary representation.
- [words](int8/words-swift.property.md): A collection containing the words of this value’s binary representation, in order from the least significant to most significant.

### Instance Methods

- [addingReportingOverflow(\_:)](int8/addingreportingoverflow%28__%29.md): Returns the sum of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [dividedReportingOverflow(by:)](int8/dividedreportingoverflow%28by_%29.md): Returns the quotient obtained by dividing this value by the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [dividingFullWidth(\_:)](int8/dividingfullwidth%28__%29.md): Returns a tuple containing the quotient and remainder of dividing the given value by this value.
- [multipliedFullWidth(by:)](int8/multipliedfullwidth%28by_%29.md): Returns a tuple containing the high and low parts of the result of multiplying this value by the given value.
- [multipliedReportingOverflow(by:)](int8/multipliedreportingoverflow%28by_%29.md): Returns the product of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [remainderReportingOverflow(dividingBy:)](int8/remainderreportingoverflow%28dividingby_%29.md): Returns the remainder after dividing this value by the given value, along with a Boolean value indicating whether overflow occurred during division.
- [signum()](int8/signum%28%29.md): Returns `-1` if this value is negative and `1` if it’s positive; otherwise, `0`.
- [subtractingReportingOverflow(\_:)](int8/subtractingreportingoverflow%28__%29.md): Returns the difference obtained by subtracting the given value from this value, along with a Boolean value indicating whether overflow occurred in the operation.

### Type Aliases

- [Int8.IntegerLiteralType](int8/integerliteraltype.md): A type that represents an integer literal.
- [Int8.Magnitude](int8/magnitude-swift.typealias.md): A type that can represent the absolute value of any possible value of this type.
- [Int8.Stride](int8/stride.md): A type that represents the distance between two values.

### Type Properties

- [bitWidth](int8/bitwidth.md): The number of bits used for the underlying binary representation of values of this type.

### Default Implementations

- [AdditiveArithmetic Implementations](int8/additivearithmetic-implementations.md)
- [AtomicRepresentable Implementations](int8/atomicrepresentable-implementations.md)
- [BinaryInteger Implementations](int8/binaryinteger-implementations.md)
- [Comparable Implementations](int8/comparable-implementations.md)
- [CustomReflectable Implementations](int8/customreflectable-implementations.md)
- [Decodable Implementations](int8/decodable-implementations.md)
- [Encodable Implementations](int8/encodable-implementations.md)
- [Equatable Implementations](int8/equatable-implementations.md)
- [ExpressibleByIntegerLiteral Implementations](int8/expressiblebyintegerliteral-implementations.md)
- [FixedWidthInteger Implementations](int8/fixedwidthinteger-implementations.md)
- [Hashable Implementations](int8/hashable-implementations.md)
- [SIMDScalar Implementations](int8/simdscalar-implementations.md)
- [SignedInteger Implementations](int8/signedinteger-implementations.md)
- [SignedNumeric Implementations](int8/signednumeric-implementations.md)

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
- [IntentValueConvertible](https://developer.apple.com/documentation/appintents/intentvalueconvertible)
- [IntentValueExpressing](https://developer.apple.com/documentation/appintents/intentvalueexpressing)
- [LosslessStringConvertible](losslessstringconvertible.md)
- [MLShapedArrayScalar](https://developer.apple.com/documentation/coreml/mlshapedarrayscalar)
- [MLTensorScalar](https://developer.apple.com/documentation/coreml/mltensorscalar)
- [NetworkFixedWidthInteger](https://developer.apple.com/documentation/network/networkfixedwidthinteger)
- [Numeric](numeric.md)
- [Plottable](https://developer.apple.com/documentation/charts/plottable)
- [PrimitivePlottableProtocol](https://developer.apple.com/documentation/charts/primitiveplottableprotocol)
- [SIMDScalar](simdscalar.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [SignedInteger](signedinteger.md)
- [SignedNumeric](signednumeric.md)
- [Strideable](strideable.md)
- [USDValueProtocol](https://developer.apple.com/documentation/usdkit/usdvalueprotocol)
- [vDSP_IntegerConvertable](https://developer.apple.com/documentation/accelerate/vdsp_integerconvertable)

## See Also

### Signed Integers

- [Int16](int16.md): A 16-bit signed integer value type.
- [Int32](int32.md): A 32-bit signed integer value type.
- [Int64](int64.md): A 64-bit signed integer value type.
- [Int128](int128.md): A 128-bit signed integer value type.
