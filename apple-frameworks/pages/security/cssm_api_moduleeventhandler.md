> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_api_moduleeventhandler

# CSSM_API_ModuleEventHandler

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
typedef int (*)(const struct cssm_guid *, void *, unsigned int, unsigned int, unsigned int) CSSM_API_ModuleEventHandler;
```
