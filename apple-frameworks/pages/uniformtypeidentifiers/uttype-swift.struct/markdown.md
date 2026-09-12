> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/markdown](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/markdown)

# markdown

**Framework:** Uniform Type Identifiers  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that represents Markdown data.

## Declaration

```swift
static var markdown: UTType { get }
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `net.daringfireball.markdown`.

This type conforms to [utf8PlainText](utf8plaintext.md).

## See Also

### Text files

- [text](text.md): A base type that represents all text-encoded data, including text with markup.
- [plainText](plaintext.md): A type that represents text with no markup and an unspecified encoding.
- [utf8PlainText](utf8plaintext.md): A type that represents plain text encoded as UTF-8.
- [utf16PlainText](utf16plaintext.md): A type that represents plain text encoded as UTF-16 in native byte order with an optional bill of materials.
- [utf16ExternalPlainText](utf16externalplaintext.md): A type that represents plain text encoded as UTF-16 with an optional bill of materials.
