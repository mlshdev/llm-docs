> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/formatstyle/percent/sign(strategy:)](https://developer.apple.com/documentation/foundation/decimal/formatstyle/percent/sign(strategy:))

# sign(strategy:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the format style to use the specified sign display strategy.

## Declaration

```swift
func sign(strategy: Decimal.FormatStyle.Percent.Configuration.SignDisplayStrategy) -> Decimal.FormatStyle.Percent
```

## Parameters

- `strategy`: The sign display strategy to apply to the format style.

<a id="return-value"></a>

## Return Value

A decimal format style modified to use the specified sign display strategy.

## See Also

### Customizing style behavior

- [decimalSeparator(strategy:)](decimalseparator%28strategy_%29.md): Modifies the format style to use the specified decimal separator display strategy.
- [grouping(\_:)](grouping%28__%29.md): Modifies the format style to use the specified grouping.
- [locale(\_:)](locale%28__%29.md): Modifies the format style to use the specified locale.
- [notation(\_:)](notation%28__%29.md): Modifies the format style to use the specified notation.
- [precision(\_:)](precision%28__%29.md): Modifies the format style to use the specified precision.
- [rounded(rule:increment:)](rounded%28rule_increment_%29.md): Modifies the format style to use the specified rounding rule and increment.
- [scale(\_:)](scale%28__%29.md): Modifies the format style to use the specified scale.
- [Decimal.FormatStyle.Percent.Configuration](configuration.md): The type the format style uses for configuration settings.
- [NumberFormatStyleConfiguration](../../../numberformatstyleconfiguration.md): Configuration settings for formatting numbers of different types.
