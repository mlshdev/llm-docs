> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int](https://developer.apple.com/documentation/swift/int)

# Int

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A signed integer value type.

## Declaration

```swift
@frozen struct Int
```

<a id="overview"></a>

## Overview

On 32-bit platforms, `Int` is the same size as `Int32`, and on 64-bit platforms, `Int` is the same size as `Int64`.

## Topics

### Converting Integers

- [init(\_:)](int/init%28__%29-4ekvl.md): Conforms when `Self` conforms to `FixedWidthInteger`. Creates a new instance from the given integer.
- [init(exactly:)](int/init%28exactly_%29-b1dy.md): Conforms when `Self` conforms to `FixedWidthInteger`.
- [init(clamping:)](int/init%28clamping_%29.md): Creates a new instance with the representable value that’s closest to the given integer.
- [init(truncatingIfNeeded:)](int/init%28truncatingifneeded_%29.md): Creates a new instance from the bit pattern of the given instance by sign-extending or truncating to fit this type.
- [init(bitPattern:)](int/init%28bitpattern_%29-72037.md): Creates a new instance with the same memory representation as the given value.
- [init(exactly:)](int/init%28exactly_%29-177ax.md)
- [init(truncating:)](int/init%28truncating_%29.md)

### Converting Floating-Point Values

- [init(\_:)](int/init%28__%29-6gt9z.md)
- [init(\_:)](int/init%28__%29-8vbwo.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](int/init%28__%29-2oscb.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](int/init%28__%29-3huv0.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](int/init%28__%29-66i0w.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](int/init%28__%29-5q6q5.md)

### Converting with No Loss of Precision

These initializers result in `nil` if the value passed can’t be represented without any loss of precision.

- [init(exactly:)](int/init%28exactly_%29-7yhn6.md)
- [init(exactly:)](int/init%28exactly_%29-77kq8.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](int/init%28exactly_%29-7qdwf.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](int/init%28exactly_%29-5xh2s.md): Creates an integer from the given floating-point value, if it can be represented exactly.
- [init(exactly:)](int/init%28exactly_%29-5kot1.md): Creates an integer from the given floating-point value, if it can be represented exactly.

### Converting Strings

- [init(\_:)](int/init%28__%29-2hmii.md): Creates a new integer value from the given string.
- [init(\_:radix:)](int/init%28__radix_%29.md): Creates a new integer value from the given string and radix.

### Creating a Random Integer

- [random(in:)](int/random%28in_%29-9mjpw.md): Returns a random value within the specified range.
- [random(in:using:)](int/random%28in_using_%29-4lsb5.md): Returns a random value within the specified range, using the given generator as a source for randomness.
- [random(in:)](int/random%28in_%29-8zzqh.md): Returns a random value within the specified range.
- [random(in:using:)](int/random%28in_using_%29-3dwv4.md): Returns a random value within the specified range, using the given generator as a source for randomness.

### Performing Calculations

- [Integer Operators](integer-operators.md): Perform arithmetic and bitwise operations or compare values.
- [negate()](int/negate%28%29.md): Replaces this value with its additive inverse.
- [quotientAndRemainder(dividingBy:)](int/quotientandremainder%28dividingby_%29.md): Returns the quotient and remainder of this value divided by the given value.
- [isMultiple(of:)](int/ismultiple%28of_%29.md): Conforms when `Self` conforms to `FixedWidthInteger`. Returns `true` if this value is a multiple of the given value, and `false` otherwise.

### Performing Calculations with Overflow

These methods return the result of an operation, and a flag indicating whether the operation overflowed the bounds of the type.

- [addingReportingOverflow(\_:)](int/addingreportingoverflow%28__%29.md): Returns the sum of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [subtractingReportingOverflow(\_:)](int/subtractingreportingoverflow%28__%29.md): Returns the difference obtained by subtracting the given value from this value, along with a Boolean value indicating whether overflow occurred in the operation.
- [multipliedReportingOverflow(by:)](int/multipliedreportingoverflow%28by_%29.md): Returns the product of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [dividedReportingOverflow(by:)](int/dividedreportingoverflow%28by_%29.md): Returns the quotient obtained by dividing this value by the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [remainderReportingOverflow(dividingBy:)](int/remainderreportingoverflow%28dividingby_%29.md): Returns the remainder after dividing this value by the given value, along with a Boolean value indicating whether overflow occurred during division.

### Performing Double-Width Calculations

- [multipliedFullWidth(by:)](int/multipliedfullwidth%28by_%29.md): Returns a tuple containing the high and low parts of the result of multiplying this value by the given value.
- [dividingFullWidth(\_:)](int/dividingfullwidth%28__%29.md): Returns a tuple containing the quotient and remainder of dividing the given value by this value.

### Finding the Sign and Magnitude

- [magnitude](int/magnitude-swift.property.md): The magnitude of this value.
- [Int.Magnitude](int/magnitude-swift.typealias.md): A type that can represent the absolute value of any possible value of this type.
- [abs(\_:)](abs%28__%29.md): Returns the absolute value of the given number.
- [signum()](int/signum%28%29.md): Returns `-1` if this value is negative and `1` if it’s positive; otherwise, `0`.

### Accessing Numeric Constants

- [zero](int/zero.md): Conforms when `Self` conforms to `ExpressibleByIntegerLiteral`. The zero value.
- [min](int/min.md): Conforms when `Self` conforms to `FixedWidthInteger`. The minimum representable integer in this type.
- [max](int/max.md): Conforms when `Self` conforms to `FixedWidthInteger`. The maximum representable integer in this type.
- [isSigned](int/issigned.md): A Boolean value indicating whether this type is a signed integer type.

### Working with Byte Order

- [byteSwapped](int/byteswapped.md): A representation of this integer with the byte order swapped.
- [littleEndian](int/littleendian.md): The little-endian representation of this integer.
- [bigEndian](int/bigendian.md): The big-endian representation of this integer.
- [init(littleEndian:)](int/init%28littleendian_%29.md): Creates an integer from its little-endian representation, changing the byte order if necessary.
- [init(bigEndian:)](int/init%28bigendian_%29.md): Creates an integer from its big-endian representation, changing the byte order if necessary.

### Working with Binary Representation

- [bitWidth](int/bitwidth.md): The number of bits used for the underlying binary representation of values of this type.
- [bitWidth](int/bitwidth-swift.property.md): The number of bits in the current binary representation of this value.
- [nonzeroBitCount](int/nonzerobitcount.md): The number of bits equal to 1 in this value’s binary representation.
- [leadingZeroBitCount](int/leadingzerobitcount.md): The number of leading zeros in this value’s binary representation.
- [trailingZeroBitCount](int/trailingzerobitcount.md): The number of trailing zeros in this value’s binary representation.
- [words](int/words-swift.property.md): A collection containing the words of this value’s binary representation, in order from the least significant to most significant.
- [Int.Words](int/words-swift.struct.md): A type that represents the words of this integer.

### Working with Memory Addresses

These initializers create an integer with the bit pattern of the memory address of a pointer or class instance.

- [init(bitPattern:)](int/init%28bitpattern_%29-2i0qy.md): Creates a new value with the bit pattern of the given pointer.
- [init(bitPattern:)](int/init%28bitpattern_%29-2o9co.md): Creates an integer that captures the full value of the given object identifier.
- [init(bitPattern:)](int/init%28bitpattern_%29-5qm7a.md): Creates a new value with the bit pattern of the given pointer.

### Encoding and Decoding Values

- [encode(to:)](int/encode%28to_%29.md): Encodes this value into the given encoder.
- [init(from:)](int/init%28from_%29.md): Creates a new instance by decoding from the given decoder.

### Describing an Integer

- [description](int/description.md): A textual representation of this value.
- [hash(into:)](int/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.
- [customMirror](int/custommirror.md): A mirror that reflects the `Int` instance.

### Infrequently Used Functionality

- [init()](int/init%28%29.md): Creates a new value equal to zero.
- [init(integerLiteral:)](int/init%28integerliteral_%29.md): Conforms when `Self` conforms to `_ExpressibleByBuiltinIntegerLiteral`.
- [Int.IntegerLiteralType](int/integerliteraltype.md): A type that represents an integer literal.
- [distance(to:)](int/distance%28to_%29.md): Returns the distance from this value to the given value, expressed as a stride.
- [advanced(by:)](int/advanced%28by_%29.md): Returns a value that is offset the specified distance from this value.
- [Int.Stride](int/stride.md): A type that represents the distance between two values.
- [hashValue](int/hashvalue.md): The hash value.

### Deprecated

- [customPlaygroundQuickLook](int/customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `Int` instance.
- [init(\_:)](int/init%28__%29-3mb3q.md): Deprecated.

### SIMD-Supporting Types

- [Int.SIMDMaskScalar](int/simdmaskscalar.md)
- [Int.SIMD2Storage](int/simd2storage.md): Storage for a vector of two integers.
- [Int.SIMD4Storage](int/simd4storage.md): Storage for a vector of four integers.
- [Int.SIMD8Storage](int/simd8storage.md): Storage for a vector of eight integers.
- [Int.SIMD16Storage](int/simd16storage.md): Storage for a vector of 16 integers.
- [Int.SIMD32Storage](int/simd32storage.md): Storage for a vector of 32 integers.
- [Int.SIMD64Storage](int/simd64storage.md): Storage for a vector of 64 integers.

### Operators

- [!=(\_:\_:)](int/!=%28____%29.md)
- [&\>\>=(\_:\_:)](int/&__=%28____%29-2i06i.md): Calculates the result of shifting a value’s binary representation the specified number of digits to the right, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.
- [&\<\<=(\_:\_:)](int/&__=%28____%29-58orm.md): Returns the result of shifting a value’s binary representation the specified number of digits to the left, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.
- [\<(\_:\_:)](int/_%28____%29-3wpum.md): Returns a Boolean value indicating whether the value of the first argument is less than that of the second argument.
- [^=(\_:\_:)](int/_=%28____%29-1ypi9.md): Stores the result of performing a bitwise XOR operation on the two given values in the left-hand-side variable.
- [%=(\_:\_:)](int/_=%28____%29-30t77.md): Divides the first value by the second and stores the remainder in the left-hand-side variable.
- [|=(\_:\_:)](int/_=%28____%29-4b29i.md): Stores the result of performing a bitwise OR operation on the two given values in the left-hand-side variable.

### Type Aliases

- [Int.Specification](int/specification.md)
- [Int.UnwrappedType](int/unwrappedtype.md)
- [Int.ValueType](int/valuetype.md)

### Type Properties

- [defaultResolverSpecification](int/defaultresolverspecification.md)

### Default Implementations

- [AdditiveArithmetic Implementations](int/additivearithmetic-implementations.md)
- [AtomicRepresentable Implementations](int/atomicrepresentable-implementations.md)
- [BinaryInteger Implementations](int/binaryinteger-implementations.md)
- [CodingKeyRepresentable Implementations](int/codingkeyrepresentable-implementations.md)
- [Comparable Implementations](int/comparable-implementations.md)
- [CustomReflectable Implementations](int/customreflectable-implementations.md)
- [Decodable Implementations](int/decodable-implementations.md)
- [Encodable Implementations](int/encodable-implementations.md)
- [Equatable Implementations](int/equatable-implementations.md)
- [ExpressibleByIntegerLiteral Implementations](int/expressiblebyintegerliteral-implementations.md)
- [FixedWidthInteger Implementations](int/fixedwidthinteger-implementations.md)
- [Hashable Implementations](int/hashable-implementations.md)
- [SIMDScalar Implementations](int/simdscalar-implementations.md)
- [SignedInteger Implementations](int/signedinteger-implementations.md)
- [SignedNumeric Implementations](int/signednumeric-implementations.md)
- [Strideable Implementations](int/strideable-implementations.md)

## Relationships

### Conforms To

- [AdditiveArithmetic](additivearithmetic.md)
- [AtomicRepresentable](../synchronization/atomicrepresentable.md)
- [BNNSGraph.Builder.SliceIndex](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/sliceindex)
- [BinaryInteger](binaryinteger.md)
- [BindableData](https://developer.apple.com/documentation/realitykit/bindabledata)
- [BitwiseCopyable](bitwisecopyable.md)
- [CKRecordValueProtocol](https://developer.apple.com/documentation/cloudkit/ckrecordvalueprotocol)
- [CVAttachmentValueRepresentable](https://developer.apple.com/documentation/corevideo/cvattachmentvaluerepresentable)
- [CVarArg](cvararg.md)
- [CodingKeyRepresentable](codingkeyrepresentable.md)
- [Comparable](comparable.md)
- [ConvertibleFromBytes](convertiblefrombytes.md)
- [ConvertibleFromGeneratedContent](https://developer.apple.com/documentation/foundationmodels/convertiblefromgeneratedcontent)
- [ConvertibleToBytes](convertibletobytes.md)
- [ConvertibleToGeneratedContent](https://developer.apple.com/documentation/foundationmodels/convertibletogeneratedcontent)
- [Copyable](copyable.md)
- [CustomReflectable](customreflectable.md)
- [CustomStringConvertible](customstringconvertible.md)
- [CustomURLRepresentationParameterConvertible](https://developer.apple.com/documentation/appintents/customurlrepresentationparameterconvertible)
- [Decodable](decodable.md)
- [Encodable](encodable.md)
- [EntityIdentifierConvertible](https://developer.apple.com/documentation/appintents/entityidentifierconvertible)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [ExpressibleByIntegerLiteral](expressiblebyintegerliteral.md)
- [FixedWidthInteger](fixedwidthinteger.md)
- [Generable](https://developer.apple.com/documentation/foundationmodels/generable)
- [Hashable](hashable.md)
- [InstructionsRepresentable](https://developer.apple.com/documentation/foundationmodels/instructionsrepresentable)
- [IntentValueConvertible](https://developer.apple.com/documentation/appintents/intentvalueconvertible)
- [IntentValueExpressing](https://developer.apple.com/documentation/appintents/intentvalueexpressing)
- [LosslessStringConvertible](losslessstringconvertible.md)
- [MLDataValueConvertible](https://developer.apple.com/documentation/createml/mldatavalueconvertible)
- [MLIdentifier](https://developer.apple.com/documentation/createml/mlidentifier)
- [MLTensorRangeExpression](https://developer.apple.com/documentation/coreml/mltensorrangeexpression)
- [MirrorPath](mirrorpath.md)
- [NDArray.RangeExpression](https://developer.apple.com/documentation/coreai/ndarray/rangeexpression)
- [Numeric](numeric.md)
- [Plottable](https://developer.apple.com/documentation/charts/plottable)
- [PrimitivePlottableProtocol](https://developer.apple.com/documentation/charts/primitiveplottableprotocol)
- [PromptRepresentable](https://developer.apple.com/documentation/foundationmodels/promptrepresentable)
- [RangeComparableProperty](https://developer.apple.com/documentation/appintents/rangecomparableproperty)
- [SIMDScalar](simdscalar.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [SignedInteger](signedinteger.md)
- [SignedNumeric](signednumeric.md)
- [Strideable](strideable.md)
- [USDPrim.Attribute.Value](https://developer.apple.com/documentation/usdkit/usdprim/attribute/value)
- [USDStage.Object.MetadataValue](https://developer.apple.com/documentation/usdkit/usdstage/object/metadatavalue)
- [USDValueProtocol](https://developer.apple.com/documentation/usdkit/usdvalueprotocol)

## See Also

### Standard Library

- [Double](double.md): A double-precision (64-bit), floating-point value type.
- [String](string.md): A Unicode string value that is a collection of characters.
- [Array](array.md): An ordered, random-access collection.
- [Dictionary](dictionary.md): A collection whose elements are key-value pairs.
- [Swift Standard Library](swift-standard-library.md): Solve complex problems and write high-performance, readable code.
