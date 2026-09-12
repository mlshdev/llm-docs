> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433581-convertfromunicodetopstring](https://developer.apple.com/documentation/coreservices/1433581-convertfromunicodetopstring)

# ConvertFromUnicodeToPString

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Converts a Unicode string to Pascal in a Mac OS text encoding.

## Declaration

```objectivec
OSStatus ConvertFromUnicodeToPString(UnicodeToTextInfo iUnicodeToTextInfo, ByteCount iUnicodeLen, const UniChar iUnicodeStr[], Str255 oPascalStr);
```

## Parameters

- `iUnicodeToTextInfo`: A Unicode converter object. You use the `CreateUnicodeToTextInfo` or `CreateUnicodeToTextInfoByEncoding` function to obtain the Unicode converter object for the conversion.
- `iUnicodeLen`: The length in bytes of the Unicode string to be converted. This is the string your application provides in the `iUnicodeStr` parameter.
- `iUnicodeStr`: A pointer to an array containing the Unicode string to be converted.
- `oPascalStr`: A buffer. On return, the converted Pascal string returned by the function.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

The `ConvertFromUnicodeToPString ` functionprovides an easy and efficient way to convert a Unicode string toa Pascal string in a Mac OS text encoding without incurring the overheadassociated with use of the function  [ConvertFromUnicodeToText](1433542-convertfromunicodetotext.md)  or  [ConvertFromUnicodeToScriptCodeRun](1433662-convertfromunicodetoscriptcoderu.md). 

If necessary, this function uses the loose mapping and fallbackcharacters to map the text elements of the string. For fallbackmappings, it uses the handler associated with the Unicode converterobject.

## See Also

### Converting Between Unicode and Pascal Strings

- [ConvertFromPStringToUnicode](1433483-convertfrompstringtounicode.md): Converts a Pascal string in a Mac OS text encoding toa Unicode string.
