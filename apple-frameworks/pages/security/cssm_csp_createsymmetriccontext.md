> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_csp_createsymmetriccontext

# CSSM_CSP_CreateSymmetricContext

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CSP_CreateSymmetricContext(CSSM_CSP_HANDLE CSPHandle, CSSM_ALGORITHMS AlgorithmID, CSSM_ENCRYPT_MODE Mode, const CSSM_ACCESS_CREDENTIALS *AccessCred, const CSSM_KEY *Key, const SecAsn1Item *InitVector, CSSM_PADDING Padding, void *Reserved, CSSM_CC_HANDLE *NewContextHandle);
```
