> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_tp_certsign](https://developer.apple.com/documentation/security/cssm_tp_certsign)

# CSSM_TP_CertSign

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_TP_CertSign(CSSM_TP_HANDLE TPHandle, CSSM_CL_HANDLE CLHandle, CSSM_CC_HANDLE CCHandle, const SecAsn1Item *CertTemplateToBeSigned, const CSSM_CERTGROUP *SignerCertGroup, const CSSM_TP_VERIFY_CONTEXT *SignerVerifyContext, CSSM_TP_VERIFY_CONTEXT_RESULT_PTR SignerVerifyResult, CSSM_DATA_PTR SignedCert);
```
