> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_tp_certremovefromcrltemplate](https://developer.apple.com/documentation/security/cssm_tp_certremovefromcrltemplate)

# CSSM_TP_CertRemoveFromCrlTemplate

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_TP_CertRemoveFromCrlTemplate(CSSM_TP_HANDLE TPHandle, CSSM_CL_HANDLE CLHandle, CSSM_CSP_HANDLE CSPHandle, const SecAsn1Item *OldCrlTemplate, const CSSM_CERTGROUP *CertGroupToBeRemoved, const CSSM_CERTGROUP *RevokerCertGroup, const CSSM_TP_VERIFY_CONTEXT *RevokerVerifyContext, CSSM_TP_VERIFY_CONTEXT_RESULT_PTR RevokerVerifyResult, CSSM_DATA_PTR NewCrlTemplate);
```
