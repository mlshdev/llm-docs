> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_csp_createasymmetriccontext

# CSSM_CSP_CreateAsymmetricContext

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CSP_CreateAsymmetricContext(CSSM_CSP_HANDLE CSPHandle, CSSM_ALGORITHMS AlgorithmID, const CSSM_ACCESS_CREDENTIALS *AccessCred, const CSSM_KEY *Key, CSSM_PADDING Padding, CSSM_CC_HANDLE *NewContextHandle);
```
