> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/floatingpointformatstyle/rounded(rule:increment:)](https://developer.apple.com/documentation/foundation/floatingpointformatstyle/rounded(rule:increment:))

# rounded(rule:increment:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the format style to use the specified rounding rule and increment.

## Declaration

```swift
func rounded(rule: FloatingPointFormatStyle<Value>.Configuration.RoundingRule = .toNearestOrEven, increment: Double? = nil) -> FloatingPointFormatStyle<Value>
```

## Parameters

- `rule`: The rounding rule to apply to the format style.
- `increment`: A multiple by which the formatter rounds the fractional part. The formatter produces a value that is an even multiple of this increment. If this parameter is `nil` (the default), the formatter doesn’t apply an increment.

<a id="return-value"></a>

## Return Value

A floating-point format style modified to use the specified rounding rule and increment.

<a id="Discussion"></a>

## Discussion

The following example creates a default [FloatingPointFormatStyle](../floatingpointformatstyle.md) for the `en_US` locale, and modifies its rounding behavior. It uses the [FloatingPointRoundingRule.up](https://developer.apple.com/documentation/swift/floatingpointroundingrule/up) rounding rule, and an increment of `0.25`. It then applies this style to an array of floating-point values, rounding them to the next greater increment of 0.25.

```swift
let roundedStyle = FloatingPointFormatStyle<Double>(locale: Locale(identifier: "en_US"))
    .rounded(rule: .up, increment: 0.25)
let nums = [1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6]
let roundedNums = nums.map { roundedStyle.format($0) } // ["1.00", "1.25", "1.25", "1.50", "1.50", "1.50", "1.75"]
```

## See Also

### Customizing style behavior

- [decimalSeparator(strategy:)](decimalseparator%28strategy_%29.md): Modifies the format style to use the specified decimal separator display strategy.
- [grouping(\_:)](grouping%28__%29.md): Modifies the format style to use the specified grouping.
- [locale(\_:)](locale%28__%29.md): Conforms when `Value` conforms to `BinaryFloatingPoint`. Modifies the format style to use the specified locale.
- [notation(\_:)](notation%28__%29.md): Modifies the format style to use the specified notation.
- [precision(\_:)](precision%28__%29.md): Modifies the format style to use the specified precision.
- [scale(\_:)](scale%28__%29.md): Modifies the format style to use the specified scale.
- [sign(strategy:)](sign%28strategy_%29.md): Modifies the format style to use the specified sign display strategy for displaying or omitting sign symbols.
- [FloatingPointFormatStyle.Configuration](configuration.md): The type the format style uses for configuration settings.
- [NumberFormatStyleConfiguration](../numberformatstyleconfiguration.md): Configuration settings for formatting numbers of different types.
