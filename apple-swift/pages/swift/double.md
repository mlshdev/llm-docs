> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double](https://developer.apple.com/documentation/swift/double)

# Double

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A double-precision (64-bit), floating-point value type.

## Declaration

```swift
@frozen struct Double
```

## Topics

### Converting Integers

- [init(\_:)](double/init%28__%29-5blrp.md): Creates a new value, rounded to the closest possible representation.
- [init(\_:)](double/init%28__%29-84ohu.md): Creates a new value, rounded to the closest possible representation.

### Converting Strings

- [init(\_:)](double/init%28__%29-5wmm8.md): Creates a new instance from the given string.
- [init(\_:)](double/init%28__%29-15kej.md)

### Converting Floating-Point Values

- [init(\_:)](double/init%28__%29-1488d.md): Creates a new instance from the given value, rounded to the closest possible representation.
- [init(\_:)](double/init%28__%29-o1k9.md): Creates a new instance initialized to the given value.
- [init(\_:)](double/init%28__%29-5h7qh.md): Creates a new instance that approximates the given value.
- [init(\_:)](double/init%28__%29-aeox.md): Creates a new instance that approximates the given value.
- [init(\_:)](double/init%28__%29-9z7ob.md): Creates a new instance that approximates the given value.
- [init(\_:)](double/init%28__%29-7ag2w.md)
- [init(sign:exponent:significand:)](double/init%28sign_exponent_significand_%29.md): Creates a new value from the given sign, exponent, and significand.
- [init(signOf:magnitudeOf:)](double/init%28signof_magnitudeof_%29.md): Creates a new floating-point value using the sign of one value and the magnitude of another.
- [init(\_:)](double/init%28__%29-1oh9r.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Creates a new value, rounded to the closest possible representation.
- [init(truncating:)](double/init%28truncating_%29.md)

### Converting with No Loss of Precision

These initializers result in `nil` if the value passed can’t be represented without any loss of precision.

- [init(exactly:)](double/init%28exactly_%29-8esra.md): Creates a new instance from the given value, if it can be represented exactly.
- [init(exactly:)](double/init%28exactly_%29-1h1oc.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Creates a new value, if the given integer can be represented exactly.
- [init(exactly:)](double/init%28exactly_%29-2uexo.md): Creates a new value, if the given integer can be represented exactly.
- [init(exactly:)](double/init%28exactly_%29-2l6p1.md): Creates a new instance initialized to the given value, if it can be represented without rounding.
- [init(exactly:)](double/init%28exactly_%29-7cl0t.md): Creates a new instance initialized to the given value, if it can be represented without rounding.
- [init(exactly:)](double/init%28exactly_%29-50ofc.md): Creates a new instance initialized to the given value, if it can be represented without rounding.
- [init(exactly:)](double/init%28exactly_%29-63925.md): Creates a new instance initialized to the given value, if it can be represented without rounding.
- [init(exactly:)](double/init%28exactly_%29-8e00y.md)

### Creating a Random Value

- [random(in:)](double/random%28in_%29-6idef.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range.
- [random(in:using:)](double/random%28in_using_%29-1m6gd.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range, using the given generator as a source for randomness.
- [random(in:)](double/random%28in_%29-5o5ha.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range.
- [random(in:using:)](double/random%28in_using_%29-613hz.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range, using the given generator as a source for randomness.

### Performing Calculations

- [Floating-Point Operators for Double](floating-point-operators-for-double.md): Perform arithmetic and bitwise operations or compare values.
- [addingProduct(\_:\_:)](double/addingproduct%28____%29.md): Returns the result of adding the product of the two given values to this value, computed without intermediate rounding.
- [addProduct(\_:\_:)](double/addproduct%28____%29.md): Adds the product of the two given values to this value in place, computed without intermediate rounding.
- [squareRoot()](double/squareroot%28%29.md): Returns the square root of the value, rounded to a representable value.
- [formSquareRoot()](double/formsquareroot%28%29.md): Replaces this value with its square root, rounded to a representable value.
- [remainder(dividingBy:)](double/remainder%28dividingby_%29.md): Returns the remainder of this value divided by the given value.
- [formRemainder(dividingBy:)](double/formremainder%28dividingby_%29.md): Replaces this value with the remainder of itself divided by the given value.
- [truncatingRemainder(dividingBy:)](double/truncatingremainder%28dividingby_%29.md): Returns the remainder of this value divided by the given value using truncating division.
- [formTruncatingRemainder(dividingBy:)](double/formtruncatingremainder%28dividingby_%29.md): Replaces this value with the remainder of itself divided by the given value using truncating division.
- [negate()](double/negate%28%29.md): Replaces this value with its additive inverse.

### Rounding Values

- [rounded()](double/rounded%28%29.md)
- [rounded(\_:)](double/rounded%28__%29.md): Returns this value rounded to an integral value using the specified rounding rule.
- [round()](double/round%28%29.md)
- [round(\_:)](double/round%28__%29.md): Rounds the value to an integral value using the specified rounding rule.

### Comparing Values

- [Floating-Point Operators for Double](floating-point-operators-for-double.md): Perform arithmetic and bitwise operations or compare values.
- [isEqual(to:)](double/isequal%28to_%29.md): Returns a Boolean value indicating whether this instance is equal to the given value.
- [isLess(than:)](double/isless%28than_%29.md): Returns a Boolean value indicating whether this instance is less than the given value.
- [isLessThanOrEqualTo(\_:)](double/islessthanorequalto%28__%29.md): Returns a Boolean value indicating whether this instance is less than or equal to the given value.
- [isTotallyOrdered(belowOrEqualTo:)](double/istotallyordered%28beloworequalto_%29.md): Returns a Boolean value indicating whether this instance should precede or tie positions with the given value in an ascending sort.
- [minimum(\_:\_:)](double/minimum%28____%29.md): Returns the lesser of the two given values.
- [minimumMagnitude(\_:\_:)](double/minimummagnitude%28____%29.md): Returns the value with lesser magnitude.
- [maximum(\_:\_:)](double/maximum%28____%29.md): Returns the greater of the two given values.
- [maximumMagnitude(\_:\_:)](double/maximummagnitude%28____%29.md): Returns the value with greater magnitude.

### Finding the Sign and Magnitude

- [magnitude](double/magnitude-swift.property.md): The magnitude of this value.
- [sign](double/sign.md): The sign of the floating-point value.
- [Double.Magnitude](double/magnitude-swift.typealias.md): A type that can represent the absolute value of any possible value of the conforming type.

### Querying a Double

- [ulp](double/ulp.md): The unit in the last place of this value.
- [significand](double/significand.md): The significand of the floating-point value.
- [exponent](double/exponent-swift.property.md): The exponent of the floating-point value.
- [nextUp](double/nextup.md): The least representable value that compares greater than this value.
- [nextDown](double/nextdown.md): The greatest representable value that compares less than this value.
- [binade](double/binade.md): The floating-point value with the same sign and exponent as this value, but with a significand of 1.0.

### Accessing Numeric Constants

- [pi](double/pi.md): The mathematical constant pi (π), approximately equal to 3.14159.
- [infinity](double/infinity.md): Positive infinity.
- [greatestFiniteMagnitude](double/greatestfinitemagnitude.md): The greatest finite number representable by this type.
- [nan](double/nan.md): A quiet NaN (“not a number”).
- [signalingNaN](double/signalingnan.md): A signaling NaN (“not a number”).
- [ulpOfOne](double/ulpofone.md): The unit in the last place of 1.0.
- [leastNonzeroMagnitude](double/leastnonzeromagnitude.md): The least positive number.
- [leastNormalMagnitude](double/leastnormalmagnitude.md): The least positive normal number.
- [zero](double/zero.md): Conforms when `Self` conforms to `ExpressibleByIntegerLiteral`. The zero value.

### Working with Binary Representation

- [bitPattern](double/bitpattern.md): The bit pattern of the value’s encoding.
- [significandBitPattern](double/significandbitpattern.md): The raw encoding of the value’s significand field.
- [significandWidth](double/significandwidth.md): The number of bits required to represent the value’s significand.
- [exponentBitPattern](double/exponentbitpattern.md): The raw encoding of the value’s exponent field.
- [significandBitCount](double/significandbitcount.md): The available number of fractional significand bits.
- [exponentBitCount](double/exponentbitcount.md): The number of bits used to represent the type’s exponent.
- [radix](double/radix.md): The radix, or base of exponentiation, for a floating-point type.
- [init(bitPattern:)](double/init%28bitpattern_%29.md): Creates a new value with the given bit pattern.
- [init(sign:exponentBitPattern:significandBitPattern:)](double/init%28sign_exponentbitpattern_significandbitpattern_%29.md): Creates a new instance from the specified sign and bit patterns.
- [init(nan:signaling:)](double/init%28nan_signaling_%29.md): Creates a NaN (“not a number”) value with the specified payload.
- [Double.Exponent](double/exponent-swift.typealias.md): A type that can represent any written exponent.
- [Double.RawSignificand](double/rawsignificand.md): A type that represents the encoded significand of a value.
- [Double.RawExponent](double/rawexponent.md): A type that represents the encoded exponent of a value.

### Querying a Double’s State

- [isZero](double/iszero.md): A Boolean value indicating whether the instance is equal to zero.
- [isFinite](double/isfinite.md): A Boolean value indicating whether this instance is finite.
- [isInfinite](double/isinfinite.md): A Boolean value indicating whether the instance is infinite.
- [isNaN](double/isnan.md): A Boolean value indicating whether the instance is NaN (“not a number”).
- [isSignalingNaN](double/issignalingnan.md): A Boolean value indicating whether the instance is a signaling NaN.
- [isNormal](double/isnormal.md): A Boolean value indicating whether this instance is normal.
- [isSubnormal](double/issubnormal.md): A Boolean value indicating whether the instance is subnormal.
- [isCanonical](double/iscanonical.md): A Boolean value indicating whether the instance’s representation is in its canonical form.
- [floatingPointClass](double/floatingpointclass.md): The classification of this value.

### Encoding and Decoding Values

- [encode(to:)](double/encode%28to_%29.md): Encodes this value into the given encoder.
- [init(from:)](double/init%28from_%29.md): Creates a new instance by decoding from the given decoder.

### Creating a Range

- [...(\_:\_:)](double/'...%28____%29.md): Returns a closed range that contains both of its bounds.

### Describing a Double

- [description](double/description.md): A textual representation of the value.
- [debugDescription](double/debugdescription.md): A textual representation of the value, suitable for debugging.
- [customMirror](double/custommirror.md): A mirror that reflects the `Double` instance.
- [hash(into:)](double/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Infrequently Used Functionality

- [init()](double/init%28%29.md)
- [init(floatLiteral:)](double/init%28floatliteral_%29.md): Creates an instance initialized to the specified floating-point value.
- [init(integerLiteral:)](double/init%28integerliteral_%29.md): Creates an instance initialized to the specified integer value.
- [init(integerLiteral:)](double/init%28integerliteral_%29-6hc7j.md): Conforms when `Self` conforms to `_ExpressibleByBuiltinIntegerLiteral`.
- [Double.FloatLiteralType](double/floatliteraltype.md): A type that represents a floating-point literal.
- [Double.IntegerLiteralType](double/integerliteraltype.md): A type that represents an integer literal.
- [advanced(by:)](double/advanced%28by_%29.md): Returns a value that is offset the specified distance from this value.
- [distance(to:)](double/distance%28to_%29.md): Returns the distance from this value to the given value, expressed as a stride.
- [Double.Stride](double/stride.md): A type that represents the distance between two values.
- [write(to:)](double/write%28to_%29.md): Writes a textual representation of this instance into the given output stream.
- [hashValue](double/hashvalue.md): The hash value.

### SIMD-Supporting Types

- [Double.SIMDMaskScalar](double/simdmaskscalar.md)
- [Double.SIMD2Storage](double/simd2storage.md): Storage for a vector of two floating-point values.
- [Double.SIMD4Storage](double/simd4storage.md): Storage for a vector of four floating-point values.
- [Double.SIMD8Storage](double/simd8storage.md): Storage for a vector of eight floating-point values.
- [Double.SIMD16Storage](double/simd16storage.md): Storage for a vector of 16 floating-point values.
- [Double.SIMD32Storage](double/simd32storage.md): Storage for a vector of 32 floating-point values.
- [Double.SIMD64Storage](double/simd64storage.md): Storage for a vector of 64 floating-point values.

### Deprecated

- [customPlaygroundQuickLook](double/customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `Double` instance.
- [init(\_:)](double/init%28__%29-8kme5.md): Deprecated.

### Type Aliases

- [Double.Specification](double/specification.md)
- [Double.UnwrappedType](double/unwrappedtype.md)
- [Double.ValueType](double/valuetype.md)

### Type Properties

- [defaultResolverSpecification](double/defaultresolverspecification.md)
- [mlMultiArrayDataType](double/mlmultiarraydatatype.md)

### Default Implementations

- [AdditiveArithmetic Implementations](double/additivearithmetic-implementations.md)
- [AtomicRepresentable Implementations](double/atomicrepresentable-implementations.md)
- [BinaryFloatingPoint Implementations](double/binaryfloatingpoint-implementations.md)
- [Comparable Implementations](double/comparable-implementations.md)
- [CustomDebugStringConvertible Implementations](double/customdebugstringconvertible-implementations.md)
- [CustomReflectable Implementations](double/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](double/customstringconvertible-implementations.md)
- [Decodable Implementations](double/decodable-implementations.md)
- [Encodable Implementations](double/encodable-implementations.md)
- [Equatable Implementations](double/equatable-implementations.md)
- [ExpressibleByFloatLiteral Implementations](double/expressiblebyfloatliteral-implementations.md)
- [ExpressibleByIntegerLiteral Implementations](double/expressiblebyintegerliteral-implementations.md)
- [FloatingPoint Implementations](double/floatingpoint-implementations.md)
- [Hashable Implementations](double/hashable-implementations.md)
- [LosslessStringConvertible Implementations](double/losslessstringconvertible-implementations.md)
- [Numeric Implementations](double/numeric-implementations.md)
- [SIMDScalar Implementations](double/simdscalar-implementations.md)
- [SignedNumeric Implementations](double/signednumeric-implementations.md)
- [Strideable Implementations](double/strideable-implementations.md)
- [TextOutputStreamable Implementations](double/textoutputstreamable-implementations.md)

## Relationships

### Conforms To

- [AdditiveArithmetic](additivearithmetic.md)
- [Animatable](https://developer.apple.com/documentation/swiftui/animatable)
- [AnimatableData](https://developer.apple.com/documentation/realitykit/animatabledata)
- [AtomicRepresentable](../synchronization/atomicrepresentable.md)
- [BinaryFloatingPoint](binaryfloatingpoint.md)
- [BindableData](https://developer.apple.com/documentation/realitykit/bindabledata)
- [BitwiseCopyable](bitwisecopyable.md)
- [CKRecordValueProtocol](https://developer.apple.com/documentation/cloudkit/ckrecordvalueprotocol)
- [CVAttachmentValueRepresentable](https://developer.apple.com/documentation/corevideo/cvattachmentvaluerepresentable)
- [CVarArg](cvararg.md)
- [Comparable](comparable.md)
- [ConvertibleFromBytes](convertiblefrombytes.md)
- [ConvertibleFromGeneratedContent](https://developer.apple.com/documentation/foundationmodels/convertiblefromgeneratedcontent)
- [ConvertibleToBytes](convertibletobytes.md)
- [ConvertibleToGeneratedContent](https://developer.apple.com/documentation/foundationmodels/convertibletogeneratedcontent)
- [Copyable](copyable.md)
- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [CustomReflectable](customreflectable.md)
- [CustomStringConvertible](customstringconvertible.md)
- [Decodable](decodable.md)
- [Encodable](encodable.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [ExpressibleByFloatLiteral](expressiblebyfloatliteral.md)
- [ExpressibleByIntegerLiteral](expressiblebyintegerliteral.md)
- [FloatingPoint](floatingpoint.md)
- [Generable](https://developer.apple.com/documentation/foundationmodels/generable)
- [Hashable](hashable.md)
- [InstructionsRepresentable](https://developer.apple.com/documentation/foundationmodels/instructionsrepresentable)
- [IntentValueConvertible](https://developer.apple.com/documentation/appintents/intentvalueconvertible)
- [IntentValueExpressing](https://developer.apple.com/documentation/appintents/intentvalueexpressing)
- [LosslessStringConvertible](losslessstringconvertible.md)
- [MLDataValueConvertible](https://developer.apple.com/documentation/createml/mldatavalueconvertible)
- [MLShapedArrayScalar](https://developer.apple.com/documentation/coreml/mlshapedarrayscalar)
- [Numeric](numeric.md)
- [Plottable](https://developer.apple.com/documentation/charts/plottable)
- [PrimitivePlottableProtocol](https://developer.apple.com/documentation/charts/primitiveplottableprotocol)
- [PromptRepresentable](https://developer.apple.com/documentation/foundationmodels/promptrepresentable)
- [RangeComparableProperty](https://developer.apple.com/documentation/appintents/rangecomparableproperty)
- [SIMDScalar](simdscalar.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [SignedNumeric](signednumeric.md)
- [Strideable](strideable.md)
- [TextOutputStreamable](textoutputstreamable.md)
- [USDPrim.Attribute.Value](https://developer.apple.com/documentation/usdkit/usdprim/attribute/value)
- [USDStage.Object.MetadataValue](https://developer.apple.com/documentation/usdkit/usdstage/object/metadatavalue)
- [USDValueProtocol](https://developer.apple.com/documentation/usdkit/usdvalueprotocol)
- [VectorArithmetic](https://developer.apple.com/documentation/swiftui/vectorarithmetic)
- [vDSP_DiscreteFourierTransformable](https://developer.apple.com/documentation/accelerate/vdsp_discretefouriertransformable)
- [vDSP_FloatingPointBiquadFilterable](https://developer.apple.com/documentation/accelerate/vdsp_floatingpointbiquadfilterable)
- [vDSP_FloatingPointConvertable](https://developer.apple.com/documentation/accelerate/vdsp_floatingpointconvertable)
- [vDSP_FloatingPointDiscreteFourierTransformable](https://developer.apple.com/documentation/accelerate/vdsp_floatingpointdiscretefouriertransformable)
- [vDSP_FloatingPointGeneratable](https://developer.apple.com/documentation/accelerate/vdsp_floatingpointgeneratable)

## See Also

### Standard Library

- [Int](int.md): A signed integer value type.
- [String](string.md): A Unicode string value that is a collection of characters.
- [Array](array.md): An ordered, random-access collection.
- [Dictionary](dictionary.md): A collection whose elements are key-value pairs.
- [Swift Standard Library](swift-standard-library.md): Solve complex problems and write high-performance, readable code.
