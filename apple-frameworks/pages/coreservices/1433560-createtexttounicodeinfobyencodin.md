> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433560-createtexttounicodeinfobyencodin](https://developer.apple.com/documentation/coreservices/1433560-createtexttounicodeinfobyencodin)

# CreateTextToUnicodeInfoByEncoding

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Based on the given text encoding specification, createsand returns a Unicode converter object containing information requiredfor converting strings from the specified non-Unicode encoding toUnicode.

## Declaration

```objectivec
OSStatus CreateTextToUnicodeInfoByEncoding(TextEncoding iEncoding, TextToUnicodeInfo *oTextToUnicodeInfo);
```

## Parameters

- `iEncoding`: The text encoding specification for the source text.
- `oTextToUnicodeInfo`: The Unicode converter object of type [TextToUnicodeInfo](texttounicodeinfo.md) returned by the function.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

You can use this function instead of the  [CreateTextToUnicodeInfo](1433598-createtexttounicodeinfo.md)  function whenyou do not need to create a Unicode mapping structure. You simplyspecify the text encoding of the source text. However, this methodis less efficient because the text encoding parameter must be resolvedinternally into a Unicode mapping. 

You cannot specify a version of Unicode. The function usesa 16-bit form of Unicode as the default.

You pass a Unicode converter object returned from `CreateTextToUnicodeInfoByEncoding` to thefunction  [ConvertFromTextToUnicode](1433517-convertfromtexttounicode.md) or  [ConvertFromPStringToUnicode](1433483-convertfrompstringtounicode.md) to identify the information to be used for the conversion. Thesetwo functions modify the contents of the Unicode converter object. 

You pass a Unicode converter object returned from `CreateTextToUnicodeInfoByEncoding` to thefunction  [TruncateForTextToUnicode](1433518-truncatefortexttounicode.md) to identify the information to be used to truncate the string. Thisfunction does not modify the contents of the Unicode converter object.

If you are converting the text stream to Unicode as an intermediaryencoding, and then from Unicode to the final destination encoding,you use the function  [CreateUnicodeToTextInfo](1433522-createunicodetotextinfo.md) to create a Unicode converter object for the second part of the process.

## See Also

### Converting to Unicode

- [ChangeTextToUnicodeInfo](1433487-changetexttounicodeinfo.md): Changes the mapping information for the specified Unicodeconverter object used to convert text to Unicode to the new mappingyou provide.
- [ConvertFromTextToUnicode](1433517-convertfromtexttounicode.md): Converts a string from any encoding to Unicode.
- [CreateTextToUnicodeInfo](1433598-createtexttounicodeinfo.md): Creates and returns a Unicode converter object containinginformation required for converting strings from a non-Unicode encodingto Unicode.
- [DisposeTextToUnicodeInfo](1433669-disposetexttounicodeinfo.md): Releases the memory allocated for the specified Unicodeconverter object.
- [ResetTextToUnicodeInfo](1433526-resettexttounicodeinfo.md): Reinitializes all state information kept by the contextobjects.
