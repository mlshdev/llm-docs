> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatstyle/attributed-swift.struct/format(_:)](https://developer.apple.com/documentation/foundation/bytecountformatstyle/attributed-swift.struct/format(_:))

# format(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Formats a numeric byte count, using this style.

## Declaration

```swift
func format(_ value: Int64) -> AttributedString
```

## Parameters

- `value`: The 64-bit byte count to format.

<a id="return-value"></a>

## Return Value

A formatted representation of `value`, formatted according to the style’s configuration.

<a id="Discussion"></a>

## Discussion

Use this method when you want to create a single style instance, and then use it to format multiple values. To format a single integer, use the [BinaryInteger](https://developer.apple.com/documentation/swift/binaryinteger) instance method [formatted(\_:)](https://developer.apple.com/documentation/swift/binaryinteger/formatted%28_:%29-4qd73), passing in an instance of [ByteCountFormatStyle.Attributed](../attributed-swift.struct.md), or [formatted()](https://developer.apple.com/documentation/swift/binaryinteger/formatted%28%29) to use a default style.
