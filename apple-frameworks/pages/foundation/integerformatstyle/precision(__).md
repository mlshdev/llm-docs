> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/integerformatstyle/precision(_:)](https://developer.apple.com/documentation/foundation/integerformatstyle/precision(_:))

# precision(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the format style to use the specified precision.

## Declaration

```swift
func precision(_ p: IntegerFormatStyle<Value>.Configuration.Precision) -> IntegerFormatStyle<Value>
```

## Parameters

- `p`: The precision to apply to the format style.

<a id="return-value"></a>

## Return Value

An integer format style modified to use the specified precision.

<a id="Discussion"></a>

## Discussion

The [NumberFormatStyleConfiguration.Precision](../numberformatstyleconfiguration/precision.md) type lets you specify a fixed number of digits to show for a number’s integer and fractional parts, although [IntegerFormatStyle](../integerformatstyle.md) only uses the former. You can also set a fixed number of significant digits.

The following example creates a default [IntegerFormatStyle](../integerformatstyle.md) for the `en_US` locale, and a second style that uses a maximum of four significant digits. It then applies each style to an array of integers. The formatting that the modified style applies truncates precision to `0` after the fourth most significant digit.

```swift
let defaultStyle = IntegerFormatStyle<Int>(locale: Locale(identifier: "en_US"))
let precisionStyle = defaultStyle.precision(.significantDigits(1...4))
let nums = [123, 1234, 12345, 123456, 1234567]
let defaultNums = nums.map { defaultStyle.format($0) } // ["123", "1,234", "12,345", "123,456", "1,234,567"]
let precisionNums = nums.map { precisionStyle.format($0) } // ["123", "1,234", "12,340", "123,500", "1,235,000"]
```

## See Also

### Customizing style behavior

- [decimalSeparator(strategy:)](decimalseparator%28strategy_%29.md): Modifies the format style to use the specified decimal separator display strategy.
- [grouping(\_:)](grouping%28__%29.md): Modifies the format style to use the specified grouping.
- [notation(\_:)](notation%28__%29.md): Modifies the format style to use the specified notation.
- [rounded(rule:increment:)](rounded%28rule_increment_%29.md): Modifies the format style to use the specified rounding rule and increment.
- [scale(\_:)](scale%28__%29.md): Modifies the format style to use the specified scale.
- [sign(strategy:)](sign%28strategy_%29.md): Modifies the format style to use the specified sign display strategy for displaying or omitting sign symbols.
- [IntegerFormatStyle.Configuration](configuration.md): The type the format style uses for configuration settings.
- [NumberFormatStyleConfiguration](../numberformatstyleconfiguration.md): Configuration settings for formatting numbers of different types.
