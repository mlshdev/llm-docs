> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/json](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/json)

# json

**Framework:** Uniform Type Identifiers  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents JavaScript Object Notation (JSON) data.

## Declaration

```swift
static var json: UTType { get }
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `public.json`.

This type conforms to [UTTypeText](../uttypetext.md); it doesn’t conform to [UTTypeJavaScript](../uttypejavascript.md).

## See Also

### Data interchange formats

- [delimitedText](delimitedtext.md): A base type that represents text containing delimited values.
- [commaSeparatedText](commaseparatedtext.md): A type that represents text containing comma-separated values.
- [tabSeparatedText](tabseparatedtext.md): A type that represents text containing tab-separated values.
- [utf8TabSeparatedText](utf8tabseparatedtext.md): A type that represents UTF-8–encoded text containing tab-separated values.
- [rtf](rtf.md): A type that represents Rich Text Format data.
- [xml](xml.md): A type that represents generic XML data.
- [yaml](yaml.md): A type that represents Yet Another Markup Language data.
- [vCard](vcard.md): A type that represents a vCard file.
