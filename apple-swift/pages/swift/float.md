> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float](https://developer.apple.com/documentation/swift/float)

# Float

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A single-precision (32-bit), floating-point value type.

## Declaration

```swift
@frozen struct Float
```

## Topics

### Converting Integers

- [init(\_:)](float/init%28__%29-7e965.md): Creates a new value, rounded to the closest possible representation.
- [init(\_:)](float/init%28__%29-6cvkq.md): Creates a new value, rounded to the closest possible representation.

### Converting Strings

- [init(\_:)](float/init%28__%29-h2f4.md): Creates a new instance from the given string.
- [init(\_:)](float/init%28__%29-4xsj6.md)

### Converting Floating-Point Values

- [init(\_:)](float/init%28__%29-1488f.md): Creates a new instance from the given value, rounded to the closest possible representation.
- [init(\_:)](float/init%28__%29-1oh9p.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Creates a new value, rounded to the closest possible representation.
- [init(\_:)](float/init%28__%29-1kp2p.md): Creates a new instance that approximates the given value.
- [init(\_:)](float/init%28__%29-975tv.md): Creates a new instance initialized to the given value.
- [init(\_:)](float/init%28__%29-11orc.md): Creates a new instance that approximates the given value.
- [init(\_:)](float/init%28__%29-5soww.md)
- [init(\_:)](float/init%28__%29-ussz.md): Creates a new instance that approximates the given value.
- [init(signOf:magnitudeOf:)](float/init%28signof_magnitudeof_%29.md): Creates a new floating-point value using the sign of one value and the magnitude of another.
- [init(sign:exponent:significand:)](float/init%28sign_exponent_significand_%29.md): Creates a new value from the given sign, exponent, and significand.
- [init(truncating:)](float/init%28truncating_%29.md)

### Converting with No Loss of Precision

These initializers result in `nil` if the value passed can’t be represented without any loss of precision.

- [init(exactly:)](float/init%28exactly_%29-8esr8.md): Creates a new instance from the given value, if it can be represented exactly.
- [init(exactly:)](float/init%28exactly_%29-89na7.md): Creates a new instance initialized to the given value, if it can be represented without rounding.
- [init(exactly:)](float/init%28exactly_%29-89pn7.md): Creates a new instance initialized to the given value, if it can be represented without rounding.
- [init(exactly:)](float/init%28exactly_%29-6l5fa.md): Creates a new instance initialized to the given value, if it can be represented without rounding.
- [init(exactly:)](float/init%28exactly_%29-zknq.md)
- [init(exactly:)](float/init%28exactly_%29-1h1oe.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Creates a new value, if the given integer can be represented exactly.
- [init(exactly:)](float/init%28exactly_%29-8ho5q.md): Creates a new instance initialized to the given value, if it can be represented without rounding.

### Creating a Random Value

- [random(in:)](float/random%28in_%29-6ided.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range.
- [random(in:using:)](float/random%28in_using_%29-1m6gf.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range, using the given generator as a source for randomness.
- [random(in:)](float/random%28in_%29-5o5h8.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range.
- [random(in:using:)](float/random%28in_using_%29-613hx.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range, using the given generator as a source for randomness.

### Performing Calculations

- [Floating-Point Operators for Float](floating-point-operators-for-float.md): Perform arithmetic and bitwise operations or compare values.
- [addingProduct(\_:\_:)](float/addingproduct%28____%29.md): Returns the result of adding the product of the two given values to this value, computed without intermediate rounding.
- [addProduct(\_:\_:)](float/addproduct%28____%29.md): Adds the product of the two given values to this value in place, computed without intermediate rounding.
- [squareRoot()](float/squareroot%28%29.md): Returns the square root of the value, rounded to a representable value.
- [formSquareRoot()](float/formsquareroot%28%29.md): Replaces this value with its square root, rounded to a representable value.
- [remainder(dividingBy:)](float/remainder%28dividingby_%29.md): Returns the remainder of this value divided by the given value.
- [formRemainder(dividingBy:)](float/formremainder%28dividingby_%29.md): Replaces this value with the remainder of itself divided by the given value.
- [truncatingRemainder(dividingBy:)](float/truncatingremainder%28dividingby_%29.md): Returns the remainder of this value divided by the given value using truncating division.
- [formTruncatingRemainder(dividingBy:)](float/formtruncatingremainder%28dividingby_%29.md): Replaces this value with the remainder of itself divided by the given value using truncating division.
- [negate()](float/negate%28%29.md): Replaces this value with its additive inverse.

### Rounding Values

- [rounded()](float/rounded%28%29.md)
- [rounded(\_:)](float/rounded%28__%29.md): Returns this value rounded to an integral value using the specified rounding rule.
- [round()](float/round%28%29.md)
- [round(\_:)](float/round%28__%29.md): Rounds the value to an integral value using the specified rounding rule.

### Comparing Values

- [Floating-Point Operators for Float](floating-point-operators-for-float.md): Perform arithmetic and bitwise operations or compare values.
- [isEqual(to:)](float/isequal%28to_%29.md): Returns a Boolean value indicating whether this instance is equal to the given value.
- [isLess(than:)](float/isless%28than_%29.md): Returns a Boolean value indicating whether this instance is less than the given value.
- [isLessThanOrEqualTo(\_:)](float/islessthanorequalto%28__%29.md): Returns a Boolean value indicating whether this instance is less than or equal to the given value.
- [isTotallyOrdered(belowOrEqualTo:)](float/istotallyordered%28beloworequalto_%29.md): Returns a Boolean value indicating whether this instance should precede or tie positions with the given value in an ascending sort.
- [maximum(\_:\_:)](float/maximum%28____%29.md): Returns the greater of the two given values.
- [maximumMagnitude(\_:\_:)](float/maximummagnitude%28____%29.md): Returns the value with greater magnitude.
- [minimum(\_:\_:)](float/minimum%28____%29.md): Returns the lesser of the two given values.
- [minimumMagnitude(\_:\_:)](float/minimummagnitude%28____%29.md): Returns the value with lesser magnitude.

### Finding the Sign and Magnitude

- [magnitude](float/magnitude-swift.property.md): The magnitude of this value.
- [sign](float/sign.md): The sign of the floating-point value.
- [Float.Magnitude](float/magnitude-swift.typealias.md): A type that can represent the absolute value of any possible value of the conforming type.

### Querying a Float

- [ulp](float/ulp.md): The unit in the last place of this value.
- [significand](float/significand.md): The significand of the floating-point value.
- [exponent](float/exponent-swift.property.md): The exponent of the floating-point value.
- [nextUp](float/nextup.md): The least representable value that compares greater than this value.
- [nextDown](float/nextdown.md): The greatest representable value that compares less than this value.
- [binade](float/binade.md): The floating-point value with the same sign and exponent as this value, but with a significand of 1.0.

### Accessing Numeric Constants

- [pi](float/pi.md): The mathematical constant pi (π), approximately equal to 3.14159.
- [infinity](float/infinity.md): Positive infinity.
- [greatestFiniteMagnitude](float/greatestfinitemagnitude.md): The greatest finite number representable by this type.
- [nan](float/nan.md): A quiet NaN (“not a number”).
- [signalingNaN](float/signalingnan.md): A signaling NaN (“not a number”).
- [ulpOfOne](float/ulpofone.md): The unit in the last place of 1.0.
- [leastNormalMagnitude](float/leastnormalmagnitude.md): The least positive normal number.
- [leastNonzeroMagnitude](float/leastnonzeromagnitude.md): The least positive number.
- [zero](float/zero.md): Conforms when `Self` conforms to `ExpressibleByIntegerLiteral`. The zero value.

### Working with Binary Representation

- [bitPattern](float/bitpattern.md): The bit pattern of the value’s encoding.
- [significandBitPattern](float/significandbitpattern.md): The raw encoding of the value’s significand field.
- [significandWidth](float/significandwidth.md): The number of bits required to represent the value’s significand.
- [exponentBitPattern](float/exponentbitpattern.md): The raw encoding of the value’s exponent field.
- [significandBitCount](float/significandbitcount.md): The available number of fractional significand bits.
- [exponentBitCount](float/exponentbitcount.md): The number of bits used to represent the type’s exponent.
- [radix](float/radix.md): The radix, or base of exponentiation, for a floating-point type.
- [init(bitPattern:)](float/init%28bitpattern_%29.md): Creates a new value with the given bit pattern.
- [init(sign:exponentBitPattern:significandBitPattern:)](float/init%28sign_exponentbitpattern_significandbitpattern_%29.md): Creates a new instance from the specified sign and bit patterns.
- [init(nan:signaling:)](float/init%28nan_signaling_%29.md): Creates a NaN (“not a number”) value with the specified payload.
- [Float.Exponent](float/exponent-swift.typealias.md): A type that can represent any written exponent.
- [Float.RawSignificand](float/rawsignificand.md): A type that represents the encoded significand of a value.

### Querying a Float’s State

- [isZero](float/iszero.md): A Boolean value indicating whether the instance is equal to zero.
- [isFinite](float/isfinite.md): A Boolean value indicating whether this instance is finite.
- [isInfinite](float/isinfinite.md): A Boolean value indicating whether the instance is infinite.
- [isNaN](float/isnan.md): A Boolean value indicating whether the instance is NaN (“not a number”).
- [isSignalingNaN](float/issignalingnan.md): A Boolean value indicating whether the instance is a signaling NaN.
- [isNormal](float/isnormal.md): A Boolean value indicating whether this instance is normal.
- [isSubnormal](float/issubnormal.md): A Boolean value indicating whether the instance is subnormal.
- [isCanonical](float/iscanonical.md): A Boolean value indicating whether the instance’s representation is in its canonical form.
- [floatingPointClass](float/floatingpointclass.md): The classification of this value.

### Encoding and Decoding Values

- [encode(to:)](float/encode%28to_%29.md): Encodes this value into the given encoder.
- [init(from:)](float/init%28from_%29.md): Creates a new instance by decoding from the given decoder.

### Creating a Range

- [...(\_:\_:)](float/'...%28____%29.md): Returns a closed range that contains both of its bounds.

### Describing a Float

- [hash(into:)](float/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.
- [description](float/description.md): A textual representation of the value.
- [debugDescription](float/debugdescription.md): A textual representation of the value, suitable for debugging.
- [customMirror](float/custommirror.md): A mirror that reflects the `Float` instance.
- [hashValue](float/hashvalue.md): The hash value.

### SIMD-Supporting Types

- [Float.SIMDMaskScalar](float/simdmaskscalar.md)
- [Float.SIMD2Storage](float/simd2storage.md): Storage for a vector of two floating-point values.
- [Float.SIMD4Storage](float/simd4storage.md): Storage for a vector of four floating-point values.
- [Float.SIMD8Storage](float/simd8storage.md): Storage for a vector of eight floating-point values.
- [Float.SIMD16Storage](float/simd16storage.md): Storage for a vector of 16 floating-point values.
- [Float.SIMD32Storage](float/simd32storage.md): Storage for a vector of 32 floating-point values.
- [Float.SIMD64Storage](float/simd64storage.md): Storage for a vector of 64 floating-point values.

### Infrequently Used Functionality

- [init()](float/init%28%29.md)
- [init(integerLiteral:)](float/init%28integerliteral_%29.md): Creates an instance initialized to the specified integer value.
- [init(floatLiteral:)](float/init%28floatliteral_%29.md): Creates an instance initialized to the specified floating-point value.
- [init(integerLiteral:)](float/init%28integerliteral_%29-6hc7h.md): Conforms when `Self` conforms to `_ExpressibleByBuiltinIntegerLiteral`.
- [advanced(by:)](float/advanced%28by_%29.md): Returns a value that is offset the specified distance from this value.
- [distance(to:)](float/distance%28to_%29.md): Returns the distance from this value to the given value, expressed as a stride.
- [write(to:)](float/write%28to_%29.md): Writes a textual representation of this instance into the given output stream.

### Deprecated

- [init(\_:)](float/init%28__%29-7dbrz.md): Deprecated.
- [customPlaygroundQuickLook](float/customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `Float` instance.

### Type Properties

- [mlMultiArrayDataType](float/mlmultiarraydatatype.md)

### Default Implementations

- [AdditiveArithmetic Implementations](float/additivearithmetic-implementations.md)
- [AtomicRepresentable Implementations](float/atomicrepresentable-implementations.md)
- [BinaryFloatingPoint Implementations](float/binaryfloatingpoint-implementations.md)
- [Comparable Implementations](float/comparable-implementations.md)
- [CustomDebugStringConvertible Implementations](float/customdebugstringconvertible-implementations.md)
- [CustomReflectable Implementations](float/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](float/customstringconvertible-implementations.md)
- [Decodable Implementations](float/decodable-implementations.md)
- [Encodable Implementations](float/encodable-implementations.md)
- [Equatable Implementations](float/equatable-implementations.md)
- [ExpressibleByFloatLiteral Implementations](float/expressiblebyfloatliteral-implementations.md)
- [ExpressibleByIntegerLiteral Implementations](float/expressiblebyintegerliteral-implementations.md)
- [FloatingPoint Implementations](float/floatingpoint-implementations.md)
- [Hashable Implementations](float/hashable-implementations.md)
- [LosslessStringConvertible Implementations](float/losslessstringconvertible-implementations.md)
- [Numeric Implementations](float/numeric-implementations.md)
- [OperationParameter Implementations](float/operationparameter-implementations.md)
- [SIMDScalar Implementations](float/simdscalar-implementations.md)
- [SignedNumeric Implementations](float/signednumeric-implementations.md)
- [Strideable Implementations](float/strideable-implementations.md)
- [TextOutputStreamable Implementations](float/textoutputstreamable-implementations.md)

## Relationships

### Conforms To

- [AdditiveArithmetic](additivearithmetic.md)
- [AnimatableData](https://developer.apple.com/documentation/realitykit/animatabledata)
- [AtomicRepresentable](../synchronization/atomicrepresentable.md)
- [BNNSGraph.Builder.OperationParameter](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/operationparameter)
- [BNNSScalar](https://developer.apple.com/documentation/accelerate/bnnsscalar)
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
- [EntityIdentifierConvertible](https://developer.apple.com/documentation/appintents/entityidentifierconvertible)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [ExpressibleByFloatLiteral](expressiblebyfloatliteral.md)
- [ExpressibleByIntegerLiteral](expressiblebyintegerliteral.md)
- [FloatingPoint](floatingpoint.md)
- [Generable](https://developer.apple.com/documentation/foundationmodels/generable)
- [Hashable](hashable.md)
- [InstructionsRepresentable](https://developer.apple.com/documentation/foundationmodels/instructionsrepresentable)
- [LosslessStringConvertible](losslessstringconvertible.md)
- [MLShapedArrayScalar](https://developer.apple.com/documentation/coreml/mlshapedarrayscalar)
- [MLTensorScalar](https://developer.apple.com/documentation/coreml/mltensorscalar)
- [Numeric](numeric.md)
- [Plottable](https://developer.apple.com/documentation/charts/plottable)
- [PrimitivePlottableProtocol](https://developer.apple.com/documentation/charts/primitiveplottableprotocol)
- [PromptRepresentable](https://developer.apple.com/documentation/foundationmodels/promptrepresentable)
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

### Numeric Values

- [Int](int.md): A signed integer value type.
- [Double](double.md): A double-precision (64-bit), floating-point value type.
