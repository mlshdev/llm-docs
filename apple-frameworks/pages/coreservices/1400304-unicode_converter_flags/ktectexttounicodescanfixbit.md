> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1400304-unicode_converter_flags/ktectexttounicodescanfixbit](https://developer.apple.com/documentation/coreservices/1400304-unicode_converter_flags/ktectexttounicodescanfixbit)

# kTECTextToUnicodeScanFixBit

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
kTECTextToUnicodeScanFixBit = 3
```

<a id="discussion"></a>

## Discussion

This is set if `ConvertFromTextToUnicode` is enhanced so mappings can depend on context and saved state. The consequences of this are (1) malformed input results in `kTextMalformedInputErr`; (2) `ConvertFromTextToUnicode` accepts the control flags `kUnicodeLooseMappingsMask`, `kUnicodeKeepInfoMask`, and `kUnicodeStringUnterminatedMask`; (3) elimination of redundant direction overrides when converting Mac OS Arabic and Hebrew to Unicode; and (4) improved mapping of 0x30-0x39 digits in Mac OS Arabic when loose mappings are used.
