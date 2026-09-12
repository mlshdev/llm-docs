> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433493-conversion_masks/kunicodekeepsameencodingmask](https://developer.apple.com/documentation/coreservices/1433493-conversion_masks/kunicodekeepsameencodingmask)

# kUnicodeKeepSameEncodingMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
kUnicodeKeepSameEncodingMask = 1L << kUnicodeKeepSameEncodingBit
```

<a id="discussion"></a>

## Discussion

A mask for setting the keep-same-encoding control flag. Determines how the Unicode Converter treats the conversion of Unicode text following a text element that could not be converted to the first destination encoding when multiple destination encodings exist. This control flag applies only if the `kUnicodeTextRunMask` control flag is set. 

If you set this flag, the function [ConvertFromUnicodeToTextRun](../1433511-convertfromunicodetotextrun.md) attempts to minimize encoding changes in the conversion of the source text string; that is, once it is forced to make an encoding change, it attempts to use that encoding as the conversion destination for as long as possible. 

If you clear this flag, `ConvertFromUnicodeToTextRun` attempts to keep most of the converted string in one encoding, switching to other encodings only when necessary.
