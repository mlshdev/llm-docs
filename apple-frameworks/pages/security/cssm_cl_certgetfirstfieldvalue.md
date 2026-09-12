> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_cl_certgetfirstfieldvalue](https://developer.apple.com/documentation/security/cssm_cl_certgetfirstfieldvalue)

# CSSM_CL_CertGetFirstFieldValue

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_CertGetFirstFieldValue(CSSM_CL_HANDLE CLHandle, const SecAsn1Item *Cert, const SecAsn1Oid *CertField, CSSM_HANDLE_PTR ResultsHandle, uint32 *NumberOfMatchedFields, CSSM_DATA_PTR*Value);
```
