> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/formatstyle/currency/rounded(rule:increment:)](https://developer.apple.com/documentation/foundation/decimal/formatstyle/currency/rounded(rule:increment:))

# rounded(rule:increment:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the format style to use the specified rounding rule and increment.

## Declaration

```swift
func rounded(rule: Decimal.FormatStyle.Currency.Configuration.RoundingRule = .toNearestOrEven, increment: Int? = nil) -> Decimal.FormatStyle.Currency
```

## Parameters

- `rule`: The rounding rule to apply to the format style.
- `increment`: A multiple by which the formatter rounds the fractional part. The formatter produces a value that is an even multiple of this increment. If this parameter is `nil` (the default), the formatter doesn’t apply an increment.

<a id="return-value"></a>

## Return Value

A decimal currency format style modified to use the specified rounding rule and increment.

## See Also

### Customizing style behavior

- [decimalSeparator(strategy:)](decimalseparator%28strategy_%29.md): Modifies the format style to use the specified decimal separator display strategy.
- [grouping(\_:)](grouping%28__%29.md): Modifies the format style to use the specified grouping.
- [locale(\_:)](locale%28__%29.md): Modifies the format style to use the specified locale.
- [precision(\_:)](precision%28__%29.md): Modifies the format style to use the specified precision.
- [presentation(\_:)](presentation%28__%29.md): Modifies the format style to use the specified presentation.
- [scale(\_:)](scale%28__%29.md): Modifies the format style to use the specified scale.
- [sign(strategy:)](sign%28strategy_%29.md): Modifies the format style to use the specified sign display strategy.
- [Decimal.FormatStyle.Currency.Configuration](configuration.md): The type the format style uses for configuration settings.
- [CurrencyFormatStyleConfiguration](../../../currencyformatstyleconfiguration.md): Configuration settings for formatting currency values.
