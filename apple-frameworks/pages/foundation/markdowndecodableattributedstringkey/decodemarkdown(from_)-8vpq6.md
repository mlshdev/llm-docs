> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/markdowndecodableattributedstringkey/decodemarkdown(from:)-8vpq6](https://developer.apple.com/documentation/foundation/markdowndecodableattributedstringkey/decodemarkdown(from:)-8vpq6)

# decodeMarkdown(from:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Decodes a value from the provided decoder, using a default implementation.

## Declaration

```swift
static func decodeMarkdown(from decoder: any Decoder) throws -> Self.Value
```

## Parameters

- `decoder`: The decoder to read data from.

<a id="return-value"></a>

## Return Value

The decoded value.

<a id="Discussion"></a>

## Discussion

The default implementation calls [decode(from:)](../decodableattributedstringkey/decode%28from_%29.md), inherited from [DecodableAttributedStringKey](../decodableattributedstringkey.md), meaning it uses the same decoding as non-Markdown encoding.

This method throws an error if reading from the decoder fails, or if the data read is corrupted or otherwise invalid.
