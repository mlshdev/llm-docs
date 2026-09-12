> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_tp_certgroupverify](https://developer.apple.com/documentation/security/cssm_tp_certgroupverify)

# CSSM_TP_CertGroupVerify

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_TP_CertGroupVerify(CSSM_TP_HANDLE TPHandle, CSSM_CL_HANDLE CLHandle, CSSM_CSP_HANDLE CSPHandle, const CSSM_CERTGROUP *CertGroupToBeVerified, const CSSM_TP_VERIFY_CONTEXT *VerifyContext, CSSM_TP_VERIFY_CONTEXT_RESULT_PTR VerifyContextResult);
```
