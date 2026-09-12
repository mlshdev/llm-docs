> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/integerformatstyle/currency/scale(_:)](https://developer.apple.com/documentation/foundation/integerformatstyle/currency/scale(_:))

# scale(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the format style to use the specified scale.

## Declaration

```swift
func scale(_ multiplicand: Double) -> IntegerFormatStyle<Value>.Currency
```

## Parameters

- `multiplicand`: The multiplicand to apply to the format style.

<a id="return-value"></a>

## Return Value

An integer format style modified to use the specified scale.

## See Also

### Customizing style behavior

- [decimalSeparator(strategy:)](decimalseparator%28strategy_%29.md): Modifies the format style to use the specified decimal separator display strategy.
- [grouping(\_:)](grouping%28__%29.md): Modifies the format style to use the specified grouping.
- [locale(\_:)](locale%28__%29.md): Conforms when `Value` conforms to `BinaryInteger`. Modifies the format style to use the specified locale.
- [precision(\_:)](precision%28__%29.md): Modifies the format style to use the specified precision.
- [presentation(\_:)](presentation%28__%29.md): Modifies the format style to use the specified presentation.
- [rounded(rule:increment:)](rounded%28rule_increment_%29.md): Modifies the format style to use the specified rounding rule and increment.
- [sign(strategy:)](sign%28strategy_%29.md): Modifies the format style to use the specified sign display strategy.
- [IntegerFormatStyle.Currency.Configuration](configuration.md): The type the format style uses for configuration settings.
- [CurrencyFormatStyleConfiguration](../../currencyformatstyleconfiguration.md): Configuration settings for formatting currency values.
