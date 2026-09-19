> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_cl_crlgetfirstfieldvalue

# CSSM_CL_CrlGetFirstFieldValue

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_CrlGetFirstFieldValue(CSSM_CL_HANDLE CLHandle, const SecAsn1Item *Crl, const SecAsn1Oid *CrlField, CSSM_HANDLE_PTR ResultsHandle, uint32 *NumberOfMatchedFields, CSSM_DATA_PTR*Value);
```
