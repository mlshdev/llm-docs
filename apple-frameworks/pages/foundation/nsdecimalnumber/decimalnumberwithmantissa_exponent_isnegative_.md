> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumber/decimalnumberwithmantissa:exponent:isnegative:](https://developer.apple.com/documentation/foundation/nsdecimalnumber/decimalnumberwithmantissa:exponent:isnegative:)

# decimalNumberWithMantissa:exponent:isNegative:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a decimal number equivalent to the number specified by the arguments.

## Declaration

```objectivec
+ (NSDecimalNumber *) decimalNumberWithMantissa:(unsigned long long) mantissa exponent:(short) exponent isNegative:(BOOL) flag;
```

## Parameters

- `mantissa`: The mantissa for the new decimal number object.
- `exponent`: The exponent for the new decimal number object.
- `flag`: A Boolean value that specifies whether the sign of the number is negative.

<a id="Discussion"></a>

## Discussion

The arguments express a number in a kind of scientific notation that requires the mantissa to be an integer. So, for example, if the number to be represented is `–12.345`, it is expressed as `12345x10^–3`—`mantissa` is `12345`; `exponent` is `–3`; and `flag` is [true](https://developer.apple.com/documentation/swift/true), as illustrated by the following example.

```objc
NSDecimalNumber *number = [NSDecimalNumber decimalNumberWithMantissa:12345
                                           exponent:-3
                                           isNegative:YES];
```

> **Important**

>  `NSDecimalNumber` cannot represent negative zero. Initializing an `NSDecimalNumber` by passing 0 to `mantissa` and `exponent` and [true](https://developer.apple.com/documentation/swift/true) to `flag` returns [notANumber](notanumber.md) (`NaN`).

## See Also

### Creating a Decimal Number

- [decimalNumberWithDecimal:](decimalnumberwithdecimal_.md): Creates and returns a decimal number equivalent to a given decimal structure.
- [decimalNumberWithString:](decimalnumberwithstring_.md): Creates a decimal number whose value is equivalent to that in a given numeric string.
- [decimalNumberWithString:locale:](decimalnumberwithstring_locale_.md): Creates a decimal number whose value is equivalent to that in a given numeric string, interpreted using a given locale.
- [one](one.md): A decimal number equivalent to the number 1.0.
- [zero](zero.md): A decimal number equivalent to the number 0.0.
- [notANumber](notanumber.md): A decimal number that specifies no number.
