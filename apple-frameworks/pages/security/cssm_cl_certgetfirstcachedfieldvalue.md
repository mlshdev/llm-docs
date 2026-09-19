> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_cl_certgetfirstcachedfieldvalue

# CSSM_CL_CertGetFirstCachedFieldValue

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_CertGetFirstCachedFieldValue(CSSM_CL_HANDLE CLHandle, CSSM_HANDLE CertHandle, const SecAsn1Oid *CertField, CSSM_HANDLE_PTR ResultsHandle, uint32 *NumberOfMatchedFields, CSSM_DATA_PTR*Value);
```
