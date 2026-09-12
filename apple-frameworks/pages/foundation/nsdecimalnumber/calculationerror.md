> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumber/calculationerror](https://developer.apple.com/documentation/foundation/nsdecimalnumber/calculationerror)

# NSDecimalNumber.CalculationError (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculation error constants used to describe an error in [exceptionDuringOperation(\_:error:leftOperand:rightOperand:)](../nsdecimalnumberbehaviors/exceptionduringoperation%28__error_leftoperand_rightoperand_%29.md).

## Declaration

```swift
enum CalculationError
```

## Topics

### Constants

- [NSDecimalNumber.CalculationError.noError](calculationerror/noerror.md): No error occurred.
- [NSDecimalNumber.CalculationError.lossOfPrecision](calculationerror/lossofprecision.md): The number can’t be represented in 38 significant digits.
- [NSDecimalNumber.CalculationError.overflow](calculationerror/overflow.md): The number is too large to represent.
- [NSDecimalNumber.CalculationError.underflow](calculationerror/underflow.md): The number is too small to represent.
- [NSDecimalNumber.CalculationError.divideByZero](calculationerror/dividebyzero.md): The caller tried to divide by `0`.

### Initializers

- [init(rawValue:)](calculationerror/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing arithmetic using references

- [NSDecimalCompact(\_:)](../nsdecimalcompact%28__%29.md): Compacts the decimal structure for efficiency.
- [NSDecimalAdd(\_:\_:\_:\_:)](../nsdecimaladd%28________%29.md): Adds two decimal values.
- [NSDecimalSubtract(\_:\_:\_:\_:)](../nsdecimalsubtract%28________%29.md): Subtracts one decimal value from another.
- [NSDecimalDivide(\_:\_:\_:\_:)](../nsdecimaldivide%28________%29.md): Divides one decimal value by another.
- [NSDecimalMultiply(\_:\_:\_:\_:)](../nsdecimalmultiply%28________%29.md): Multiplies two decimal numbers together.
- [NSDecimalMultiplyByPowerOf10(\_:\_:\_:\_:)](../nsdecimalmultiplybypowerof10%28________%29.md): Multiplies a decimal by the specified power of 10.
- [NSDecimalRound(\_:\_:\_:\_:)](../nsdecimalround%28________%29.md): Rounds off the decimal value.
- [NSDecimalPower(\_:\_:\_:\_:)](../nsdecimalpower%28________%29.md): Raises the decimal value to the specified power.
- [NSDecimalNormalize(\_:\_:\_:)](../nsdecimalnormalize%28______%29.md): Normalizes the internal format of two decimal numbers to simplify later operations.
- [Decimal.RoundingMode](../decimal/roundingmode.md): An alias for an enumeration that specifies possible rounding modes.
- [NSDecimalNumber.RoundingMode](roundingmode.md): These constants specify rounding behaviors.
- [Decimal.CalculationError](../decimal/calculationerror.md): An alias for a type that specifies possible calculation errors.

# NSCalculationError (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculation error constants used to describe an error in [exceptionDuringOperation:error:leftOperand:rightOperand:](../nsdecimalnumberbehaviors/exceptionduringoperation%28__error_leftoperand_rightoperand_%29.md).

## Declaration

```objectivec
enum NSCalculationError : NSUInteger;
```

## Topics

### Constants

- [NSCalculationNoError](calculationerror/noerror.md): No error occurred.
- [NSCalculationLossOfPrecision](calculationerror/lossofprecision.md): The number can’t be represented in 38 significant digits.
- [NSCalculationOverflow](calculationerror/overflow.md): The number is too large to represent.
- [NSCalculationUnderflow](calculationerror/underflow.md): The number is too small to represent.
- [NSCalculationDivideByZero](calculationerror/dividebyzero.md): The caller tried to divide by `0`.

## See Also

### Performing arithmetic using references

- [NSDecimalCompact](../nsdecimalcompact%28__%29.md): Compacts the decimal structure for efficiency.
- [NSDecimalAdd](../nsdecimaladd%28________%29.md): Adds two decimal values.
- [NSDecimalSubtract](../nsdecimalsubtract%28________%29.md): Subtracts one decimal value from another.
- [NSDecimalDivide](../nsdecimaldivide%28________%29.md): Divides one decimal value by another.
- [NSDecimalMultiply](../nsdecimalmultiply%28________%29.md): Multiplies two decimal numbers together.
- [NSDecimalMultiplyByPowerOf10](../nsdecimalmultiplybypowerof10%28________%29.md): Multiplies a decimal by the specified power of 10.
- [NSDecimalRound](../nsdecimalround%28________%29.md): Rounds off the decimal value.
- [NSDecimalPower](../nsdecimalpower%28________%29.md): Raises the decimal value to the specified power.
- [NSDecimalNormalize](../nsdecimalnormalize%28______%29.md): Normalizes the internal format of two decimal numbers to simplify later operations.
- [NSRoundingMode](roundingmode.md): These constants specify rounding behaviors.
