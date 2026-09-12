> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_tp_certcreatetemplate](https://developer.apple.com/documentation/security/cssm_tp_certcreatetemplate)

# CSSM_TP_CertCreateTemplate

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_TP_CertCreateTemplate(CSSM_TP_HANDLE TPHandle, CSSM_CL_HANDLE CLHandle, uint32 NumberOfFields, const CSSM_FIELD *CertFields, CSSM_DATA_PTR CertTemplate);
```
