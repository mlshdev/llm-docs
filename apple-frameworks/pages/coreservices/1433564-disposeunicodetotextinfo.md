> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433564-disposeunicodetotextinfo](https://developer.apple.com/documentation/coreservices/1433564-disposeunicodetotextinfo)

# DisposeUnicodeToTextInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Releases the memory allocated for the specified Unicodeconverter object.

## Declaration

```objectivec
OSStatus DisposeUnicodeToTextInfo(UnicodeToTextInfo *ioUnicodeToTextInfo);
```

## Parameters

- `ioUnicodeToTextInfo`: A pointer to a Unicode converter object for converting from Unicode to a non-Unicode encoding. You specify a Unicode converter object that your application created using the function [CreateUnicodeToTextInfo](1433522-createunicodetotextinfo.md) or [CreateUnicodeToTextInfoByEncoding](1433550-createunicodetotextinfobyencodin.md). You must not point to any other type of Unicode converter object. Your application should not attempt to dispose of the same Unicode converter object more than once.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).  The function returns `noErr` ifit disposes of the Unicode converter object successfully. If your applicationspecifies an invalid Unicode converter object, such as `NULL`,the function returns a `paramErr` resultcode.

## See Also

### Converting From Unicode

- [ChangeUnicodeToTextInfo](1433509-changeunicodetotextinfo.md): Changes the mapping information contained in the specifiedUnicode converter object used to convert Unicode text to a non-Unicodeencoding.
- [ConvertFromUnicodeToText](1433542-convertfromunicodetotext.md): Converts a Unicode text string to the destination encodingyou specify.
- [CreateUnicodeToTextInfo](1433522-createunicodetotextinfo.md): Creates and returns a Unicode converter object containinginformation required for converting strings from Unicode to a non-Unicodeencoding.
- [CreateUnicodeToTextInfoByEncoding](1433550-createunicodetotextinfobyencodin.md): Based on the given text encoding specification for theconverted text, creates and returns a Unicode converter object containinginformation required for converting strings from Unicode to thespecified non-Unicode encoding.
- [ResetUnicodeToTextInfo](1433647-resetunicodetotextinfo.md): Reinitializes all state information kept by a Unicodeconverter object.
