> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumber/init(string:locale:)](https://developer.apple.com/documentation/foundation/nsdecimalnumber/init(string:locale:))

# init(string:locale:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a decimal number so that its value is equivalent to that in a given numeric string, interpreted using a given locale.

## Declaration

```swift
convenience init(string numberValue: String?, locale: Any?)
```

## Parameters

- `numberValue`: A numeric string.

  Besides digits, `numberValue` can include an initial `+` or `–`; a single `E` or `e`, to indicate the exponent of a number in scientific notation; and a single decimal separator character to divide the fractional from the integral part of the number.
- `locale`: A dictionary that defines the locale (specifically the [decimalSeparator](../nslocale/key/decimalseparator.md)) to use to interpret the number in `numberValue`.

<a id="Discussion"></a>

## Discussion

The locale parameter determines whether the `decimalSeparator` is a period (like in the United States) or a comma (like in France).

The following strings show examples of acceptable values for `numberValue`:

- `2500.6` (or `2500,6`, depending on locale)
- `–2500.6` (or `–2500,6`)
- `–2.5006e3` (or `–2,5006e3`)
- `–2.5006E3` (or `–2,5006E3`)

The following strings are unacceptable:

- `2,500.6`
- `2500 3/5`
- `2.5006x10e3`
- `two thousand five hundred and six tenths`

## See Also

### Initializing a Decimal Number

- [init(decimal:)](init%28decimal_%29.md): Initializes a decimal number to represent a given decimal.
- [init(mantissa:exponent:isNegative:)](init%28mantissa_exponent_isnegative_%29.md): Initializes a decimal number using the given mantissa, exponent, and sign.
- [init(string:)](init%28string_%29.md): Initializes a decimal number so that its value is equivalent to that in a given numeric string.

# initWithString:locale: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a decimal number so that its value is equivalent to that in a given numeric string, interpreted using a given locale.

## Declaration

```objectivec
- (instancetype) initWithString:(NSString *) numberValue locale:(id) locale;
```

## Parameters

- `numberValue`: A numeric string.

  Besides digits, `numberValue` can include an initial `+` or `–`; a single `E` or `e`, to indicate the exponent of a number in scientific notation; and a single decimal separator character to divide the fractional from the integral part of the number.
- `locale`: A dictionary that defines the locale (specifically the [NSLocaleDecimalSeparator](../nslocale/key/decimalseparator.md)) to use to interpret the number in `numberValue`.

<a id="Discussion"></a>

## Discussion

The locale parameter determines whether the `decimalSeparator` is a period (like in the United States) or a comma (like in France).

The following strings show examples of acceptable values for `numberValue`:

- `2500.6` (or `2500,6`, depending on locale)
- `–2500.6` (or `–2500,6`)
- `–2.5006e3` (or `–2,5006e3`)
- `–2.5006E3` (or `–2,5006E3`)

The following strings are unacceptable:

- `2,500.6`
- `2500 3/5`
- `2.5006x10e3`
- `two thousand five hundred and six tenths`

## See Also

### Related Documentation

- [decimalNumberWithString:locale:](decimalnumberwithstring_locale_.md): Creates a decimal number whose value is equivalent to that in a given numeric string, interpreted using a given locale.

### Initializing a Decimal Number

- [initWithDecimal:](init%28decimal_%29.md): Initializes a decimal number to represent a given decimal.
- [initWithMantissa:exponent:isNegative:](init%28mantissa_exponent_isnegative_%29.md): Initializes a decimal number using the given mantissa, exponent, and sign.
- [initWithString:](init%28string_%29.md): Initializes a decimal number so that its value is equivalent to that in a given numeric string.
