> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_cl_certgrouptosignedbundle

# CSSM_CL_CertGroupToSignedBundle

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_CertGroupToSignedBundle(CSSM_CL_HANDLE CLHandle, CSSM_CC_HANDLE CCHandle, const CSSM_CERTGROUP *CertGroupToBundle, const CSSM_CERT_BUNDLE_HEADER *BundleInfo, CSSM_DATA_PTR SignedBundle);
```
