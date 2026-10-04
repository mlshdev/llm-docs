> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_csp_createpassthroughcontext

# CSSM_CSP_CreatePassThroughContext

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CSP_CreatePassThroughContext(CSSM_CSP_HANDLE CSPHandle, const CSSM_KEY *Key, CSSM_CC_HANDLE *NewContextHandle);
```
