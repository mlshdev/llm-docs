> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal](https://developer.apple.com/documentation/foundation/decimal)

# Decimal (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A structure representing a base-10 number.

## Declaration

```swift
struct Decimal
```

## Topics

### Creating an empty decimal

- [init()](decimal/init%28%29.md): Creates a decimal initialized to `0`.

### Creating a decimal from components

- [init(sign:exponent:significand:)](decimal/init%28sign_exponent_significand_%29.md): Creates a decimal initialized with the given sign, exponent, and significand.

### Creating a decimal from a floating point number

- [init(\_:)](decimal/init%28__%29-6wgru.md): Creates and initializes a decimal with the provided floating point value.
- [init(floatLiteral:)](decimal/init%28floatliteral_%29.md): Creates and initializes a decimal with the provided floating point value.

### Creating a decimal from an integer

- [init(exactly:)](decimal/init%28exactly_%29.md): Creates a new decimal value exactly representing the provided integer.
- [init(\_:)](decimal/init%28__%29-2tcho.md): Creates and initializes a decimal with the provided integer value.
- [init(\_:)](decimal/init%28__%29-4gk29.md): Creates and initializes a decimal with the provided integer value.
- [init(\_:)](decimal/init%28__%29-5aznh.md): Creates and initializes a decimal with the provided integer value.
- [init(\_:)](decimal/init%28__%29-7dmlc.md): Creates and initializes a decimal with the provided integer value.
- [init(\_:)](decimal/init%28__%29-7a033.md): Creates and initializes a decimal with the provided integer value.
- [init(integerLiteral:)](decimal/init%28integerliteral_%29.md): Creates and initializes a decimal with the provided integer value.

### Creating a decimal from an unsigned integer

- [init(\_:)](decimal/init%28__%29-2lxxy.md): Creates and initializes a decimal with the provided unsigned integer value.
- [init(\_:)](decimal/init%28__%29-4gbgq.md): Creates and initializes a decimal with the provided unsigned integer value.
- [init(\_:)](decimal/init%28__%29-9lio1.md): Creates and initializes a decimal with the provided unsigned integer value.
- [init(\_:)](decimal/init%28__%29-9okou.md): Creates and initializes a decimal with the provided unsigned integer value.
- [init(\_:)](decimal/init%28__%29-43cx6.md): Creates and initializes a decimal with the provided unsigned integer value.

### Creating a decimal from another decimal

- [init(signOf:magnitudeOf:)](decimal/init%28signof_magnitudeof_%29.md): Creates and initializes a decimal with the sign and magnitude of the given decimals.
- [NSDecimalCopy(\_:\_:)](nsdecimalcopy%28____%29.md): Copies the value of a decimal number.

### Creating a decimal by parsing a string

- [init(\_:format:lenient:)](decimal/init%28__format_lenient_%29-6fk71.md): Creates and initializes a decimal by parsing a string according to the provided format style.
- [init(\_:format:lenient:)](decimal/init%28__format_lenient_%29-8t5o2.md): Creates and initializes a decimal by parsing a string according to the provided currency format style.
- [init(\_:format:lenient:)](decimal/init%28__format_lenient_%29-3u6o6.md): Creates and initializes a percentage decimal by parsing a string according to the provided format style.
- [init(string:locale:)](decimal/init%28string_locale_%29.md): Creates and initializes a decimal by parsing a string according to the provided locale’s conventions.
- [init(\_:strategy:)](decimal/init%28__strategy_%29.md): Creates and initializes a decimal by parsing an arbitrary type according to the provided parse strategy.
- [Decimal.ParseStrategy](decimal/parsestrategy.md): A parse strategy for creating decimal values from formatted strings.

### Performing arithmetic

- [pow(\_:\_:)](pow%28____%29.md): Returns a decimal number raised to a given power.

### Performing arithmetic using references

- [NSDecimalCompact(\_:)](nsdecimalcompact%28__%29.md): Compacts the decimal structure for efficiency.
- [NSDecimalAdd(\_:\_:\_:\_:)](nsdecimaladd%28________%29.md): Adds two decimal values.
- [NSDecimalSubtract(\_:\_:\_:\_:)](nsdecimalsubtract%28________%29.md): Subtracts one decimal value from another.
- [NSDecimalDivide(\_:\_:\_:\_:)](nsdecimaldivide%28________%29.md): Divides one decimal value by another.
- [NSDecimalMultiply(\_:\_:\_:\_:)](nsdecimalmultiply%28________%29.md): Multiplies two decimal numbers together.
- [NSDecimalMultiplyByPowerOf10(\_:\_:\_:\_:)](nsdecimalmultiplybypowerof10%28________%29.md): Multiplies a decimal by the specified power of 10.
- [NSDecimalRound(\_:\_:\_:\_:)](nsdecimalround%28________%29.md): Rounds off the decimal value.
- [NSDecimalPower(\_:\_:\_:\_:)](nsdecimalpower%28________%29.md): Raises the decimal value to the specified power.
- [NSDecimalNormalize(\_:\_:\_:)](nsdecimalnormalize%28______%29.md): Normalizes the internal format of two decimal numbers to simplify later operations.
- [Decimal.RoundingMode](decimal/roundingmode.md): An alias for an enumeration that specifies possible rounding modes.
- [NSDecimalNumber.RoundingMode](nsdecimalnumber/roundingmode.md): These constants specify rounding behaviors.
- [Decimal.CalculationError](decimal/calculationerror.md): An alias for a type that specifies possible calculation errors.
- [NSDecimalNumber.CalculationError](nsdecimalnumber/calculationerror.md): Calculation error constants used to describe an error in [exceptionDuringOperation(\_:error:leftOperand:rightOperand:)](nsdecimalnumberbehaviors/exceptionduringoperation%28__error_leftoperand_rightoperand_%29.md).

### Getting a decimal’s characteristics

- [sign](decimal/sign.md): The sign of the decimal.
- [exponent](decimal/exponent.md): The exponent of the decimal.
- [significand](decimal/significand.md): The significand of the decimal.
- [magnitude](decimal/magnitude.md): The magnitude of this decimal.
- [floatingPointClass](decimal/floatingpointclass.md): The IEEE 754 class of this type.
- [isCanonical](decimal/iscanonical.md): A Boolean value indicating whether the representation of this decimal is canonical.
- [isFinite](decimal/isfinite.md): A Boolean value indicating whether this decimal is zero, subnormal, or normal (not infinity or NaN).
- [isInfinite](decimal/isinfinite.md): A Boolean value indicating whether this decimal is infinity.
- [isNaN](decimal/isnan.md): A Boolean value indicating whether this decimal is NaN.
- [isNormal](decimal/isnormal.md): A Boolean value indicating whether this decimal is normal (not zero, subnormal, infinity, or NaN).
- [isSignMinus](decimal/issignminus.md): A Boolean value indicating whether this decimal has a negative sign.
- [isSignaling](decimal/issignaling.md): A Boolean value indicating whether this decimal is a signaling NaN.\`\`
- [isSignalingNaN](decimal/issignalingnan.md): A Boolean value indicating whether this decimal is a signaling NaN.
- [isSubnormal](decimal/issubnormal.md): A Boolean value indicating whether this decimal is subnormal.
- [isZero](decimal/iszero.md): A Boolean value indicating whether this value is zero.
- [nextDown](decimal/nextdown.md): The greatest representable value that is less than this decimal.
- [nextUp](decimal/nextup.md): The least representable value that is greater than this decimal.
- [ulp](decimal/ulp.md): The unit in the last place of the decimal.

### Getting particular decimals

- [greatestFiniteMagnitude](decimal/greatestfinitemagnitude.md): The decimal that contains the largest possible non-infinite magnitude for the underlying representation.
- [leastFiniteMagnitude](decimal/leastfinitemagnitude.md): The decimal that contains the smallest possible non-infinite magnitude for the underlying representation.
- [leastNonzeroMagnitude](decimal/leastnonzeromagnitude.md): The decimal value that represents the smallest possible non-zero value for the underlying representation.
- [leastNormalMagnitude](decimal/leastnormalmagnitude.md): The decimal value that represents the smallest possible normal magnitude for the underlying representation.
- [pi](decimal/pi.md): The mathematical constant pi.
- [nan](decimal/nan.md): The value that represents “not a number.”
- [quietNaN](decimal/quietnan.md): A quiet representation of not-a-number.
- [radix](decimal/radix.md): The radix used by decimal numbers.
- [NSDecimalMaxSize](nsdecimalmaxsize.md): The maximum size of [Decimal](decimal.md).
- [NSDecimalNoScale](nsdecimalnoscale.md): Specifies that the number of digits allowed after the decimal separator in a decimal number should not be limited.

### Formatting decimals

- [formatted()](decimal/formatted%28%29.md): Formats the decimal using a default localized format style.
- [formatted(\_:)](decimal/formatted%28__%29.md): Formats the decimal using the provided format style.
- [Decimal.FormatStyle](decimal/formatstyle.md): A structure that converts between decimal values and their textual representations.

### Converting between decimals and strings

- [NSDecimalString(\_:\_:)](nsdecimalstring%28____%29.md): Returns a string representation of the decimal value appropriate for the specified locale.

### Comparing decimals

- [isEqual(to:)](decimal/isequal%28to_%29.md): Indicates whether this decimal is equal to the specified one.
- [isLess(than:)](decimal/isless%28than_%29.md): Indicates whether this decimal is less than the specified one.
- [isLessThanOrEqualTo(\_:)](decimal/islessthanorequalto%28__%29.md): Indicates whether this decimal is less than or equal to the specified one.
- [isTotallyOrdered(belowOrEqualTo:)](decimal/istotallyordered%28beloworequalto_%29.md): Returns a Boolean value indicating whether this instance should precede the given value in an ascending sort.
- [distance(to:)](decimal/distance%28to_%29.md): Returns the distance from this value to the specified value.
- [advanced(by:)](decimal/advanced%28by_%29.md): Returns a new value advanced by the given distance.
- [NSDecimalCompare(\_:\_:)](nsdecimalcompare%28____%29.md): Compares two decimal values.

### Using reference types

- [NSDecimalNumber](nsdecimalnumber.md): An object for representing and performing arithmetic on base-10 numbers.

### Supporting Types

- [Decimal.FormatStyle](decimal/formatstyle.md): A structure that converts between decimal values and their textual representations.

### Operators

- [/(\_:\_:)](decimal/_%28____%29~ddf603e6.md): Divides one decimal number by another.
- [/=(\_:\_:)](decimal/_=%28____%29~b62c5a0a.md): Divides one decimal number by another, storing the result in the first number.

### Default Implementations

- [AdditiveArithmetic Implementations](decimal/additivearithmetic-implementations.md)
- [ExpressibleByFloatLiteral Implementations](decimal/expressiblebyfloatliteral-implementations.md)
- [ExpressibleByIntegerLiteral Implementations](decimal/expressiblebyintegerliteral-implementations.md)
- [Numeric Implementations](decimal/numeric-implementations.md)
- [SignedNumeric Implementations](decimal/signednumeric-implementations.md)
- [Strideable Implementations](decimal/strideable-implementations.md)

## Relationships

### Conforms To

- [AdditiveArithmetic](https://developer.apple.com/documentation/swift/additivearithmetic)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [ConvertibleFromGeneratedContent](../foundationmodels/convertiblefromgeneratedcontent.md)
- [ConvertibleToGeneratedContent](../foundationmodels/convertibletogeneratedcontent.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
- [ExpressibleByIntegerLiteral](https://developer.apple.com/documentation/swift/expressiblebyintegerliteral)
- [Generable](../foundationmodels/generable.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [InstructionsRepresentable](../foundationmodels/instructionsrepresentable.md)
- [Numeric](https://developer.apple.com/documentation/swift/numeric)
- [Plottable](../charts/plottable.md)
- [PromptRepresentable](../foundationmodels/promptrepresentable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SignedNumeric](https://developer.apple.com/documentation/swift/signednumeric)
- [Strideable](https://developer.apple.com/documentation/swift/strideable)

## See Also

### Numbers

- [Int](https://developer.apple.com/documentation/swift/int): A signed integer value type.
- [Double](https://developer.apple.com/documentation/swift/double): A double-precision (64-bit), floating-point value type.
- [NumberFormatter](numberformatter.md): A formatter that converts between numeric values and their textual representations.

# NSDecimal (Objective-C)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A structure representing a base-10 number.

## Declaration

```objectivec
typedef struct { ... } NSDecimal;
```

## Topics

### Creating a decimal from another decimal

- [NSDecimalCopy](nsdecimalcopy%28____%29.md): Copies the value of a decimal number.

### Performing arithmetic using references

- [NSDecimalCompact](nsdecimalcompact%28__%29.md): Compacts the decimal structure for efficiency.
- [NSDecimalAdd](nsdecimaladd%28________%29.md): Adds two decimal values.
- [NSDecimalSubtract](nsdecimalsubtract%28________%29.md): Subtracts one decimal value from another.
- [NSDecimalDivide](nsdecimaldivide%28________%29.md): Divides one decimal value by another.
- [NSDecimalMultiply](nsdecimalmultiply%28________%29.md): Multiplies two decimal numbers together.
- [NSDecimalMultiplyByPowerOf10](nsdecimalmultiplybypowerof10%28________%29.md): Multiplies a decimal by the specified power of 10.
- [NSDecimalRound](nsdecimalround%28________%29.md): Rounds off the decimal value.
- [NSDecimalPower](nsdecimalpower%28________%29.md): Raises the decimal value to the specified power.
- [NSDecimalNormalize](nsdecimalnormalize%28______%29.md): Normalizes the internal format of two decimal numbers to simplify later operations.
- [NSRoundingMode](nsdecimalnumber/roundingmode.md): These constants specify rounding behaviors.
- [NSCalculationError](nsdecimalnumber/calculationerror.md): Calculation error constants used to describe an error in [exceptionDuringOperation:error:leftOperand:rightOperand:](nsdecimalnumberbehaviors/exceptionduringoperation%28__error_leftoperand_rightoperand_%29.md).

### Getting particular decimals

- [NSDecimalMaxSize](nsdecimalmaxsize.md): The maximum size of [NSDecimal](decimal.md).
- [NSDecimalNoScale](nsdecimalnoscale.md): Specifies that the number of digits allowed after the decimal separator in a decimal number should not be limited.

### Converting between decimals and strings

- [NSDecimalString](nsdecimalstring%28____%29.md): Returns a string representation of the decimal value appropriate for the specified locale.

### Comparing decimals

- [NSDecimalCompare](nsdecimalcompare%28____%29.md): Compares two decimal values.

### Using reference types

- [NSDecimalNumber](nsdecimalnumber.md): An object for representing and performing arithmetic on base-10 numbers.

## Relationships

### Conforms To

- [ConvertibleFromGeneratedContent](../foundationmodels/convertiblefromgeneratedcontent.md)
- [ConvertibleToGeneratedContent](../foundationmodels/convertibletogeneratedcontent.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Generable](../foundationmodels/generable.md)
- [InstructionsRepresentable](../foundationmodels/instructionsrepresentable.md)
- [Plottable](../charts/plottable.md)
- [PromptRepresentable](../foundationmodels/promptrepresentable.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Numbers

- [NSInteger](../objectivec/nsinteger.md): Describes an integer.
- [NSUInteger](../objectivec/nsuinteger.md): Describes an unsigned integer.
- [NSDecimalNumber](nsdecimalnumber.md): An object for representing and performing arithmetic on base-10 numbers.
- [NSNumber](nsnumber.md): An object wrapper for primitive scalar numeric values.
- [NSNumberFormatter](numberformatter.md): A formatter that converts between numeric values and their textual representations.
