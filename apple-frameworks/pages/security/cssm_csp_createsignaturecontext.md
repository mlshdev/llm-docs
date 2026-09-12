> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_csp_createsignaturecontext](https://developer.apple.com/documentation/security/cssm_csp_createsignaturecontext)

# CSSM_CSP_CreateSignatureContext

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CSP_CreateSignatureContext(CSSM_CSP_HANDLE CSPHandle, CSSM_ALGORITHMS AlgorithmID, const CSSM_ACCESS_CREDENTIALS *AccessCred, const CSSM_KEY *Key, CSSM_CC_HANDLE *NewContextHandle);
```
