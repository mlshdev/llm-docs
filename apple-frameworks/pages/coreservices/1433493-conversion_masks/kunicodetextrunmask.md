> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433493-conversion_masks/kunicodetextrunmask](https://developer.apple.com/documentation/coreservices/1433493-conversion_masks/kunicodetextrunmask)

# kUnicodeTextRunMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
kUnicodeTextRunMask = 1L << kUnicodeTextRunBit
```

<a id="discussion"></a>

## Discussion

A mask for setting the text-run control flag which determines how the Unicode Converter converts Unicode text to a non-Unicode encoding when more than one possible destination encoding exists. 

 If you clear this flag, the function [ConvertFromUnicodeToTextRun](../1433511-convertfromunicodetotextrun.md) or [ConvertFromUnicodeToScriptCodeRun](../1433662-convertfromunicodetoscriptcoderu.md) attempts to convert the Unicode text to the single encoding from the list of encodings in the Unicode converter object that produces the best result, that is, that provides for the greatest amount of source text conversion.

If you set this flag, `ConvertFromUnicodeToTextRun` or `ConvertFromUnicodeToScriptCodeRun`, which are the only functions to which it applies, may generate a destination string that combines text in any of the encodings specified by the Unicode converter object.
