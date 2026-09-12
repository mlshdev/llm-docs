> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/parsestrategy/parse(_:)](https://developer.apple.com/documentation/foundation/decimal/parsestrategy/parse(_:))

# parse(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Parses a decimal string in accordance with this strategy and returns the parsed value.

## Declaration

```swift
func parse(_ value: String) throws -> Format.FormatInput
```

## Parameters

- `value`: The string to parse.

<a id="return-value"></a>

## Return Value

The parsed integer value.

<a id="Discussion"></a>

## Discussion

Use this method to repeatedly parse decimal strings with the same [Decimal.ParseStrategy](../parsestrategy.md). To parse a single decimal string, use the initializers inherited from [Decimal](../../decimal.md) that take a [String](https://developer.apple.com/documentation/swift/string) and a [Decimal.FormatStyle](../formatstyle.md) as parameters.

This method throws an error if the parse strategy can’t parse the provided string.
