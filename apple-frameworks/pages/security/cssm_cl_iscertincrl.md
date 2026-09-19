> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_cl_iscertincrl

# CSSM_CL_IsCertInCrl

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_IsCertInCrl(CSSM_CL_HANDLE CLHandle, const SecAsn1Item *Cert, const SecAsn1Item *Crl, CSSM_BOOL *CertFound);
```
