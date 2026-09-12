> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_cl_crlsign](https://developer.apple.com/documentation/security/cssm_cl_crlsign)

# CSSM_CL_CrlSign

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_CrlSign(CSSM_CL_HANDLE CLHandle, CSSM_CC_HANDLE CCHandle, const SecAsn1Item *UnsignedCrl, const CSSM_FIELD *SignScope, uint32 ScopeSize, CSSM_DATA_PTR SignedCrl);
```
