> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_moduleunload

# CSSM_ModuleUnload

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_ModuleUnload(const CSSM_GUID *ModuleGuid, CSSM_API_ModuleEventHandler AppNotifyCallback, void *AppNotifyCallbackCtx);
```
