> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/floatingpointformatstyle/currency/format(_:)](https://developer.apple.com/documentation/foundation/floatingpointformatstyle/currency/format(_:))

# format(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Formats a floating-point value, using this style.

## Declaration

```swift
func format(_ value: Value) -> String
```

## Parameters

- `value`: The floating-point value to format.

<a id="return-value"></a>

## Return Value

A string representation of `value`, formatted according to the style’s configuration.

<a id="Discussion"></a>

## Discussion

Use this method when you want to create a single style instance, and then use it to format multiple floating-point values. To format a single value, use the [BinaryFloatingPoint](https://developer.apple.com/documentation/swift/binaryfloatingpoint) instance method [formatted(\_:)](https://developer.apple.com/documentation/swift/binaryfloatingpoint/formatted%28_:%29-83x4n), passing in an instance of [FloatingPointFormatStyle.Currency](../currency.md).
