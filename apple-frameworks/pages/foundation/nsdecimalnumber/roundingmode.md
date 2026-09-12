> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumber/roundingmode](https://developer.apple.com/documentation/foundation/nsdecimalnumber/roundingmode)

# NSDecimalNumber.RoundingMode (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants specify rounding behaviors.

## Declaration

```swift
enum RoundingMode
```

<a id="overview"></a>

## Overview

The rounding mode matters only if the [scale()](../nsdecimalnumberbehaviors/scale%28%29.md) method sets a limit on the precision of `NSDecimalNumber` return values. It has no effect if [scale()](../nsdecimalnumberbehaviors/scale%28%29.md) returns `NSDecimalNoScale`. Assuming that [scale()](../nsdecimalnumberbehaviors/scale%28%29.md) returns 1, the rounding mode has the following effects on various original values:

| Original Value | NSRoundPlain | NSRoundDown & NS RoundUp | NSRoundBankers |
| --- | --- | --- | --- |
| 1.24 | 1.2 | 1.2 & 1.3 | 1.2 |
| 1.26 | 1.3 | 1.2 & 1.3 | 1.3 |
| 1.25 | 1.3 | 1.2 & 1.3 | 1.2 |
| 1.35 | 1.4 | 1.3  & 1.4 | 1.4 |
| –1.35 | –1.4 | –1.4  & -1.3 | –1.4 |

## Topics

### Constants

- [NSDecimalNumber.RoundingMode.plain](roundingmode/plain.md): Round to the closest possible return value; when caught halfway between two positive numbers, round up; when caught between two negative numbers, round down.
- [NSDecimalNumber.RoundingMode.down](roundingmode/down.md): Round return values down.
- [NSDecimalNumber.RoundingMode.up](roundingmode/up.md): Round return values up.
- [NSDecimalNumber.RoundingMode.bankers](roundingmode/bankers.md): Round to the closest possible return value; when halfway between two possibilities, return the possibility whose last digit is even.

### Initializers

- [init(rawValue:)](roundingmode/init%28rawvalue_%29.md)

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
- [Decimal.CalculationError](../decimal/calculationerror.md): An alias for a type that specifies possible calculation errors.
- [NSDecimalNumber.CalculationError](calculationerror.md): Calculation error constants used to describe an error in [exceptionDuringOperation(\_:error:leftOperand:rightOperand:)](../nsdecimalnumberbehaviors/exceptionduringoperation%28__error_leftoperand_rightoperand_%29.md).

# NSRoundingMode (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants specify rounding behaviors.

## Declaration

```objectivec
enum NSRoundingMode : NSUInteger;
```

<a id="overview"></a>

## Overview

The rounding mode matters only if the [scale](../nsdecimalnumberbehaviors/scale%28%29.md) method sets a limit on the precision of `NSDecimalNumber` return values. It has no effect if [scale](../nsdecimalnumberbehaviors/scale%28%29.md) returns `NSDecimalNoScale`. Assuming that [scale](../nsdecimalnumberbehaviors/scale%28%29.md) returns 1, the rounding mode has the following effects on various original values:

| Original Value | NSRoundPlain | NSRoundDown & NS RoundUp | NSRoundBankers |
| --- | --- | --- | --- |
| 1.24 | 1.2 | 1.2 & 1.3 | 1.2 |
| 1.26 | 1.3 | 1.2 & 1.3 | 1.3 |
| 1.25 | 1.3 | 1.2 & 1.3 | 1.2 |
| 1.35 | 1.4 | 1.3  & 1.4 | 1.4 |
| –1.35 | –1.4 | –1.4  & -1.3 | –1.4 |

## Topics

### Constants

- [NSRoundPlain](roundingmode/plain.md): Round to the closest possible return value; when caught halfway between two positive numbers, round up; when caught between two negative numbers, round down.
- [NSRoundDown](roundingmode/down.md): Round return values down.
- [NSRoundUp](roundingmode/up.md): Round return values up.
- [NSRoundBankers](roundingmode/bankers.md): Round to the closest possible return value; when halfway between two possibilities, return the possibility whose last digit is even.

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
- [NSCalculationError](calculationerror.md): Calculation error constants used to describe an error in [exceptionDuringOperation:error:leftOperand:rightOperand:](../nsdecimalnumberbehaviors/exceptionduringoperation%28__error_leftoperand_rightoperand_%29.md).
