> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433483-convertfrompstringtounicode](https://developer.apple.com/documentation/coreservices/1433483-convertfrompstringtounicode)

# ConvertFromPStringToUnicode

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Converts a Pascal string in a Mac OS text encoding toa Unicode string.

## Declaration

```objectivec
OSStatus ConvertFromPStringToUnicode(TextToUnicodeInfo iTextToUnicodeInfo, ConstStr255Param iPascalStr, ByteCount iOutputBufLen, ByteCount *oUnicodeLen, UniChar oUnicodeStr[]);
```

## Parameters

- `iTextToUnicodeInfo`: A Unicode converter object of type [TextToUnicodeInfo](texttounicodeinfo.md) for the Pascal string to be converted. You can use the function [CreateTextToUnicodeInfo](1433598-createtexttounicodeinfo.md) or [CreateTextToUnicodeInfoByEncoding](1433560-createtexttounicodeinfobyencodin.md) to create the Unicode converter object.
- `iPascalStr`: The Pascal string to be converted to Unicode.
- `iOutputBufLen`: The length in bytes of the output buffer pointed to by the `oUnicodeStr` parameter. Your application supplies this buffer to hold the returned converted string. The `oUnicodeLen` parameter may return a byte count that is less than this value if the converted string is smaller than the buffer size you allocated.
- `oUnicodeLen`: On return, a pointer to the length in bytes of the converted Unicode string returned in the `oUnicodeStr` parameter.
- `oUnicodeStr`: A pointer to a Unicode character array. On return, this array holds the converted Unicode string.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

The `ConvertFromPStringToUnicode` functionprovides an easy and efficient way to convert a short Pascal stringto a Unicode string without incurring the overhead associated with thefunction  [ConvertFromTextToUnicode](1433517-convertfromtexttounicode.md). 

If necessary, this function automatically uses fallback charactersto map the text elements of the string.

## See Also

### Converting Between Unicode and Pascal Strings

- [ConvertFromUnicodeToPString](1433581-convertfromunicodetopstring.md): Converts a Unicode string to Pascal in a Mac OS text encoding.
