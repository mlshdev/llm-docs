> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/textencoding](https://developer.apple.com/documentation/coreservices/textencoding)

# TextEncoding

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Defines a data type for a text encoding value.

## Declaration

```objectivec
typedef UInt32 TextEncoding;
```

<a id="discussion"></a>

## Discussion

A `TextEncoding` value is specified by a text encoding base, a text encoding variant, and a text encoding format. You can  obtain a `TextEncoding` value by calling the function [CreateTextEncoding](1399639-createtextencoding.md). When you call this function,  you can provide the `TextEncodingBase`, `TextEncodingVariant`, and `TextEncodingFormat` data types.

A `TextEncoding` value is used, for example, to identify the encoding of text passed to a text converter. Two `TextEncoding` values are needed—for source and destination encoding—when calling the Text Encoding Converter or the Unicode Converter to convert text.
