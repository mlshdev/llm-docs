> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1400304-unicode_converter_flags](https://developer.apple.com/documentation/coreservices/1400304-unicode_converter_flags)

# Unicode Converter Flags

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify features for bug fixes in the Unicode Converter.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kTECKeepInfoFixBit](1400304-unicode_converter_flags/kteckeepinfofixbit.md): This is set if the Unicode Converter has a bug fix to stop ignoring certain control flags
- [kTECFallbackTextLengthFixBit](1400304-unicode_converter_flags/ktecfallbacktextlengthfixbit.md)
- [kTECTextRunBitClearFixBit](1400304-unicode_converter_flags/ktectextrunbitclearfixbit.md): This is set if `ConvertFromUnicodeToTextRun` and `ConvertFromUnicodeToScriptCodeRun` function correctly if the `kUnicodeTextRunBit` is clear.
- [kTECTextToUnicodeScanFixBit](1400304-unicode_converter_flags/ktectexttounicodescanfixbit.md)
- [kTECAddForceASCIIChangesBit](1400304-unicode_converter_flags/ktecaddforceasciichangesbit.md): This is set if the new control flag bits `kUnicodeForceASCIIRangeBit` and `kUnicodeNoHalfwidthCharsBit` are supported for use with the functions `ConvertFromTextToUnicode`, `ConvertFromUnicodeToText`, and so forth.
- [kTECPreferredEncodingFixBit](1400304-unicode_converter_flags/ktecpreferredencodingfixbit.md): This is set to indicate that if a preferred encoding is specified for `CreateUnicodeToTextRunInfo` and related functions, they handle it correctly even if it does not match the system script.
- [kTECAddTextRunHeuristicsBit](1400304-unicode_converter_flags/ktecaddtextrunheuristicsbit.md)
- [kTECAddFallbackInterruptBit](1400304-unicode_converter_flags/ktecaddfallbackinterruptbit.md)

## See Also

### Feature Selectors

- [Conversion Flags](1433583-conversion_flags.md): Specify how to perform conversion of text from one encoding to another.
- [Conversion Masks](1433493-conversion_masks.md): Set or text for conversion flags.
- [Directionality Flags](1433491-directionality_flags.md): Specify a text direction.
- [Directionality Masks](1433620-directionality_masks.md): Set or text for directionality bits.
- [Unicode Converter Masks](1400367-unicode_converter_masks.md): Set or test for Unicode converter flags.
- [Unicode Fallback Sequencing Flag](1433597-unicode_fallback_sequencing_flag.md): Specifies options for setting fallback sequencing.
- [Unicode Fallback Sequencing Masks](1433622-unicode_fallback_sequencing_mask.md): Set or text for Unicode sequencing flag.
- [Unicode Matching Flags](1433572-unicode_matching_flags.md): Specify matching criteria for Unicode mappings.
- [Unicode Matching Masks](1433554-unicode_matching_masks.md): Used to set or test for Unicode matching flags.
- [Fallback Handler Selectors](1433507-fallback_handler_selectors.md): Specify a fallback handler for the Unicode Converter to use.
