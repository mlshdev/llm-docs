> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433647-resetunicodetotextinfo](https://developer.apple.com/documentation/coreservices/1433647-resetunicodetotextinfo)

# ResetUnicodeToTextInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Reinitializes all state information kept by a Unicodeconverter object.

## Declaration

```objectivec
OSStatus ResetUnicodeToTextInfo(UnicodeToTextInfo ioUnicodeToTextInfo);
```

## Parameters

- `ioUnicodeToTextInfo`:

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

## See Also

### Converting From Unicode

- [ChangeUnicodeToTextInfo](1433509-changeunicodetotextinfo.md): Changes the mapping information contained in the specifiedUnicode converter object used to convert Unicode text to a non-Unicodeencoding.
- [ConvertFromUnicodeToText](1433542-convertfromunicodetotext.md): Converts a Unicode text string to the destination encodingyou specify.
- [CreateUnicodeToTextInfo](1433522-createunicodetotextinfo.md): Creates and returns a Unicode converter object containinginformation required for converting strings from Unicode to a non-Unicodeencoding.
- [CreateUnicodeToTextInfoByEncoding](1433550-createunicodetotextinfobyencodin.md): Based on the given text encoding specification for theconverted text, creates and returns a Unicode converter object containinginformation required for converting strings from Unicode to thespecified non-Unicode encoding.
- [DisposeUnicodeToTextInfo](1433564-disposeunicodetotextinfo.md): Releases the memory allocated for the specified Unicodeconverter object.
