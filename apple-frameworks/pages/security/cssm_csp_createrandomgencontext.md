> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_csp_createrandomgencontext

# CSSM_CSP_CreateRandomGenContext

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CSP_CreateRandomGenContext(CSSM_CSP_HANDLE CSPHandle, CSSM_ALGORITHMS AlgorithmID, const CSSM_CRYPTO_DATA *Seed, CSSM_SIZE Length, CSSM_CC_HANDLE *NewContextHandle);
```
