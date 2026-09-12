> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433493-conversion_masks](https://developer.apple.com/documentation/coreservices/1433493-conversion_masks)

# Conversion Masks

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Set or text for conversion flags.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kUnicodeUseFallbacksMask](1433493-conversion_masks/kunicodeusefallbacksmask.md)
- [kUnicodeKeepInfoMask](1433493-conversion_masks/kunicodekeepinfomask.md)
- [kUnicodeDirectionalityMask](1433493-conversion_masks/kunicodedirectionalitymask.md): A mask for setting the directionality control flag
- [kUnicodeVerticalFormMask](1433493-conversion_masks/kunicodeverticalformmask.md)
- [kUnicodeLooseMappingsMask](1433493-conversion_masks/kunicodeloosemappingsmask.md)
- [kUnicodeStringUnterminatedMask](1433493-conversion_masks/kunicodestringunterminatedmask.md)
- [kUnicodeTextRunMask](1433493-conversion_masks/kunicodetextrunmask.md)
- [kUnicodeKeepSameEncodingMask](1433493-conversion_masks/kunicodekeepsameencodingmask.md)
- [kUnicodeForceASCIIRangeMask](1433493-conversion_masks/kunicodeforceasciirangemask.md)
- [kUnicodeNoHalfwidthCharsMask](1433493-conversion_masks/kunicodenohalfwidthcharsmask.md): Sets the no halfwidth characters control flag.
- [kUnicodeTextRunHeuristicsMask](1433493-conversion_masks/kunicodetextrunheuristicsmask.md)
- [kUnicodeMapLineFeedToReturnMask](1433493-conversion_masks/kunicodemaplinefeedtoreturnmask.md)
- [kUnicodeUseExternalEncodingFormMask](1433493-conversion_masks/kunicodeuseexternalencodingformmask.md)

## See Also

### Feature Selectors

- [Conversion Flags](1433583-conversion_flags.md): Specify how to perform conversion of text from one encoding to another.
- [Directionality Flags](1433491-directionality_flags.md): Specify a text direction.
- [Directionality Masks](1433620-directionality_masks.md): Set or text for directionality bits.
- [Unicode Converter Flags](1400304-unicode_converter_flags.md): Specify features for bug fixes in the Unicode Converter.
- [Unicode Converter Masks](1400367-unicode_converter_masks.md): Set or test for Unicode converter flags.
- [Unicode Fallback Sequencing Flag](1433597-unicode_fallback_sequencing_flag.md): Specifies options for setting fallback sequencing.
- [Unicode Fallback Sequencing Masks](1433622-unicode_fallback_sequencing_mask.md): Set or text for Unicode sequencing flag.
- [Unicode Matching Flags](1433572-unicode_matching_flags.md): Specify matching criteria for Unicode mappings.
- [Unicode Matching Masks](1433554-unicode_matching_masks.md): Used to set or test for Unicode matching flags.
- [Fallback Handler Selectors](1433507-fallback_handler_selectors.md): Specify a fallback handler for the Unicode Converter to use.
