> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_csp_createasymmetriccontext](https://developer.apple.com/documentation/security/cssm_csp_createasymmetriccontext)

# CSSM_CSP_CreateAsymmetricContext

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CSP_CreateAsymmetricContext(CSSM_CSP_HANDLE CSPHandle, CSSM_ALGORITHMS AlgorithmID, const CSSM_ACCESS_CREDENTIALS *AccessCred, const CSSM_KEY *Key, CSSM_PADDING Padding, CSSM_CC_HANDLE *NewContextHandle);
```
