> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_cl_certgetalltemplatefields

# CSSM_CL_CertGetAllTemplateFields

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_CertGetAllTemplateFields(CSSM_CL_HANDLE CLHandle, const SecAsn1Item *CertTemplate, uint32 *NumberOfFields, CSSM_FIELD_PTR*CertFields);
```
