> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1400304-unicode_converter_flags/ktecpreferredencodingfixbit](https://developer.apple.com/documentation/coreservices/1400304-unicode_converter_flags/ktecpreferredencodingfixbit)

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
