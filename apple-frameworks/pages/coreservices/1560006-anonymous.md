> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1560006-anonymous](https://developer.apple.com/documentation/coreservices/1560006-anonymous)

# Anonymous

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
enum : int {
    ...
};
```

## Topics

### Constants

- [kTECArrayFullErr](1560006-anonymous/ktecarrayfullerr.md)
- [kTECBadTextRunErr](1560006-anonymous/ktecbadtextrunerr.md)
- [kTECBufferBelowMinimumSizeErr](1560006-anonymous/ktecbufferbelowminimumsizeerr.md): The output text buffer is too small to accommodatethe result of processing of the first input text element. No partof the input string was processed.
- [kTECCorruptConverterErr](1560006-anonymous/kteccorruptconvertererr.md): The converter object is invalid. Returnedby the Text Encoding Converter functions only.
- [kTECDirectionErr](1560006-anonymous/ktecdirectionerr.md): An error, such as a direction stack overflow,occurred in directionality processing.
- [kTECGlobalsUnavailableErr](1560006-anonymous/ktecglobalsunavailableerr.md): Global variables have already been deallocated,premature termination. The function did not convert the string.
- [kTECIncompleteElementErr](1560006-anonymous/ktecincompleteelementerr.md): The input text ends with a text elementthat might be incomplete, or contains a text element that is too longfor the internal buffers.
- [kTECItemUnavailableErr](1560006-anonymous/ktecitemunavailableerr.md): An item (for example, a name) is not availablefor the specified region (and encoding, if relevant).
- [kTECMissingTableErr](1560006-anonymous/ktecmissingtableerr.md): The specified encoding is partially supported,but a specific table required for this function is missing.
- [kTECNeedFlushStatus](1560006-anonymous/ktecneedflushstatus.md): The application disposed of a converterobject by calling TECDisposeConverter, but there is still text containedin internal buffers. Returned by the Text Encoding Converter functionsonly.
- [kTECNoConversionPathErr](1560006-anonymous/ktecnoconversionpatherr.md): The converter supports both the source andtarget encodings, but cannot convert between them either directlyor indirectly. Returned by the Text Encoding Converter functionsonly.
- [kTECOutputBufferFullStatus](1560006-anonymous/ktecoutputbufferfullstatus.md): The converter successfully converted partof the input text, but the output buffer was not large enough toaccommodate the entire input text after conversion. Convert theremaining text beginning from the position where the conversion stopped.
- [kTECPartialCharErr](1560006-anonymous/ktecpartialcharerr.md): The input text ends in the middle of a multibytecharacter and conversion stopped. Append the unconverted input fromthis call to the beginning of the subsequent input text and callthe function again.
- [kTECTableChecksumErr](1560006-anonymous/ktectablechecksumerr.md): A specific table required for this functionhas a checksum error, indicating that it has become corrupted.
- [kTECTableFormatErr](1560006-anonymous/ktectableformaterr.md): The table format is either invalid or itcannot be handled by the current version of the code. The function didnot convert the string
- [kTECUnmappableElementErr](1560006-anonymous/ktecunmappableelementerr.md): An input text element cannot be mapped tothe specified output encoding(s) using the specified options. Forthe Unicode Converter, this error can occur only if kUnicodeUseFallbacksBitcontrol flag is not set.
- [kTECUsedFallbacksStatus](1560006-anonymous/ktecusedfallbacksstatus.md): The function has completely converted theinput string to the specified target using one or more fallbacks.For the Unicode Converter, this status code can only occur if the `kUnicodeUseFallbacksBit`control flag is set.
- [kTextMalformedInputErr](1560006-anonymous/ktextmalformedinputerr.md): The text input contains a sequence thatis not legal in the specified encoding, such as a DBCS high byte followedby an invalid low byte (0x8120 in Shift-JIS).
- [kTextUndefinedElementErr](1560006-anonymous/ktextundefinedelementerr.md): The text input contains a code point thatis undefined in the specified encoding. The function did not completelyconvert the input string. You can resume conversion from a pointbeyond the offending character, or take some other action.
- [kTextUnsupportedEncodingErr](1560006-anonymous/ktextunsupportedencodingerr.md): The encoding or mapping is not supportedfor this function by the current set of tables or plug-ins.
- [unicodeBufErr](1560006-anonymous/unicodebuferr.md)
- [unicodeCharErr](1560006-anonymous/unicodecharerr.md)
- [unicodeChecksumErr](1560006-anonymous/unicodechecksumerr.md)
- [unicodeContextualErr](1560006-anonymous/unicodecontextualerr.md)
- [unicodeDirectionErr](1560006-anonymous/unicodedirectionerr.md)
- [unicodeElementErr](1560006-anonymous/unicodeelementerr.md)
- [unicodeFallbacksErr](1560006-anonymous/unicodefallbackserr.md)
- [unicodeNoTableErr](1560006-anonymous/unicodenotableerr.md)
- [unicodeNotFoundErr](1560006-anonymous/unicodenotfounderr.md)
- [unicodePartConvertErr](1560006-anonymous/unicodepartconverterr.md)
- [unicodeTableFormatErr](1560006-anonymous/unicodetableformaterr.md)
- [unicodeTextEncodingDataErr](1560006-anonymous/unicodetextencodingdataerr.md)
- [unicodeVariantErr](1560006-anonymous/unicodevarianterr.md)
