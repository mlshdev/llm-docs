> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1580269-localeoperationgetname

# LocaleOperationGetName

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
OSStatus LocaleOperationGetName(LocaleOperationClass opClass, LocaleRef displayLocale, UniCharCount maxNameLen, UniCharCount *actualNameLen, UniChar displayName[]);
```
