> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1400304-unicode_converter_flags/ktecfallbacktextlengthfixbit](https://developer.apple.com/documentation/coreservices/1400304-unicode_converter_flags/ktecfallbacktextlengthfixbit)

# kTECFallbackTextLengthFixBit

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
kTECFallbackTextLengthFixBit = 1
```

<a id="discussion"></a>

## Discussion

This is set if the Unicode Converter has a bug fix to use the source length (`srcConvLen) `and destination length (`destConvLen)` returned by a caller-supplied fall-back handler for any status it returns except `kTECUnmappableElementErr`. Previously it honored only these values if `noErr` was returned.
