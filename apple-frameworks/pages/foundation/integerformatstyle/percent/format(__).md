> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/integerformatstyle/percent/format(_:)](https://developer.apple.com/documentation/foundation/integerformatstyle/percent/format(_:))

# format(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Formats an integer, using this style.

## Declaration

```swift
func format(_ value: Value) -> String
```

## Parameters

- `value`: The integer to format.

<a id="return-value"></a>

## Return Value

A string representation of `value`, formatted according to the style’s configuration.

<a id="Discussion"></a>

## Discussion

Use this method when you want to create a single style instance, and then use it to format multiple integers. To format a single integer, use the [BinaryInteger](https://developer.apple.com/documentation/swift/binaryinteger) instance method [formatted(\_:)](https://developer.apple.com/documentation/swift/binaryinteger/formatted%28_:%29-4qd73), passing in an instance of [IntegerFormatStyle.Percent](../percent.md), or [formatted()](https://developer.apple.com/documentation/swift/binaryinteger/formatted%28%29) to use a default style.
