> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433669-disposetexttounicodeinfo](https://developer.apple.com/documentation/coreservices/1433669-disposetexttounicodeinfo)

# DisposeTextToUnicodeInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Releases the memory allocated for the specified Unicodeconverter object.

## Declaration

```objectivec
OSStatus DisposeTextToUnicodeInfo(TextToUnicodeInfo *ioTextToUnicodeInfo);
```

## Parameters

- `ioTextToUnicodeInfo`: A pointer to a Unicode converter object of type [TextToUnicodeInfo](texttounicodeinfo.md), used for converting text to Unicode. On input, you specify the object to dispose. It must be an object which your application created using the function [CreateTextToUnicodeInfo](1433598-createtexttounicodeinfo.md) or [CreateTextToUnicodeInfoByEncoding](1433560-createtexttounicodeinfobyencodin.md). You must not point to any other type of Unicode converter object. Your application should not use this function with the same structure more than once.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324). If your application specifiesan invalid Unicode converter object, such as `NULL`,the function returns a `paramErr` resultcode.

## See Also

### Converting to Unicode

- [ChangeTextToUnicodeInfo](1433487-changetexttounicodeinfo.md): Changes the mapping information for the specified Unicodeconverter object used to convert text to Unicode to the new mappingyou provide.
- [ConvertFromTextToUnicode](1433517-convertfromtexttounicode.md): Converts a string from any encoding to Unicode.
- [CreateTextToUnicodeInfo](1433598-createtexttounicodeinfo.md): Creates and returns a Unicode converter object containinginformation required for converting strings from a non-Unicode encodingto Unicode.
- [CreateTextToUnicodeInfoByEncoding](1433560-createtexttounicodeinfobyencodin.md): Based on the given text encoding specification, createsand returns a Unicode converter object containing information requiredfor converting strings from the specified non-Unicode encoding toUnicode.
- [ResetTextToUnicodeInfo](1433526-resettexttounicodeinfo.md): Reinitializes all state information kept by the contextobjects.
