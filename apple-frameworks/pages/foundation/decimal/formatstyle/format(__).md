> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/formatstyle/format(_:)](https://developer.apple.com/documentation/foundation/decimal/formatstyle/format(_:))

# format(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Formats a decimal value using this style.

## Declaration

```swift
func format(_ value: Decimal) -> String
```

## Parameters

- `value`: The decimal value to format.

<a id="return-value"></a>

## Return Value

A string representation of `value` formatted according to the style’s configuration.

<a id="Discussion"></a>

## Discussion

Use this method when you want to create a single style instance and then use it to format multiple decimal values. The following example creates a style that uses the `en_US` locale and then adds the [scientific](../../numberformatstyleconfiguration/notation/scientific.md) modifier. It then applies this style to all of the decimal values in an array.

```swift
let scientificStyle = Decimal.FormatStyle(
    locale: Locale(identifier: "en_US"))
    .notation(.scientific)
let nums: [Decimal] = [100.1, 1000.2, 10000.3, 100000.4, 1000000.5]
let formattedNums = nums.map { scientificStyle.format($0) } // ["1.001E2", "1.0002E3", "1.00003E4", "1.000004E5", "1E6"]
```

To format a single floating-point value, use the [Decimal](../../decimal.md) instance method [formatted(\_:)](../formatted%28__%29.md), passing in an instance of [Decimal.FormatStyle](../formatstyle.md), or [formatted()](../formatted%28%29.md) to use a default style.
