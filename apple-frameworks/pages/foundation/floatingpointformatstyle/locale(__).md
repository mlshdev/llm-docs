> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/floatingpointformatstyle/locale(_:)](https://developer.apple.com/documentation/foundation/floatingpointformatstyle/locale(_:))

# locale(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the format style to use the specified locale.

## Declaration

```swift
func locale(_ locale: Locale) -> FloatingPointFormatStyle<Value>
```

## Parameters

- `locale`: The locale to apply to the format style.

<a id="return-value"></a>

## Return Value

A floating-point format style modified to use the provided locale.

<a id="Discussion"></a>

## Discussion

Use this modifier to change the locale that an existing format style uses. To instead determine the locale this format style uses, use the [locale](locale.md) property.

The following example creates a default [FloatingPointFormatStyle](../floatingpointformatstyle.md) for the `en_US` locale, and applies the [notation(\_:)](../integerformatstyle/notation%28__%29.md) modifier to use compact name notation. Next, the sample creates a second style based on this first style, but using the German (`DE`) locale. It then applies each style to an array of floating-point values.

```swift
let compactStyle = FloatingPointFormatStyle<Double>(locale: Locale(identifier: "en_US"))
    .notation(.compactName)
let germanStyle = compactStyle.locale(Locale(identifier: "DE"))
let nums: [Double] = [100, 1000, 10000, 100000, 1000000]
let enUSCompactNums = nums.map { compactStyle.format($0) } // ["100", "1K", "10K", "100K", "1M"]
let deCompactNums = nums.map { germanStyle.format($0) } // ["100", "1000", "10.000", "100.000", "1 Mio."]

```

## See Also

### Customizing style behavior

- [decimalSeparator(strategy:)](decimalseparator%28strategy_%29.md): Modifies the format style to use the specified decimal separator display strategy.
- [grouping(\_:)](grouping%28__%29.md): Modifies the format style to use the specified grouping.
- [notation(\_:)](notation%28__%29.md): Modifies the format style to use the specified notation.
- [precision(\_:)](precision%28__%29.md): Modifies the format style to use the specified precision.
- [rounded(rule:increment:)](rounded%28rule_increment_%29.md): Modifies the format style to use the specified rounding rule and increment.
- [scale(\_:)](scale%28__%29.md): Modifies the format style to use the specified scale.
- [sign(strategy:)](sign%28strategy_%29.md): Modifies the format style to use the specified sign display strategy for displaying or omitting sign symbols.
- [FloatingPointFormatStyle.Configuration](configuration.md): The type the format style uses for configuration settings.
- [NumberFormatStyleConfiguration](../numberformatstyleconfiguration.md): Configuration settings for formatting numbers of different types.
