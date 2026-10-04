> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1580265-localegetindname

# LocaleGetIndName

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSStatus LocaleGetIndName(LocaleRef locale, LocaleOperationVariant opVariant, LocaleNameMask nameMask, ItemCount nameIndex, UniCharCount maxNameLen, UniCharCount *actualNameLen, UniChar displayName[], LocaleRef *displayLocale);
```
