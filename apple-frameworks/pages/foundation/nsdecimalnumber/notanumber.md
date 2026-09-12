> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumber/notanumber](https://developer.apple.com/documentation/foundation/nsdecimalnumber/notanumber)

# notANumber (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A decimal number that specifies no number.

## Declaration

```swift
@NSCopying class var notANumber: NSDecimalNumber { get }
```

<a id="return-value"></a>

## Return Value

An `NSDecimalNumber` object that specifies no number.

<a id="Discussion"></a>

## Discussion

Any arithmetic method receiving [notANumber](notanumber.md) as an argument returns [notANumber](notanumber.md).

This value can be a useful way of handling non-numeric data in an input file. This method can also be a useful response to calculation errors. For more information on calculation errors, see the [exceptionDuringOperation(\_:error:leftOperand:rightOperand:)](../nsdecimalnumberbehaviors/exceptionduringoperation%28__error_leftoperand_rightoperand_%29.md) method description in the [NSDecimalNumberBehaviors](../nsdecimalnumberbehaviors.md) protocol specification.

## See Also

### Creating a Decimal Number

- [one](one.md): A decimal number equivalent to the number 1.0.
- [zero](zero.md): A decimal number equivalent to the number 0.0.

# notANumber (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A decimal number that specifies no number.

## Declaration

```objectivec
@property (class, copy, readonly) NSDecimalNumber * notANumber;
```

<a id="return-value"></a>

## Return Value

An `NSDecimalNumber` object that specifies no number.

<a id="Discussion"></a>

## Discussion

Any arithmetic method receiving [notANumber](notanumber.md) as an argument returns [notANumber](notanumber.md).

This value can be a useful way of handling non-numeric data in an input file. This method can also be a useful response to calculation errors. For more information on calculation errors, see the [exceptionDuringOperation:error:leftOperand:rightOperand:](../nsdecimalnumberbehaviors/exceptionduringoperation%28__error_leftoperand_rightoperand_%29.md) method description in the [NSDecimalNumberBehaviors](../nsdecimalnumberbehaviors.md) protocol specification.

## See Also

### Creating a Decimal Number

- [decimalNumberWithDecimal:](decimalnumberwithdecimal_.md): Creates and returns a decimal number equivalent to a given decimal structure.
- [decimalNumberWithMantissa:exponent:isNegative:](decimalnumberwithmantissa_exponent_isnegative_.md): Creates and returns a decimal number equivalent to the number specified by the arguments.
- [decimalNumberWithString:](decimalnumberwithstring_.md): Creates a decimal number whose value is equivalent to that in a given numeric string.
- [decimalNumberWithString:locale:](decimalnumberwithstring_locale_.md): Creates a decimal number whose value is equivalent to that in a given numeric string, interpreted using a given locale.
- [one](one.md): A decimal number equivalent to the number 1.0.
- [zero](zero.md): A decimal number equivalent to the number 0.0.
