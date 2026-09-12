> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalround(_:_:_:_:)](https://developer.apple.com/documentation/foundation/nsdecimalround(_:_:_:_:))

# NSDecimalRound(\_:\_:\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Rounds off the decimal value.

## Declaration

```swift
func NSDecimalRound(_ result: UnsafeMutablePointer<Decimal>, _ number: UnsafePointer<Decimal>, _ scale: Int, _ roundingMode: NSDecimalNumber.RoundingMode)
```

<a id="Discussion"></a>

## Discussion

Rounds `number` off according to the parameters `scale` and `roundingMode` and stores the result in `result`.

The `scale` value specifies the number of digits `result` can have after its decimal point. `roundingMode` specifies the way that number is rounded off. There are four possible values for `roundingMode`: [NSDecimalNumber.RoundingMode.down](nsdecimalnumber/roundingmode/down.md), [NSDecimalNumber.RoundingMode.up](nsdecimalnumber/roundingmode/up.md), [NSDecimalNumber.RoundingMode.plain](nsdecimalnumber/roundingmode/plain.md), and [NSDecimalNumber.RoundingMode.bankers](nsdecimalnumber/roundingmode/bankers.md). For thorough discussions of `scale` and `roundingMode`, see [NSDecimalNumberBehaviors](nsdecimalnumberbehaviors.md).

For more information, see [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i).

## See Also

### Performing arithmetic using references

- [NSDecimalCompact(\_:)](nsdecimalcompact%28__%29.md): Compacts the decimal structure for efficiency.
- [NSDecimalAdd(\_:\_:\_:\_:)](nsdecimaladd%28________%29.md): Adds two decimal values.
- [NSDecimalSubtract(\_:\_:\_:\_:)](nsdecimalsubtract%28________%29.md): Subtracts one decimal value from another.
- [NSDecimalDivide(\_:\_:\_:\_:)](nsdecimaldivide%28________%29.md): Divides one decimal value by another.
- [NSDecimalMultiply(\_:\_:\_:\_:)](nsdecimalmultiply%28________%29.md): Multiplies two decimal numbers together.
- [NSDecimalMultiplyByPowerOf10(\_:\_:\_:\_:)](nsdecimalmultiplybypowerof10%28________%29.md): Multiplies a decimal by the specified power of 10.
- [NSDecimalPower(\_:\_:\_:\_:)](nsdecimalpower%28________%29.md): Raises the decimal value to the specified power.
- [NSDecimalNormalize(\_:\_:\_:)](nsdecimalnormalize%28______%29.md): Normalizes the internal format of two decimal numbers to simplify later operations.
- [Decimal.RoundingMode](decimal/roundingmode.md): An alias for an enumeration that specifies possible rounding modes.
- [NSDecimalNumber.RoundingMode](nsdecimalnumber/roundingmode.md): These constants specify rounding behaviors.
- [Decimal.CalculationError](decimal/calculationerror.md): An alias for a type that specifies possible calculation errors.
- [NSDecimalNumber.CalculationError](nsdecimalnumber/calculationerror.md): Calculation error constants used to describe an error in [exceptionDuringOperation(\_:error:leftOperand:rightOperand:)](nsdecimalnumberbehaviors/exceptionduringoperation%28__error_leftoperand_rightoperand_%29.md).

# NSDecimalRound (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Rounds off the decimal value.

## Declaration

```objectivec
extern void NSDecimalRound(NSDecimal *result, const NSDecimal *number, NSInteger scale, NSRoundingMode roundingMode);
```

<a id="Discussion"></a>

## Discussion

Rounds `number` off according to the parameters `scale` and `roundingMode` and stores the result in `result`.

The `scale` value specifies the number of digits `result` can have after its decimal point. `roundingMode` specifies the way that number is rounded off. There are four possible values for `roundingMode`: [NSRoundDown](nsdecimalnumber/roundingmode/down.md), [NSRoundUp](nsdecimalnumber/roundingmode/up.md), [NSRoundPlain](nsdecimalnumber/roundingmode/plain.md), and [NSRoundBankers](nsdecimalnumber/roundingmode/bankers.md). For thorough discussions of `scale` and `roundingMode`, see [NSDecimalNumberBehaviors](nsdecimalnumberbehaviors.md).

For more information, see [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i).

## See Also

### Performing arithmetic using references

- [NSDecimalCompact](nsdecimalcompact%28__%29.md): Compacts the decimal structure for efficiency.
- [NSDecimalAdd](nsdecimaladd%28________%29.md): Adds two decimal values.
- [NSDecimalSubtract](nsdecimalsubtract%28________%29.md): Subtracts one decimal value from another.
- [NSDecimalDivide](nsdecimaldivide%28________%29.md): Divides one decimal value by another.
- [NSDecimalMultiply](nsdecimalmultiply%28________%29.md): Multiplies two decimal numbers together.
- [NSDecimalMultiplyByPowerOf10](nsdecimalmultiplybypowerof10%28________%29.md): Multiplies a decimal by the specified power of 10.
- [NSDecimalPower](nsdecimalpower%28________%29.md): Raises the decimal value to the specified power.
- [NSDecimalNormalize](nsdecimalnormalize%28______%29.md): Normalizes the internal format of two decimal numbers to simplify later operations.
- [NSRoundingMode](nsdecimalnumber/roundingmode.md): These constants specify rounding behaviors.
- [NSCalculationError](nsdecimalnumber/calculationerror.md): Calculation error constants used to describe an error in [exceptionDuringOperation:error:leftOperand:rightOperand:](nsdecimalnumberbehaviors/exceptionduringoperation%28__error_leftoperand_rightoperand_%29.md).
