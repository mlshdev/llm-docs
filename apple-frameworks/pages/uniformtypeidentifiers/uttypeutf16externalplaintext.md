> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypeutf16externalplaintext](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypeutf16externalplaintext)

# UTTypeUTF16ExternalPlainText

**Interface language:** Objective-C

**Framework:** Uniform Type Identifiers  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents plain text encoded as UTF-16 with an optional BOM.

## Declaration

```objectivec
extern UTType * const UTTypeUTF16ExternalPlainText;
```

<a id="Discussion"></a>

## Discussion

If the bill of materials isn’t present, the encoding uses “external byte order (big-endian),

The identifier for this type is `public.utf16-external-plain-text`.

This type conforms to [UTTypePlainText](uttypeplaintext.md).

## See Also

### Text files

- [UTTypeText](uttypetext.md): A base type that represents all text-encoded data, including text with markup.
- [UTTypePlainText](uttypeplaintext.md): A type that represents text with no markup and an unspecified encoding.
- [UTTypeUTF8PlainText](uttypeutf8plaintext.md): A type that represents plain text encoded as UTF-8.
- [UTTypeUTF16PlainText](uttypeutf16plaintext.md): A type that represents plain text encoded as UTF-16 in native byte order with an optional bill of materials.
- [UTTypeMarkdown](uttypemarkdown.md): A type that represents Markdown data.
