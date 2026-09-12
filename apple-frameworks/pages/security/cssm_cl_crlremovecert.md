> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_cl_crlremovecert](https://developer.apple.com/documentation/security/cssm_cl_crlremovecert)

# CSSM_CL_CrlRemoveCert

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_CrlRemoveCert(CSSM_CL_HANDLE CLHandle, const SecAsn1Item *Cert, const SecAsn1Item *OldCrl, CSSM_DATA_PTR NewCrl);
```
