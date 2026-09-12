> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1399701-encoding_variants_for_macroman/kunicodecanonicaldecompvariant](https://developer.apple.com/documentation/coreservices/1399701-encoding_variants_for_macroman/kunicodecanonicaldecompvariant)

# kUnicodeCanonicalDecompVariant

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
kUnicodeCanonicalDecompVariant = 2
```

<a id="discussion"></a>

## Discussion

A variant of Unicode using maximal decomposition with characters in canonical order. This variant does not include most characters which have a canonical decomposition, such as single characters for accented Latin letters or single characters for Korean Hangul syllables (however, this restriction is relaxed for symbol characters in the range U+2000 to U+2FFF). In TEC Manager 1.3, the Unicode Converter supports this variant for converting to and from Mac OS encodings.
