> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433493-conversion_masks/kunicodemaplinefeedtoreturnmask](https://developer.apple.com/documentation/coreservices/1433493-conversion_masks/kunicodemaplinefeedtoreturnmask)

# kUnicodeMapLineFeedToReturnMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.2+

## Declaration

```objectivec
kUnicodeMapLineFeedToReturnMask = 1L << kUnicodeMapLineFeedToReturnBit
```

<a id="discussion"></a>

## Discussion

Specifies mapping o the LF (LineFeed) character used in Unix to represent new lines to the CR (CarriageReturn) used in  Mac encodings. This option has an effect only when used with the constant `kUnicodeLooseMappingsMask`. You can pass both constants  as  `iControlFlags` parameters to the functions `ConvertFromUnicodeToText`, `ConvertFromUnicodeToTextRun`, and `ConvertFromUnicodeToScriptCodeRun`.
