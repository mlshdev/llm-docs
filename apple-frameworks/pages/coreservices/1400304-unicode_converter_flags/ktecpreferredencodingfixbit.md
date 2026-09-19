> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1400304-unicode_converter_flags/ktecpreferredencodingfixbit

# kTECPreferredEncodingFixBit

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

This is set to indicate that if a preferred encoding is specified for `CreateUnicodeToTextRunInfo` and related functions, they handle it correctly even if it does not match the system script.

## Declaration

```objectivec
kTECPreferredEncodingFixBit = 5
```
