> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_moduleload

# CSSM_ModuleLoad

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_ModuleLoad(const CSSM_GUID *ModuleGuid, CSSM_KEY_HIERARCHY KeyHierarchy, CSSM_API_ModuleEventHandler AppNotifyCallback, void *AppNotifyCallbackCtx);
```
