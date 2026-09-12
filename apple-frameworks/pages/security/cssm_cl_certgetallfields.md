> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_cl_certgetallfields](https://developer.apple.com/documentation/security/cssm_cl_certgetallfields)

# CSSM_CL_CertGetAllFields

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_CertGetAllFields(CSSM_CL_HANDLE CLHandle, const SecAsn1Item *Cert, uint32 *NumberOfFields, CSSM_FIELD_PTR*CertFields);
```
