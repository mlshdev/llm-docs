> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalcompact(_:)](https://developer.apple.com/documentation/foundation/nsdecimalcompact(_:))

# NSDecimalCompact(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Compacts the decimal structure for efficiency.

## Declaration

```swift
func NSDecimalCompact(_ number: UnsafeMutablePointer<Decimal>)
```

<a id="Discussion"></a>

## Discussion

Formats number so that calculations using it will take up as little memory as possible. All the `NSDecimal...` arithmetic functions expect compact [Decimal](decimal.md) arguments.

For more information, see [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i).

## See Also

### Performing arithmetic using references

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

# NSDecimalCompact (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Compacts the decimal structure for efficiency.

## Declaration

```objectivec
extern void NSDecimalCompact(NSDecimal *number);
```

<a id="Discussion"></a>

## Discussion

Formats number so that calculations using it will take up as little memory as possible. All the `NSDecimal...` arithmetic functions expect compact [NSDecimal](decimal.md) arguments.

For more information, see [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i).

## See Also

### Performing arithmetic using references

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
