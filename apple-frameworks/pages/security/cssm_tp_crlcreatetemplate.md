> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_tp_crlcreatetemplate](https://developer.apple.com/documentation/security/cssm_tp_crlcreatetemplate)

# CSSM_TP_CrlCreateTemplate

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_TP_CrlCreateTemplate(CSSM_TP_HANDLE TPHandle, CSSM_CL_HANDLE CLHandle, uint32 NumberOfFields, const CSSM_FIELD *CrlFields, CSSM_DATA_PTR NewCrlTemplate);
```
