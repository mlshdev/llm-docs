> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int32](https://developer.apple.com/documentation/swift/int32)

# Int32

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A 32-bit signed integer value type.

## Declaration

```swift
@frozen struct Int32
```

## Topics

### Structures

- [Int32.Words](int32/words-swift.struct.md): A type that represents the words of this integer.

### Operators

- [!=(\_:\_:)](int32/!=%28____%29.md)
- [&=(\_:\_:)](int32/&=%28____%29.md): Stores the result of performing a bitwise AND operation on the two given values in the left-hand-side variable.
- [&\<\<=(\_:\_:)](int32/&__=%28____%29-5xpt1.md): Returns the result of shifting a value’s binary representation the specified number of digits to the left, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.
- [&\>\>=(\_:\_:)](int32/&__=%28____%29-9l16.md): Calculates the result of shifting a value’s binary representation the specified number of digits to the right, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.
- [\*=(\_:\_:)](int32/_=%28____%29.md): Multiplies two values and stores the result in the left-hand-side variable.
- [+=(\_:\_:)](int32/+=%28____%29.md): Adds two values and stores the result in the left-hand-side variable.
- [-=(\_:\_:)](int32/-=%28____%29.md): Subtracts the second value from the first and stores the difference in the left-hand-side variable.
- [==(\_:\_:)](int32/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.
- [\<(\_:\_:)](int32/_%28____%29-3k2xk.md): Returns a Boolean value indicating whether the value of the first argument is less than that of the second argument.
- [^=(\_:\_:)](int32/_=%28____%29-46xu7.md): Stores the result of performing a bitwise XOR operation on the two given values in the left-hand-side variable.
- [|=(\_:\_:)](int32/_=%28____%29-6hsuo.md): Stores the result of performing a bitwise OR operation on the two given values in the left-hand-side variable.
- [%=(\_:\_:)](int32/_=%28____%29-8flrz.md): Divides the first value by the second and stores the remainder in the left-hand-side variable.
- [/=(\_:\_:)](int32/_=%28____%29-997bi.md): Divides the first value by the second and stores the quotient in the left-hand-side variable.

### Initializers

- [init(\_:)](int32/init%28__%29-1817u.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](int32/init%28__%29-2px8y.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](int32/init%28__%29-34fue.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](int32/init%28__%29-3zpp6.md): Deprecated.
- [init(\_:)](int32/init%28__%29-5nznu.md)
- [init(\_:)](int32/init%28__%29-k0sh.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(bitPattern:)](int32/init%28bitpattern_%29.md): Creates a new instance with the same memory representation as the given value.
- [init(exactly:)](int32/init%28exactly_%29-3dltv.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](int32/init%28exactly_%29-5hlj9.md)
- [init(exactly:)](int32/init%28exactly_%29-79vj5.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](int32/init%28exactly_%29-7dio6.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](int32/init%28exactly_%29-9tpyy.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(truncating:)](int32/init%28truncating_%29.md)

### Instance Properties

- [byteSwapped](int32/byteswapped.md): A representation of this integer with the byte order swapped.
- [customPlaygroundQuickLook](int32/customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `Int32` instance.
- [leadingZeroBitCount](int32/leadingzerobitcount.md): The number of leading zeros in this value’s binary representation.
- [magnitude](int32/magnitude-swift.property.md): The magnitude of this value.
- [nonzeroBitCount](int32/nonzerobitcount.md): The number of bits equal to 1 in this value’s binary representation.
- [trailingZeroBitCount](int32/trailingzerobitcount.md): The number of trailing zeros in this value’s binary representation.
- [words](int32/words-swift.property.md): A collection containing the words of this value’s binary representation, in order from the least significant to most significant.

### Instance Methods

- [addingReportingOverflow(\_:)](int32/addingreportingoverflow%28__%29.md): Returns the sum of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [dividedReportingOverflow(by:)](int32/dividedreportingoverflow%28by_%29.md): Returns the quotient obtained by dividing this value by the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [dividingFullWidth(\_:)](int32/dividingfullwidth%28__%29.md): Returns a tuple containing the quotient and remainder of dividing the given value by this value.
- [multipliedFullWidth(by:)](int32/multipliedfullwidth%28by_%29.md): Returns a tuple containing the high and low parts of the result of multiplying this value by the given value.
- [multipliedReportingOverflow(by:)](int32/multipliedreportingoverflow%28by_%29.md): Returns the product of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [remainderReportingOverflow(dividingBy:)](int32/remainderreportingoverflow%28dividingby_%29.md): Returns the remainder after dividing this value by the given value, along with a Boolean value indicating whether overflow occurred during division.
- [signum()](int32/signum%28%29.md): Returns `-1` if this value is negative and `1` if it’s positive; otherwise, `0`.
- [subtractingReportingOverflow(\_:)](int32/subtractingreportingoverflow%28__%29.md): Returns the difference obtained by subtracting the given value from this value, along with a Boolean value indicating whether overflow occurred in the operation.

### Type Aliases

- [Int32.IntegerLiteralType](int32/integerliteraltype.md): A type that represents an integer literal.
- [Int32.Magnitude](int32/magnitude-swift.typealias.md): A type that can represent the absolute value of any possible value of this type.
- [Int32.Stride](int32/stride.md): A type that represents the distance between two values.

### Type Properties

- [bitWidth](int32/bitwidth.md): The number of bits used for the underlying binary representation of values of this type.
- [mlMultiArrayDataType](int32/mlmultiarraydatatype.md)

### Default Implementations

- [AdditiveArithmetic Implementations](int32/additivearithmetic-implementations.md)
- [AtomicRepresentable Implementations](int32/atomicrepresentable-implementations.md)
- [BinaryInteger Implementations](int32/binaryinteger-implementations.md)
- [Comparable Implementations](int32/comparable-implementations.md)
- [CustomReflectable Implementations](int32/customreflectable-implementations.md)
- [Decodable Implementations](int32/decodable-implementations.md)
- [Encodable Implementations](int32/encodable-implementations.md)
- [Equatable Implementations](int32/equatable-implementations.md)
- [ExpressibleByIntegerLiteral Implementations](int32/expressiblebyintegerliteral-implementations.md)
- [FixedWidthInteger Implementations](int32/fixedwidthinteger-implementations.md)
- [Hashable Implementations](int32/hashable-implementations.md)
- [SIMDScalar Implementations](int32/simdscalar-implementations.md)
- [SignedInteger Implementations](int32/signedinteger-implementations.md)
- [SignedNumeric Implementations](int32/signednumeric-implementations.md)

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
- [USDPrim.Attribute.Value](https://developer.apple.com/documentation/usdkit/usdprim/attribute/value)
- [USDStage.Object.MetadataValue](https://developer.apple.com/documentation/usdkit/usdstage/object/metadatavalue)
- [USDValueProtocol](https://developer.apple.com/documentation/usdkit/usdvalueprotocol)
- [vDSP_IntegerConvertable](https://developer.apple.com/documentation/accelerate/vdsp_integerconvertable)

## See Also

### Signed Integers

- [Int8](int8.md): An 8-bit signed integer value type.
- [Int16](int16.md): A 16-bit signed integer value type.
- [Int64](int64.md): A 64-bit signed integer value type.
- [Int128](int128.md): A 128-bit signed integer value type.
