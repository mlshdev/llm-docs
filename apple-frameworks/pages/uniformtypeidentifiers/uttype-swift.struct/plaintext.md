> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/plaintext](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/plaintext)

# plainText

**Framework:** Uniform Type Identifiers  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents text with no markup and an unspecified encoding.

## Declaration

```swift
static var plainText: UTType { get }
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `public.plain-text`.

This type conforms to [UTTypeText](../uttypetext.md).

## See Also

### Text files

- [text](text.md): A base type that represents all text-encoded data, including text with markup.
- [utf8PlainText](utf8plaintext.md): A type that represents plain text encoded as UTF-8.
- [utf16PlainText](utf16plaintext.md): A type that represents plain text encoded as UTF-16 in native byte order with an optional bill of materials.
- [utf16ExternalPlainText](utf16externalplaintext.md): A type that represents plain text encoded as UTF-16 with an optional bill of materials.
- [markdown](markdown.md): A type that represents Markdown data.
