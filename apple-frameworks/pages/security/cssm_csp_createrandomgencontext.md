> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_csp_createrandomgencontext](https://developer.apple.com/documentation/security/cssm_csp_createrandomgencontext)

# CSSM_CSP_CreateRandomGenContext

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CSP_CreateRandomGenContext(CSSM_CSP_HANDLE CSPHandle, CSSM_ALGORITHMS AlgorithmID, const CSSM_CRYPTO_DATA *Seed, CSSM_SIZE Length, CSSM_CC_HANDLE *NewContextHandle);
```
