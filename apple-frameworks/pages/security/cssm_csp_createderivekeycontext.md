> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_csp_createderivekeycontext](https://developer.apple.com/documentation/security/cssm_csp_createderivekeycontext)

# CSSM_CSP_CreateDeriveKeyContext

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CSP_CreateDeriveKeyContext(CSSM_CSP_HANDLE CSPHandle, CSSM_ALGORITHMS AlgorithmID, CSSM_KEY_TYPE DeriveKeyType, uint32 DeriveKeyLengthInBits, const CSSM_ACCESS_CREDENTIALS *AccessCred, const CSSM_KEY *BaseKey, uint32 IterationCount, const SecAsn1Item *Salt, const CSSM_CRYPTO_DATA *Seed, CSSM_CC_HANDLE *NewContextHandle);
```
