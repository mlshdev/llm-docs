> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433507-fallback_handler_selectors](https://developer.apple.com/documentation/coreservices/1433507-fallback_handler_selectors)

# Fallback Handler Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify a fallback handler for the Unicode Converter to use.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kUnicodeFallbackDefaultOnly](1433507-fallback_handler_selectors/kunicodefallbackdefaultonly.md): Use the default fallback handler only.
- [kUnicodeFallbackCustomOnly](1433507-fallback_handler_selectors/kunicodefallbackcustomonly.md): Use the custom fallback handler only.
- [kUnicodeFallbackDefaultFirst](1433507-fallback_handler_selectors/kunicodefallbackdefaultfirst.md): Use the default fallback handler first, then the custom one.
- [kUnicodeFallbackCustomFirst](1433507-fallback_handler_selectors/kunicodefallbackcustomfirst.md): Use the custom fallback handler first, then the default one.

## See Also

### Feature Selectors

- [Conversion Flags](1433583-conversion_flags.md): Specify how to perform conversion of text from one encoding to another.
- [Conversion Masks](1433493-conversion_masks.md): Set or text for conversion flags.
- [Directionality Flags](1433491-directionality_flags.md): Specify a text direction.
- [Directionality Masks](1433620-directionality_masks.md): Set or text for directionality bits.
- [Unicode Converter Flags](1400304-unicode_converter_flags.md): Specify features for bug fixes in the Unicode Converter.
- [Unicode Converter Masks](1400367-unicode_converter_masks.md): Set or test for Unicode converter flags.
- [Unicode Fallback Sequencing Flag](1433597-unicode_fallback_sequencing_flag.md): Specifies options for setting fallback sequencing.
- [Unicode Fallback Sequencing Masks](1433622-unicode_fallback_sequencing_mask.md): Set or text for Unicode sequencing flag.
- [Unicode Matching Flags](1433572-unicode_matching_flags.md): Specify matching criteria for Unicode mappings.
- [Unicode Matching Masks](1433554-unicode_matching_masks.md): Used to set or test for Unicode matching flags.
