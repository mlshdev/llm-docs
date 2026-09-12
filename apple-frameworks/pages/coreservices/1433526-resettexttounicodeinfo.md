> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433526-resettexttounicodeinfo](https://developer.apple.com/documentation/coreservices/1433526-resettexttounicodeinfo)

# ResetTextToUnicodeInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Reinitializes all state information kept by the contextobjects.

## Declaration

```objectivec
OSStatus ResetTextToUnicodeInfo(TextToUnicodeInfo ioTextToUnicodeInfo);
```

## Parameters

- `ioTextToUnicodeInfo`:

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

## See Also

### Converting to Unicode

- [ChangeTextToUnicodeInfo](1433487-changetexttounicodeinfo.md): Changes the mapping information for the specified Unicodeconverter object used to convert text to Unicode to the new mappingyou provide.
- [ConvertFromTextToUnicode](1433517-convertfromtexttounicode.md): Converts a string from any encoding to Unicode.
- [CreateTextToUnicodeInfo](1433598-createtexttounicodeinfo.md): Creates and returns a Unicode converter object containinginformation required for converting strings from a non-Unicode encodingto Unicode.
- [CreateTextToUnicodeInfoByEncoding](1433560-createtexttounicodeinfobyencodin.md): Based on the given text encoding specification, createsand returns a Unicode converter object containing information requiredfor converting strings from the specified non-Unicode encoding toUnicode.
- [DisposeTextToUnicodeInfo](1433669-disposetexttounicodeinfo.md): Releases the memory allocated for the specified Unicodeconverter object.
