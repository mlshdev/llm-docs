> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_cl_iscertincachedcrl

# CSSM_CL_IsCertInCachedCrl

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_IsCertInCachedCrl(CSSM_CL_HANDLE CLHandle, const SecAsn1Item *Cert, CSSM_HANDLE CrlHandle, CSSM_BOOL *CertFound, CSSM_DATA_PTR CrlRecordIndex);
```
