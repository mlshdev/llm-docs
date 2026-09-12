> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_tp_certgetalltemplatefields](https://developer.apple.com/documentation/security/cssm_tp_certgetalltemplatefields)

# CSSM_TP_CertGetAllTemplateFields

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_TP_CertGetAllTemplateFields(CSSM_TP_HANDLE TPHandle, CSSM_CL_HANDLE CLHandle, const SecAsn1Item *CertTemplate, uint32 *NumberOfFields, CSSM_FIELD_PTR*CertFields);
```
