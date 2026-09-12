> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433554-unicode_matching_masks/kunicodematchothervariantmask](https://developer.apple.com/documentation/coreservices/1433554-unicode_matching_masks/kunicodematchothervariantmask)

# kUnicodeMatchOtherVariantMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

If set, excludes mappings that do not match the text encoding variant of the `otherEncoding` field of the specified Unicode mapping structure. If not set, the function ignores the text encoding variant of that field.

## Declaration

```objectivec
kUnicodeMatchOtherVariantMask = 1L << kUnicodeMatchOtherVariantBit
```
