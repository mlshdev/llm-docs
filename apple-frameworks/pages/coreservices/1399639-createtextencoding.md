> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1399639-createtextencoding

# CreateTextEncoding

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates and returns a text encoding specification.

## Declaration

```objectivec
TextEncoding CreateTextEncoding(TextEncodingBase encodingBase, TextEncodingVariant encodingVariant, TextEncodingFormat encodingFormat);
```

## Parameters

- `encodingBase`: A base text encoding.
- `encodingVariant`: A variant of the base text encoding. To specify the default variant for the base encoding given in the `encodingBase` parameter, you can use the `kTextEncodingDefaultVariant` constant.
- `encodingFormat`: A format for the base text encoding. To specify the default format for the base encoding, you can use the `kTextEncodingDefaultFormat` constant. If you want to obtain a  `TextEncoding` value that references  UTF-16 or UTF-8, pass `kUnicode16BitFormat` or `kUnicodeUTF8Format` .

<a id="return_value"></a>

## Return Value

The text encodingspecification that the function creates from the values you passit.

<a id="discussion"></a>

## Discussion

When you create a text encoding specification, the three valuesthat you specify are packed into an unsigned integer, which youcan then pass by value to the functions that use text encodings.See the data type  [TextEncodingRun](textencodingrun.md).
