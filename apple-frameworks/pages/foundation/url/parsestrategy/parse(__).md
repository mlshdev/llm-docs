> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/parsestrategy/parse(_:)](https://developer.apple.com/documentation/foundation/url/parsestrategy/parse(_:))

# parse(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Parses a URL string in accordance with this strategy and returns the parsed value.

## Declaration

```swift
func parse(_ value: String) throws -> URL
```

## Parameters

- `value`: The string to parse.

<a id="return-value"></a>

## Return Value

The parsed integer value.

<a id="Discussion"></a>

## Discussion

Use this method to repeatedly parse integer strings with the same [URL.ParseStrategy](../parsestrategy.md). To parse a single integer string, use the URL initializer [init(\_:strategy:)](../init%28__strategy_%29.md).

This method throws an error if the parse strategy can’t parse the provided string.
