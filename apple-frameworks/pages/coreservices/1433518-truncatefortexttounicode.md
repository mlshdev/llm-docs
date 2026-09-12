> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433518-truncatefortexttounicode](https://developer.apple.com/documentation/coreservices/1433518-truncatefortexttounicode)

# TruncateForTextToUnicode

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Identifies where your application can safely break a multibytestring to be converted to Unicode so that the string is not brokenin the middle of a multibyte character.

## Declaration

```objectivec
OSStatus TruncateForTextToUnicode(ConstTextToUnicodeInfo iTextToUnicodeInfo, ByteCount iSourceLen, ConstLogicalAddress iSourceStr, ByteCount iMaxLen, ByteCount *oTruncatedLen);
```

## Parameters

- `iTextToUnicodeInfo`: The Unicode converter object of type [TextToUnicodeInfo](texttounicodeinfo.md) for the text string to be divided up with each segment properly truncated. The `TruncateForTextToUnicode` function does not modify the object’s contents.
- `iSourceLen`: The length in bytes of the multibyte string to be divided up.
- `iSourceStr`: The address of the multibyte string to be divided up.
- `iMaxLen`: The maximum allowable length of the string to be truncated. This must be less than or equal to `iSourceLen`.
- `oTruncatedLen`: A pointer to a value of type `ByteCount`. On return, this value contains the length of the longest portion of the multibyte string, pointed to by `iSourceStr`, that is less than or equal to the length specified by `iMaxLen`. This identifies the byte after which you can break the string.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

Your application can use this function to break a string properlybefore you call the function  [ConvertFromTextToUnicode](1433517-convertfromtexttounicode.md) so that the string you pass it is terminated with complete characters.You can call this function repeatedly to properly divide up a text segment,each time identifying the new beginning of the string, until thelast portion of the text is less than or equal to the maximum allowablelength. Each time you use the function, you get a properly terminatedstring within the allowable length range. 

Because the `TruncateForTextToUnicode` functiondoes not modify the contents of the Unicode converter object, youcan call this function safely between calls to the function  [ConvertFromTextToUnicode](1433517-convertfromtexttounicode.md).

## See Also

### Truncating Strings Before Converting Them 

- [TruncateForUnicodeToText](1433649-truncateforunicodetotext.md): Identifies where your application can safely break a Unicodestring to be converted to any encoding so that the string is brokenin a way that preserves the text element integrity.
