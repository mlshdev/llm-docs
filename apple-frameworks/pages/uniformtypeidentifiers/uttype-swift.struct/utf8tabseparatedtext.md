> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/utf8tabseparatedtext](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/utf8tabseparatedtext)

# utf8TabSeparatedText

**Framework:** Uniform Type Identifiers  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents UTF-8–encoded text containing tab-separated values.

## Declaration

```swift
static var utf8TabSeparatedText: UTType { get }
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `public.utf8-tab-separated-values-text`.

This type conforms to [UTTypeDelimitedText](../uttypedelimitedtext.md) and [UTTypeUTF8PlainText](../uttypeutf8plaintext.md).

## See Also

### Data interchange formats

- [delimitedText](delimitedtext.md): A base type that represents text containing delimited values.
- [commaSeparatedText](commaseparatedtext.md): A type that represents text containing comma-separated values.
- [tabSeparatedText](tabseparatedtext.md): A type that represents text containing tab-separated values.
- [rtf](rtf.md): A type that represents Rich Text Format data.
- [xml](xml.md): A type that represents generic XML data.
- [yaml](yaml.md): A type that represents Yet Another Markup Language data.
- [json](json.md): A type that represents JavaScript Object Notation (JSON) data.
- [vCard](vcard.md): A type that represents a vCard file.
