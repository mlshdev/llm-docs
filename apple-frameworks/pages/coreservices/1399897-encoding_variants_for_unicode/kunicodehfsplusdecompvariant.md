> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1399897-encoding_variants_for_unicode/kunicodehfsplusdecompvariant](https://developer.apple.com/documentation/coreservices/1399897-encoding_variants_for_unicode/kunicodehfsplusdecompvariant)

# kUnicodeHFSPlusDecompVariant

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.2+

Specifies canonical decomposition according to Unicode 3.2 rules, with HFS+ exclusions ("HFS+ decomposition 3.2"). That is, it doesn't decompose in 2000-2FFF, F900-FAFF, 2F800-2FAFF. You can use ths option when converting HFS file names.

## Declaration

```objectivec
kUnicodeHFSPlusDecompVariant = 8
```
