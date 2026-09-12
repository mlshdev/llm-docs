> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/floatingpointformatstyle/grouping(_:)](https://developer.apple.com/documentation/foundation/floatingpointformatstyle/grouping(_:))

# grouping(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the format style to use the specified grouping.

## Declaration

```swift
func grouping(_ group: FloatingPointFormatStyle<Value>.Configuration.Grouping) -> FloatingPointFormatStyle<Value>
```

## Parameters

- `group`: The grouping to apply to the format style.

<a id="return-value"></a>

## Return Value

A floating-point format style modified to use the specified grouping.

<a id="Discussion"></a>

## Discussion

The following example creates a default [FloatingPointFormatStyle](../floatingpointformatstyle.md) for the `en_US` locale, and a second style that never uses grouping. It then applies each style to an array of floating-point values. The formatting that the the modified style applies eliminates the three-digit grouping usually performed for the `en_US` locale.

```swift
let defaultStyle = FloatingPointFormatStyle<Double>(locale: Locale(identifier: "en_US"))
let neverStyle = defaultStyle.grouping(.never)
let nums = [100.1, 1000.2, 10000.3, 100000.4, 1000000.5]
let defaultNums = nums.map { defaultStyle.format($0) } // ["100.1", "1,000.2", "10,000.3", "100,000.4", "1,000,000.5"]
let neverNums = nums.map { neverStyle.format($0) } // ["100.1", "1000.2", "10000.3", "100000.4", "1000000.5"]

```

## See Also

### Customizing style behavior

- [decimalSeparator(strategy:)](decimalseparator%28strategy_%29.md): Modifies the format style to use the specified decimal separator display strategy.
- [locale(\_:)](locale%28__%29.md): Conforms when `Value` conforms to `BinaryFloatingPoint`. Modifies the format style to use the specified locale.
- [notation(\_:)](notation%28__%29.md): Modifies the format style to use the specified notation.
- [precision(\_:)](precision%28__%29.md): Modifies the format style to use the specified precision.
- [rounded(rule:increment:)](rounded%28rule_increment_%29.md): Modifies the format style to use the specified rounding rule and increment.
- [scale(\_:)](scale%28__%29.md): Modifies the format style to use the specified scale.
- [sign(strategy:)](sign%28strategy_%29.md): Modifies the format style to use the specified sign display strategy for displaying or omitting sign symbols.
- [FloatingPointFormatStyle.Configuration](configuration.md): The type the format style uses for configuration settings.
- [NumberFormatStyleConfiguration](../numberformatstyleconfiguration.md): Configuration settings for formatting numbers of different types.
