> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_cl_iscertincachedcrl](https://developer.apple.com/documentation/security/cssm_cl_iscertincachedcrl)

# CSSM_CL_IsCertInCachedCrl

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_IsCertInCachedCrl(CSSM_CL_HANDLE CLHandle, const SecAsn1Item *Cert, CSSM_HANDLE CrlHandle, CSSM_BOOL *CertFound, CSSM_DATA_PTR CrlRecordIndex);
```
