> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1399736-nearestmactextencodings](https://developer.apple.com/documentation/coreservices/1399736-nearestmactextencodings)

# NearestMacTextEncodings

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Obtains the best and alternate Mac text encoding.

## Declaration

```objectivec
OSStatus NearestMacTextEncodings(TextEncoding generalEncoding, TextEncoding *bestMacEncoding, TextEncoding *alternateMacEncoding);
```

## Parameters

- `generalEncoding`: The text encoding for which you want to obtain a Mac text encoding.
- `bestMacEncoding`: On return, the Mac text encoding that best matches the encoding specified by the `generalEncoding` parameter.
- `alternateMacEncoding`: On return, the Mac text encoding that is the second best match for the encoding specified by the `generalEncoding` parameter.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

## See Also

### Obtaining Information About Available Text Encodings

- [TECCountAvailableTextEncodings](1571853-teccountavailabletextencodings.md): Counts and returns the number of text encodings currentlyconfigured in the Text Encoding Converter.
- [TECCountSubTextEncodings](1571820-teccountsubtextencodings.md): Counts and returns the number of subencodings a text encodingsupports.
- [TECGetAvailableTextEncodings](1571819-tecgetavailabletextencodings.md): Returns the text encoding specifications currently configuredin the Text Encoding Converter.
- [TECGetSubTextEncodings](1571796-tecgetsubtextencodings.md): Returns the text encoding specifications for the subencodingsthe encoding scheme supports.
