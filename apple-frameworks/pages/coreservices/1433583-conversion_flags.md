> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433583-conversion_flags](https://developer.apple.com/documentation/coreservices/1433583-conversion_flags)

# Conversion Flags

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify how to perform conversion of text from one encoding to another.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kUnicodeUseFallbacksBit](1433583-conversion_flags/kunicodeusefallbacksbit.md): Enables use of fallback mappings.
- [kUnicodeKeepInfoBit](1433583-conversion_flags/kunicodekeepinfobit.md): Sets the keep-information control flag.
- [kUnicodeDirectionalityBits](1433583-conversion_flags/kunicodedirectionalitybits.md): Sets directionality.
- [kUnicodeVerticalFormBit](1433583-conversion_flags/kunicodeverticalformbit.md): Sets the vertical form control flag.
- [kUnicodeLooseMappingsBit](1433583-conversion_flags/kunicodeloosemappingsbit.md): Enables use of the loose-mapping portion of a character mapping table.
- [kUnicodeStringUnterminatedBit](1433583-conversion_flags/kunicodestringunterminatedbit.md): Sets the string-unterminated control flag.
- [kUnicodeTextRunBit](1433583-conversion_flags/kunicodetextrunbit.md): Sets the text-run control flag.
- [kUnicodeKeepSameEncodingBit](1433583-conversion_flags/kunicodekeepsameencodingbit.md): Sets the keep-same-encoding control flag.
- [kUnicodeForceASCIIRangeBit](1433583-conversion_flags/kunicodeforceasciirangebit.md): Sets the force ASCII range control flag.
- [kUnicodeNoHalfwidthCharsBit](1433583-conversion_flags/kunicodenohalfwidthcharsbit.md)
- [kUnicodeTextRunHeuristicsBit](1433583-conversion_flags/kunicodetextrunheuristicsbit.md)
- [kUnicodeMapLineFeedToReturnBit](1433583-conversion_flags/kunicodemaplinefeedtoreturnbit.md)
- [kUnicodeUseExternalEncodingFormBit](1433583-conversion_flags/kunicodeuseexternalencodingformbit.md)

## See Also

### Feature Selectors

- [Conversion Masks](1433493-conversion_masks.md): Set or text for conversion flags.
- [Directionality Flags](1433491-directionality_flags.md): Specify a text direction.
- [Directionality Masks](1433620-directionality_masks.md): Set or text for directionality bits.
- [Unicode Converter Flags](1400304-unicode_converter_flags.md): Specify features for bug fixes in the Unicode Converter.
- [Unicode Converter Masks](1400367-unicode_converter_masks.md): Set or test for Unicode converter flags.
- [Unicode Fallback Sequencing Flag](1433597-unicode_fallback_sequencing_flag.md): Specifies options for setting fallback sequencing.
- [Unicode Fallback Sequencing Masks](1433622-unicode_fallback_sequencing_mask.md): Set or text for Unicode sequencing flag.
- [Unicode Matching Flags](1433572-unicode_matching_flags.md): Specify matching criteria for Unicode mappings.
- [Unicode Matching Masks](1433554-unicode_matching_masks.md): Used to set or test for Unicode matching flags.
- [Fallback Handler Selectors](1433507-fallback_handler_selectors.md): Specify a fallback handler for the Unicode Converter to use.
