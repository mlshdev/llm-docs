> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_cl_crlcreatetemplate

# CSSM_CL_CrlCreateTemplate

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_CrlCreateTemplate(CSSM_CL_HANDLE CLHandle, uint32 NumberOfFields, const CSSM_FIELD *CrlTemplate, CSSM_DATA_PTR NewCrl);
```
