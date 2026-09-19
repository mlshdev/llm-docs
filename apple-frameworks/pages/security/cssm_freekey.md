> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_freekey

# CSSM_FreeKey

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_FreeKey(CSSM_CSP_HANDLE CSPHandle, const CSSM_ACCESS_CREDENTIALS *AccessCred, CSSM_KEY_PTR KeyPtr, CSSM_BOOL Delete);
```
