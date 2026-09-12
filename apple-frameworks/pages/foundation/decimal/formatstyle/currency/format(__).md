> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/formatstyle/currency/format(_:)](https://developer.apple.com/documentation/foundation/decimal/formatstyle/currency/format(_:))

# format(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Formats a decimal value, using this style.

## Declaration

```swift
func format(_ value: Decimal) -> String
```

## Parameters

- `value`: The floating-point value to format.

<a id="return-value"></a>

## Return Value

A string representation of `value`, formatted according to the style’s configuration.

<a id="Discussion"></a>

## Discussion

Use this method when you want to create a single style instance, and then use it to format multiple decimal values. To format a single decimal value, use the [Decimal](../../../decimal.md) instance method [formatted(\_:)](../../formatted%28__%29.md), passing in an instance of [Decimal.FormatStyle.Currency](../currency.md).
