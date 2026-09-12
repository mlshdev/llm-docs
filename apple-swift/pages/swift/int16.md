> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int16](https://developer.apple.com/documentation/swift/int16)

# Int16

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A 16-bit signed integer value type.

## Declaration

```swift
@frozen struct Int16
```

## Topics

### Structures

- [Int16.Words](int16/words-swift.struct.md): A type that represents the words of this integer.

### Operators

- [!=(\_:\_:)](int16/!=%28____%29.md)
- [&=(\_:\_:)](int16/&=%28____%29.md): Stores the result of performing a bitwise AND operation on the two given values in the left-hand-side variable.
- [&\<\<=(\_:\_:)](int16/&__=%28____%29-99pwo.md): Returns the result of shifting a value’s binary representation the specified number of digits to the left, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.
- [&\>\>=(\_:\_:)](int16/&__=%28____%29-p5ty.md): Calculates the result of shifting a value’s binary representation the specified number of digits to the right, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.
- [\*=(\_:\_:)](int16/_=%28____%29.md): Multiplies two values and stores the result in the left-hand-side variable.
- [+=(\_:\_:)](int16/+=%28____%29.md): Adds two values and stores the result in the left-hand-side variable.
- [-=(\_:\_:)](int16/-=%28____%29.md): Subtracts the second value from the first and stores the difference in the left-hand-side variable.
- [==(\_:\_:)](int16/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.
- [\<(\_:\_:)](int16/_%28____%29-47ytd.md): Returns a Boolean value indicating whether the value of the first argument is less than that of the second argument.
- [/=(\_:\_:)](int16/_=%28____%29-15qjk.md): Divides the first value by the second and stores the quotient in the left-hand-side variable.
- [%=(\_:\_:)](int16/_=%28____%29-1zcaj.md): Divides the first value by the second and stores the remainder in the left-hand-side variable.
- [^=(\_:\_:)](int16/_=%28____%29-3hk1a.md): Stores the result of performing a bitwise XOR operation on the two given values in the left-hand-side variable.
- [|=(\_:\_:)](int16/_=%28____%29-9yk6s.md): Stores the result of performing a bitwise OR operation on the two given values in the left-hand-side variable.

### Initializers

- [init(\_:)](int16/init%28__%29-192r7.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](int16/init%28__%29-4h6i5.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](int16/init%28__%29-5r9gw.md)
- [init(\_:)](int16/init%28__%29-6paha.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](int16/init%28__%29-8tp32.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](int16/init%28__%29-9hqpm.md): Deprecated.
- [init(bitPattern:)](int16/init%28bitpattern_%29.md): Creates a new instance with the same memory representation as the given value.
- [init(exactly:)](int16/init%28exactly_%29-1zxj5.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](int16/init%28exactly_%29-3vet0.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](int16/init%28exactly_%29-5zk1.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](int16/init%28exactly_%29-8omg3.md)
- [init(exactly:)](int16/init%28exactly_%29-8v4ka.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(truncating:)](int16/init%28truncating_%29.md)

### Instance Properties

- [byteSwapped](int16/byteswapped.md): A representation of this integer with the byte order swapped.
- [customPlaygroundQuickLook](int16/customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `Int16` instance.
- [leadingZeroBitCount](int16/leadingzerobitcount.md): The number of leading zeros in this value’s binary representation.
- [magnitude](int16/magnitude-swift.property.md): The magnitude of this value.
- [nonzeroBitCount](int16/nonzerobitcount.md): The number of bits equal to 1 in this value’s binary representation.
- [trailingZeroBitCount](int16/trailingzerobitcount.md): The number of trailing zeros in this value’s binary representation.
- [words](int16/words-swift.property.md): A collection containing the words of this value’s binary representation, in order from the least significant to most significant.

### Instance Methods

- [addingReportingOverflow(\_:)](int16/addingreportingoverflow%28__%29.md): Returns the sum of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [dividedReportingOverflow(by:)](int16/dividedreportingoverflow%28by_%29.md): Returns the quotient obtained by dividing this value by the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [dividingFullWidth(\_:)](int16/dividingfullwidth%28__%29.md): Returns a tuple containing the quotient and remainder of dividing the given value by this value.
- [multipliedFullWidth(by:)](int16/multipliedfullwidth%28by_%29.md): Returns a tuple containing the high and low parts of the result of multiplying this value by the given value.
- [multipliedReportingOverflow(by:)](int16/multipliedreportingoverflow%28by_%29.md): Returns the product of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [remainderReportingOverflow(dividingBy:)](int16/remainderreportingoverflow%28dividingby_%29.md): Returns the remainder after dividing this value by the given value, along with a Boolean value indicating whether overflow occurred during division.
- [signum()](int16/signum%28%29.md): Returns `-1` if this value is negative and `1` if it’s positive; otherwise, `0`.
- [subtractingReportingOverflow(\_:)](int16/subtractingreportingoverflow%28__%29.md): Returns the difference obtained by subtracting the given value from this value, along with a Boolean value indicating whether overflow occurred in the operation.

### Type Aliases

- [Int16.IntegerLiteralType](int16/integerliteraltype.md): A type that represents an integer literal.
- [Int16.Magnitude](int16/magnitude-swift.typealias.md): A type that can represent the absolute value of any possible value of this type.
- [Int16.Stride](int16/stride.md): A type that represents the distance between two values.

### Type Properties

- [bitWidth](int16/bitwidth.md): The number of bits used for the underlying binary representation of values of this type.

### Default Implementations

- [AdditiveArithmetic Implementations](int16/additivearithmetic-implementations.md)
- [AtomicRepresentable Implementations](int16/atomicrepresentable-implementations.md)
- [BinaryInteger Implementations](int16/binaryinteger-implementations.md)
- [Comparable Implementations](int16/comparable-implementations.md)
- [CustomReflectable Implementations](int16/customreflectable-implementations.md)
- [Decodable Implementations](int16/decodable-implementations.md)
- [Encodable Implementations](int16/encodable-implementations.md)
- [Equatable Implementations](int16/equatable-implementations.md)
- [ExpressibleByIntegerLiteral Implementations](int16/expressiblebyintegerliteral-implementations.md)
- [FixedWidthInteger Implementations](int16/fixedwidthinteger-implementations.md)
- [Hashable Implementations](int16/hashable-implementations.md)
- [SIMDScalar Implementations](int16/simdscalar-implementations.md)
- [SignedInteger Implementations](int16/signedinteger-implementations.md)
- [SignedNumeric Implementations](int16/signednumeric-implementations.md)

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
- [vDSP_IntegerConvertable](https://developer.apple.com/documentation/accelerate/vdsp_integerconvertable)

## See Also

### Signed Integers

- [Int8](int8.md): An 8-bit signed integer value type.
- [Int32](int32.md): A 32-bit signed integer value type.
- [Int64](int64.md): A 64-bit signed integer value type.
- [Int128](int128.md): A 128-bit signed integer value type.
