> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/integerformatstyle/currency/locale(_:)](https://developer.apple.com/documentation/foundation/integerformatstyle/currency/locale(_:))

# locale(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the format style to use the specified locale.

## Declaration

```swift
func locale(_ locale: Locale) -> IntegerFormatStyle<Value>.Currency
```

## Parameters

- `locale`: The locale to apply to the format style.

<a id="return-value"></a>

## Return Value

An integer currency format style with the provided locale.

<a id="Discussion"></a>

## Discussion

Use this format style to change the locale used by an existing format style. To instead determine the locale used by this format style, use the [locale](locale.md) property.

## See Also

### Customizing style behavior

- [decimalSeparator(strategy:)](decimalseparator%28strategy_%29.md): Modifies the format style to use the specified decimal separator display strategy.
- [grouping(\_:)](grouping%28__%29.md): Modifies the format style to use the specified grouping.
- [precision(\_:)](precision%28__%29.md): Modifies the format style to use the specified precision.
- [presentation(\_:)](presentation%28__%29.md): Modifies the format style to use the specified presentation.
- [rounded(rule:increment:)](rounded%28rule_increment_%29.md): Modifies the format style to use the specified rounding rule and increment.
- [scale(\_:)](scale%28__%29.md): Modifies the format style to use the specified scale.
- [sign(strategy:)](sign%28strategy_%29.md): Modifies the format style to use the specified sign display strategy.
- [IntegerFormatStyle.Currency.Configuration](configuration.md): The type the format style uses for configuration settings.
- [CurrencyFormatStyleConfiguration](../../currencyformatstyleconfiguration.md): Configuration settings for formatting currency values.
