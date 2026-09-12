> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_csp_createkeygencontext](https://developer.apple.com/documentation/security/cssm_csp_createkeygencontext)

# CSSM_CSP_CreateKeyGenContext

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CSP_CreateKeyGenContext(CSSM_CSP_HANDLE CSPHandle, CSSM_ALGORITHMS AlgorithmID, uint32 KeySizeInBits, const CSSM_CRYPTO_DATA *Seed, const SecAsn1Item *Salt, const CSSM_DATE *StartDate, const CSSM_DATE *EndDate, const SecAsn1Item *Params, CSSM_CC_HANDLE *NewContextHandle);
```
