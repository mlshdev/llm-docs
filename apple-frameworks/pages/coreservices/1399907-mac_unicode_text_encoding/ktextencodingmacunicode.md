> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1399907-mac_unicode_text_encoding/ktextencodingmacunicode](https://developer.apple.com/documentation/coreservices/1399907-mac_unicode_text_encoding/ktextencodingmacunicode)

# kTextEncodingMacUnicode

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
kTextEncodingMacUnicode = 0x7E
```

<a id="discussion"></a>

## Discussion

Beginning with Mac OS 8.5, the set of Mac OS script codes has been extended for some Mac OS components to include Unicode. Some of these components have only 7 bits available for script code, so `kTextEncodingUnicodeDefault` cannot be used to indicate Unicode. Instead, `kTextEncodingMacUnicode` is used as a meta-value to indicate that Unicode handles the script code a special Mac OS script code. The Text Encoding Converter handles this value similar to the way it handles the constant `kTextEncodingUnicodeDefault`.
