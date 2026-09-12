> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_tp_applycrltodb](https://developer.apple.com/documentation/security/cssm_tp_applycrltodb)

# CSSM_TP_ApplyCrlToDb

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_TP_ApplyCrlToDb(CSSM_TP_HANDLE TPHandle, CSSM_CL_HANDLE CLHandle, CSSM_CSP_HANDLE CSPHandle, const CSSM_ENCODED_CRL *CrlToBeApplied, const CSSM_CERTGROUP *SignerCertGroup, const CSSM_TP_VERIFY_CONTEXT *ApplyCrlVerifyContext, CSSM_TP_VERIFY_CONTEXT_RESULT_PTR ApplyCrlVerifyResult);
```
