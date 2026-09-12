> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_cl_crlsetfields](https://developer.apple.com/documentation/security/cssm_cl_crlsetfields)

# CSSM_CL_CrlSetFields

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_CrlSetFields(CSSM_CL_HANDLE CLHandle, uint32 NumberOfFields, const CSSM_FIELD *CrlTemplate, const SecAsn1Item *OldCrl, CSSM_DATA_PTR ModifiedCrl);
```
