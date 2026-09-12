> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/text](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/text)

# text

**Framework:** Uniform Type Identifiers  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A base type that represents all text-encoded data, including text with markup.

## Declaration

```swift
static var text: UTType { get }
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `public.text`.

This type conforms to [UTTypeData](../uttypedata.md) and [UTTypeContent](../uttypecontent.md).

## See Also

### Text files

- [plainText](plaintext.md): A type that represents text with no markup and an unspecified encoding.
- [utf8PlainText](utf8plaintext.md): A type that represents plain text encoded as UTF-8.
- [utf16PlainText](utf16plaintext.md): A type that represents plain text encoded as UTF-16 in native byte order with an optional bill of materials.
- [utf16ExternalPlainText](utf16externalplaintext.md): A type that represents plain text encoded as UTF-16 with an optional bill of materials.
- [markdown](markdown.md): A type that represents Markdown data.
