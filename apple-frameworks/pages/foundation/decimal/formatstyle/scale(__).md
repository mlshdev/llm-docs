> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/formatstyle/scale(_:)](https://developer.apple.com/documentation/foundation/decimal/formatstyle/scale(_:))

# scale(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the format style to use the specified scale.

## Declaration

```swift
func scale(_ multiplicand: Double) -> Decimal.FormatStyle
```

## Parameters

- `multiplicand`: The multiplicand to apply to the format style.

<a id="return-value"></a>

## Return Value

A decimal format style modified to use the specified scale.

<a id="Discussion"></a>

## Discussion

The following example creates a default [Decimal.FormatStyle](../formatstyle.md) for the `en_US` locale, and a second style that scales by a `multiplicand` of `0.001`. It then applies each style to an array of decimal values. The formatting that the modified style applies expresses each value in terms of one-thousandths.

```swift
let defaultStyle = Decimal.FormatStyle(locale: Locale(identifier: "en_US"))
let scaledStyle = defaultStyle.scale(0.001)
let nums: [Decimal] = [100.1, 1000.2, 10000.3, 100000.4, 1000000.5]
let defaultNums = nums.map { defaultStyle.format($0) } // ["100.1", "1,000.2", "10,000.3", "100,000.4", "1,000,000.5"]
let scaledNums = nums.map { scaledStyle.format($0) } // ["0.1001", "1.0002", "10.0003", "100.0004", "1,000.0005"]
```

## See Also

### Customizing style behavior

- [decimalSeparator(strategy:)](decimalseparator%28strategy_%29.md): Modifies the format style to use the specified decimal separator display strategy.
- [grouping(\_:)](grouping%28__%29.md): Modifies the format style to use the specified grouping.
- [locale(\_:)](locale%28__%29.md): Modifies the format style to use the specified locale.
- [notation(\_:)](notation%28__%29.md): Modifies the format style to use the specified notation.
- [precision(\_:)](precision%28__%29.md): Modifies the format style to use the specified precision.
- [rounded(rule:increment:)](rounded%28rule_increment_%29.md): Modifies the format style to use the specified rounding rule and increment.
- [sign(strategy:)](sign%28strategy_%29.md): Modifies the format style to use the specified sign display strategy for displaying or omitting sign symbols.
- [Decimal.FormatStyle.Configuration](configuration.md): The type the format style uses for configuration settings.
- [NumberFormatStyleConfiguration](../../numberformatstyleconfiguration.md): Configuration settings for formatting numbers of different types.
