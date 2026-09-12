> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/floatingpointformatstyle/currency/grouping(_:)](https://developer.apple.com/documentation/foundation/floatingpointformatstyle/currency/grouping(_:))

# grouping(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the format style to use the specified grouping.

## Declaration

```swift
func grouping(_ group: FloatingPointFormatStyle<Value>.Currency.Configuration.Grouping) -> FloatingPointFormatStyle<Value>.Currency
```

## Parameters

- `group`: The grouping to apply to the format style.

<a id="return-value"></a>

## Return Value

A floating-point currency format style modified to use the specified grouping.

## See Also

### Customizing style behavior

- [decimalSeparator(strategy:)](decimalseparator%28strategy_%29.md): Modifies the format style to use the specified decimal separator display strategy.
- [locale(\_:)](locale%28__%29.md): Conforms when `Value` conforms to `BinaryFloatingPoint`. Modifies the format style to use the specified locale.
- [precision(\_:)](precision%28__%29.md): Modifies the format style to use the specified precision.
- [presentation(\_:)](presentation%28__%29.md): Modifies the format style to use the specified presentation.
- [rounded(rule:increment:)](rounded%28rule_increment_%29.md): Modifies the format style to use the specified rounding rule and increment.
- [scale(\_:)](scale%28__%29.md): Modifies the format style to use the specified scale.
- [sign(strategy:)](sign%28strategy_%29.md): Modifies the format style to use the specified sign display strategy.
- [FloatingPointFormatStyle.Currency.Configuration](configuration.md): The type the format style uses for configuration settings.
- [CurrencyFormatStyleConfiguration](../../currencyformatstyleconfiguration.md): Configuration settings for formatting currency values.
