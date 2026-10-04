> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1580248-localegetname

# LocaleGetName

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSStatus LocaleGetName(LocaleRef locale, LocaleOperationVariant opVariant, LocaleNameMask nameMask, LocaleRef displayLocale, UniCharCount maxNameLen, UniCharCount *actualNameLen, UniChar displayName[]);
```
