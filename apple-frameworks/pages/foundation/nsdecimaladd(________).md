> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimaladd(_:_:_:_:)](https://developer.apple.com/documentation/foundation/nsdecimaladd(_:_:_:_:))

# NSDecimalAdd(\_:\_:\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds two decimal values.

## Declaration

```swift
func NSDecimalAdd(_ result: UnsafeMutablePointer<Decimal>, _ leftOperand: UnsafePointer<Decimal>, _ rightOperand: UnsafePointer<Decimal>, _ roundingMode: NSDecimalNumber.RoundingMode) -> NSDecimalNumber.CalculationError
```

<a id="Discussion"></a>

## Discussion

Adds `leftOperand` to `rightOperand` and stores the sum in `result`. [Decimal](decimal.md) instances can represent a number with up to 38 significant digits. If a number is more precise than that, it must be rounded off. `roundingMode` determines how to round it off. There are four possible rounding modes:

- [NSDecimalNumber.RoundingMode.down](nsdecimalnumber/roundingmode/down.md)
- [NSDecimalNumber.RoundingMode.up](nsdecimalnumber/roundingmode/up.md)
- [NSDecimalNumber.RoundingMode.plain](nsdecimalnumber/roundingmode/plain.md)
- [NSDecimalNumber.RoundingMode.bankers](nsdecimalnumber/roundingmode/bankers.md)

The return value indicates whether any machine limitations were encountered in the addition. If none were encountered, the function returns `NSCalculationNoError`. Otherwise it may return one of the following values: `NSCalculationLossOfPrecision`, `NSCalculationOverflow` or `NSCalculationUnderflow`. For descriptions of all these error conditions, see [exceptionDuringOperation(\_:error:leftOperand:rightOperand:)](nsdecimalnumberbehaviors/exceptionduringoperation%28__error_leftoperand_rightoperand_%29.md) in NSDecimalNumberBehaviors.

For more information, see [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i).

## See Also

### Performing arithmetic using references

- [NSDecimalCompact(\_:)](nsdecimalcompact%28__%29.md): Compacts the decimal structure for efficiency.
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

# NSDecimalAdd (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds two decimal values.

## Declaration

```objectivec
extern NSCalculationError NSDecimalAdd(NSDecimal *result, const NSDecimal *leftOperand, const NSDecimal *rightOperand, NSRoundingMode roundingMode);
```

<a id="Discussion"></a>

## Discussion

Adds `leftOperand` to `rightOperand` and stores the sum in `result`. [NSDecimal](decimal.md) instances can represent a number with up to 38 significant digits. If a number is more precise than that, it must be rounded off. `roundingMode` determines how to round it off. There are four possible rounding modes:

- [NSRoundDown](nsdecimalnumber/roundingmode/down.md)
- [NSRoundUp](nsdecimalnumber/roundingmode/up.md)
- [NSRoundPlain](nsdecimalnumber/roundingmode/plain.md)
- [NSRoundBankers](nsdecimalnumber/roundingmode/bankers.md)

The return value indicates whether any machine limitations were encountered in the addition. If none were encountered, the function returns `NSCalculationNoError`. Otherwise it may return one of the following values: `NSCalculationLossOfPrecision`, `NSCalculationOverflow` or `NSCalculationUnderflow`. For descriptions of all these error conditions, see [exceptionDuringOperation:error:leftOperand:rightOperand:](nsdecimalnumberbehaviors/exceptionduringoperation%28__error_leftoperand_rightoperand_%29.md) in NSDecimalNumberBehaviors.

For more information, see [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i).

## See Also

### Performing arithmetic using references

- [NSDecimalCompact](nsdecimalcompact%28__%29.md): Compacts the decimal structure for efficiency.
- [NSDecimalSubtract](nsdecimalsubtract%28________%29.md): Subtracts one decimal value from another.
- [NSDecimalDivide](nsdecimaldivide%28________%29.md): Divides one decimal value by another.
- [NSDecimalMultiply](nsdecimalmultiply%28________%29.md): Multiplies two decimal numbers together.
- [NSDecimalMultiplyByPowerOf10](nsdecimalmultiplybypowerof10%28________%29.md): Multiplies a decimal by the specified power of 10.
- [NSDecimalRound](nsdecimalround%28________%29.md): Rounds off the decimal value.
- [NSDecimalPower](nsdecimalpower%28________%29.md): Raises the decimal value to the specified power.
- [NSDecimalNormalize](nsdecimalnormalize%28______%29.md): Normalizes the internal format of two decimal numbers to simplify later operations.
- [NSRoundingMode](nsdecimalnumber/roundingmode.md): These constants specify rounding behaviors.
- [NSCalculationError](nsdecimalnumber/calculationerror.md): Calculation error constants used to describe an error in [exceptionDuringOperation:error:leftOperand:rightOperand:](nsdecimalnumberbehaviors/exceptionduringoperation%28__error_leftoperand_rightoperand_%29.md).
