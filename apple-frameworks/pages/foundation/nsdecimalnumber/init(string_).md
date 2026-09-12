> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumber/init(string:)](https://developer.apple.com/documentation/foundation/nsdecimalnumber/init(string:))

# init(string:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a decimal number so that its value is equivalent to that in a given numeric string.

## Declaration

```swift
convenience init(string numberValue: String?)
```

## Parameters

- `numberValue`: A numeric string.

  Besides digits, `numberValue` can include an initial `+` or `–`; a single `E` or `e`, to indicate the exponent of a number in scientific notation; and a single decimal separator character to divide the fractional from the integral part of the number. For a listing of acceptable and unacceptable strings, see [init(string:locale:)](init%28string_locale_%29.md).

<a id="Discussion"></a>

## Discussion

Don’t use this initializer if `numberValue` has a fractional part, since the lack of a locale makes handling the decimal separator ambiguous. The separator is a period in some locales (like in the United States) and a comma in others (such as France).

To parse a numeric string with a fractional part, use [init(string:locale:)](init%28string_locale_%29.md) instead. When working with numeric representations with a known format, pass a fixed locale to ensure consistent results independent of the user’s current device settings. For localized parsing that uses the user’s current device settings, pass [current](../nslocale/current.md).

## See Also

### Initializing a Decimal Number

- [init(decimal:)](init%28decimal_%29.md): Initializes a decimal number to represent a given decimal.
- [init(mantissa:exponent:isNegative:)](init%28mantissa_exponent_isnegative_%29.md): Initializes a decimal number using the given mantissa, exponent, and sign.
- [init(string:locale:)](init%28string_locale_%29.md): Initializes a decimal number so that its value is equivalent to that in a given numeric string, interpreted using a given locale.

# initWithString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a decimal number so that its value is equivalent to that in a given numeric string.

## Declaration

```objectivec
- (instancetype) initWithString:(NSString *) numberValue;
```

## Parameters

- `numberValue`: A numeric string.

  Besides digits, `numberValue` can include an initial `+` or `–`; a single `E` or `e`, to indicate the exponent of a number in scientific notation; and a single decimal separator character to divide the fractional from the integral part of the number. For a listing of acceptable and unacceptable strings, see [initWithString:locale:](init%28string_locale_%29.md).

<a id="Discussion"></a>

## Discussion

Don’t use this initializer if `numberValue` has a fractional part, since the lack of a locale makes handling the decimal separator ambiguous. The separator is a period in some locales (like in the United States) and a comma in others (such as France).

To parse a numeric string with a fractional part, use [initWithString:locale:](init%28string_locale_%29.md) instead. When working with numeric representations with a known format, pass a fixed locale to ensure consistent results independent of the user’s current device settings. For localized parsing that uses the user’s current device settings, pass [currentLocale](../nslocale/current.md).

## See Also

### Initializing a Decimal Number

- [initWithDecimal:](init%28decimal_%29.md): Initializes a decimal number to represent a given decimal.
- [initWithMantissa:exponent:isNegative:](init%28mantissa_exponent_isnegative_%29.md): Initializes a decimal number using the given mantissa, exponent, and sign.
- [initWithString:locale:](init%28string_locale_%29.md): Initializes a decimal number so that its value is equivalent to that in a given numeric string, interpreted using a given locale.
