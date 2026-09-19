> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1433554-unicode_matching_masks/kunicodematchunicodeformatmask

# kUnicodeMatchUnicodeFormatMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

If set, excludes mappings that do not match the text encoding format of the `unicodeEncoding` field of the specified Unicode mapping structure. If not set, the function ignores the text encoding format of that field.

## Declaration

```objectivec
kUnicodeMatchUnicodeFormatMask = 1L << kUnicodeMatchUnicodeFormatBit
```
