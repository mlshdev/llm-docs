> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumber/init(mantissa:exponent:isnegative:)](https://developer.apple.com/documentation/foundation/nsdecimalnumber/init(mantissa:exponent:isnegative:))

# init(mantissa:exponent:isNegative:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a decimal number using the given mantissa, exponent, and sign.

## Declaration

```swift
convenience init(mantissa: UInt64, exponent: Int16, isNegative flag: Bool)
```

## Parameters

- `mantissa`: The mantissa for the new decimal number object.
- `exponent`: The exponent for the new decimal number object.
- `flag`: A Boolean value that specifies whether the sign of the number is negative.

<a id="return-value"></a>

## Return Value

An `NSDecimalNumber` object initialized using the given mantissa, exponent, and sign.

<a id="Discussion"></a>

## Discussion

The arguments express a number in a type of scientific notation that requires the mantissa to be an integer. So, for example, if the number to be represented is 1.23, it is expressed as 123x10^–2—`mantissa` is 123; `exponent` is –2; and `isNegative`, which refers to the sign of the mantissa, is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Initializing a Decimal Number

- [init(decimal:)](init%28decimal_%29.md): Initializes a decimal number to represent a given decimal.
- [init(string:)](init%28string_%29.md): Initializes a decimal number so that its value is equivalent to that in a given numeric string.
- [init(string:locale:)](init%28string_locale_%29.md): Initializes a decimal number so that its value is equivalent to that in a given numeric string, interpreted using a given locale.

# initWithMantissa:exponent:isNegative: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a decimal number using the given mantissa, exponent, and sign.

## Declaration

```objectivec
- (instancetype) initWithMantissa:(unsigned long long) mantissa exponent:(short) exponent isNegative:(BOOL) flag;
```

## Parameters

- `mantissa`: The mantissa for the new decimal number object.
- `exponent`: The exponent for the new decimal number object.
- `flag`: A Boolean value that specifies whether the sign of the number is negative.

<a id="return-value"></a>

## Return Value

An `NSDecimalNumber` object initialized using the given mantissa, exponent, and sign.

<a id="Discussion"></a>

## Discussion

The arguments express a number in a type of scientific notation that requires the mantissa to be an integer. So, for example, if the number to be represented is 1.23, it is expressed as 123x10^–2—`mantissa` is 123; `exponent` is –2; and `isNegative`, which refers to the sign of the mantissa, is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [decimalNumberWithMantissa:exponent:isNegative:](decimalnumberwithmantissa_exponent_isnegative_.md): Creates and returns a decimal number equivalent to the number specified by the arguments.

### Initializing a Decimal Number

- [initWithDecimal:](init%28decimal_%29.md): Initializes a decimal number to represent a given decimal.
- [initWithString:](init%28string_%29.md): Initializes a decimal number so that its value is equivalent to that in a given numeric string.
- [initWithString:locale:](init%28string_locale_%29.md): Initializes a decimal number so that its value is equivalent to that in a given numeric string, interpreted using a given locale.
