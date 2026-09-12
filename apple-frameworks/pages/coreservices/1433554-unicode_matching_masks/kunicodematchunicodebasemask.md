> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433554-unicode_matching_masks/kunicodematchunicodebasemask](https://developer.apple.com/documentation/coreservices/1433554-unicode_matching_masks/kunicodematchunicodebasemask)

# kUnicodeMatchUnicodeBaseMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

If set, excludes mappings that do not match the text encoding base of the `unicodeEncoding` field of the structure [UnicodeMapping](../unicodemapping.md). If not set, the function ignores the text encoding base of that field.

## Declaration

```objectivec
kUnicodeMatchUnicodeBaseMask = 1L << kUnicodeMatchUnicodeBaseBit
```
